import { eG as l, bI as O, db as at, c as s, cd as B, ce as c, dF as x, gp as c$3, gq as l$1 } from './vec2f32-96e18450.js';
import { c as c$1, a } from './devEnvironmentUtils-c5b59f3c.js';
import { b, m, p, c as c$2, j as j$1 } from './styleUtils-c0536af9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(t,e,r,l){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?j(t,e,l):m(t,e,l).then((o=>h(o,t.name,e,r,l))):Promise.reject(new s("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function h(y,c$4,g,h,j){const d=y.data,U={portal:g&&g.portal||B.getDefault(),url:O(y.baseUrl),origin:"portal-item"},N=d.items.find((t=>t.name===c$4));if(!N){const t=`The symbol name '${c$4}' could not be found`;return Promise.reject(new s("symbolstyleutils:symbol-name-not-found",t,{symbolName:c$4}))}let w=c(p(N,h),U),P=N.thumbnail&&N.thumbnail.href;const S=N.thumbnail&&N.thumbnail.imageData;c$1()&&(w=a(w),P=a(P));const D={portal:g.portal,url:O(at(w)),origin:"portal-item"};return b(w,j).then((e=>{const r="cimRef"===h?c$2(e.data):e.data,o=l(r,D);if(o&&x(o)){if(P){const t=c(P,U);o.thumbnail=new c$3({url:t});}else S&&(o.thumbnail=new c$3({url:`data:image/png;base64,${S}`}));y.styleUrl?o.styleOrigin=new l$1({portal:g.portal,styleUrl:y.styleUrl,name:c$4}):y.styleName&&(o.styleOrigin=new l$1({portal:g.portal,styleName:y.styleName,name:c$4}));}return o}))}function j(t,e,r){const o=j$1.replace(/\{SymbolName\}/gi,t.name);return b(o,r).then((t=>{const r=c$2(t.data);return l(r,{portal:e.portal,url:O(at(o)),origin:"portal-item"})}))}

export { h as fetchSymbolFromStyle, g as resolveWebStyleSymbol };
