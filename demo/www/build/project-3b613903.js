import { e, d, i as i$2, c as b, C } from './intl-f9bcf179.js';
import { bW as v, bY as a$1 } from './vec2f32-a88eee2e.js';
import { o as o$1, s } from './utils-8e500178.js';
import { a as a$2 } from './JSONSupport-add604e3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(t){return {geometryType:v(t[0]),geometries:t.map((e=>e.toJSON()))}}function o(e,r,o){const n=a$1(r);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=o,t}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let i$1=class extends a$2{constructor(r){super(r),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null;}toJSON(){const r=this.geometries.map((function(r){return r.toJSON()})),t=this.geometries[0],o={};return o.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),o.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),o.geometries=JSON.stringify({geometryType:v(t),geometries:r}),this.transformation&&(o.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(o.transformForward=this.transformForward),o}};e([d()],i$1.prototype,"geometries",void 0),e([d({json:{read:{source:"outSR"}}})],i$1.prototype,"outSpatialReference",void 0),e([d()],i$1.prototype,"transformation",void 0),e([d()],i$1.prototype,"transformForward",void 0),i$1=e([i$2("esri.rest.support.ProjectParameters")],i$1);const a=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=b(a);async function n(o$2,m,n){m=i(m);const u=o$1(o$2),c={...u.query,f:"json",...m.toJSON()},j=m.outSpatialReference,a=v(m.geometries[0]),f=s(c,n);return C(u.path+"/project",f).then((({data:{geometries:r}})=>o(r,a,j)))}

export { a, n, o, r };
