import { A as e, bJ as g$1, k as r, e as e$1, d as d$2, i, C } from './intl-f9bcf179.js';
import { a as a$1, o as o$1, u, d as d$3, b as c$1, p as p$1 } from './networkService-8abc55b8.js';
import { v as v$1 } from './normalizeUtils-4a0b810f.js';
import { o as o$2 } from './utils-8e500178.js';
import { a2 as k, k as h, Z as d$1, C as j$1, X as o, by as m, az as v } from './vec2f32-a88eee2e.js';
import { a } from './JSONSupport-add604e3.js';
import { l as l$1 } from './Task-634f7f0c.js';
import './FeatureSet-4fb958ac.js';
import './Field-c0076075.js';
import './fieldType-064db2a2.js';
import './GPMessage-e60d4dbc.js';
import './scaleUtils-88e9eb11.js';
import './floorFilterUtils-a09da11b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function d(r){return r.features.map((o=>{const t=k.fromJSON(r.spatialReference),s=h.fromJSON(o);return e(s.geometry).spatialReference=t,s}))}function g(r$1){return g$1(r$1.features.map((e=>(r(e.geometry)&&(e.geometry.spatialReference=r$1.spatialReference),d$1(e.geometry)))))}let P=class extends a{constructor(r){super(r),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null;}readFacilities(r){return g(r)}readPointBarriers(r,e){return g(e.barriers)}readPolylineBarriers(r){return g(r)}readPolygonBarriers(r){return g(r)}readIncidents(r,e){return d(e.saPolylines)}readServiceAreaPolygons(r,e){return d(e.saPolygons)}};e$1([d$2({type:[j$1]})],P.prototype,"facilities",void 0),e$1([o("facilities")],P.prototype,"readFacilities",null),e$1([d$2({type:[a$1]})],P.prototype,"messages",void 0),e$1([d$2({type:[j$1]})],P.prototype,"pointBarriers",void 0),e$1([o("pointBarriers",["barriers"])],P.prototype,"readPointBarriers",null),e$1([d$2({type:[m]})],P.prototype,"polylineBarriers",void 0),e$1([o("polylineBarriers")],P.prototype,"readPolylineBarriers",null),e$1([d$2({type:[v]})],P.prototype,"polygonBarriers",void 0),e$1([o("polygonBarriers")],P.prototype,"readPolygonBarriers",null),e$1([d$2({type:[h]})],P.prototype,"serviceAreaPolylines",void 0),e$1([o("serviceAreaPolylines",["saPolylines"])],P.prototype,"readIncidents",null),e$1([d$2({type:[h]})],P.prototype,"serviceAreaPolygons",void 0),e$1([o("serviceAreaPolygons",["saPolygons"])],P.prototype,"readServiceAreaPolygons",null),P=e$1([i("esri.rest.support.ServiceAreaSolveResult")],P);const j=P;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l=o$1({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:r=>r.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});async function f(e,f,p){const c=[],m=[],y={},B={},g=o$2(e),{path:S}=g;f.facilities&&f.facilities.features&&u(f.facilities.features,m,"facilities.features",y),f.pointBarriers&&f.pointBarriers.features&&u(f.pointBarriers.features,m,"pointBarriers.features",y),f.polylineBarriers&&f.polylineBarriers.features&&u(f.polylineBarriers.features,m,"polylineBarriers.features",y),f.polygonBarriers&&f.polygonBarriers.features&&u(f.polygonBarriers.features,m,"polygonBarriers.features",y);const j$1=await v$1(m);for(const r in y){const e=y[r];c.push(r),B[r]=j$1.slice(e[0],e[1]);}if(d$3(B,c)){let r=null;try{r=await c$1(S,f.apiKey,p);}catch{}r&&!r.hasZ&&p$1(B,c);}for(const r in B)B[r].forEach(((e,t)=>{f.get(r)[t].geometry=e;}));const b={...p,query:{...g.query,...l.toQueryParams(f),f:"json"}},{data:v}=await C(`${S}/solveServiceArea`,b);return j.fromJSON(v)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends l$1{constructor(r){super(r),this.url=null;}solve(r,s){return f(this.url,r,s)}};e$1([d$2()],c.prototype,"url",void 0),c=e$1([i("esri.tasks.ServiceAreaTask")],c);const p=c;

export default p;
