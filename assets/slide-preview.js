(()=>{'use strict';
const D=window.COURSE_DATA||{slides:[],sources:{}};
const M=window.SLIDE_MEDIA||{items:{}};
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
const key=(day,slide)=>`d${day}-s${String(slide).padStart(3,'0')}`;
const thumb=id=>`https://drive.google.com/thumbnail?id=${encodeURIComponent(id)}&sz=w1600`;
const fallback=id=>`https://lh3.googleusercontent.com/d/${encodeURIComponent(id)}=w1600`;
function renderExactPreview(){
  const m=location.hash.match(/^#\/slide\/(\d+)\/(\d+)/); if(!m)return;
  const day=+m[1], slide=+m[2];
  const s=D.slides.find(x=>x.day===day&&x.slide===slide); if(!s)return;
  const card=$('.evidence-card'); if(!card)return;
  card.querySelectorAll('.drive-preview-wrap').forEach(x=>x.remove());
  const media=M.items?.[key(day,slide)], pdf=D.sources?.[day]?.url||'';
  const wrap=document.createElement('div'); wrap.className='drive-preview-wrap exact-slide-preview';
  if(!media?.driveFileId){
    wrap.innerHTML=`<div class="drive-preview-head"><b>教材單頁預覽尚未建立</b><span>D${day} S${String(slide).padStart(3,'0')}｜原始 PDF P${s.pdfPage}</span></div><div class="slide-preview-pending"><strong>這一頁目前尚未完成單頁化。</strong><p>不再用整份 PDF 冒充逐頁教材。完成單張資產後，這裡會直接顯示該張原頁。</p>${pdf?`<a class="btn" href="${esc(pdf)}" target="_blank" rel="noopener">查看完整 PDF 上下文</a>`:''}</div>`;
    card.appendChild(wrap); return;
  }
  const id=media.driveFileId;
  wrap.innerHTML=`<div class="drive-preview-head"><b>教材單頁預覽｜D${day} S${String(slide).padStart(3,'0')}</b><span>原始 PDF P${s.pdfPage}${s.position?'｜'+esc(s.position):''}</span></div><div class="slide-image-stage"><img class="slide-page-image" src="${thumb(id)}" alt="Day ${day} S${String(slide).padStart(3,'0')} 教材單頁" data-fallback="${fallback(id)}"><div class="slide-image-error hidden"><strong>教材單頁圖片載入失敗</strong><p>這不算完成。請使用下方 Drive 單頁連結查看，同時回報修復圖片來源。</p></div></div><div class="slide-source-actions"><a class="btn primary" href="https://drive.google.com/file/d/${esc(id)}/view" target="_blank" rel="noopener">開啟此張教材單頁</a>${pdf?`<a class="btn" href="${esc(pdf)}" target="_blank" rel="noopener">查看完整 PDF 上下文</a>`:''}<span class="tiny muted">逐頁複習主體＝指定教材單頁；完整 PDF 只作上下文。</span></div>`;
  card.appendChild(wrap);
  const img=wrap.querySelector('.slide-page-image'), err=wrap.querySelector('.slide-image-error');
  let triedFallback=false;
  img.addEventListener('error',()=>{
    if(!triedFallback){triedFallback=true;img.src=img.dataset.fallback;return;}
    img.classList.add('hidden'); err.classList.remove('hidden');
  });
  img.addEventListener('load',()=>{err.classList.add('hidden');img.classList.remove('hidden');});
}
function schedule(){setTimeout(renderExactPreview,180)}
window.addEventListener('hashchange',schedule);
window.addEventListener('DOMContentLoaded',schedule);
setTimeout(renderExactPreview,320);
})();
