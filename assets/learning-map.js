(()=>{'use strict';
const M=window.LEARNING_MAP_DATA,D=window.COURSE_DATA||{knowledge:[],slides:[]};
if(!M)return;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
let selectedStage=null,selectedChild=null,selectedKnowledge=null;
function activate(){$$('[data-nav]').forEach(a=>a.classList.toggle('active',a.dataset.nav==='map'))}
function crumbs(){const e=$('#breadcrumbs');if(e)e.innerHTML='<a href="#/home">首頁</a><span class="sep">›</span><span>人才發展完整系統地圖</span>'}
function stage(id){return (M.stages||[]).find(x=>x.id===id)}
function child(s,id){return (s?.children||[]).find(x=>x.id===id)}
function firstSourceSlide(k){return D.slides.find(s=>(s.knowledgeIds||[]).includes(k.id))||null}
function textBlob(k){return `${k.question||''} ${k.title||''} ${k.answer||''} ${(k.examTags||[]).join(' ')}`.toLowerCase()}
function relatedKnowledge(s,c,limit=4){const keys=(c?.keywords||[]).map(x=>String(x).toLowerCase()),days=new Set(s?.sourceDays||[]);return D.knowledge.map(k=>{let score=0,blob=textBlob(k);if(days.has(k.day))score+=2;for(const key of keys)if(blob.includes(key))score+=5;return {k,score}}).filter(x=>x.score>1).sort((a,b)=>b.score-a.score||a.k.day-b.k.day).slice(0,limit).map(x=>x.k)}
function allStageButtons(){return `<div class="lm-overview-ring">${(M.stages||[]).map((s,i)=>`${i?'<span class="lm-overview-arrow">→</span>':''}<button class="lm-overview-node ${selectedStage===s.id?'selected':''}" data-stage="${esc(s.id)}"><span>${s.step}</span><strong>${esc(s.title)}</strong></button>`).join('')}<span class="lm-overview-arrow return">↺</span></div>`}
function childCard(c){const open=selectedChild===c.id;return `<div class="lm-child-wrap ${open?'open':''}"><button class="lm-child-node" data-child="${esc(c.id)}"><span>${open?'−':'＋'}</span><strong>${esc(c.title)}</strong></button>${open?`<div class="lm-child-detail"><p>${esc(c.preview)}</p><div><span>會得到</span><b>${esc(c.result)}</b></div><button class="lm-source-btn" data-show-source="${esc(c.id)}">看對應教材</button></div>`:''}</div>`}
function stageView(s){return `<section class="lm-focus-panel panel"><div class="lm-focus-head"><button class="lm-back" data-back>← 回全貌</button><div><div class="eyebrow">STEP ${s.step}</div><h2>${esc(s.title)}</h2><p>${esc(s.question)}</p></div><div class="lm-output-pill"><span>這一環最後產出</span><b>${esc(s.output)}</b></div></div><div class="lm-source-days">教材來源：${(s.sourceDays||[]).map(d=>`Day ${d}`).join('、')}　｜　規則：${esc((s.rules||[])[0]||'')}</div><div class="lm-children-road">${(s.children||[]).map((c,i)=>`${i?'<span class="lm-child-arrow">→</span>':''}${childCard(c)}`).join('')}</div>${selectedKnowledge?knowledgeCard(selectedKnowledge):''}</section>`}
function sourceChooser(s,c){const ks=relatedKnowledge(s,c);return `<div class="lm-source-pop"><div class="lm-source-pop-head"><b>${esc(c.title)}｜最相關教材</b><button data-close-source>×</button></div>${ks.length?`<div class="lm-source-pop-grid">${ks.map(k=>`<button data-knowledge="${esc(k.id)}"><span>D${k.day} · ${esc(k.type||'概念')}</span><strong>${esc(k.question||k.title||k.id)}</strong></button>`).join('')}</div>`:'<p>目前 canonical Knowledge 沒有足夠精準的直接對應；請回原始教材查核。</p>'}</div>`}
function knowledgeCard(id){const k=D.knowledge.find(x=>x.id===id);if(!k)return '';const s=firstSourceSlide(k);return `<div class="lm-knowledge-card-inline"><div><span>${esc(k.id)} · ${esc(k.type||'概念')}</span><h3>${esc(k.question||k.title||k.id)}</h3></div><p>${esc(k.answer||'請回原始教材確認。')}</p><div>${s?`<a class="btn small" href="#/slide/${s.day}/${s.slide}">原始教材 ${esc(s.slideLabel||'')}</a>`:''}<a class="btn small" href="#/learn/${esc(k.id)}">深入學習</a><button class="btn small" data-close-knowledge>收合</button></div></div>`}
function render(){activate();crumbs();const app=$('#app');if(!app)return;const s=selectedStage?stage(selectedStage):null;app.innerHTML=`<section class="lm-map-intro"><div><div class="eyebrow">SEMANTIC ZOOM MAP</div><h1>${esc(M.title)}</h1><p>${esc(M.subtitle)}</p></div><div class="lm-map-rule">一次只展開一層：全貌 → 一環 → 子概念 → 教材</div></section>${allStageButtons()}${s?stageView(s):`<section class="lm-start-hint panel"><b>先不要讀細節。</b><span>先把這10環記成一條閉環。點任何一環，再只看那一環的3～4個子概念。</span></section>`}`;bind()}
function bind(){
  $$('[data-stage]').forEach(b=>b.onclick=()=>{selectedStage=b.dataset.stage;selectedChild=null;selectedKnowledge=null;render()});
  $('[data-back]')?.addEventListener('click',()=>{selectedStage=null;selectedChild=null;selectedKnowledge=null;render()});
  $$('[data-child]').forEach(b=>b.onclick=()=>{selectedChild=selectedChild===b.dataset.child?null:b.dataset.child;selectedKnowledge=null;render()});
  $$('[data-show-source]').forEach(b=>b.onclick=()=>{const s=stage(selectedStage),c=child(s,b.dataset.showSource),host=b.closest('.lm-child-detail');if(!host)return;host.querySelector('.lm-source-pop')?.remove();host.insertAdjacentHTML('beforeend',sourceChooser(s,c));bindDynamic()});
  bindDynamic();
}
function bindDynamic(){
  $('[data-close-source]')?.addEventListener('click',e=>e.target.closest('.lm-source-pop')?.remove());
  $$('[data-knowledge]').forEach(b=>b.onclick=()=>{selectedKnowledge=b.dataset.knowledge;render()});
  $('[data-close-knowledge]')?.addEventListener('click',()=>{selectedKnowledge=null;render()});
}
window.LearningMap={render};
})();
