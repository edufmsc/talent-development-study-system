(()=>{'use strict';
const D=window.COURSE_DATA||{slides:[]};
const KEY='td-slide-coverage-v1';
let auditChapter=null;
let internalFilterClick=false;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const pageKey=s=>`d${s.day}-s${String(s.slide).padStart(3,'0')}`;
function readState(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return {}}}
function pageState(s){return readState().pages?.[pageKey(s)]||null}
function excluded(s){return pageState(s)?.status==='已確認－無獨立考點'}
function daySlides(day){return D.slides.filter(s=>s.day===Number(day)).sort((a,b)=>a.slide-b.slide)}
function chapterSlides(id){return D.slides.filter(s=>s.chapter===id).sort((a,b)=>a.slide-b.slide)}
function activeDay(day){return daySlides(day).filter(s=>!excluded(s))}
function excludedDay(day){return daySlides(day).filter(excluded)}
function setAnchor(a,target,label,primary=false){
 if(!a)return;
 if(target){a.setAttribute('href',target);a.classList.remove('disabled');if(primary)a.classList.add('primary');}
 else{a.removeAttribute('href');a.classList.add('disabled');}
 if(a.textContent!==label)a.textContent=label;
}
function redirectFromExcluded(day,slide,s){
 const raw=daySlides(day),i=raw.findIndex(x=>x.slide===slide);
 const next=raw.slice(i+1).find(x=>!excluded(x));
 const prev=raw.slice(0,i).reverse().find(x=>!excluded(x));
 const target=next||prev;
 location.hash=target?`#/slide/${target.day}/${target.slide}`:`#/slides/${s.chapter}`;
}
function patchSlide(){
 const m=(location.hash||'').match(/^#\/slide\/(\d+)\/(\d+)(?:\/(audit))?/);if(!m)return;
 const day=+m[1],slide=+m[2],audit=m[3]==='audit';
 const s=D.slides.find(x=>x.day===day&&x.slide===slide);if(!s)return;
 if(excluded(s)&&!audit){redirectFromExcluded(day,slide,s);return;}
 if(audit&&!excluded(s)){location.hash=`#/slide/${day}/${slide}`;return;}
 const list=audit?excludedDay(day):activeDay(day),idx=list.findIndex(x=>x.slide===slide),prev=list[idx-1],next=list[idx+1];
 const pager=$('.slide-pager');
 if(pager){
   const links=[...pager.querySelectorAll('a')],pa=links.find(a=>a.textContent.includes('上一張')),na=links.find(a=>a.textContent.includes('下一張'));
   setAnchor(pa,prev?`#/slide/${prev.day}/${prev.slide}${audit?'/audit':''}`:null,prev?`← 上一張 ${prev.slideLabel||'S'+prev.slide}`:'← 已到起點');
   setAnchor(na,next?`#/slide/${next.day}/${next.slide}${audit?'/audit':''}`:null,next?`下一張 ${next.slideLabel||'S'+next.slide} →`:'已到終點 →',true);
 }
 const ctx=$('.coverage-context');
 if(ctx){
   const boxes=[...ctx.children],pb=boxes[0]?.querySelector('b'),nb=boxes[2]?.querySelector('b');
   const pt=prev?(prev.slideLabel||`S${prev.slide}`):(audit?'排除頁起點':'正式學習起點');
   const nt=next?(next.slideLabel||`S${next.slide}`):(audit?'排除頁終點':'正式學習終點');
   if(pb&&pb.textContent!==pt)pb.textContent=pt;if(nb&&nb.textContent!==nt)nb.textContent=nt;
 }
 const main=$('.slide-detail-main');
 if(audit&&main&&!$('#studyAuditBanner')){
   const box=document.createElement('section');box.id='studyAuditBanner';box.className='coverage-warning';
   box.innerHTML='<b>稽核檢視｜此頁已退出正式學習序列</b><span>它仍保留在 Coverage 證據中，但日常上一張／下一張不會再經過這一頁。</span>';
   main.prepend(box);
 }
 const head=$('.page-head p');
 if(head){
   const suffix=audit?'｜目前為已排除頁稽核檢視':`｜正式學習序列 ${idx+1}/${list.length}`;
   if(!head.textContent.includes('正式學習序列')&&!head.textContent.includes('已排除頁稽核檢視'))head.textContent+=suffix;
 }
}
function rowSlide(row){const a=row.querySelector('a[href^="#/slide/"]');if(!a)return null;const m=a.getAttribute('href').match(/^#\/slide\/(\d+)\/(\d+)/);if(!m)return null;return {a,slide:D.slides.find(x=>x.day===+m[1]&&x.slide===+m[2])}}
function addExcludedBadge(row){
 const meta=row.querySelector('.slide-meta');if(!meta||meta.querySelector('.study-excluded-badge'))return;
 const b=document.createElement('span');b.className='badge neutral study-excluded-badge';b.textContent='已排除正式學習';meta.appendChild(b);
}
function patchChapter(){
 const m=(location.hash||'').match(/^#\/slides\/([^/]+)$/);if(!m)return;const id=m[1];
 const rows=$$('.slide-coverage-row'),items=rows.map(row=>({row,...(rowSlide(row)||{})})).filter(x=>x.slide);
 const excludedItems=items.filter(x=>excluded(x.slide)),auditOnly=auditChapter===id;
 for(const x of items){
   const isEx=excluded(x.slide);x.row.style.display=(auditOnly?!isEx:isEx)?'none':'';
   if(isEx){x.a.setAttribute('href',`#/slide/${x.slide.day}/${x.slide.slide}/audit`);x.a.textContent='查看稽核紀錄';addExcludedBadge(x.row)}
 }
 const filters=$('.coverage-filters');
 if(filters){
   const all=filters.querySelector('[data-page-filter="all"]');if(all&&all.textContent==='全部')all.textContent='正式學習';
   let btn=filters.querySelector('[data-study-excluded]');
   if(!btn){btn=document.createElement('button');btn.dataset.studyExcluded='1';filters.appendChild(btn)}
   btn.classList.toggle('on',auditOnly);btn.textContent=auditOnly?'← 返回正式學習':`已排除 ${excludedItems.length}`;
   btn.onclick=e=>{e.preventDefault();auditChapter=auditOnly?null:id;if(!auditOnly){const allBtn=filters.querySelector('[data-page-filter="all"]');if(allBtn){internalFilterClick=true;allBtn.click();internalFilterClick=false;setTimeout(patchChapter,40);return}}patchChapter()};
 }
 const summary=$('.coverage-summary-line');
 if(summary&&!summary.querySelector('.study-flow-summary')){
   const active=chapterSlides(id).filter(s=>!excluded(s)).length,total=chapterSlides(id).length,ex=total-active;
   const span=document.createElement('span');span.className='study-flow-summary';span.innerHTML=`正式學習 <b>${active}</b>｜已排除 <b>${ex}</b>`;summary.appendChild(span);
 }
}
function patchOverview(){
 if((location.hash||'#/home').match(/^#\/slides\/?$/)){
   const p=$('.coverage-principle span');if(p&&!p.textContent.includes('已確認無考點'))p.textContent+='；已確認無考點的頁面會退出日常學習序列，但仍保留 Coverage 稽核紀錄。';
 }
}
function patch(){patchOverview();patchChapter();patchSlide()}
function schedule(ms=100){setTimeout(patch,ms)}
window.addEventListener('hashchange',()=>{if(!location.hash.startsWith('#/slides/'))auditChapter=null;schedule(120)});
window.addEventListener('DOMContentLoaded',()=>schedule(150));
document.addEventListener('click',e=>{
 const filter=e.target.closest?.('[data-page-filter]');if(filter&&!internalFilterClick){auditChapter=null;schedule(50)}
 const mark=e.target.closest?.('[data-slide-mark]');if(mark)schedule(80);
},true);
setTimeout(patch,320);
})();
