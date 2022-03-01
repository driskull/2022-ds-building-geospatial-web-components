import { m, cQ as q, V as r, aR as M, ac as i, e, f as d, i as i$1, aS as k, bI as O, ax as o, gB as m$1, cT as p$1 } from './vec2f32-96e18450.js';
import { G as Ge } from './FeatureLayer-41ac22f1.js';
import { u as u$1 } from './workers-2517158a.js';
import g from './FeatureSet-d05d7baa.js';
import { a } from './clientSideDefaults-789223b9.js';
import { b } from './Query-f41de01f.js';
import './UniqueValueRenderer-59efe757.js';
import './VisualVariablesMixin-f7c8cd7e.js';
import './colorRamps-44ecefda.js';
import './diffUtils-c0512c3e.js';
import './styleUtils-c0536af9.js';
import './DictionaryRenderer-148f4879.js';
import './LRUCache-6d357264.js';
import './MemCache-e9a0d4f9.js';
import './jsonUtils-e58c15d9.js';
import './Handles-b3021138.js';
import './MultiOriginJSONSupport-4c0182cb.js';
import './Field-9ae21d09.js';
import './fieldType-40139de8.js';
import './HeightModelInfo-533ad021.js';
import './HandleOwner-e0d82d22.js';
import './reactiveUtils-5f9c851d.js';
import './watchUtils-be3a5f50.js';
import './queryZScale-a6b03c33.js';
import './zscale-075392a1.js';
import './APIKeyMixin-ee03b0ff.js';
import './ArcGISService-bc55d6c8.js';
import './arcgisLayerUrl-e91052aa.js';
import './BlendLayer-9582dc10.js';
import './mat4-59c51b41.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-5d83f8a3.js';
import './labelingInfo-653f3665.js';
import './TimeExtent-ef5feff1.js';
import './FeatureReductionCluster-303b0389.js';
import './commonProperties-73952058.js';
import './OperationalLayer-f90d3a65.js';
import './OrderedLayer-84b64b6e.js';
import './PortalLayer-f5d3d653.js';
import './RefreshableLayer-7eca1761.js';
import './ScaleRangeLayer-cc4d317e.js';
import './TemporalLayer-8778bd70.js';
import './TimeInfo-753c74d8.js';
import './FeatureType-3ed2e985.js';
import './fieldProperties-7830ae70.js';
import './FieldsIndex-a573ae50.js';
import './LayerFloorInfo-742e79c9.js';
import './styleUtils-ccdaf8b0.js';
import './TopFeaturesQuery-21746d72.js';
import './popupUtils-0b9004db.js';
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
