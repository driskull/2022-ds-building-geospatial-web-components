import { k as r, a5 as b$1, aY as t, a as s$1, C, x as g, e as e$1, d, b as S, i as i$2 } from './intl-f9bcf179.js';
import { y as y$2 } from './TimeExtent-c4789fb1.js';
import { a as a$1 } from './HandleOwner-8815c4dd.js';
import { a1 as M, a as n$1, X as o$1, b as r$2 } from './vec2f32-a88eee2e.js';
import { l, b } from './MultiOriginJSONSupport-9580fd5e.js';
import { r as r$1 } from './scaleUtils-88e9eb11.js';
import { i as i$1 } from './APIKeyMixin-8575f837.js';
import { f, y, K } from './SublayersOwner-7bb4128f.js';
import { p } from './ArcGISService-7e7b6abe.js';
import { i } from './BlendLayer-324633cc.js';
import { o } from './CustomParametersMixin-a86b0825.js';
import { y as y$1 } from './OperationalLayer-4ec71ac3.js';
import { w } from './PortalLayer-1931d936.js';
import { n } from './RefreshableLayer-1f637573.js';
import { s } from './ScaleRangeLayer-e13c0aef.js';
import { a } from './TemporalLayer-53bb7671.js';
import { f as f$1 } from './commonProperties-dc6e2688.js';
import { c } from './ExportImageParameters-98de3576.js';
import { e } from './sublayerUtils-c6a17833.js';
import './JSONSupport-add604e3.js';
import './Handles-c08f164d.js';
import './reactiveUtils-7b2ef76d.js';
import './watchUtils-47c42485.js';
import './Version-ffcd8e92.js';
import './CollectionFlattener-bcf03412.js';
import './UniqueValueRenderer-e0928c5a.js';
import './VisualVariablesMixin-8a22cf6b.js';
import './colorRamps-76de530b.js';
import './diffUtils-090e743c.js';
import './styleUtils-4a488c71.js';
import './DictionaryRenderer-3a040527.js';
import './LRUCache-257bc9a6.js';
import './MemCache-cd2cb7cb.js';
import './jsonUtils-d380cab0.js';
import './aliasOf-93c38510.js';
import './FeatureType-b8b87e07.js';
import './Field-c0076075.js';
import './fieldType-064db2a2.js';
import './FieldsIndex-a1139706.js';
import './LayerFloorInfo-b956bff1.js';
import './Query-689827fc.js';
import './popupUtils-74d35ca3.js';
import './floorFilterUtils-a09da11b.js';
import './arcgisLayerUrl-44d1a3ba.js';
import './mat4-ae511675.js';
import './_commonjsHelpers-020ca939.js';
import './TimeInfo-eeca5f4b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let q=class extends(i(a(s(f(y(p(y$1(w(l(n(i$1(o(a$1(b)))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(b$1).then((()=>this._fetchService(r$1)))),Promise.resolve(this)}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e$1,r,t$1,o){if(!this.loaded||!e$1)return;const i=e$1.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let s=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e$1=t(o.origin);if(3===e$1){const e$1=this.createSublayersForOrigin("service").sublayers;s=e(i,e$1,2);}else if(e$1>3){const e$1=this.createSublayersForOrigin("portal-item");s=e(i,e$1.sublayers,t(e$1.origin));}}const a=[],p={writeSublayerStructure:s,...o};let n=s;i.forEach((e=>{const r=e.write({},p);a.push(r),n=n||"user"===e.originOf("visible");}));a.some((e=>Object.keys(e).length>1))&&(r.layers=a),n&&(r.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)));}createExportImageParameters(e,r,t,o){const i=o&&o.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const s=new c({layer:this,floors:null==o?void 0:o.floors,scale:r$1({extent:e,width:r})*i}),a=s.toJSON();s.destroy();const p=!o||!o.rotation||this.version<10.3?{}:{rotation:-o.rotation},n=e&&e.spatialReference,m=n.wkid||JSON.stringify(n.toJSON());a.dpi*=i;const l={};if(null!=o&&o.timeExtent){const{start:e,end:r}=o.timeExtent.toJSON();l.time=e&&r&&e===r?""+e:`${null==e?"null":e},${null==r?"null":r}`;}else this.timeInfo&&!this.timeInfo.hasLiveData&&(l.time="null,null");return {bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:m,imageSR:m,size:r+","+t,...a,...p,...l}}async fetchImage(e,t,i,s){var a;const p={responseType:"image",signal:null!=(a=null==s?void 0:s.signal)?a:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,t,i,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},n=this.parsedUrl.path+"/export";if(null!=p.query.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)return Promise.reject(new s$1("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query}));return C(n,p).then((e=>e.data)).catch((e=>{if(g(e))throw e;throw new s$1("mapimagelayer:image-fetch-error",`Unable to load image: ${n}`,{error:e})}))}async fetchRecomputedExtents(e={}){const o={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:i}=await C(this.url,o),{extent:s,fullExtent:a,timeExtent:p}=i,n=s||a;return {fullExtent:n&&M.fromJSON(n),timeExtent:p&&y$2.fromJSON({start:p[0],end:p[1]})}}loadAll(){return n$1(this,(e=>{e(this.allSublayers);}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:o}=await C(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});o&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl});}};e$1([d({type:Boolean})],q.prototype,"datesInUnknownTimezone",void 0),e$1([d()],q.prototype,"dpi",void 0),e$1([d()],q.prototype,"gdbVersion",void 0),e$1([d()],q.prototype,"imageFormat",void 0),e$1([o$1("imageFormat",["supportedImageFormatTypes"])],q.prototype,"readImageFormat",null),e$1([d({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],q.prototype,"imageMaxHeight",void 0),e$1([d({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],q.prototype,"imageMaxWidth",void 0),e$1([d()],q.prototype,"imageTransparency",void 0),e$1([d({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],q.prototype,"isReference",void 0),e$1([d({json:{read:!1,write:!1}})],q.prototype,"labelsVisible",void 0),e$1([d({type:["ArcGISMapServiceLayer"]})],q.prototype,"operationalLayerType",void 0),e$1([d({json:{read:!1,write:!1}})],q.prototype,"popupEnabled",void 0),e$1([d()],q.prototype,"sourceJSON",void 0),e$1([d({json:{write:{ignoreOrigin:!0}}})],q.prototype,"sublayers",void 0),e$1([r$2("sublayers",{layers:{type:[K]},visibleLayers:{type:[S]}})],q.prototype,"writeSublayers",null),e$1([d({type:["show","hide","hide-children"]})],q.prototype,"listMode",void 0),e$1([d({json:{read:!1},readOnly:!0,value:"map-image"})],q.prototype,"type",void 0),e$1([d(f$1)],q.prototype,"url",void 0),q=e$1([i$2("esri.layers.MapImageLayer")],q);const A=q;

export default A;
