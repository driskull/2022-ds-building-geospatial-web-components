import { J, O, z, L as L$1, P, Z } from './languageUtils-884f50f9.js';
import { J as l$1 } from './arcadeUtils-69024017.js';
import { ac as L, w as s, bX as k } from './intl-f9bcf179.js';
import { WhereClause as m$1 } from './WhereClause-f2a82fd7.js';
import './vec2f32-a88eee2e.js';
import './JSONSupport-add604e3.js';
import './_commonjsHelpers-321aa363.js';
import './number-18a63da8.js';
import './Field-c0076075.js';
import './fieldType-064db2a2.js';
import './featureConversionUtils-a3d8ec70.js';
import './OptimizedFeature-b2ac674d.js';
import './OptimizedFeatureSet-27736f1f.js';
import './FeatureSetReader-cc8f6cc6.js';
import './centroid-b9a46ae8.js';
import './_commonjsHelpers-020ca939.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function l(n,e,c,s,l,m){if(1===s.length){if(J(s[0]))return L(l$1(n,s[0],O(s[1],-1)));if(z(s[0]))return L(l$1(n,s[0].toArray(),O(s[1],-1)))}else if(2===s.length){if(J(s[0]))return L(l$1(n,s[0],O(s[1],-1)));if(z(s[0]))return L(l$1(n,s[0].toArray(),O(s[1],-1)));if(L$1(s[0]))return s[0].load().then((t=>d(m$1.create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,O(s[2],1e3),e.abortSignal)))))}else if(3===s.length&&L$1(s[0]))return s[0].load().then((t=>d(m$1.create(s[1],t.getFieldsIndex()),m,l).then((t=>s[0].calculateStatistic(n,t,O(s[2],1e3),e.abortSignal)))));return L(l$1(n,s,-1))}function d(n,t,r){try{const e=n.getVariables();if(e.length>0){const u=[];for(let n=0;n<e.length;n++){const i={name:e[n]};u.push(t.evaluateIdentifier(r,i));}return s(u).then((t=>{const r={};for(let n=0;n<e.length;n++)r[e[n]]=t[n];return n.parameters=r,n}))}return L(n)}catch(e){return k(e)}}function m(i){"async"===i.mode&&(i.functions.stdev=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("stdev",t,r,e,n,i)}))},i.functions.variance=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("variance",t,r,e,n,i)}))},i.functions.average=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,r,e,n,i)}))},i.functions.mean=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("mean",t,r,e,n,i)}))},i.functions.sum=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("sum",t,r,e,n,i)}))},i.functions.min=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("min",t,r,e,n,i)}))},i.functions.max=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return l("max",t,r,e,n,i)}))},i.functions.count=function(a,o){return i.standardFunctionAsync(a,o,(function(i,a,o){if(P(o,1,1),L$1(o[0]))return o[0].count(i.abortSignal);if(J(o[0])||Z(o[0]))return o[0].length;if(z(o[0]))return o[0].length();throw new Error("Invalid Parameters for Count")}))});}

export { m as registerFunctions };
