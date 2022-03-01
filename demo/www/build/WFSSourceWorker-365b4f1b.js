import { h, k as r, A as e, a as s, U as F, x as g$1, s as s$1 } from './intl-f9bcf179.js';
import { aF as E$1, cO as c } from './vec2f32-a88eee2e.js';
import { e as et, n as nt } from './featureConversionUtils-a3d8ec70.js';
import { m } from './FeatureStore-c15122be.js';
import { g, f } from './projectionSupport-0059ef91.js';
import { L as L$1 } from './QueryEngine-fedd8a85.js';
import { O, L } from './geojson-311473a2.js';
import { d } from './sourceUtils-68dbcb64.js';
import { K } from './wfsUtils-0a5bcacb.js';
import { d as d$1 } from './FieldsIndex-a1139706.js';
import './JSONSupport-add604e3.js';
import './OptimizedFeature-b2ac674d.js';
import './OptimizedFeatureSet-27736f1f.js';
import './PooledRBush-91a1e394.js';
import './quickselect-ccfd8cff.js';
import './centroid-b9a46ae8.js';
import './projection-60b2cc57.js';
import './mat4-ae511675.js';
import './zscale-41674b48.js';
import './json-cfa039ad.js';
import './MemCache-cd2cb7cb.js';
import './normalizeUtils-4a0b810f.js';
import './ItemCache-f1121cd2.js';
import './WhereClause-f2a82fd7.js';
import './_commonjsHelpers-020ca939.js';
import './QueryEngineCapabilities-d289cd19.js';
import './quantizationUtils-9e335e8b.js';
import './utils-ea8826dc.js';
import './generateRendererUtils-5b089b48.js';
import './colorRamps-76de530b.js';
import './spatialQuerySupport-b69cea02.js';
import './Scheduler-69870efa.js';
import './Handles-c08f164d.js';
import './reactiveUtils-7b2ef76d.js';
import './watchUtils-47c42485.js';
import './iteratorUtils-07a71e8c.js';
import './xmlUtils-ed1df04b.js';
import './Field-c0076075.js';
import './fieldType-064db2a2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class E{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await K(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await O(s),h(e);const i=L(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!E$1(this._queryEngine.spatialReference,c))for(const a of i)r(a.geometry)&&(a.geometry=et(g(nt(a.geometry,this._queryEngine.geometryType,!1,!1),c,this._queryEngine.spatialReference)));let n=1;for(const r of i){const e={};d(this._fieldsIndex,e,r.attributes,!0),r.attributes=e,null==r.attributes[t]&&(r.objectId=r.attributes[t]=n++);}return i};}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null;}async load(e$1,t){const{getFeatureUrl:r,getFeatureOutputFormat:i,spatialReference:n,fields:o,geometryType:u,featureType:p,objectIdField:h$1,customParameters:l}=e$1;this._featureType=p,this._customParameters=l,this._getFeatureUrl=r,this._getFeatureOutputFormat=i,this._fieldsIndex=new d$1(o),await this._checkProjection(n),h(t),this._queryEngine=new L$1({fields:o,geometryType:u,hasM:!1,hasZ:!1,objectIdField:h$1,spatialReference:n,timeInfo:null,featureStore:new m({geometryType:u,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(e(t.signal));return this._queryEngine.featureStore.addMany(c),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new s("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(r){var s$2;return this._customParameters=r,null==(s$2=this._snapshotTask)||s$2.abort(),this._snapshotTask=F(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e);}),(r=>{this._queryEngine.featureStore.clear(),g$1(r)||s$1.getLogger("esri.layers.WFSLayer").error(new s("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await f(c,t);}catch{throw new s("unsupported-projection","Projection not supported",{spatialReference:t})}}}

export default E;
