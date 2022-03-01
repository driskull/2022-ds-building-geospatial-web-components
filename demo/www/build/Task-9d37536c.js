import { v as p, bI as O, e, f as d, i as i$1 } from './vec2f32-96e18450.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i=class extends p{constructor(...r){super(...r),this.requestOptions=null,this.url=null;}normalizeCtorArgs(r,s){return "string"!=typeof r?r:{url:r,...s}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(r){return r?O(r):null}_encode(r,s,t){const o={};for(const e in r){if("declaredClass"===e)continue;const i=r[e];if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){o[e]=[];for(let r=0;r<i.length;r++)o[e][r]=this._encode(i[r]);}else if("object"==typeof i)if(i.toJSON){const r=i.toJSON(t&&t[e]);o[e]=s?r:JSON.stringify(r);}else o[e]=s?i:JSON.stringify(i);else o[e]=i;}return o}};e([d({readOnly:!0})],i.prototype,"parsedUrl",null),e([d()],i.prototype,"requestOptions",void 0),e([d({type:String})],i.prototype,"url",void 0),i=e([i$1("esri.tasks.Task")],i);const l=i;

export { l };
