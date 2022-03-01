import { a8 as g, V as r, dd as E, s, ac as i, h, aS as k, z as t$1, a3 as s$1, ab as e, g7 as f, e as e$1, i as i$1 } from './vec2f32-96e18450.js';
import { a as n } from './shapingUtils-c35082c1.js';
import { m, a } from './diffUtils-c0512c3e.js';
import { p as p$1 } from './visualVariablesUtils-1fbcdfbc.js';
import { j as j$1, o, l, E as E$1, t as t$2 } from './Matcher-09b1e165.js';
import { p } from './BaseProcessor-4888231a.js';
import './Rect-988189d5.js';
import './number-237bc27c.js';
import './Utils-b64a9f45.js';
import './Texture-877bd154.js';
import './definitions-08701efa.js';
import './visualVariablesUtils-7d768483.js';
import './TileStrategy-7c347526.js';
import './TileStore-29b58dac.js';
import './TileKey-a82c8402.js';
import './quickselect-ccfd8cff.js';
import './Query-f41de01f.js';
import './TimeExtent-ef5feff1.js';
import './Field-9ae21d09.js';
import './fieldType-40139de8.js';
import './tileUtils-bbffde86.js';
import './TileClipper-a164cc08.js';
import './GeometryUtils-09c2f88c.js';
import './MaterialKey-55ff2aea.js';
import './featureConversionUtils-7cc244e3.js';
import './OptimizedFeature-e99a2ed3.js';
import './OptimizedFeatureSet-27736f1f.js';
import './CIMSymbolHelper-b37e3df1.js';
import './utils-86b5682d.js';
import './GeometryUtils-93aa6536.js';
import './cimAnalyzer-a158dc88.js';
import './quantizationUtils-ccb5e711.js';
import './earcut-05cd758b.js';
import './cimSymbolUtils-209c74a3.js';
import './devEnvironmentUtils-c5b59f3c.js';
import './styleUtils-c0536af9.js';
import './LRUCache-6d357264.js';
import './MemCache-e9a0d4f9.js';
import './HandleOwner-e0d82d22.js';
import './Handles-b3021138.js';
import './reactiveUtils-5f9c851d.js';
import './watchUtils-be3a5f50.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class t{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map;}destroy(){}async fetchResource(t,r){const s=this._resourceMap,i=s.get(t);if(i)return i;let n=this._inFlightResourceMap.get(t);if(n)return n;try{n=this._remoteClient.invoke("tileRenderer.fetchResource",{url:t},{...r}),this._inFlightResourceMap.set(t,n),n.then((e=>(this._inFlightResourceMap.delete(t),s.set(t,e),e)));}catch(o){return g(o)?null:{width:0,height:0}}return n}getResource(e){var t;return null!=(t=this._resourceMap.get(e))?t:null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function M(e,t){return (!e.minScale||e.minScale>=t)&&(!e.maxScale||e.maxScale<=t)}function j(e){const t=e.message,s={message:{data:{},tileKey:t.tileKey,tileKeyOrigin:t.tileKeyOrigin},transferList:new Array};for(const r$1 in t.data){const e=t.data[r$1];if(s.message.data[r$1]=null,r(e)){const t=e.stride,a=e.indices.slice(0),o=e.vertices.slice(0),n=e.records.slice(0),l={stride:t,indices:a,vertices:o,records:n,metrics:E(e.metrics,(e=>e.slice(0)))};s.transferList.push(a,o,n),s.message.data[r$1]=l;}}return s}s.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");let x=class extends p{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map;}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new t(this.remoteClient);}destroy(){this._resourceManagerProxy.destroy();}get supportsTileUpdates(){return !0}forEachBufferId(e){this._bufferIds.forEach((t=>{t.forEach(e);}));}async update(e,t){const r=t.schema.processors[0];if("symbol"!==r.type)return;const i$1=m(this._schema,r);a(i$1,"mesh")&&(i("esri-2d-update-debug")&&console.debug("Applying Update - Processor:",i$1),e.mesh=!0,e.why.mesh.push("Symbology changed"),this._schema=r,this._factory=this._createFactory(r),this._factory.update(r,this.tileStore.tileScheme.tileInfo));}onTileMessage(e,t,s,r){return h(r),this._onTileData(e,t,s,r)}onTileClear(e){const t={clear:!0};return this._bufferData.delete(e.key.id),this._bufferIds.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}onTileError(e,t,s){const r=s.signal,i={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",i,{signal:r})}onTileUpdate(e){for(const t of e.removed)this._bufferData.has(t.key.id)&&this._bufferData.delete(t.key.id),this._bufferIds.has(t.key.id)&&this._bufferIds.delete(t.key.id);for(const t of e.added)this._bufferData.forEach((e=>{for(const s of e)s.message.tileKey===t.id&&this._updateTileMesh("append",t,j(s),[],!1,!1,null);}));}_addBufferData(e,t){this._bufferData.has(e)||this._bufferData.set(e,[]),this._bufferData.get(e).push(j(t));}_createFactory(e){const{geometryType:t,objectIdField:s,fields:r}=this.service,a=(e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t),o$1={geometryType:t,fields:r,spatialReference:k.fromJSON(this.spatialReference)},n=new j$1(a,this.tileStore.tileScheme.tileInfo),{matcher:l$1,aggregateMatcher:c}=e.mesh;return this._store=n,this._matchers.feature=o(l$1,n,o$1,this._resourceManagerProxy),this._matchers.aggregate=E(c,(e=>o(e,n,o$1,this._resourceManagerProxy))),new l(t,s,n)}async _onTileData(e,t,s,r$1){h(r$1);const{type:i,addOrUpdate:n,remove:l}=t,f=t.end,h$1=!!this._schema.mesh.sortKey;if(!n){const t={type:i,addOrUpdate:null,remove:l,clear:!1,end:f,sort:h$1};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r$1)}const u=this._processFeatures(e,n,s,r$1);try{const s=await u;if(t$1(s)){const t={type:i,addOrUpdate:null,remove:l,clear:!1,end:f,sort:h$1};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r$1)}const n=[];for(const t of s){let s=!1;const r$1=t.message.bufferIds,i=e.key.id,a=t.message.tileKey;if(i!==a&&r(r$1)){if(!this.tileStore.get(a)){this._addBufferData(i,t),n.push(t);continue}let e=this._bufferIds.get(a);e||(e=new Set,this._bufferIds.set(a,e));const o=Array.from(r$1);for(const t of o){if(e.has(t)){s=!0;break}e.add(t);}}s||(this._addBufferData(i,t),n.push(t));}await s$1(n.map((s=>{const a=e.key.id===s.message.tileKey,o=a?t.remove:[],n=a&&t.end;return this._updateTileMesh(i,e,s,o,n,t.clear,r$1.signal)})));}catch(m){this._handleError(e,m,r$1);}}async _updateTileMesh(e$1,t,s,r,a,o,n){const d=e$1,f=s.message.tileKey,h$1=!!this._schema.mesh.sortKey;f!==t.key.id&&(a=!1);const u=E(s,(e=>e.message)),m=E(s,(e=>e.transferList))||[],p={type:d,addOrUpdate:u,remove:r,clear:!1,end:a,sort:h$1},g={transferList:e(m)||[],signal:n};return h(g),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:f,data:p},g)}async _processFeatures(e,t,s,r){if(t$1(t)||!t.hasFeatures)return null;const i={transform:e.transform,hasZ:!1,hasM:!1},o=this._factory,n={viewingMode:"",scale:e.scale},l=await this._matchers.feature,d=await this._matchers.aggregate;h(r);const f=this._getLabelInfos(e,t);return await o.analyze(t.getCursor(),this._resourceManagerProxy,l,d,i,n),h(r),this._writeFeatureSet(e,t,i,f,o,s)}_writeFeatureSet(e,t,s,r$1,i,a){const n=t.getSize(),l=new E$1(e.key.id,{features:n,records:n,metrics:0},this._schema.mesh.matcher.stride,a,!0),c={viewingMode:"",scale:e.scale},d=t.getCursor();for(;d.next();)try{const t=d.getDisplayId(),a=r(r$1)?r$1.get(t):null;i.writeCursor(l,d,s,c,e.level,a);}catch(h){}const f=e.tileInfoView.tileInfo.isWrappable;return l.serialize(f)}_handleError(e,t,s){if(!g(t)){const r={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",r,{signal:s.signal})}}_getLabelingSchemaForScale(e){const t=this._schema.mesh.labels;if(t$1(t))return null;if("subtype"===t.type){const s={type:"subtype",classes:{}};let r=!1;for(const i in t.classes){const a=t.classes[i].filter((t=>M(t,e.scale)));r=r||!!a.length,s.classes[i]=a;}return r?s:null}const s=t.classes.filter((t=>M(t,e.scale)));return s.length?{type:"simple",classes:s}:null}_getLabels(e,t){if("subtype"===t.type){var s;const r=this.service.subtypeField,i=f(r,"Expected to find subtype Field"),a=e.readAttribute(i);return null==a?[]:null!=(s=t.classes[a])?s:[]}return t.classes}_getLabelInfos(e,s){const r=this._getLabelingSchemaForScale(e);if(t$1(r))return null;const i=new Map,o=s.getCursor();for(;o.next();){const e=o.getDisplayId(),s=[],a=p$1(e),n$1=a&&1!==o.readAttribute("cluster_count")?"aggregate":"feature",l=this._getLabels(o,r);for(const r of l){if(r.target!==n$1)continue;const i=o.getStorage(),l=a&&"feature"===n$1?i.getComputedStringAtIndex(o.readAttribute("referenceId"),r.fieldIndex):i.getComputedStringAtIndex(e,r.fieldIndex);if(!l)continue;const c=n(l.toString()),d=c[0],f=c[1];this._store.getMosaicItem(r.symbol,t$2(d)).then((e=>{s[r.index]={glyphs:e.glyphMosaicItems,rtl:f,index:r.index};}));}i.set(e,s);}return i}};x=e$1([i$1("esri.views.2d.layers.features.processors.SymbolProcessor")],x);const T=x;

export default T;
