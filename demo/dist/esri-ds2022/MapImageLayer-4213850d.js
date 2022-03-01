import { V as r, bG as b$1, cv as t, c as s$1, $ as C, a8 as g, aR as M, d as n$1, e as e$1, f as d, ax as o$1, g as r$2, j as S, i as i$2 } from './vec2f32-96e18450.js';
import { y as y$2 } from './TimeExtent-ef5feff1.js';
import { a as a$1 } from './HandleOwner-e0d82d22.js';
import { l, b } from './MultiOriginJSONSupport-4c0182cb.js';
import { r as r$1 } from './scaleUtils-009949b4.js';
import { i as i$1 } from './APIKeyMixin-ee03b0ff.js';
import { f, y, K } from './SublayersOwner-833264a3.js';
import { p } from './ArcGISService-bc55d6c8.js';
import { i } from './BlendLayer-9582dc10.js';
import { o } from './CustomParametersMixin-5d83f8a3.js';
import { y as y$1 } from './OperationalLayer-f90d3a65.js';
import { w } from './PortalLayer-f5d3d653.js';
import { n } from './RefreshableLayer-7eca1761.js';
import { s } from './ScaleRangeLayer-cc4d317e.js';
import { a } from './TemporalLayer-8778bd70.js';
import { f as f$1 } from './commonProperties-73952058.js';
import { c } from './ExportImageParameters-da74ceec.js';
import { e } from './sublayerUtils-c6a17833.js';
import './Handles-b3021138.js';
import './reactiveUtils-5f9c851d.js';
import './watchUtils-be3a5f50.js';
import './Version-ecfcdd2f.js';
import './CollectionFlattener-52fb1d3d.js';
import './UniqueValueRenderer-59efe757.js';
import './VisualVariablesMixin-f7c8cd7e.js';
import './colorRamps-44ecefda.js';
import './diffUtils-c0512c3e.js';
import './styleUtils-c0536af9.js';
import './DictionaryRenderer-148f4879.js';
import './LRUCache-6d357264.js';
import './MemCache-e9a0d4f9.js';
import './jsonUtils-e58c15d9.js';
import './FeatureType-3ed2e985.js';
import './Field-9ae21d09.js';
import './fieldType-40139de8.js';
import './FieldsIndex-a573ae50.js';
import './LayerFloorInfo-742e79c9.js';
import './Query-f41de01f.js';
import './popupUtils-0b9004db.js';
import './floorFilterUtils-a09da11b.js';
import './arcgisLayerUrl-e91052aa.js';
import './mat4-59c51b41.js';
import './_commonjsHelpers-020ca939.js';
import './TimeInfo-753c74d8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let q=class extends(i(a(s(f(y(p(y$1(w(l(n(i$1(o(a$1(b)))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(b$1).then((()=>this._fetchService(r$1)))),Promise.resolve(this)}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e$1,r,t$1,o){if(!this.loaded||!e$1)return;const i=e$1.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let s=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e$1=t(o.origin);if(3===e$1){const e$1=this.createSublayersForOrigin("service").sublayers;s=e(i,e$1,2);}else if(e$1>3){const e$1=this.createSublayersForOrigin("portal-item");s=e(i,e$1.sublayers,t(e$1.origin));}}const a=[],p={writeSublayerStructure:s,...o};let n=s;i.forEach((e=>{const r=e.write({},p);a.push(r),n=n||"user"===e.originOf("visible");}));a.some((e=>Object.keys(e).length>1))&&(r.layers=a),n&&(r.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)));}createExportImageParameters(e,r,t,o){const i=o&&o.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const s=new c({layer:this,floors:null==o?void 0:o.floors,scale:r$1({extent:e,width:r})*i}),a=s.toJSON();s.destroy();const p=!o||!o.rotation||this.version<10.3?{}:{rotation:-o.rotation},n=e&&e.spatialReference,m=n.wkid||JSON.stringify(n.toJSON());a.dpi*=i;const l={};if(null!=o&&o.timeExtent){const{start:e,end:r}=o.timeExtent.toJSON();l.time=e&&r&&e===r?""+e:`${null==e?"null":e},${null==r?"null":r}`;}else this.timeInfo&&!this.timeInfo.hasLiveData&&(l.time="null,null");return {bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:m,imageSR:m,size:r+","+t,...a,...p,...l}}async fetchImage(e,t,i,s){var a;const p={responseType:"image",signal:null!=(a=null==s?void 0:s.signal)?a:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,t,i,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},n=this.parsedUrl.path+"/export";if(null!=p.query.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)return Promise.reject(new s$1("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query}));return C(n,p).then((e=>e.data)).catch((e=>{if(g(e))throw e;throw new s$1("mapimagelayer:image-fetch-error",`Unable to load image: ${n}`,{error:e})}))}async fetchRecomputedExtents(e={}){const o={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:i}=await C(this.url,o),{extent:s,fullExtent:a,timeExtent:p}=i,n=s||a;return {fullExtent:n&&M.fromJSON(n),timeExtent:p&&y$2.fromJSON({start:p[0],end:p[1]})}}loadAll(){return n$1(this,(e=>{e(this.allSublayers);}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:o}=await C(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});o&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl});}};e$1([d({type:Boolean})],q.prototype,"datesInUnknownTimezone",void 0),e$1([d()],q.prototype,"dpi",void 0),e$1([d()],q.prototype,"gdbVersion",void 0),e$1([d()],q.prototype,"imageFormat",void 0),e$1([o$1("imageFormat",["supportedImageFormatTypes"])],q.prototype,"readImageFormat",null),e$1([d({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],q.prototype,"imageMaxHeight",void 0),e$1([d({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],q.prototype,"imageMaxWidth",void 0),e$1([d()],q.prototype,"imageTransparency",void 0),e$1([d({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],q.prototype,"isReference",void 0),e$1([d({json:{read:!1,write:!1}})],q.prototype,"labelsVisible",void 0),e$1([d({type:["ArcGISMapServiceLayer"]})],q.prototype,"operationalLayerType",void 0),e$1([d({json:{read:!1,write:!1}})],q.prototype,"popupEnabled",void 0),e$1([d()],q.prototype,"sourceJSON",void 0),e$1([d({json:{write:{ignoreOrigin:!0}}})],q.prototype,"sublayers",void 0),e$1([r$2("sublayers",{layers:{type:[K]},visibleLayers:{type:[S]}})],q.prototype,"writeSublayers",null),e$1([d({type:["show","hide","hide-children"]})],q.prototype,"listMode",void 0),e$1([d({json:{read:!1},readOnly:!0,value:"map-image"})],q.prototype,"type",void 0),e$1([d(f$1)],q.prototype,"url",void 0),q=e$1([i$2("esri.layers.MapImageLayer")],q);const A=q;

export default A;
