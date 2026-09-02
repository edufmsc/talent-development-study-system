(()=>{'use strict';
const SYN=[
['hipo','高潛力人才'],['highpotentials','高潛力人才'],['performance','績效'],['potential','潛力'],['competency','職能'],['corecompetency','核心職能'],['functionalcompetency','功能職能'],['managerialcompetency','管理職能'],['assessmentcenter','評鑑中心'],['star','situationtaskactionresult'],['behaviour','行為'],['behavior','行為'],['mission','使命'],['vision','願景'],['values','價值觀'],['learningandgrowth','學習與成長'],['humancapital','人力資本'],['informationcapital','資訊資本'],['organizationcapital','組織資本'],['organisationalcapital','組織資本'],['ojt','工作中訓練'],['sd','自我發展']
];
function norm(s){let x=String(s??'').toLowerCase().replace(/[\s，。；、：:（）()「」『』【】\[\]<>《》\-_/＋+×]/g,'');for(const [a,b] of SYN)x=x.split(a).join(b);return x}
function tokens(s){return [...new Set((String(s||'').match(/[A-Za-z][A-Za-z0-9+&-]*|[\u4e00-\u9fff]{2,12}/g)||[]).map(norm).filter(t=>t.length>1))]}
function answerSlots(answer){const raw=String(answer||'').trim();let parts=[];if(raw.includes('→'))parts=raw.split('→');else if(/[；;]/.test(raw))parts=raw.split(/[；;]/);else if((raw.match(/、/g)||[]).length>=2)parts=raw.split('、');else if((raw.match(/[，,]/g)||[]).length>=3)parts=raw.split(/[，,]/);parts=parts.map(x=>x.trim()).filter(Boolean);return parts.length>=2?parts:[raw]}
function slotMatch(input,slot){const x=norm(input),s=norm(slot);if(!s)return true;if(x.includes(s))return true;const ts=tokens(slot);if(!ts.length)return false;const hit=ts.filter(t=>x.includes(t)).length;return hit/ts.length>=Math.min(.8,ts.length===1?1:.6)}
function orderCoverage(input,slots){if(slots.length<2)return 1;const x=norm(input);let last=-1,ok=0;for(const s of slots){const keys=tokens(s);let idx=-1;for(const k of keys){const p=x.indexOf(k);if(p>=0&&(idx<0||p<idx))idx=p}if(idx>=last&&idx>=0){ok++;last=idx}}return ok/slots.length}
function grade(input,answer,precision='理解＋可說明'){
 const x=String(input||'').trim();if(!x)return {score:0,feedback:'尚未作答',completeness:0,order:0,missing:[]};
 const a=norm(answer),n=norm(x);if(n===a||n.includes(a))return {score:100,feedback:'完整命中',completeness:100,order:100,missing:[]};
 const slots=answerSlots(answer);const hitSlots=slots.filter(s=>slotMatch(x,s));const completeness=slots.length?Math.round(hitSlots.length/slots.length*100):0;const ord=Math.round(orderCoverage(x,slots)*100);
 const ts=tokens(answer),hit=ts.filter(t=>n.includes(t));const lexical=ts.length?Math.round(hit.length/ts.length*100):0;
 let score=Math.round(completeness*.62+lexical*.28+ord*.10);
 const strict=String(precision).includes('完整背誦')||String(precision).includes('精準');
 if(strict&&completeness<100)score=Math.min(score,89);if(strict&&slots.length>2&&ord<100)score=Math.min(score,94);
 const missing=slots.filter(s=>!slotMatch(x,s));let feedback='';
 if(score>=95&&(!strict||completeness===100))feedback='完整度高，可進入延遲複習';
 else if(score>=80)feedback=strict?'方向正確，但完整背誦仍有缺項或順序問題':'核心內容大致正確，可再補教材關鍵詞';
 else if(score>=60)feedback='理解方向正確，但仍有明顯缺漏';
 else feedback='需要補學後立刻再答同一題';
 return {score,feedback,completeness,order:ord,lexical,hit,missing};
}
window.Scoring={grade,answerSlots,norm};
})();