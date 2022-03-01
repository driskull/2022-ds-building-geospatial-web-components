import { I } from './cimAnalyzer-a158dc88.js';
import { E } from './Utils-b64a9f45.js';
import { L } from './MaterialKey-55ff2aea.js';
import { c as c$2, a as a$1 } from './devEnvironmentUtils-c5b59f3c.js';
import { c as s, h, cd as B, bI as O, ce as c$1 } from './vec2f32-96e18450.js';
import { m, j, b, c, p as p$1 } from './styleUtils-c0536af9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a={marker:E.MARKER,fill:E.FILL,line:E.LINE,text:E.TEXT};class l$1{constructor(e,l,s,n){const r={minScale:null==l?void 0:l.minScale,maxScale:null==l?void 0:l.maxScale},c=i$1(r);this.layers=e,this.data=l,this.hash=this._createHash()+c,this.rendererKey=s;const m={isOutline:!1,isOutlinedFill:!1,placement:null,stride:{fill:"default"},vvFlags:s};for(const i of e){const e=a[i.type];i.materialKey=L(e,m),i.maxVVSize=n,i.scaleInfo=r,i.templateHash+=c;}}get type(){return "expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}function i$1(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function y(t,r,n){if(!t.name)return Promise.reject(new s("style-symbol-reference-name-missing","Missing name in style symbol reference"));if(t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName)return f(t,n);try{return p(await m(t,r,n),t.name,r,n)}catch(s){return h(s),null}}async function f(t,r){const e=j.replace(/\{SymbolName\}/gi,t.name);try{const t=await b(e,r);return c(t.data)}catch(n){return h(n),null}}async function p(m,a,y,f){const p=m.data,b$1={portal:y&&y.portal||B.getDefault(),url:O(m.baseUrl),origin:"portal-item"},d=p.items.find((t=>t.name===a));if(!d){throw new s("symbolstyleutils:symbol-name-not-found",`The symbol name '${a}' could not be found`,{symbolName:a})}let j=c$1(p$1(d,"cimRef"),b$1);c$2()&&(j=a$1(j));try{const t=await b(j,f);return c(t.data)}catch(U){return h(U),null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=async(e,t,a,r)=>Promise.all(e.map((e=>l(e,t,a,r)))),n=async(a,r,n)=>new l$1(await I(a.data,r,n),a.data,a.rendererKey,a.maxVVSize),l=async(e,t,r,l)=>{if(!e)return null;if("cim"===e.type)return n(e,t,r);if("web-style"===e.type){const i={type:"cim",data:await y(e,null,l),rendererKey:e.rendererKey,maxVVSize:e.maxVVSize};return n(i,t,r)}return e};function i(e){if(!e)return null;const{type:t,cim:a,url:r,materialHash:n}=e,l={cim:a,type:t,mosaicHash:n,url:r,size:null,dashTemplate:null,path:null,text:null,fontName:null};switch(t){case"marker":l.size=e.size,l.path=e.path;break;case"line":l.dashTemplate=e.dashTemplate;break;case"text":l.text=e.text,l.fontName=e.fontName;}return l}

export { i, l };
