import { b0 as q, k as r, B as i, e, d, i as i$1, a7 as O } from './intl-f9bcf179.js';
import { m, a1 as M, a2 as k, X as o, dZ as m$1, bg as p$1 } from './vec2f32-a88eee2e.js';
import { G as Ge } from './FeatureLayer-d0cffc77.js';
import { u as u$1 } from './workers-b2f67d28.js';
import g from './FeatureSet-4fb958ac.js';
import { a } from './clientSideDefaults-9d3f54d4.js';
import { b } from './Query-689827fc.js';
import './JSONSupport-add604e3.js';
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
import './Handles-c08f164d.js';
import './MultiOriginJSONSupport-9580fd5e.js';
import './Field-c0076075.js';
import './fieldType-064db2a2.js';
import './HeightModelInfo-d5d3aa1e.js';
import './HandleOwner-8815c4dd.js';
import './reactiveUtils-7b2ef76d.js';
import './watchUtils-47c42485.js';
import './queryZScale-5052a726.js';
import './zscale-41674b48.js';
import './APIKeyMixin-8575f837.js';
import './ArcGISService-7e7b6abe.js';
import './arcgisLayerUrl-44d1a3ba.js';
import './BlendLayer-324633cc.js';
import './mat4-ae511675.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-a86b0825.js';
import './labelingInfo-25767b21.js';
import './TimeExtent-c4789fb1.js';
import './FeatureReductionCluster-71a4b0f9.js';
import './commonProperties-dc6e2688.js';
import './OperationalLayer-4ec71ac3.js';
import './OrderedLayer-c71463ea.js';
import './PortalLayer-1931d936.js';
import './RefreshableLayer-1f637573.js';
import './ScaleRangeLayer-e13c0aef.js';
import './TemporalLayer-53bb7671.js';
import './TimeInfo-eeca5f4b.js';
import './FeatureType-b8b87e07.js';
import './fieldProperties-49d5cbad.js';
import './FieldsIndex-a1139706.js';
import './LayerFloorInfo-b956bff1.js';
import './styleUtils-d505ace0.js';
import './TopFeaturesQuery-1ab1fe83.js';
import './popupUtils-74d35ca3.js';
import './QueryEngineCapabilities-d289cd19.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let u=class extends m{constructor(t){super(t),this.type="csv",this.refresh=q((async t=>{await this.load();const{extent:e,timeExtent:o}=await this._connection.invoke("refresh",t);return this.sourceJSON.extent=e,o&&(this.sourceJSON.timeInfo.timeExtent=[o.start,o.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}));}load(t){const e=r(t)?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){var t;null==(t=this._connection)||t.close(),this._connection=null;}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t,e={}){await this.load(e);const o=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return g.fromJSON(o)}async queryFeaturesJSON(t,e={}){return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t,e={}){return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t,e={}){return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t,e={}){await this.load(e);const o=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return {count:o.count,extent:M.fromJSON(o.extent)}}async querySnapping(t,e={}){return await this.load(e),this._connection.invoke("querySnapping",t,e)}async _startWorker(t){this._connection=await u$1("CSVSourceWorker",{strategy:i("feature-layers-workers")?"dedicated":"local",signal:t});const{url:o,delimiter:r,fields:s,latitudeField:n,longitudeField:a,spatialReference:c,timeInfo:l}=this.loadOptions,u=await this._connection.invoke("load",{url:o,customParameters:this.customParameters,parsingOptions:{delimiter:r,fields:null==s?void 0:s.map((t=>t.toJSON())),latitudeField:n,longitudeField:a,spatialReference:null==c?void 0:c.toJSON(),timeInfo:null==l?void 0:l.toJSON()}},{signal:t});this.locationInfo=u.locationInfo,this.sourceJSON=u.layerDefinition,this.delimiter=u.delimiter;}};e([d()],u.prototype,"type",void 0),e([d()],u.prototype,"loadOptions",void 0),e([d()],u.prototype,"customParameters",void 0),e([d()],u.prototype,"locationInfo",void 0),e([d()],u.prototype,"sourceJSON",void 0),e([d()],u.prototype,"delimiter",void 0),u=e([i$1("esri.layers.graphics.sources.CSVSource")],u);const p=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let y=class extends Ge{constructor(...e){super(...e),this.capabilities=a(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=k.WGS84,this.source=null,this.type="csv";}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,r){return null!=r.showLabels?r.showLabels:!!(r.layerDefinition&&r.layerDefinition.drawingInfo&&r.layerDefinition.drawingInfo.labelingInfo)}set url(e){if(!e)return void this._set("url",e);const r=O(e);this._set("url",r.path),r.query&&(this.customParameters={...this.customParameters,...r.query});}async createGraphicsSource(e){const r=new p({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url},customParameters:this.customParameters});return this._set("source",r),await r.load({signal:e}),this.read({locationInfo:r.locationInfo,columnDelimiter:r.delimiter},{origin:"service",url:this.parsedUrl}),r}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(b.from(e)||this.createQuery()))).then((e=>{if(null!=e&&e.features)for(const r of e.features)r.layer=r.sourceLayer=this;return e}))}queryObjectIds(e,r){return this.load().then((()=>this.source.queryObjectIds(b.from(e)||this.createQuery())))}queryFeatureCount(e,r){return this.load().then((()=>this.source.queryFeatureCount(b.from(e)||this.createQuery())))}queryExtent(e,r){return this.load().then((()=>this.source.queryExtent(b.from(e)||this.createQuery())))}write(e,r){return super.write(e,{...r,writeLayerSchema:!0})}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return r(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return !1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return !1}};e([d({readOnly:!0,json:{read:!1,write:!1}})],y.prototype,"capabilities",void 0),e([d({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],y.prototype,"delimiter",void 0),e([d({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],y.prototype,"editingEnabled",void 0),e([d({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],y.prototype,"fields",void 0),e([d({type:Boolean,readOnly:!0})],y.prototype,"isTable",null),e([o("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],y.prototype,"readWebMapLabelsVisible",null),e([d({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],y.prototype,"latitudeField",void 0),e([d({type:["show","hide"]})],y.prototype,"listMode",void 0),e([d({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],y.prototype,"locationType",void 0),e([d({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],y.prototype,"longitudeField",void 0),e([d({type:["CSV"]})],y.prototype,"operationalLayerType",void 0),e([d()],y.prototype,"outFields",void 0),e([d({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],y.prototype,"path",void 0),e([d({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],y.prototype,"portalItem",void 0),e([d({json:{read:!1},cast:null,type:p,readOnly:!0})],y.prototype,"source",void 0),e([d({json:{read:!1},value:"csv",readOnly:!0})],y.prototype,"type",void 0),e([d({json:{read:m$1,write:{isRequired:!0,ignoreOrigin:!0,writer:p$1}}})],y.prototype,"url",null),y=e([i$1("esri.layers.CSVLayer")],y);const h=y;

export default h;
