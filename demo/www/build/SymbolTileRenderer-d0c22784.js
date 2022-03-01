import { V as r$1, z as t, ac as i$2, g7 as f$1, dd as E, br as n$2, e8 as n$3, bk as D, b6 as n$4, b7 as i$4, e9 as o$4, cb as c$3, ez as z, a8 as g$1, d7 as u$1, e as e$2, i as i$5 } from './vec2f32-96e18450.js';
import { s } from './CircularArray-a338e677.js';
import { i as ie, E as E$1, I } from './Utils-b64a9f45.js';
import { i as i$3, f as f$3, o as o$5 } from './FeatureContainer-e33916bf.js';
import { o as o$3, f as f$2 } from './VertexArrayObject-8085edfb.js';
import './Texture-877bd154.js';
import { s as s$1 } from './schemaUtils-7162006c.js';
import { o as o$6 } from './BaseTileRenderer-18378f56.js';
import { m } from './visualVariablesUtils-1fbcdfbc.js';
import { j } from './WGLContainer-3803447f.js';
import './number-237bc27c.js';
import './mat3-4c6d002d.js';
import './esri-ds2022-map-viewer-eaf1b8e9.js';
import './index-5d892dab.js';
import './CollectionFlattener-52fb1d3d.js';
import './HandleOwner-e0d82d22.js';
import './Handles-b3021138.js';
import './reactiveUtils-5f9c851d.js';
import './watchUtils-be3a5f50.js';
import './TablesMixin-6baefa72.js';
import './MultiOriginJSONSupport-4c0182cb.js';
import './iteratorUtils-07a71e8c.js';
import './workers-2517158a.js';
import './widget-443283ac.js';
import './uuid-917a1a17.js';
import './UniqueValueRenderer-59efe757.js';
import './VisualVariablesMixin-f7c8cd7e.js';
import './colorRamps-44ecefda.js';
import './diffUtils-c0512c3e.js';
import './styleUtils-c0536af9.js';
import './executeQueryJSON-f8f32f18.js';
import './utils-502612a2.js';
import './scaleUtils-009949b4.js';
import './floorFilterUtils-a09da11b.js';
import './query-9613ab47.js';
import './normalizeUtils-11d276d0.js';
import './arcgisLayerUrl-e91052aa.js';
import './pbfQueryUtils-88213282.js';
import './pbf-b57823c1.js';
import './OptimizedFeature-e99a2ed3.js';
import './OptimizedFeatureSet-27736f1f.js';
import './queryZScale-a6b03c33.js';
import './zscale-075392a1.js';
import './Query-f41de01f.js';
import './TimeExtent-ef5feff1.js';
import './Field-9ae21d09.js';
import './fieldType-40139de8.js';
import './FeatureSet-d05d7baa.js';
import './TopFeaturesQuery-21746d72.js';
import './QueryTask-427a128b.js';
import './featureConversionUtils-7cc244e3.js';
import './Task-9d37536c.js';
import './languageUtils-f4f0b3a9.js';
import './_commonjsHelpers-321aa363.js';
import './number-7fa2c19d.js';
import './FeatureLayer-41ac22f1.js';
import './DictionaryRenderer-148f4879.js';
import './LRUCache-6d357264.js';
import './MemCache-e9a0d4f9.js';
import './jsonUtils-e58c15d9.js';
import './HeightModelInfo-533ad021.js';
import './APIKeyMixin-ee03b0ff.js';
import './ArcGISService-bc55d6c8.js';
import './BlendLayer-9582dc10.js';
import './mat4-59c51b41.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-5d83f8a3.js';
import './labelingInfo-653f3665.js';
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
import './popupUtils-0b9004db.js';
import './utils-c0e0f562.js';
import './ItemCache-9513db1b.js';
import './utils-86b5682d.js';
import './TileStore-29b58dac.js';
import './TileKey-a82c8402.js';
import './quickselect-ccfd8cff.js';
import './TileInfo-6783c707.js';
import './GraphicsCollection-0a597532.js';
import './Scheduler-00477592.js';
import './projection-f0a42b06.js';
import './unitBezier-0f2e6a45.js';
import './vec2f64-503345b4.js';
import './TileStrategy-7c347526.js';
import './screenshotUtils-ea21e5e9.js';
import './capabilities-3951b735.js';
import './definitions-08701efa.js';
import './TileContainer-e8755e5e.js';
import './Container-a9726ab4.js';
import './MaterialKey-55ff2aea.js';
import './visualVariablesUtils-7d768483.js';
import './CIMSymbolHelper-b37e3df1.js';
import './shapingUtils-c35082c1.js';
import './Rect-988189d5.js';
import './GeometryUtils-93aa6536.js';
import './cimSymbolUtils-209c74a3.js';
import './cimAnalyzer-a158dc88.js';
import './quantizationUtils-ccb5e711.js';
import './devEnvironmentUtils-c5b59f3c.js';
import './clusterUtils-ccc8af99.js';
import './MD5-6027098a.js';
import './util-1ff8f92b.js';
import './ShaderCompiler-0c24df35.js';
import './config-768959de.js';
import './GeometryUtils-09c2f88c.js';
import './pixelUtils-56825141.js';
import './earcut-05cd758b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e$1=6,r=4294967296;class o$2{constructor(t){this._head=t,this._cursor=t;}static from(t){const s=i$1.from(new Float32Array(t));return new o$2(s)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get materialKey(){return this._cursor.materialKey}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(t){return this._cursor.setComputedMinZoom(t)}boundsComputedAnchorX(t){return this._cursor.boundsComputedAnchorX(t)}boundsComputedAnchorY(t){return this._cursor.boundsComputedAnchorY(t)}setBoundsComputedAnchorX(t,s){return this._cursor.setBoundsComputedAnchorX(t,s)}setBoundsComputedAnchorY(t,s){return this._cursor.setBoundsComputedAnchorY(t,s)}boundsX(t){return this._cursor.boundsX(t)}boundsY(t){return this._cursor.boundsY(t)}boundsWidth(t){return this._cursor.boundsWidth(t)}boundsHeight(t){return this._cursor.boundsHeight(t)}link(s){if(r$1(s._head))return this._cursor.link(s._head)}getCursor(){return this.copy()}copy(){var t;const s=new o$2(null==(t=this._head)?void 0:t.copy());if(!s._head)return s;let e=s._head,r=s._head._link;for(;r;)e._link=r.copy(),e=r,r=e._link;return s}peekId(){var t;return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}nextId(){const t=this.id;for(;t===this.id;)if(!this.next())return !1;return !0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset;}restore(){this._cursor=this._savedCursor,this._cursor._offset=this._savedOffset;}next(){if(!this._cursor)return !1;if(!this._cursor.next()){if(!this._cursor._link)return !1;this._cursor=this._cursor._link,this._cursor._offset=0;}return !0}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return !1;this._cursor=this._cursor._link;}return !!this._cursor}delete(s){let e=this._head,r=null;for(;e;){if(e.delete(s))return e.isEmpty()&&r$1(r)&&(r._link=e._link),!0;r=e,e=e._link;}return !1}}class i$1{constructor(t){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=t;}static from(t){return new i$1(new Float32Array(t))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(t){this._buffer[this._offset+0]=t;}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get materialKey(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(t){this._buffer[this._offset+8]=t;}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(t){return this._buffer[this._offset+10+t*e$1+0]}boundsComputedAnchorY(t){return this._buffer[this._offset+10+t*e$1+1]}setBoundsComputedAnchorX(t,s){this._buffer[this._offset+10+t*e$1+0]=s;}setBoundsComputedAnchorY(t,s){this._buffer[this._offset+10+t*e$1+1]=s;}boundsX(t){return this._buffer[this._offset+10+t*e$1+2]}boundsY(t){return this._buffer[this._offset+10+t*e$1+3]}boundsWidth(t){return this._buffer[this._offset+10+t*e$1+4]}boundsHeight(t){return this._buffer[this._offset+10+t*e$1+5]}link(t){let s=this;for(;s._link;)s=s._link;s._link=t;}getCursor(){return this.copy()}copy(){const t=new i$1(this._buffer);return t._link=this._link,t._offset=this._offset,t._deletedCount=this._deletedCount,t._offsets=this._offsets,t._count=this._count,t}peekId(){const t=this._offset+10+this.boundsCount*e$1+0;return t>=this._buffer.length?0:this._buffer[t]}next(){let t=0;for(;this._offset<this._buffer.length&&t++<100&&(-1===this._offset?this._offset=0:this._offset+=10+this.boundsCount*e$1,this.id===r););return this.id!==r&&this._offset<this._buffer.length}delete(t){const s=this._offset,e=this.lookup(t);if(e)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===t;)this.id=4294967295,++this._deletedCount;return this._offset=s,e}lookup(t$1){const e=this._offset;if(t(this._offsets.instance)){this._offsets.instance=new Map;const t=this.copy();t._offset=-1;let s=0;for(;t.next();)t.id!==s&&(this._offsets.instance.set(t.id,t._offset),s=t.id);}return !!this._offsets.instance.has(t$1)&&(this._offset=this._offsets.instance.get(t$1),this.id!==r||(this._offset=e,!1))}_computeCount(){const t=this._offset;let s=0;for(this._offset=-1;this.next();)s++;return this._offset=t,s}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class a$3{constructor(t){if(!Array.isArray(t))return void(this.data=t);this.data=t[0];let e=this;for(let n=1;n<t.length;n++)e.next=new a$3([t[n]]),e=e.next;}*values(){let t=this;for(;t;)yield t.data,t=t.next;}forEach(t){let a=this;for(;a;)t(a.data),a=a.next;}find(t){var a;return t(this.data)?this:null==(a=this.next)?void 0:a.find(t)}max(t,a=this){const e=t(this.data)>t(a.data)?this:a;return this.next?this.next.max(t,e):e}remove(t,a=null){return this===t?a?(a.next=this.next,a):this.next:this.next.remove(t,this)}get last(){return this.next?this.next.last:this}}class e{constructor(e){this._head=null,t(e)||(this._head=new a$3(e));}get head(){return this._head}maxAvailableSpace(){if(t(this._head))return 0;const a=this._head.max((t=>t.end-t.start));return a.data.end-a.data.start}firstFit(a){if(t(this._head))return null;let e=null,n=this._head;for(;n;){const t=n.data.end-n.data.start;if(t===a)return e?e.next=n.next:this._head=n.next,n.data.start;if(t>a){const t=n.data.start;return n.data.start+=a,t}e=n,n=n.next;}return null}free(e,n){const r=e+n;if(t(this._head)){const t=new a$3({start:e,end:r});return void(this._head=t)}if(r<=this._head.data.start){if(r===this._head.data.start)return void(this._head.data.start-=n);const t=new a$3({start:e,end:r});return t.next=this._head,void(this._head=t)}let s=this._head,d=s.next;for(;d;){if(d.data.start>=r){if(s.data.end===e){if(s.data.end+=n,s.data.end===d.data.start){const t=d.data.end-d.data.start;return s.data.end+=t,void(s.next=d.next)}return}if(d.data.start===r)return void(d.data.start-=n);const t=new a$3({start:e,end:r});return t.next=s.next,void(s.next=t)}s=d,d=d.next;}if(e===s.data.end)return void(s.data.end+=n);const i=new a$3({start:e,end:r});s.next=i;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n$1{constructor(t,e,i,n,a){this.target=t,this.geometryType=e,this.materialKey=i,this.indexFrom=n,this.indexCount=a;}get indexEnd(){return this.indexFrom+this.indexCount}extend(t){this.indexCount+=t;}draw(t,e,i){this.target.draw(t,e,i,this.indexFrom,this.indexCount);}}class a$2{constructor(t,e){this.geometryType=0,this._target=t,this.geometryType=e;}static from(e,i,n,d){const s=new a$2(e,i);if(r$1(d))for(const t of d)n.seekIndex(t),s.addRecord(n);else for(;n.next();)s.addRecord(n);return s}addRecord(t$1){const a=this._target,d=this.geometryType,s=t$1.materialKey,r=t$1.indexFrom,o=t$1.indexCount;if(t(this._head)){const t=new n$1(a,d,s,r,o);return void(this._head=new a$3(t))}let h=null,x=this._head;for(;x;){if(r<x.data.indexFrom)return this._insert(s,r,o,h,x);h=x,x=x.next;}this._insert(s,r,o,h,null);}forEach(e){r$1(this._head)&&this._head.forEach(e);}*infos(){if(r$1(this._head))for(const t of this._head.values())yield t;}_insert(a,d,s,r,o){if(t(r)&&t(o)){const t=new n$1(this._target,this.geometryType,a,d,s);this._head=new a$3(t);}return t(r)&&r$1(o)?this._insertAtHead(a,d,s,o):r$1(r)&&t(o)?this._insertAtEnd(a,d,s,r):r$1(r)&&r$1(o)?this._insertAtMiddle(a,d,s,r,o):void 0}_insertAtHead(t,e,a,d){const s=e+a;if(t===d.data.materialKey&&s===d.data.indexFrom)d.data.indexFrom=e,d.data.indexCount+=a;else {const s=new n$1(this._target,this.geometryType,t,e,a);this._head=new a$3(s),this._head.next=d;}}_insertAtEnd(t,e,a,d){if(d.data.materialKey===t&&d.data.indexEnd===e)d.data.indexCount+=a;else {const s=new n$1(this._target,this.geometryType,t,e,a),r=new a$3(s);d.next=r;}}_insertAtMiddle(t,e,a,d,s){const r=e+a;if(d.data.materialKey===t&&d.data.indexEnd===e)d.data.indexCount+=a,d.data.materialKey===s.data.materialKey&&d.data.indexEnd===s.data.indexFrom&&(d.data.indexCount+=s.data.indexCount,d.next=s.next);else if(t===s.data.materialKey&&r===s.data.indexFrom)s.data.indexFrom=e,s.data.indexCount+=a;else {const r=new n$1(this._target,this.geometryType,t,e,a),o=new a$3(r);d.next=o,o.next=s;}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=i$2("esri-2d-log-allocations");class n{constructor(t){this._array=t;}get array(){return this._array}get length(){return this._array.length}static create(t){const e=_.acquire(t);return new n(e)}expand(t){const e=_.acquire(t);e.set(this._array),_.release(this._array),this._array=e;}destroy(){_.release(this._array);}set(t,e){this._array.set(t._array,e);}slice(){const t=_.acquire(this._array.byteLength);return t.set(this._array),new n(t)}}class o$1{constructor(){this._data=new ArrayBuffer(o$1.BYTE_LENGTH),this._freeList=new e({start:0,end:this._data.byteLength});}static get BYTE_LENGTH(){return 64e6}get buffer(){return this._data}allocate(t$1){const e=this._freeList.firstFit(t$1);return t(e)?null:new Uint32Array(this._data,e,t$1/Uint32Array.BYTES_PER_ELEMENT)}free(t){this._freeList.free(t.byteOffset,t.byteLength);}}class c$2{constructor(){this._bytesAllocated=0,this._pages=[],this._pagesByBuffer=new Map,this._addPage();}get _bytesTotal(){return this._pages.length*o$1.BYTE_LENGTH}acquire(t){if(this._bytesAllocated+=t,i&&console.log(`Allocating ${t}, (${this._bytesAllocated} / ${this._bytesTotal})`),t>o$1.BYTE_LENGTH)return new Uint32Array(t/Uint32Array.BYTES_PER_ELEMENT);for(const r of this._pages){const s=r.allocate(t);if(r$1(s))return s}return f$1(this._addPage().allocate(t),"Expected to allocate page")}release(t){this._bytesAllocated-=t.byteLength,i&&console.log(`Freeing ${t.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);const e=this._pagesByBuffer.get(t.buffer);e&&e.free(t);}_addPage(){const t=new o$1;return this._pages.push(t),this._pagesByBuffer.set(t.buffer,t),t}}const _=new c$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a$1=1.25,d=32767,u=d<<16|d;class c$1{constructor(t,i,r){const s=n.create(i*r*Uint32Array.BYTES_PER_ELEMENT);this.strideInt=r,this.bufferType=t,this.dirty={start:1/0,end:0},this.gpu=null,this._cpu=s,this.clear();}get elementSize(){return this._cpu.length/this.strideInt}destroy(){E(this.gpu,(t=>t.dispose())),E(this._cpu,(t=>t.destroy())),E(this._cpu2,(t=>t.destroy()));}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new e({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0;}ensure(t){if(this.maxAvailableSpace()>=t)return;if(t*this.strideInt>this._cpu.length-this.fillPointer){r$1(this.gpu)&&(this.gpu=null);const r=this._cpu.length/this.strideInt,s=Math.round((r+t)*a$1),e=s*this.strideInt;this._cpu.expand(e*Uint32Array.BYTES_PER_ELEMENT),this.freeList.free(r,s-r);}}set(t,i){this._cpu.array[t]!==i&&(this._cpu.array[t]=i,this.dirty.start=Math.min(t,this.dirty.start),this.dirty.end=Math.max(t,this.dirty.end));}getBuffer(){if(!this._cpu2){const t=this._cpu.slice();this._cpu2=t;}return this._cpu2.length!==this._cpu.length&&this._cpu2.expand(this._cpu.length*this._cpu.array.BYTES_PER_ELEMENT),this._cpu2.set(this._cpu),this._cpu2}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(t,i,s,e){const h=s*this.strideInt,n=i*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,a=new Uint32Array(t,n,h),d=f$1(this.freeList.firstFit(s),"First fit region must be defined")*this.strideInt,u=h,c=d/this.strideInt-i;if(0!==e)for(let r=0;r<a.length;r++)a[r]+=e;return this._cpu.array.set(a,d),this.dirty.start=Math.min(this.dirty.start,d),this.dirty.end=Math.max(this.dirty.end,d+u),this.fillPointer=Math.max(this.fillPointer,d+u),c}free(t,i,r){const s=t*this.strideInt,e=(t+i)*this.strideInt;if(!0===r)for(let h=t;h!==t+i;h++)this._cpu.array[h*this.strideInt]=u;this.dirty.start=Math.min(this.dirty.start,s),this.dirty.end=Math.max(this.dirty.end,e),this.freeList.free(t,i);}upload(t$1){if(this.dirty.end){if(t(this.gpu))return this.gpu=this._createBuffer(t$1),this.dirty.start=1/0,void(this.dirty.end=0);this.gpu.setSubDataFromView(this._cpu.array,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0;}}_createBuffer(t){const i=35048;return "index"===this.bufferType?o$3.createIndex(t,i,this._cpu.array):o$3.createVertex(t,i,this._cpu.array)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o{constructor(e,t){this._indicesInvalid=!1,this.geometryType=e;}destroy(){this._vao&&(this._vao.dispose(),this._vao=null),this._indexBuffer&&this._indexBuffer.destroy(),this._vertexBuffer&&this._vertexBuffer.destroy();}insert(t,r,n){if(!t.records.byteLength)return;const o=t.stride;if(this._vertexBuffer&&this._indexBuffer){const i=t.indices.byteLength/4,n=t.vertices.byteLength/o;this._indexBuffer.ensure(i),this._vertexBuffer.ensure(n);const{vertices:f,indices:d}=t,h=i$3.from(t.records),u=this._vertexBuffer.insert(f,0,f.byteLength/o,0),_=this._indexBuffer.insert(d,0,d.byteLength/4,u);if(h.forEach((e=>{e.indexFrom+=_,e.vertexFrom+=u;})),f$1(this._records,"Expected records to be defined").link(h),r)this._indicesInvalid=!0;else if(this._displayList){const e=h.getCursor();for(;e.next();)this._displayList.addRecord(e);}}else {const e=t.indices.byteLength/4,n=t.vertices.byteLength/o,f=o/Uint32Array.BYTES_PER_ELEMENT;this._records=i$3.from(t.records),this._indexBuffer=new c$1("index",e,1),this._vertexBuffer=new c$1("vertex",n,f),this._indexBuffer.insert(t.indices,0,t.indices.byteLength/4,0),this._vertexBuffer.insert(t.vertices,0,t.vertices.byteLength/o,0),r&&(this._indicesInvalid=!0);}}remove(e){if(!t(this._records))for(const t of e){const e=this._records.getCursor();if(!e.lookup(t))continue;const r=e.indexFrom,i=e.vertexFrom;let s=e.indexCount,n=e.vertexCount;for(;e.next()&&e.id===t;)s+=e.indexCount,n+=e.vertexCount;this._indexBuffer.free(r,s),this._vertexBuffer.free(i,n,!0),this._records.delete(t);}}draw(e,r,i,s,o){if(!this._vertexBuffer||!this._indexBuffer||t(this._records))return;if((t(this._vertexBuffer.gpu)||t(this._indexBuffer.gpu))&&(this._vao&&(this._vao.dispose(),this._vao=null),this._vertexBuffer.gpu=null,this._indexBuffer.gpu=null),this._vertexBuffer.upload(e),this._indexBuffer.upload(e),!this._vao){const t=this._vertexBuffer.gpu,s=this._indexBuffer.gpu;if(!s||!t)return;this._vao=new f$2(e,i,r,{geometry:t},s);}const f=this._vao,d=s*Uint32Array.BYTES_PER_ELEMENT;e.bindVAO(f),e.drawElements(4,o,5125,d);}forEachCommand(e){if(!t(this._records)){if(this._sortIndices(this._records),!this._displayList){const e=this._cursorIndexOrder;this._displayList=a$2.from(this,this.geometryType,this._records.getCursor(),e);}this._displayList.forEach(e);}}_sortIndices(e){if(!this._indicesInvalid)return;this._indicesInvalid=!1;let t=0;const r=e.getCursor(),i=this._indexBuffer.getBuffer(),s=[],n=[],o=[];for(;r.next();)n.push(r.index),o.push(r.sortKey),s.push(r.id);n.sort(((e,t)=>{const r=o[t],i=o[e];return i===r?s[t]-s[e]:r-i}));const f=e.getCursor();for(const d of n){if(!f.seekIndex(d))throw new Error("Expected to find index");const{indexFrom:e,indexCount:r}=f;f.indexFrom=t;for(let s=0;s<r;s++)this._indexBuffer.set(t++,i.array[e+s]);}this._cursorIndexOrder=n,this._displayList=null;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l$1=50,f=4,S=8,y=100;let w=0;class g extends f$3{constructor(t,r,s$1,i,a){super(t,r,s$1),this.instanceId=w++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new s(y),this._bufferPatches=new s(y),this._lastCommitTime=0,this._lastMessageWasClear=!1,this.transforms.labelMat2d=n$2(),this._store=i,this._requestLabelUpdate=a;}destroy(){super.destroy(),this._renderState.current.geometry.forEach((e=>e.destroy()));}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return !!this._renderState.current.geometry.size}getGeometry(e){return this._renderState.current.geometry.get(e)}setTransform(e,t){super.setTransform(e,t);const r=this.transforms.labelMat2d,s=e.getScreenTransform(r,t),h=n$3();D(h,[this.x,this.y],s),n$4(r),i$4(r,r,h),o$4(r,e.viewMat2d,r);}patch(e,t){if(this.patchCount++,e.clear&&this._lastMessageWasClear)return;this._lastMessageWasClear=e.clear,e.clear&&this._patches.size>=l$1&&this._dropPatches();const r=e,s=r.addOrUpdate&&this.key.id!==r.addOrUpdate.tileKeyOrigin;t&&s?this._bufferPatches.enqueue(r):(r.sort=r.sort&&!t,this._patches.enqueue(r)),this.requestRender();}commit(e){if(this._lastCommitTime!==e.time){this._lastCommitTime=e.time;for(let e=0;e<f;e++)this._updateMesh(),this.isReady&&this._updateBufferMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender());}}lock(){this._renderState.locked=!0;}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap();}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();if(this._renderState.swap=!0,0===this._renderState.swapFrames)return this._renderState.swapFrames=S,void this.requestRender();1==this._renderState.swapFrames--?this._swap():this.requestRender();}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,r$1(this._renderState.next)&&(this._renderState.current.geometry.forEach((e=>e.destroy())),this._renderState.current=this._renderState.next,this._renderState.next=null,this._requestLabelUpdate()));}_flushUpdates(){let e=this._patches.maxSize;for(;this._patches.size&&e--;)this._updateMesh(),this._swap();}_updateBufferMesh(){const e=this._bufferPatches.peek();if(!r$1(e)||!e.clear||null===this._renderState.next)for(;this._bufferPatches.size;){const e=this._bufferPatches.dequeue();r$1(e)&&this._patchBuffer(e);}}_updateMesh(){const e=this._patches.peek();if(r$1(e)&&e.clear&&null!==this._renderState.next)return;const r=this._patches.dequeue();if(r$1(r)){if(!0===r.clear){if(!this.isReady)return;return this._renderState.next,void(this._renderState.next={geometry:new Map,metrics:null})}this.requestRender(),this._patch(r),r.end&&(this.ready(),this._swapRenderStates());}}_patch(e){ie((t=>{this._remove(t,e.remove),this._insert(t,e,!1);}));}_patchBuffer(e){ie((t=>{this._insert(t,e,!0);}));}_insert(e,t$1,i){try{var a;const n=c$3(this._renderState.next,this._renderState.current),h=null==(a=t$1.addOrUpdate)?void 0:a.data[e],c=n.geometry;if(t(h))return;c.has(e)||c.set(e,new o(e,this.stage)),c.get(e).insert(h,t$1.sort,i),e===E$1.LABEL&&this._insertLabelMetrics(t$1.type,h.metrics,t$1.clear);}catch(n){}}_insertLabelMetrics(e,t$1,i){const a=c$3(this._renderState.next,this._renderState.current);if(t(t$1))return;const n=o$2.from(t$1);if(t(a.metrics))a.metrics=n;else {if("update"===e){const e=n.getCursor();for(;e.next();)a.metrics.delete(e.id);}a.metrics.link(n);}}_remove(e,t){const s=c$3(this._renderState.next,this._renderState.current).geometry.get(e);t&&t.length&&s&&(s.remove(t),this._removeLabelMetrics(t));}_removeLabelMetrics(e){const{metrics:t$1}=c$3(this._renderState.next,this._renderState.current);if(!t(t$1)&&e.length)for(const r of e)for(;t$1.delete(r););}_dropPatches(){const e=new Array;let t$1=!1;for(;this._patches.size;){const r=this._patches.dequeue();if(t(r))break;if(r.clear){if(t$1)break;t$1=!0;}e.push(r);}this._patches.clear(),e.forEach((e=>this._patches.enqueue(e)));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a=i$2("featurelayer-order-by-server-enabled");class l extends o$5{constructor(e,t,s,i){super(e),this._pointToCallbacks=new Map,this._layer=s,this._layerView=t,this._onUpdate=i;}renderChildren(e){if(this.attributeView.update(),this.hasAnimation){e.painter.effects.integrate.draw(e,e.attributeView);}super.renderChildren(e);}hasEmptyAttributeView(){return this.attributeView.isEmpty()}isUpdating(){return this.attributeView.isUpdating()}hitTest(e){const s=z();return this._pointToCallbacks.set(e,s),this.requestRender(),s.promise}onTileData(e,t){const s=a&&"orderBy"in this._layer&&this._layer.orderBy,i=(null==s?void 0:s.length)&&!s[0].valueExpression&&s[0].field,r=s&&this._layerView.orderByFields===i;e.patch(t,r),this.contains(e)||this.addChild(e),this.requestRender();}onTileError(e){this.contains(e)||this.addChild(e);}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._layerView.featureEffectView.transitionStep(e,t),this._layerView.featureEffectView.transitioning&&this.requestRender();}doRender(e){const{minScale:t,maxScale:s}=this._layer,i=e.state.scale;i<=(t||1/0)&&i>=s&&super.doRender(e);}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate();}get hasAnimation(){return this.hasLabels}get hasLabels(){if("sublayers"in this._layer)return this._layer.sublayers.some((e=>e.labelingInfo&&e.labelingInfo.length&&e.labelsVisible));const e=this._layer.featureReduction,t=e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!t}prepareRenderPasses(e){const t=e.registerRenderPass({name:"label",brushes:[j.label],target:()=>this.hasLabels?this.children:null,drawPhase:I.LABEL|I.LABEL_ALPHA}),i=e.registerRenderPass({name:"geometry",brushes:[j.fill,j.line,j.marker,j.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:e.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:e.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.includedEffects},{apply:e.effects.hittest,enable:()=>!!this._pointToCallbacks.size,args:()=>this._pointToCallbacks}]}),a=e.registerRenderPass({name:"highlight",brushes:[j.fill,j.line,j.marker,j.text],target:()=>this.children,drawPhase:I.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:e.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return [...super.prepareRenderPasses(e),i,a,t]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let p=class extends o$6{install(e){const t=()=>this.notifyChange("updating"),i=new l(this.tileInfoView,this.layerView,this.layer,t);this.featuresView=i,e.addChild(i);}uninstall(e){e.removeChild(this.featuresView),this.featuresView.destroy();}fetchResource(e,t){const{url:s}=e,r=this.featuresView.stage;try{return r.resourceManager.fetchResource(s,{signal:t.signal})}catch(a){return g$1(a)?Promise.resolve({width:0,height:0}):Promise.reject(a)}}isUpdating(){var e;const i=super.isUpdating(),s=!this.featuresView||this.featuresView.isUpdating(),r=null==(e=this.featuresView)?void 0:e.hasEmptyAttributeView(),a=i||s||i&&r;return i$2("esri-2d-log-updating")&&console.log(`Updating SymbolTileRenderer ${a}\n  -> updatingTiles ${i}\n  -> hasFeaturesView ${!!this.featuresView}\n  -> updatingFeaturesView ${s}`),a}hitTest(e){return this.featuresView.hitTest(e)}supportsRenderer(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)}onConfigUpdate(e){let t=null;if("visualVariables"in e){const i=(s$1(e).visualVariables||[]).map((e=>{const t=e.clone();return "normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=m(i);}this.featuresView.setRendererInfo(e,t,this.layerView.featureEffect);}onTileData(e){const t=this.tiles.get(e.tileKey);t&&e.data&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate();}onTileError(e){const t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t);}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload();}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((e=>e.lock()));}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((e=>e.unlock()));}async getMaterialItems(e){return this.featuresView.getMaterialItems(e)}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate();}createTile(e){const t=this.tileInfoView.getTileBounds(u$1(),e),i=()=>this.layerView.view.labelManager.requestUpdate();return new g(e,t[0],t[3],this.featuresView.attributeView,i)}disposeTile(e){this.featuresView.removeChild(e),e.destroy(),this.layerView.view.labelManager.requestUpdate();}};p=e$2([i$5("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],p);const c=p;

export default c;
