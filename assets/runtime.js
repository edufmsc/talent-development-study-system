(()=>{'use strict';
const D=window.COURSE_DATA||{slides:[]};
const COVER_KEY='td-slide-coverage-v2';
function parts(){return (location.hash||'#/home').replace(/^#\/?/,'').split('/').filter(Boolean)}
function readCoverage(){try{return JSON.parse(localStorage.getItem(COVER_KEY)||'{}')}catch(e){return {}}}
function pageKey(s){return `d${s.day}-s${String(s.slide).padStart(3,'0')}`}
function statusOf(s){return readCoverage().pages?.[pageKey(s)]?.status||null}
function isCompleted(s){return statusOf(s)==='已完成本頁'}
function inStudyFlow(s){if(s.studyDisposition==='CORE')return true;if(s.studyDisposition==='CONTEXT')return !isCompleted(s)||statusOf(s)==='需重看';return false}
function chapterSlides(s){return D.slides.filter(x=>x.chapter===s.chapter).sort((a,b)=>a.slide-b.slide)}
function nearestStudyPage(s){const list=chapterSlides(s),i=list.findIndex(x=>x.day===s.day&&x.slide===s.slide);return list.slice(i+1).find(inStudyFlow)||list.slice(0,i).reverse().find(inStudyFlow)||null}
function routeGuard(p){
  if(p[0]!=='slide'||p.length<3||p[3])return false;
  const day=Number(p[1]),slide=Number(p[2]),s=D.slides.find(x=>x.day===day&&x.slide===slide);
  if(!s||inStudyFlow(s))return false;
  const target=nearestStudyPage(s);
  location.hash=target?`#/slide/${target.day}/${target.slide}`:`#/slides/${s.chapter}`;
  return true;
}
function continueAfterContextCompletion(e){
  const btn=e.target.closest?.('[data-slide-mark]');
  if(!btn||btn.dataset.slideMark!=='已完成本頁')return;
  const p=parts();
  if(p[0]!=='slide'||p[3])return;
  const s=D.slides.find(x=>x.day===Number(p[1])&&x.slide===Number(p[2]));
  if(!s||s.studyDisposition!=='CONTEXT')return;
  setTimeout(()=>{
    const target=nearestStudyPage(s);
    location.hash=target?`#/slide/${target.day}/${target.slide}`:`#/slides/${s.chapter}`;
  },0);
}
function run(){const p=parts();if(p[0]==='map'){window.LearningMap?.render?.();return}if(routeGuard(p))return;if(window.Coverage?.render?.(p))return;window.Coverage?.afterRender?.(p);window.Insights?.afterRender?.(p)}
document.addEventListener('click',continueAfterContextCompletion,true);
window.addEventListener('hashchange',()=>setTimeout(run,0));
window.addEventListener('DOMContentLoaded',()=>setTimeout(run,0));
setTimeout(run,40);
window.TDRuntime={run,routeGuard};
})();