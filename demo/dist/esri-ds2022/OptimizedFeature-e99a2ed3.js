import { z as t$1 } from './vec2f32-96e18450.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(t=[],e=[],s=!1){this.lengths=null!=t?t:[],this.coords=null!=e?e:[],this.hasIndeterminateRingOrder=s;}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((t,e)=>t+e))}forEachVertex(t){let e=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let s=0;s<this.lengths.length;s++){const h=this.lengths[s];for(let s=0;s<h;s++){t(this.coords[2*(s+e)],this.coords[2*(s+e)+1]);}e+=h;}}clone(e){return e?(e.set(this.coords),new t(this.lengths.slice(),e,this.hasIndeterminateRingOrder)):new t(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s{constructor(t=null,s={},e,o){this.geometry=t,this.attributes=s,this.centroid=e,this.objectId=o,this.displayId=0,this.geohashX=0,this.geohashY=0;}weakClone(){const t=new s(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}}function e(s){return !(t$1(s.geometry)||!s.geometry.coords||!s.geometry.coords.length)}class o extends s{}

export { e, o, s, t };
