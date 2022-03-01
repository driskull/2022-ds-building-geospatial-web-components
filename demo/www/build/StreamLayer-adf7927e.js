import { e, d, i as i$1, s, a as s$2, k as r, a5 as b$1, C, b as S, a9 as u } from './intl-f9bcf179.js';
import { a2 as k, aJ as d$1, aK as m, a1 as M, bj as i$3, aM as j, aN as B, X as o$2, aO as M$1 } from './vec2f32-a88eee2e.js';
import { P } from './UniqueValueRenderer-e0928c5a.js';
import './DictionaryRenderer-3a040527.js';
import { o as o$1, p as p$2, m as m$2, n as n$1 } from './jsonUtils-d380cab0.js';
import './VisualVariablesMixin-8a22cf6b.js';
import { l as l$1, b } from './MultiOriginJSONSupport-9580fd5e.js';
import { p as p$1 } from './ArcGISService-7e7b6abe.js';
import { i as i$2 } from './BlendLayer-324633cc.js';
import { o } from './CustomParametersMixin-a86b0825.js';
import { t as t$1, s as s$3, r as r$1 } from './labelingInfo-25767b21.js';
import { y } from './OperationalLayer-4ec71ac3.js';
import { w } from './PortalLayer-1931d936.js';
import { n } from './RefreshableLayer-1f637573.js';
import { s as s$1 } from './ScaleRangeLayer-e13c0aef.js';
import { a as a$1 } from './TemporalLayer-53bb7671.js';
import { x, m as m$1, c, I, b as b$3, p as p$3, l as l$2, f } from './commonProperties-dc6e2688.js';
import { l } from './fieldProperties-49d5cbad.js';
import { a } from './JSONSupport-add604e3.js';
import { t as t$2 } from './styleUtils-d505ace0.js';
import { b as b$2 } from './Query-689827fc.js';
import { a as a$2 } from './popupUtils-74d35ca3.js';
import './diffUtils-090e743c.js';
import './styleUtils-4a488c71.js';
import './LRUCache-257bc9a6.js';
import './MemCache-cd2cb7cb.js';
import './colorRamps-76de530b.js';
import './aliasOf-93c38510.js';
import './arcgisLayerUrl-44d1a3ba.js';
import './mat4-ae511675.js';
import './_commonjsHelpers-020ca939.js';
import './TimeExtent-c4789fb1.js';
import './FeatureReductionCluster-71a4b0f9.js';
import './TimeInfo-eeca5f4b.js';
import './Field-c0076075.js';
import './fieldType-064db2a2.js';
import './FieldsIndex-a1139706.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t;let i=t=class extends a{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1;}clone(){return new t({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([d({type:Number,json:{write:!0}})],i.prototype,"age",void 0),e([d({type:Number,json:{write:!0}})],i.prototype,"ageReceived",void 0),e([d({type:Number,json:{write:!0}})],i.prototype,"displayCount",void 0),e([d({type:Number,json:{write:!0}})],i.prototype,"maxObservations",void 0),i=t=e([i$1("esri.layers.support.PurgeOptions")],i);const p=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const X=s.getLogger("esri.layers.StreamLayer"),Y=l();let Z=class extends(t$1(i$2(a$1(s$1(n(p$1(y(w(l$1(o(b))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new p,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=k.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new s$2("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(b$1).then((()=>this._fetchService(r$1)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){d$1(e,this.fieldsIndex),this._set("renderer",e);}readRenderer(e,r,s){const n=(r=r.layerDefinition||r).drawingInfo&&r.drawingInfo.renderer||void 0;if(n){const e=o$1(n,r,s)||void 0;return e||X.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:s}),e}if(r.defaultSymbol)return r.types&&r.types.length?new P({defaultSymbol:$(r.defaultSymbol,r,s),field:r.typeIdField,uniqueValueInfos:r.types.map((e=>({id:e.id,symbol:$(e.symbol,e,s)})))}):new p$2({symbol:$(r.defaultSymbol,r,s)})}createPopupTemplate(e){return a$2(this,e)}createQuery(){const e=new b$2;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,r){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var r;if(!!this.webSocketUrl){var t;if(null==(t=this.timeInfo)||!t.trackIdField)throw new s$2("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new s$2("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new s$2("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new s$2("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl;}else if(!this.sourceJSON){const{data:r}=await C(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=r;}return this.sourceJSON={...null!=(r=this.sourceJSON)?r:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),d$1(this.renderer,this.fieldsIndex),m(this.timeInfo,this.fieldsIndex),t$2(this,{origin:"service"})}};e([d({type:String})],Z.prototype,"copyright",void 0),e([d({readOnly:!0})],Z.prototype,"defaultPopupTemplate",null),e([d({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],Z.prototype,"definitionExpression",void 0),e([d({type:String})],Z.prototype,"displayField",void 0),e([d({type:x})],Z.prototype,"elevationInfo",void 0),e([d(s$3)],Z.prototype,"featureReduction",void 0),e([d(Y.fields)],Z.prototype,"fields",void 0),e([d(Y.fieldsIndex)],Z.prototype,"fieldsIndex",void 0),e([d({type:M})],Z.prototype,"geometryDefinition",void 0),e([d({type:i$3.apiValues,json:{read:{reader:i$3.read}}})],Z.prototype,"geometryType",void 0),e([d(m$1)],Z.prototype,"labelsVisible",void 0),e([d({type:[j],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:r$1},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],Z.prototype,"labelingInfo",void 0),e([d(c)],Z.prototype,"legendEnabled",void 0),e([d({type:["show","hide"]})],Z.prototype,"listMode",void 0),e([d({type:S})],Z.prototype,"maxReconnectionAttempts",void 0),e([d({type:S})],Z.prototype,"maxReconnectionInterval",void 0),e([d(I)],Z.prototype,"maxScale",void 0),e([d(b$3)],Z.prototype,"minScale",void 0),e([d({type:String})],Z.prototype,"objectIdField",void 0),e([d({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],Z.prototype,"operationalLayerType",void 0),e([d(p$3)],Z.prototype,"popupEnabled",void 0),e([d({type:B,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],Z.prototype,"popupTemplate",void 0),e([d({type:p})],Z.prototype,"purgeOptions",void 0),e([d({types:m$2,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:n$1,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],Z.prototype,"renderer",null),e([o$2("service","renderer",["drawingInfo.renderer","defaultSymbol"]),o$2("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],Z.prototype,"readRenderer",null),e([d(l$2)],Z.prototype,"screenSizePerspectiveEnabled",void 0),e([d({type:k,json:{origins:{service:{read:{source:"spatialReference"}}}}})],Z.prototype,"spatialReference",void 0),e([d({json:{read:!1}})],Z.prototype,"type",void 0),e([d(f)],Z.prototype,"url",void 0),e([d({type:Number})],Z.prototype,"updateInterval",void 0),e([d({type:String})],Z.prototype,"webSocketUrl",void 0),Z=e([i$1("esri.layers.StreamLayer")],Z);const $=u({types:M$1}),ee=Z;

export default ee;
