import { h, bA as E$1, fa as c, V as r, ab as e, c as s, aN as F, a8 as g$1, s as s$1 } from './vec2f32-96e18450.js';
import { e as et, n as nt } from './featureConversionUtils-7cc244e3.js';
import { m } from './FeatureStore-1618b779.js';
import { g, f } from './projectionSupport-04cd8b0d.js';
import { L as L$1 } from './QueryEngine-847fde84.js';
import { O, L } from './geojson-4fd1ce8f.js';
import { d } from './sourceUtils-099b947d.js';
import { K } from './wfsUtils-8dfff0ea.js';
import { d as d$1 } from './FieldsIndex-a573ae50.js';
import './OptimizedFeature-e99a2ed3.js';
import './OptimizedFeatureSet-27736f1f.js';
import './PooledRBush-5e21b9ff.js';
import './quickselect-ccfd8cff.js';
import './centroid-888033a9.js';
import './projection-f0a42b06.js';
import './mat4-59c51b41.js';
import './zscale-075392a1.js';
import './json-cfa039ad.js';
import './MemCache-e9a0d4f9.js';
import './normalizeUtils-11d276d0.js';
import './ItemCache-9513db1b.js';
import './WhereClause-4e603ae5.js';
import './_commonjsHelpers-020ca939.js';
import './QueryEngineCapabilities-d289cd19.js';
import './quantizationUtils-ccb5e711.js';
import './utils-23e64aa0.js';
import './generateRendererUtils-d088b457.js';
import './colorRamps-44ecefda.js';
import './spatialQuerySupport-f90befe3.js';
import './Scheduler-00477592.js';
import './Handles-b3021138.js';
import './reactiveUtils-5f9c851d.js';
import './watchUtils-be3a5f50.js';
import './iteratorUtils-07a71e8c.js';
import './xmlUtils-ed1df04b.js';
import './Field-9ae21d09.js';
import './fieldType-40139de8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class E{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await K(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await O(s),h(e);const i=L(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!E$1(this._queryEngine.spatialReference,c))for(const a of i)r(a.geometry)&&(a.geometry=et(g(nt(a.geometry,this._queryEngine.geometryType,!1,!1),c,this._queryEngine.spatialReference)));let n=1;for(const r of i){const e={};d(this._fieldsIndex,e,r.attributes,!0),r.attributes=e,null==r.attributes[t]&&(r.objectId=r.attributes[t]=n++);}return i};}destroy(){var e;null==(e=this._queryEngine)||e.destroy(),this._queryEngine=null;}async load(e$1,t){const{getFeatureUrl:r,getFeatureOutputFormat:i,spatialReference:n,fields:o,geometryType:u,featureType:p,objectIdField:h$1,customParameters:l}=e$1;this._featureType=p,this._customParameters=l,this._getFeatureUrl=r,this._getFeatureOutputFormat=i,this._fieldsIndex=new d$1(o),await this._checkProjection(n),h(t),this._queryEngine=new L$1({fields:o,geometryType:u,hasM:!1,hasZ:!1,objectIdField:h$1,spatialReference:n,timeInfo:null,featureStore:new m({geometryType:u,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(e(t.signal));return this._queryEngine.featureStore.addMany(c),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new s("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(r){var s$2;return this._customParameters=r,null==(s$2=this._snapshotTask)||s$2.abort(),this._snapshotTask=F(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e);}),(r=>{this._queryEngine.featureStore.clear(),g$1(r)||s$1.getLogger("esri.layers.WFSLayer").error(new s("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await f(c,t);}catch{throw new s("unsupported-projection","Projection not supported",{spatialReference:t})}}}

export default E;
