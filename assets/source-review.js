(()=>{'use strict';
const D=window.COURSE_DATA||{knowledge:[]},kMap=Object.fromEntries((D.knowledge||[]).map(k=>[k.id,k]));
const parts=()=>String(location.hash||'').replace(/^#\/?/,'').split('/').filter(Boolean);
function badge(k){const r=k?.secondPassReview;if(!r)return'';const corrected=String(r.status||'').includes('CORRECTED');return `<span class="source-review-badge ${corrected?'corrected':''}" title="${String(r.note||'').replace(/"/g,'&quot;')}">✓ ${corrected?'二次核對＋修正':'老師PDF二次核對'}</span>`}
function add(target,k){if(!target||!k?.secondPassReview||target.querySelector?.('.source-review-badge'))return;target.insertAdjacentHTML('beforeend',badge(k))}
function apply(){const p=parts();if((p[0]==='quick'||p[0]==='learn')&&p[1]){const k=kMap[p[1]];if(p[0]==='quick')add(document.querySelector('.quick-card .meta'),k);else add(document.querySelector('.page-head .head-actions')||document.querySelector('.page-head'),k)}document.querySelectorAll('.lm-exam-head>div>span').forEach(e=>{const m=e.textContent.match(/EXAM MICROCARD\s*·\s*([^\s]+)/);if(!m)return;const k=kMap[m[1]];add(e.parentElement,k)})}
let queued=false;const schedule=()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;apply()})};new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true});window.addEventListener('hashchange',schedule);window.addEventListener('DOMContentLoaded',schedule);setTimeout(schedule,100);
window.SourceReview={apply};
})();
