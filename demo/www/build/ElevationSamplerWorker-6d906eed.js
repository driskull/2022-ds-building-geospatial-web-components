import { k as r, B as i } from './intl-f9bcf179.js';
import { h } from './PooledRBush-91a1e394.js';
import { _ } from './georeference-e81a13e5.js';
import './quickselect-ccfd8cff.js';
import './vec2f32-a88eee2e.js';
import './JSONSupport-add604e3.js';
import './quat-28cfe247.js';
import './mat4-ae511675.js';
import './vec33-5e4e0456.js';
import './mat3-5a3bab08.js';
import './projection-60b2cc57.js';
import './zscale-41674b48.js';
import './BufferView-8daab669.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o{async createIndex(e,n){const o=new Array;if(!e.vertexAttributes||!e.vertexAttributes.position)return new h;const s=this.createMeshData(e),a=r(n)?await n.invoke("createIndexThread",s,{transferList:o}):this.createIndexThread(s).result;return this.createPooledRBush().fromJSON(a)}createIndexThread(e){const t=new Float64Array(e.position),r=this.createPooledRBush();return e.components?this.createIndexComponentsThread(r,t,e.components.map((e=>new Uint32Array(e)))):this.createIndexAllThread(r,t)}createIndexAllThread(e,t){const r=new Array(t.length/9);let n=0;for(let o=0;o<t.length;o+=9)r[n++]=s(t,o+0,o+3,o+6);return e.load(r),{result:e.toJSON()}}createIndexComponentsThread(e,t,r){let n=0;for(const s of r)n+=s.length/3;const o=new Array(n);let a=0;for(const i of r)for(let e=0;e<i.length;e+=3)o[a++]=s(t,3*i[e+0],3*i[e+1],3*i[e+2]);return e.load(o),{result:e.toJSON()}}createMeshData(e){const t=(e.transform?_({position:e.vertexAttributes.position,normal:null,tangent:null},e.transform,e.spatialReference).position:e.vertexAttributes.position).buffer;return !e.components||e.components.some((e=>!e.faces))?{position:t}:{position:t,components:e.components.map((e=>e.faces))}}createPooledRBush(){return new h(9,i("esri-csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}}function s(e,t,r,n){return {minX:Math.min(e[t+0],e[r+0],e[n+0]),maxX:Math.max(e[t+0],e[r+0],e[n+0]),minY:Math.min(e[t+1],e[r+1],e[n+1]),maxY:Math.max(e[t+1],e[r+1],e[n+1]),p0:[e[t+0],e[t+1],e[t+2]],p1:[e[r+0],e[r+1],e[r+2]],p2:[e[n+0],e[n+1],e[n+2]]}}

export default o;
export { o as ElevationSamplerWorker };
