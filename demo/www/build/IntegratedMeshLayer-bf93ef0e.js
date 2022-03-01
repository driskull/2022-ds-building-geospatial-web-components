import { f9 as qt, V as r, gI as y$1, gB as m$2, cf as i, cv as t$1, gJ as M$1, z as t$2, gK as U$1, cK as Q, gL as R$1, gM as s, bJ as z, b2 as m$3, a as a$1, cm as t$4, bq as v$1, l as l$1, e as e$1, f as d, g as r$1, i as i$2, b as i$3, S as S$1, bI as O$2, $ as C, ce as c, bG as b$2, c as s$2, ax as o$1 } from './vec2f32-96e18450.js';
import { u } from './Handles-b3021138.js';
import { l as l$2, b as b$1 } from './MultiOriginJSONSupport-4c0182cb.js';
import { $ } from './watchUtils-be3a5f50.js';
import { i as i$1, N } from './SceneService-58179d5a.js';
import { t as t$3 } from './uuid-917a1a17.js';
import { i as i$4 } from './APIKeyMixin-ee03b0ff.js';
import { p as p$1 } from './ArcGISService-bc55d6c8.js';
import { y as y$2 } from './OperationalLayer-f90d3a65.js';
import { w as w$1 } from './PortalLayer-f5d3d653.js';
import { s as s$1 } from './ScaleRangeLayer-cc4d317e.js';
import { d as d$1 } from './commonProperties-73952058.js';
import { s as s$3, l as l$3, u as u$1, m as m$4 } from './I3SLayerDefinitions-dd9bfb8d.js';
import { l as ln, d as dn } from './projection-f0a42b06.js';
import './HeightModelInfo-533ad021.js';
import './arcgisLayerUrl-e91052aa.js';
import './resourceUtils-0248a076.js';
import './TimeExtent-ef5feff1.js';
import './mat4-59c51b41.js';
import './zscale-075392a1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function p(i){return o[n$1(i)]||e}function n$1(i){return i instanceof Blob?i.type:t(i.url)}function t(p){const n=qt(p);return g$1[n]||a}const o={},a="text/plain",e=o[a],g$1={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const l in g$1)o[g$1[l]]=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function g(r$1){const e=r(r$1)&&r$1.origins?r$1.origins:[void 0];return (t,o)=>{const i=w(r$1,t,o);for(const r of e){const e=y$1(t,r,o);for(const t in i)e[t]=i[t];}}}function w(r$1,e,o){if(r(r$1)&&"resource"===r$1.type)return v(r$1,e,o);switch(r(r$1)&&r$1.type?r$1.type:"other"){case"other":return {read:!0,write:!0};case"url":{const{read:t,write:r}=R$1;return {read:t,write:r}}}}function v(e,s$1,u){const p=s(s$1,u);return {type:String,read:(t,r,e)=>{const o=m$2(t,r,e);return p.type===String?o:"function"==typeof p.type?new p.type({url:o}):void 0},write:{writer(s,a,l,f){if(!f||!f.resources)return "string"==typeof s?void(a[l]=i(s,f)):void(a[l]=s.write({},f));const m=P(s),d=m?i(m,{...f,verifyItemRelativeUrls:f&&f.verifyItemRelativeUrls?{writtenUrls:f.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},1):null,g=p.type!==String&&(!i$1(this)||f&&f.origin&&this.originIdOf(u)>t$1(f.origin));f&&f.portalItem&&r(d)&&!M$1(d)?g?j(this,u,s,d,a,l,f,e):I(d,a,l,f):f&&f.portalItem&&(t$2(d)||r(U$1(d))||Q(d)||g)?U(this,u,s,d,a,l,f,e):a[l]=d;}}}}function U(t,r,o,i,u,a,c,l){const m=t$3(),y=S(o,i,c),h=z(m$3(l,"prefix"),m),d=`${h}.${p(y)}`,g=c.portalItem.resourceFromPath(d);Q(i)&&c.resources.pendingOperations.push(b(i).then((t=>{g.path=`${h}.${p(t)}`,u[a]=g.itemRelativeUrl;})).catch((()=>{}))),O$1(t,r,g,y,c.resources.toAdd),u[a]=g.itemRelativeUrl;}function j(t,r,e,o,i,n,s,p$1){const a=s.portalItem.resourceFromPath(o),c=S(e,o,s);p(c)===qt(a.path)?(O$1(t,r,a,c,s.resources.toUpdate),i[n]=o):U(t,r,e,o,i,n,s,p$1);}function I(t,r,e,o){o.resources.toKeep.push({resource:o.portalItem.resourceFromPath(t)}),r[e]=t;}function O$1(t,r,e,o,i){i.push({resource:e,content:o,finish:e=>{R(t,r,e);}});}function S(t,r,e){return "string"==typeof t?{url:r}:new Blob([JSON.stringify(t.toJSON(e))],{type:"application/json"})}async function b(t){const r=(await import('./vec2f32-96e18450.js').then(function (n) { return n.hd; })).default,{data:e}=await r(t,{responseType:"blob"});return e}function P(t){return t$2(t)?null:"string"==typeof t?t:t.url}function R(t,r,e){"string"==typeof t[r]?t[r]=e.url:t[r].url=e.url;}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m$1;let y=m$1=class extends a$1{constructor(e){super(e),this.geometry=null,this.type="clip";}writeGeometry(e,r,o,s){if(s.layer&&s.layer.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!ln(e.spatialReference,s.layer.spatialReference))return void(s&&s.messages&&s.messages.push(new t$4("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const p=new v$1;dn(e,p,s.layer.spatialReference),r[o]=p.toJSON(s);}else r[o]=e.toJSON(s);delete r[o].spatialReference;}clone(){return new m$1({geometry:l$1(this.geometry),type:this.type})}};e$1([d({type:v$1}),g()],y.prototype,"geometry",void 0),e$1([r$1(["web-scene","portal-item"],"geometry")],y.prototype,"writeGeometry",null),e$1([d({type:["clip","mask","replace"],nonNullable:!0}),g()],y.prototype,"type",void 0),y=m$1=e$1([i$2("esri.layers.support.SceneModification")],y);const f=y;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m;let n=m=class extends(i$3(S$1.ofType(f))){constructor(r){super(r),this.url=null;}toJSON(r){return this.toArray().map((o=>o.toJSON(r))).filter((r=>!!r.geometry))}clone(){return new m({url:this.url,items:this.items.map((r=>r.clone()))})}_readModifications(r,o){for(const t of r)this.add(f.fromJSON(t,o));}static fromJSON(r,o){const t=new m;return t._readModifications(r,o),t}static async fromUrl(r,t,e){const c={url:O$2(r),origin:"service"},a=await C(r,{responseType:"json",signal:m$3(e,"signal")}),n=t.toJSON(),l=[];for(const o of a.data)l.push(f.fromJSON({...o,geometry:{...o.geometry,spatialReference:n}},c));return new m({url:r,items:l})}};e$1([d({type:String})],n.prototype,"url",void 0),n=m=e$1([i$2("esri.layers.support.SceneModifications")],n);const l=n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let O=class extends(N(p$1(y$2(w$1(s$1(l$2(i$4(b$1)))))))){constructor(...e){super(...e),this.handles=new u,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null;}destroy(){this.handles.destroy();}initialize(){this.handles.add($(this,"modifications","after-changes",(()=>this.modifications=this.modifications),null,null,!0));}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:c(e,r),context:r};}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=m$3(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e);}catch(r){b$2(r);}if(await this._fetchService(t),r(this._modificationsSource)){const t=await l.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null;}await this._fetchIndexAndUpdateExtent(this.nodePages,t);}beforeSave(){if(!t$2(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s$2("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s$2("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s$2("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return ["IntegratedMeshLayer"]}};e$1([d({type:String,readOnly:!0})],O.prototype,"geometryType",void 0),e$1([d({type:["show","hide"]})],O.prototype,"listMode",void 0),e$1([d({type:["IntegratedMeshLayer"]})],O.prototype,"operationalLayerType",void 0),e$1([d({json:{read:!1},readOnly:!0})],O.prototype,"type",void 0),e$1([d({type:s$3,readOnly:!0})],O.prototype,"nodePages",void 0),e$1([d({type:[l$3],readOnly:!0})],O.prototype,"materialDefinitions",void 0),e$1([d({type:[u$1],readOnly:!0})],O.prototype,"textureSetDefinitions",void 0),e$1([d({type:[m$4],readOnly:!0})],O.prototype,"geometryDefinitions",void 0),e$1([d({readOnly:!0})],O.prototype,"serviceUpdateTimeStamp",void 0),e$1([d({type:l}),g({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],O.prototype,"modifications",void 0),e$1([o$1(["web-scene","portal-item"],"modifications")],O.prototype,"readModifications",null),e$1([d(d$1)],O.prototype,"elevationInfo",void 0),e$1([d({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],O.prototype,"path",void 0),O=e$1([i$2("esri.layers.IntegratedMeshLayer")],O);const M=O;

export default M;
