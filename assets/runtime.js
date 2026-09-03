(()=>{'use strict';
function parts(){return (location.hash||'#/home').replace(/^#\/?/,'').split('/').filter(Boolean)}
function run(){const p=parts();if(window.Coverage?.render?.(p))return;window.Coverage?.afterRender?.(p);window.Insights?.afterRender?.(p)}
window.addEventListener('hashchange',()=>setTimeout(run,0));
window.addEventListener('DOMContentLoaded',()=>setTimeout(run,0));
setTimeout(run,40);
window.TDRuntime={run};
})();
