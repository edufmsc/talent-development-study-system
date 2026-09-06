(()=>{'use strict';
const D=window.COURSE_DATA||{knowledge:[],chapters:[]};
const APP_KEY='td-study-os-100',IMPORTANT_KEY='td-manual-importance-v1';
const chMap=Object.fromEntries((D.chapters||[]).map(c=>[c.id,c])),clamp=(n,a=0,b=100)=>Math.max(a,Math.min(b,n));
function read(key){try{return JSON.parse(localStorage.getItem(key)||'{}')}catch(e){return {}}}function write(key,v){localStorage.setItem(key,JSON.stringify(v))}function appState(){return read(APP_KEY)}function importanceState(){return read(IMPORTANT_KEY)}
function isManualImportant(kOrId){const id=typeof kOrId==='string'?kOrId:kOrId?.id;return Boolean(id&&importanceState()[id]?.important)}function toggleManualImportant(id){const s=importanceState();if(s[id]?.important)delete s[id];else s[id]={important:true,at:Date.now()};write(IMPORTANT_KEY,s);return Boolean(s[id]?.important)}
function chapterPriority(k){const p=String(chMap[k?.chapter]?.examPriority||'C');return p==='A'?8:p==='B'?4:0}
function isLowTrustAttempt(a){return String(a?.format||'').includes('申論')}
function evidence(k,st=appState()){
 const allAttempts=(st.attempts||[]).filter(a=>a.knowledgeId===k.id&&Number.isFinite(Number(a.score))).sort((a,b)=>Number(b.at||0)-Number(a.at||0));
 const attempts=allAttempts.filter(a=>!isLowTrustAttempt(a)),lowTrustAttempts=allAttempts.filter(isLowTrustAttempt),review=st.reviews?.[k.id]||{},mastery=st.mastery?.[k.id]||'';
 const scores=attempts.slice(0,3).map(a=>Number(a.score)),latest=scores.length?scores[0]:null,avg3=scores.length?Math.round(scores.reduce((a,b)=>a+b,0)/scores.length):null;
 const lastAt=Number(review.lastAt||attempts[0]?.at||lowTrustAttempts[0]?.at||0),ageDays=lastAt?Math.max(0,(Date.now()-lastAt)/86400000):null,due=Number(review.dueAt)>0&&Number(review.dueAt)<=Date.now();
 const trustedEvidence=Boolean(attempts.length||mastery),tested=trustedEvidence||Boolean(review.lastAt&&attempts.length);
 return {allAttempts,attempts,lowTrustAttempts,review,mastery,scores,latest,avg3,lastAt,ageDays,due,tested,trustedEvidence};
}
function risk(k,st=appState()){
 const e=evidence(k,st);if(!e.tested)return {risk:null,masteryScore:null,status:'untested',tested:false,due:e.due,reasons:e.lowTrustAttempts.length?['只有規則式申論紀錄，尚不足以判定掌握度']:['尚未驗證'],latest:null,avg3:null,ageDays:e.ageDays,confidence:e.lowTrustAttempts.length?10:0};
 let n=0,reasons=[];
 if(e.latest!=null){n+=(100-e.latest)*.45;if(e.latest<70)reasons.push(`最近 ${e.latest} 分`);else if(e.latest<85)reasons.push(`最近 ${e.latest} 分，仍不穩`)}else{n+=18;reasons.push('缺少高可信回想分數')}
 if(e.avg3!=null){n+=(100-e.avg3)*.16;if(e.scores.length>=2&&e.avg3<80)reasons.push(`近${e.scores.length}次平均 ${e.avg3}`)}
 const lapses=Number(e.review.lapses||0);n+=Math.min(16,lapses*5);if(lapses>=2)reasons.push(`反覆忘記 ${lapses} 次`);if(e.due){n+=11;reasons.push('已到期')}
 const stability=Number(e.review.stability||0);if(stability>0&&stability<1){n+=10;reasons.push(`穩定度僅 ${stability} 天`)}else if(stability>0&&stability<3){n+=6;reasons.push(`穩定度 ${stability} 天`)}else if(stability>0&&stability<7)n+=3;
 if(e.mastery==='不熟'){n+=15;reasons.push('自評不熟')}else if(e.mastery==='需複習'){n+=9;reasons.push('自評需複習')}else if(e.mastery==='會了')n-=4;
 if(e.ageDays!=null&&e.ageDays>21){n+=10;reasons.push(`${Math.floor(e.ageDays)}天未複習`)}else if(e.ageDays!=null&&e.ageDays>14){n+=7;reasons.push(`${Math.floor(e.ageDays)}天未複習`)}else if(e.ageDays!=null&&e.ageDays>7)n+=4;
 n+=chapterPriority(k);n=clamp(Math.round(n));const status=n>=70?'high':n>=50?'medium':'good';if(!reasons.length)reasons.push('目前表現相對穩定');
 const confidence=Math.min(100,(e.attempts.length?45:20)+(e.scores.length>=2?20:0)+(e.scores.length>=3?10:0)+(e.review.stability?15:0)+(e.mastery?10:0));
 return {risk:n,masteryScore:100-n,status,tested:true,due:e.due,reasons:[...new Set(reasons)].slice(0,3),latest:e.latest,avg3:e.avg3,ageDays:e.ageDays,confidence};
}
function groupStats(ks,st=appState()){const uniq=[...new Map((ks||[]).filter(Boolean).map(k=>[k.id,k])).values()],rows=uniq.map(k=>({k,r:risk(k,st)})),tested=rows.filter(x=>x.r.tested),avg=a=>a.length?Math.round(a.reduce((x,y)=>x+y,0)/a.length):null;return {rows,total:rows.length,tested:tested.length,untested:rows.length-tested.length,coverageConfidence:rows.length?Math.round(tested.length/rows.length*100):0,masteryScore:avg(tested.map(x=>x.r.masteryScore)),riskScore:avg(tested.map(x=>x.r.risk)),high:tested.filter(x=>x.r.status==='high').length,medium:tested.filter(x=>x.r.status==='medium').length,good:tested.filter(x=>x.r.status==='good').length,due:tested.filter(x=>x.r.due).length,manual:rows.filter(x=>isManualImportant(x.k)).length}}
function priority(k,st=appState()){const r=risk(k,st);let p=r.tested?r.risk:48+chapterPriority(k);if(r.due)p+=10;if(!r.tested)p+=8;if(isManualImportant(k))p+=18;return Math.round(p)}
function rank(ks,opts={}){const st=opts.state||appState(),exclude=new Set(opts.exclude||[]);return [...new Map((ks||[]).filter(k=>k&&!exclude.has(k.id)).map(k=>[k.id,k])).values()].map(k=>({k,r:risk(k,st),priority:priority(k,st),manual:isManualImportant(k)})).sort((a,b)=>b.priority-a.priority||(b.r.risk??-1)-(a.r.risk??-1)||String(a.k.id).localeCompare(String(b.k.id)))}
function scopeKnowledge(st=appState()){let a=(D.knowledge||[]).slice(),p=st.plan||{};if(Array.isArray(p.days)&&p.days.length)a=a.filter(k=>p.days.includes(k.day));if(Array.isArray(p.chapters)&&p.chapters.length)a=a.filter(k=>p.chapters.includes(k.chapter));if(Array.isArray(p.types)&&p.types.length)a=a.filter(k=>p.types.includes(k.type));return a.length?a:(D.knowledge||[]).slice()}
function next(ks=null,opts={}){return rank(ks||scopeKnowledge(),opts)[0]?.k||null}
function scheduleReview(k,rating,score=null){const st=appState();st.mastery=st.mastery||{};st.reviews=st.reviews||{};const old=st.reviews[k.id]||{stage:0,stability:0,dueAt:0,lastAt:0,lastScore:null,lapses:0,streak:0};let days=0,stage=old.stage||0,stability=old.stability||0,lapses=old.lapses||0,streak=old.streak||0;if(rating==='again'){stage=Math.max(0,stage-1);stability=Math.max(.25,stability*.55);lapses++;streak=0;st.mastery[k.id]='不熟'}if(rating==='hard'){days=Math.max(.5,stability||1);stage=Math.max(1,stage);stability=Math.max(1,stability*1.2||1);streak++;st.mastery[k.id]='需複習'}if(rating==='good'){stage++;stability=stage===1?1:Math.max(2,(stability||1)*2.1);days=stability;streak++;st.mastery[k.id]='會了'}if(rating==='easy'){stage+=2;stability=stage<=2?3:Math.max(5,(stability||1)*3);days=stability;streak++;st.mastery[k.id]='會了'}const dueAt=rating==='again'?Date.now()+10*60*1000:Date.now()+days*86400000;st.reviews[k.id]={stage,stability:Math.round(stability*10)/10,dueAt,lastAt:Date.now(),lastScore:score,lapses,streak};write(APP_KEY,st);return st.reviews[k.id]}
window.DecisionEngine={version:'2026-09-06-v2',appState,evidence,risk,groupStats,priority,rank,next,scopeKnowledge,isManualImportant,toggleManualImportant,importanceState,scheduleReview,modelNotice:'學習風險指標為個人複習排序用啟發式指標，不是考試通過機率或心理計量分數；規則式申論分數不作高可信掌握證據。'};
})();
