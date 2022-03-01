import { bE as ht, k as r, a5 as b$1, C, ae as r$1, e, d, i as i$1 } from './intl-f9bcf179.js';
import { aR as a, b1 as m, d$ as n, e0 as y, S, bB as A, X as o, a1 as M } from './vec2f32-a88eee2e.js';
import { l, b } from './MultiOriginJSONSupport-9580fd5e.js';
import { i } from './BlendLayer-324633cc.js';
import { y as y$1 } from './OperationalLayer-4ec71ac3.js';
import { w as w$1 } from './PortalLayer-1931d936.js';
import { n as n$1 } from './RefreshableLayer-1f637573.js';
import { s } from './ScaleRangeLayer-e13c0aef.js';
import { j, c, f } from './commonProperties-dc6e2688.js';
import './JSONSupport-add604e3.js';
import './mat4-ae511675.js';
import './_commonjsHelpers-020ca939.js';
import './TimeExtent-c4789fb1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const L=["atom","xml"],R={base:a,key:"type",typeMap:{"simple-line":m},errorContext:"symbol"},k={base:a,key:"type",typeMap:{"picture-marker":n,"simple-marker":y},errorContext:"symbol"},_={base:a,key:"type",typeMap:{"simple-fill":S},errorContext:"symbol"};let w=class extends(i(n$1(y$1(w$1(s(l(b))))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss";}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach((e=>{var r;const o=e.layerDefinition.drawingInfo.renderer.symbol;o&&"esriSFS"===o.type&&null!=(r=o.outline)&&r.style.includes("esriSFS")&&(o.outline.style="esriSLSSolid");})),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?ht(this.url,L)||"GeoRSS":e||""}set title(e){this._set("title",e);}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(b$1).then((()=>this._fetchService(r$1))).then((e=>{this.read(e,{origin:"service"});}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){var t;const s=this.spatialReference,{data:i}=await C(r$1.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:A(s)?void 0:null!=(t=s.wkid)?t:JSON.stringify(s)},signal:e});return i}_hasGeometry(e){var r,o;return null!=(r=null==(o=this.featureCollections)?void 0:o.some((r=>{var o,t;return (null==(o=r.featureSet)?void 0:o.geometryType)===e&&(null==(t=r.featureSet.features)?void 0:t.length)>0})))&&r}};e([d()],w.prototype,"description",void 0),e([d()],w.prototype,"featureCollections",void 0),e([o("service","featureCollections",["featureCollection.layers"])],w.prototype,"readFeatureCollections",null),e([d({type:M,json:{name:"lookAtExtent"}})],w.prototype,"fullExtent",void 0),e([d(j)],w.prototype,"id",void 0),e([d(c)],w.prototype,"legendEnabled",void 0),e([d({types:R,json:{write:!0}})],w.prototype,"lineSymbol",void 0),e([d({type:["show","hide"]})],w.prototype,"listMode",void 0),e([d({types:k,json:{write:!0}})],w.prototype,"pointSymbol",void 0),e([d({types:_,json:{write:!0}})],w.prototype,"polygonSymbol",void 0),e([d({type:["GeoRSS"]})],w.prototype,"operationalLayerType",void 0),e([d(f)],w.prototype,"url",void 0),e([d({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],w.prototype,"title",null),e([d({readOnly:!0,json:{read:!1},value:"geo-rss"})],w.prototype,"type",void 0),w=e([i$1("esri.layers.GeoRSSLayer")],w);const F=w;

export default F;
