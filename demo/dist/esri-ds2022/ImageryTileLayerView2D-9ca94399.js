import { d7 as u, s, cQ as q, aR as M, V as r$3, z as t, ab as e, aj as j$1, a8 as g$1, E, e as e$1, f as d$1, i as i$2, c as s$4, W as h$1 } from './vec2f32-96e18450.js';
import { f as f$1, i as i$5 } from './watchUtils-be3a5f50.js';
import { p as p$1 } from './AnimatedFlowView2D-b567379d.js';
import { l as l$1, u as u$3 } from './LayerView-13e16160.js';
import { n as n$3, p as pt } from './esri-ds2022-map-viewer-eaf1b8e9.js';
import { x, j, d as s$3 } from './WGLContainer-3803447f.js';
import { r as r$1, o as o$1 } from './TileContainer-e8755e5e.js';
import { I, n as ne } from './Utils-b64a9f45.js';
import { d } from './HandleOwner-e0d82d22.js';
import { u as u$2, l } from './pixelUtils-56825141.js';
import { j as j$2 } from './TileInfo-6783c707.js';
import { g, u as u$1, i as i$1, s as s$1 } from './RawBlockCache-e953a9d4.js';
import { F, w, j as j$3 } from './rasterProjectionHelper-8d383fae.js';
import { r as r$2, p } from './TileStrategy-7c347526.js';
import { h } from './TileStore-29b58dac.js';
import './TileKey-a82c8402.js';
import { o as o$2 } from './capabilities-3951b735.js';
import { r as r$4 } from './util-1ff8f92b.js';
import { U, _, S } from './dataUtils-51c1e970.js';
import { s as s$2, i as i$3 } from './mat3-4c6d002d.js';
import { o as o$3, f } from './VertexArrayObject-8085edfb.js';
import './Texture-877bd154.js';
import { a as a$2 } from './Container-a9726ab4.js';
import { g as g$2 } from './commonProperties-73952058.js';
import { d as d$2 } from './popupUtils-a864ea9e.js';
import { i as i$4 } from './RefreshableLayerView-dd3fccc1.js';
import './index-5d892dab.js';
import './CollectionFlattener-52fb1d3d.js';
import './TablesMixin-6baefa72.js';
import './MultiOriginJSONSupport-4c0182cb.js';
import './iteratorUtils-07a71e8c.js';
import './workers-2517158a.js';
import './Handles-b3021138.js';
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
import './reactiveUtils-5f9c851d.js';
import './GraphicsCollection-0a597532.js';
import './Scheduler-00477592.js';
import './projection-f0a42b06.js';
import './unitBezier-0f2e6a45.js';
import './vec2f64-503345b4.js';
import './screenshotUtils-ea21e5e9.js';
import './definitions-08701efa.js';
import './ShaderCompiler-0c24df35.js';
import './number-237bc27c.js';
import './config-768959de.js';
import './GeometryUtils-09c2f88c.js';
import './MaterialKey-55ff2aea.js';
import './earcut-05cd758b.js';
import './quickselect-ccfd8cff.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i extends r$1{constructor(t,e,i,r,a,n=null){super(t,e,i,r,a),this.bitmap=new x(n,null,null),this.bitmap.coordScale=[r,a],this.bitmap.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.bitmap.destroy(),this.bitmap=null,this.stage=null;}set stencilRef(t){this.bitmap.stencilRef=t;}get stencilRef(){return this.bitmap.stencilRef}setTransform(t,s){super.setTransform(t,s),this.bitmap.transforms.dvs=this.transforms.dvs;}_createTransforms(){return {dvs:n$3(),tileMat3:n$3()}}onAttach(){this.bitmap.stage=this.stage;}onDetach(){this.bitmap.stage=null;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class n$2 extends o$1{constructor(){super(...arguments),this.isCustomTilingScheme=!1;}createTile(e){const s=this._getTileBounds(e),[r,t]=this._tileInfoView.tileInfo.size;return new i(e,s[0],s[3],r,t)}destroyTile(){}prepareRenderPasses(e){const s=e.registerRenderPass({name:"imagery (tile)",brushes:[j.raster],target:()=>this.children.map((e=>e.bitmap)),drawPhase:I.MAP});return [...super.prepareRenderPasses(e),s]}doRender(e){this.visible&&e.drawPhase===I.MAP&&super.doRender(e);}_getTileBounds(r){const i=this._tileInfoView.getTileBounds(u(),r);if(this.isCustomTilingScheme&&r.world){const{tileInfo:e}=this._tileInfoView,t=pt(e.spatialReference);if(t){const{resolution:s}=e.lodAt(r.level),o=t/s%e.size[0],n=o?(e.size[0]-o)*s:0;i[0]-=n*r.world,i[2]-=n*r.world;}}return i}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const v$1=[0,0],R=s.getLogger("esri.views.2d.layers.ImageryTileLayerView2D");let T=class extends d{constructor(){super(...arguments),this._emptyTilePixelBlock=null,this._tileStrategy=null,this._tileInfoView=null,this._fetchQueue=null,this._blockCacheRegistryUrl=null,this._blockCacheRegistryId=null,this._srcResolutions=null,this.previousLOD=null,this._needBlockCacheUpdate=!1,this._globalSymbolizerParams=null,this._symbolizerParams=null,this._abortController=null,this._isCustomTilingScheme=!1,this._globalUpdateRequested=!1,this.container=null,this.layer=null,this.redrawOrRefetch=q(((e,t)=>!this.previousLOD||this.layerView.suspended?Promise.resolve():e?this.doRefresh():this._redrawImage(t)));}get useWebGLForProcessing(){var e;return null==(e=this._get("useWebGLForProcessing"))||e}set useWebGLForProcessing(e){this._set("useWebGLForProcessing",e);}get useProgressiveUpdate(){return null==this._get("useProgressiveUpdate")||this._get("useProgressiveUpdate")}set useProgressiveUpdate(e){if(this._tileStrategy&&this.useProgressiveUpdate!==e){this._tileStrategy.destroy(),this.container.removeAllChildren();const t=this._getCacheSize(e);this._tileStrategy=new r$2({cachePolicy:"purge",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:t,tileInfoView:this._tileInfoView}),this._set("useProgressiveUpdate",e),this.layerView.requestUpdate();}}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();const{extent:t,resolution:i,scale:s}=e.state,r=this._tileInfoView.getClosestInfoForScale(s);if(this.layer.raster){var l;if(!this.useProgressiveUpdate||this._needBlockCacheUpdate){const e=this._srcResolutions[r.level],s=t.toJSON?t:M.fromJSON(t);g(this._blockCacheRegistryUrl,this._blockCacheRegistryId,s,i,e,this.layer.raster.ioConfig.sampling);}this._needBlockCacheUpdate=!1,(null==(l=this.previousLOD)?void 0:l.level)!==r.level&&(this.previousLOD=r,null==this._symbolizerParams||this.layerView.hasTilingEffects||this._updateSymbolizerParams(),this._tileStrategy.updateCacheSize(0));}}moveEnd(){!this.layerView.hasTilingEffects&&this.useProgressiveUpdate||(this._abortController&&this._abortController.abort(),this._abortController=new AbortController,0===this._fetchQueue.length&&this._redrawImage(this._abortController.signal).then((()=>{this._globalUpdateRequested=!1,this.layerView.requestUpdate();})));const e=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy.updateCacheSize(e),this.layerView.requestUpdate();}get updating(){return this._fetchQueue.length>0||this._globalUpdateRequested||!(!this.updatingHandles||!this.updatingHandles.updating)}attach(){o$2().supportsTextureFloat||(this.useWebGLForProcessing=!1),this._initializeTileInfo(),this._tileInfoView=new h(this.layerView.tileInfo,this.layerView.fullExtent);const e=this._computeFetchConcurrency();this._fetchQueue=new p({tileInfoView:this._tileInfoView,concurrency:e,process:(e,t)=>this._fetchTile1(e,t)});const t=this._getCacheSize(this.useProgressiveUpdate);this._tileStrategy=new r$2({cachePolicy:"purge",acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:t,tileInfoView:this._tileInfoView}),this._updateBlockCacheRegistry();}acquireTile(e){const t=this.container.createTile(e);return this._enqueueTileFetch(t),this.layerView.requestUpdate(),this._needBlockCacheUpdate=!0,this._globalUpdateRequested=this.layerView.hasTilingEffects||!this.useProgressiveUpdate,t}releaseTile(e){this._fetchQueue.abort(e.key.id),this.container.removeChild(e),e.once("detach",(()=>{e.destroy(),this.layerView.requestUpdate();})),this.layerView.requestUpdate();}uninstall(){this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null,this.notifyChange("updating"),u$1(this._blockCacheRegistryUrl,this._blockCacheRegistryId);}createEmptyTilePixelBlock(e=null){const t=null==e||e.join(",")===this._tileInfoView.tileInfo.size.join(",");if(t&&r$3(this._emptyTilePixelBlock))return this._emptyTilePixelBlock;e=e||this._tileInfoView.tileInfo.size;const[i,r]=e,l=new u$2({width:i,height:r,pixels:[new Uint8Array(i*r)],mask:new Uint8Array(i*r),pixelType:"u8"});return t&&(this._emptyTilePixelBlock=l),l}_fetchTile1(e$1,t$1){const i=!t(t$1)&&t$1.signal,s=this.canUseWebGLForProcessing(),a={allowPartialFill:!0,datumTransformation:this.layerView.datumTransformation,interpolation:s?"nearest":this.layer.interpolation,registryId:this._blockCacheRegistryId,requestRawData:s,signal:e(i),srcResolution:this._srcResolutions[e$1.level],timeExtent:this.layerView.timeExtent,tileInfo:this.layerView.tileInfo};return this.fetchTile(e$1,a)}_getCacheSize(e){return e?40:0}_initializeTileInfo(){const e=this.layerView.view.spatialReference,t=new j$1({x:this.layerView.fullExtent.xmin,y:this.layerView.fullExtent.ymax,spatialReference:e}),{scales:i,srcResolutions:s,isCustomTilingScheme:r}=F(this.layer.rasterInfo,e),l=j$2.create({spatialReference:e,size:512,scales:i});(0===l.origin.x||l.origin.x>t.x)&&(l.origin=t),this._isCustomTilingScheme=r,this.layerView.set("tileInfo",l),this._srcResolutions=null!=s?s:[];}_computeFetchConcurrency(){const{blockBoundary:e}=this.layer.rasterInfo.storageInfo,t=e[e.length-1];return (t.maxCol-t.minCol+1)*(t.maxRow-t.minRow+1)>64?2:10}async _enqueueTileFetch(e,t){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);this.notifyChange("updating");const{bandIds:s}=this.layer;let r=!this.useProgressiveUpdate||this.layerView.hasTilingEffects&&!this._globalSymbolizerParams;if(this._globalUpdateRequested&&!this.layerView.moving&&0===this._fetchQueue.length){r=!1;try{await this._redrawImage(this._abortController&&this._abortController.signal);}catch(i){g$1(i)&&R.error(i);}this._globalUpdateRequested=!1;}!this.canUseWebGLForProcessing()&&"rasterVF"!==this.type||this.layerView.hasTilingEffects||null!=this._symbolizerParams||this._updateSymbolizerParams();const l=this._tileInfoView.getTileCoords(v$1,e.key),a=this._tileInfoView.getTileResolution(e.key);await this.updateTileSource(e,{source:t,symbolizerParams:this._symbolizerParams,globalSymbolizerParams:this._globalSymbolizerParams,suspended:r,bandIds:s,coords:l,resolution:a}),e.once("attach",(()=>this.layerView.requestUpdate())),this.container.addChild(e);}catch(i){g$1(i)||R.error(i);}this.layerView.requestUpdate();}}async _redrawImage(e){if(0===this.container.children.length)return;await this.updatingHandles.addPromise(this.layer.updateRenderer()),this.layerView.hasTilingEffects?await this._updateGlobalSymbolizerParams(e):(this._updateSymbolizerParams(),this._globalSymbolizerParams=null);const t=this.container.children.map((async e=>this.updateTileSymbolizerParameters(e,{local:this._symbolizerParams,global:this._globalSymbolizerParams})));await E(t),this.container.requestRender();}async _updateGlobalSymbolizerParams(e){const t={srcResolution:this._srcResolutions[this.previousLOD.level],registryId:this._blockCacheRegistryId,signal:e},i=await this.layer.fetchPixels(this.layerView.view.extent,this.layerView.view.width,this.layerView.view.height,t);if(!i||!i.pixelBlock)return;const s=this.layer.symbolizer.generateWebGLParameters({pixelBlock:l(i.pixelBlock,this.layer.bandIds),isGCS:this.layerView.view.spatialReference.isGeographic,resolution:{x:this.previousLOD.resolution,y:this.previousLOD.resolution},bandIds:this.layer.bandIds});!this.canUseWebGLForProcessing()&&s&&"stretch"===s.type&&this.layer.renderer&&"raster-stretch"===this.layer.renderer.type&&(s.factor=s.factor.map((e=>255*e)),s.outMin=Math.round(255*s.outMin),s.outMax=Math.round(255*s.outMax)),this._globalSymbolizerParams=s;}_updateSymbolizerParams(){this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null,isGCS:this.layerView.view.spatialReference.isGeographic,resolution:{x:this.previousLOD.resolution,y:this.previousLOD.resolution},bandIds:this.layer.bandIds});}_updateBlockCacheRegistry(e=!1){const{url:t,rasterInfo:i,raster:s}=this.layer,{multidimensionalDefinition:r}=this.layer.normalizeRasterFetchOptions({multidimensionalDefinition:this.layer.multidimensionalDefinition,timeExtent:this.layerView.timeExtent}),l=null!=i&&i.multidimensionalInfo?s.getSliceIndex(r):null,a=i$1(t,l);if(a!==this._blockCacheRegistryUrl){if(null!=this._blockCacheRegistryUrl&&u$1(this._blockCacheRegistryUrl,this._blockCacheRegistryId),this._blockCacheRegistryId=s$1(a,this.layer.raster.rasterInfo),e){const e=this._tileInfoView.getClosestInfoForScale(this.layerView.view.scale),t=this._srcResolutions[e.level];g(a,this._blockCacheRegistryId,this.layerView.view.extent,this.layerView.view.resolution,t,this.layer.raster.ioConfig.sampling);}this._blockCacheRegistryUrl=a;}}async doRefresh(){await this.updatingHandles.addPromise(this.layer.updateRenderer()),this.layerView.hasTilingEffects||this._updateSymbolizerParams(),this._updateBlockCacheRegistry(!0),this._fetchQueue.reset(),this.notifyChange("updating");const e=[];this._tileStrategy.tiles.forEach((t=>e.push(this._enqueueTileFetch(t)))),await E(e);}};e$1([d$1()],T.prototype,"_globalUpdateRequested",void 0),e$1([d$1()],T.prototype,"container",void 0),e$1([d$1()],T.prototype,"layer",void 0),e$1([d$1()],T.prototype,"layerView",void 0),e$1([d$1()],T.prototype,"type",void 0),e$1([d$1()],T.prototype,"useWebGLForProcessing",null),e$1([d$1()],T.prototype,"useProgressiveUpdate",null),e$1([d$1()],T.prototype,"updating",null),T=e$1([i$2("esri.views.2d.layers.imagery.BaseImageryTileSubView2D")],T);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n$1=class extends T{constructor(){super(...arguments),this.container=null,this.layer=null,this.type="raster";}canUseWebGLForProcessing(){return this.useWebGLForProcessing&&this.layer.symbolizer.canRenderInWebGL&&!("majority"===this.layer.interpolation&&r$4(this.layer))}fetchTile(e,r){return this.layer.fetchTile(e.level,e.row,e.col,r)}async updateTileSource(e,t){const{bandIds:s}=this.layer,i=this._getLayerInterpolation(),o=this.canUseWebGLForProcessing(),{source:l,symbolizerParams:n,globalSymbolizerParams:a,suspended:c,coords:p,resolution:u}=t,{bitmap:d}=e;if([d.x,d.y]=p,d.resolution=u,l&&r$3(l)&&r$3(l.pixelBlock)){const e={extent:l.extent,pixelBlock:l.pixelBlock};if(d.rawPixelData=e,o)d.source=l.pixelBlock,d.isRendereredSource=!1;else {const r=await this.layer.applyRenderer(e,"stretch"===(null==a?void 0:a.type)?a:null);d.source=r,d.isRendereredSource=!0;}d.symbolizerParameters=o?n:null,o?d.transformGrid||(d.transformGrid=l.transformGrid):d.transformGrid=null;}else {const e=this.createEmptyTilePixelBlock();d.source=e,d.symbolizerParameters=o?n:null,d.transformGrid=null;}d.bandIds=o?s:null,d.width=this._tileInfoView.tileInfo.size[0],d.height=this._tileInfoView.tileInfo.size[1],d.interpolation=i,d.suspended=c,d.invalidateTexture();}async updateTileSymbolizerParameters(e,t){const{local:s,global:i}=t,{bandIds:o}=this.layer,l=this._getLayerInterpolation(),n=this.canUseWebGLForProcessing(),{bitmap:a}=e,{rawPixelData:c}=a;!n&&r$3(c)?(a.source=await this.layer.applyRenderer(c,"stretch"===(null==i?void 0:i.type)?i:null),a.isRendereredSource=!0):(a.isRendereredSource&&r$3(c)&&(a.source=c.pixelBlock),a.isRendereredSource=!1),a.symbolizerParameters=n?i||s:null,a.bandIds=n?o:null,a.interpolation=l,a.suspended=!1;}install(e){this.container=new n$2(this._tileInfoView),this.container.isCustomTilingScheme=this._isCustomTilingScheme,e.addChild(this.container);}uninstall(){this.container.removeAllChildren(),this.container.remove(),super.uninstall();}_getLayerInterpolation(){const e=this.layer.renderer.type;if("raster-colormap"===e||"unique-value"===e||"class-breaks"===e)return "nearest";const{interpolation:r}=this.layer,{renderer:t}=this.layer;return "raster-stretch"===t.type&&null!=t.colorRamp?"bilinear"===r||"cubic"===r?"bilinear":"nearest":r}};e$1([d$1()],n$1.prototype,"container",void 0),e$1([d$1()],n$1.prototype,"layer",void 0),e$1([d$1()],n$1.prototype,"type",void 0),n$1=e$1([i$2("esri.views.2d.layers.imagery.ImageryTileView2D")],n$1);const a$1=n$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class c extends a$2{constructor(e=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.stencilRef=0,this.rawPixelData=null,this.width=null,this.source=e;}destroy(){var t,a;r$3(this.vaoData)&&(null==(t=this.vaoData.magdir)||t.vao.dispose(),null==(a=this.vaoData.scalar)||a.vao.dispose(),this.vaoData=null);}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(e){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(e)&&(this._symbolizerParameters=e,this.invalidateVAO());}get source(){return this._source}set source(e){this._source=e,this.invalidateVAO();}invalidateVAO(){var t,a;!this._vaoInvalidated&&r$3(this.vaoData)&&(null==(t=this.vaoData.magdir)||t.vao.dispose(),null==(a=this.vaoData.scalar)||a.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender());}updateVectorFieldVAO(t){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,r$3(this.source)&&!r$3(this.vaoData)){const{style:e}=this.symbolizerParameters;switch(e){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const e=U(this.source,this.symbolizerParameters),s=this._createVectorFieldVAO(t.context,e);this.vaoData={magdir:s};}break;case"simple_scalar":{const e=_(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(t.context,e);this.vaoData={scalar:a};}break;case"wind_speed":{const e=U(this.source,this.symbolizerParameters),r=this._createVectorFieldVAO(t.context,e),i=_(this.source,this.symbolizerParameters),o=this._createVectorFieldVAO(t.context,i);this.vaoData={magdir:r,scalar:o};}}}this.ready(),this.requestRender();}}_createTransforms(){return {dvs:n$3()}}onAttach(){this.invalidateVAO();}onDetach(){this.invalidateVAO();}_createVectorFieldVAO(e,t){const{vertexData:a,indexData:s}=t,o=o$3.createVertex(e,35044,new Float32Array(a)),c=o$3.createIndex(e,35044,new Uint32Array(s)),n=ne("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:5126,normalized:!1},{location:1,name:"a_offset",count:2,type:5126,normalized:!1},{location:2,name:"a_vv",count:2,type:5126,normalized:!1}]});return {vao:new f(e,n.attributes,n.bufferLayouts,{geometry:o},c),elementCount:s.length}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends r$1{constructor(t,s,e,i,r,o=null){super(t,s,e,i,r),this.tileData=new c(o),this.tileData.coordScale=[i,r],this.tileData.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.tileData.destroy(),this.tileData=null,this.stage=null;}set stencilRef(t){this.tileData.stencilRef=t;}get stencilRef(){return this.tileData.stencilRef}_createTransforms(){return {dvs:n$3(),tileMat3:n$3()}}setTransform(e,a){super.setTransform(e,a);const i=a/(e.resolution*e.pixelRatio),r=this.transforms.tileMat3,[o,l]=this.tileData.offset,h=[this.x+o*a,this.y-l*a],[n,f]=e.toScreenNoRotation([0,0],h),{symbolTileSize:m}=this.tileData.symbolizerParameters,c=Math.round((this.width-this.tileData.offset[0])/m)*m,D=Math.round((this.height-this.tileData.offset[1])/m)*m,d=c/this.rangeX*i,u=D/this.rangeY*i;s$2(r,d,0,0,0,u,0,n,f,1),i$3(this.transforms.dvs,e.displayViewMat3,r),this.tileData.transforms.dvs=this.transforms.dvs;}onAttach(){this.tileData.stage=this.stage;}onDetach(){this.tileData.stage=null;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class o extends o$1{constructor(){super(...arguments),this.isCustomTilingScheme=!1,this.symbolTypes=["triangle"];}createTile(r$1){const t=this._tileInfoView.getTileBounds(u(),r$1),[i,o]=this._tileInfoView.tileInfo.size;return new r(r$1,t[0],t[3],i,o)}destroyTile(){}prepareRenderPasses(e){const s=e.registerRenderPass({name:"imagery (vf tile)",brushes:[s$3],target:()=>this.children.map((e=>e.tileData)),drawPhase:I.MAP});return [...super.prepareRenderPasses(e),s]}doRender(e){this.visible&&e.drawPhase===I.MAP&&this.symbolTypes.forEach((s=>{e.renderPass=s,super.doRender(e);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let a=class extends T{constructor(){super(...arguments),this._handle=null,this.container=null,this.layer=null,this.type="rasterVF";}canUseWebGLForProcessing(){return !1}async fetchTile(e,t){const i=await this.layer.fetchTile(e.level,e.row,e.col,t);return "vector-magdir"===this.layer.rasterInfo.dataType&&null!=i&&i.pixelBlock&&(i.pixelBlock=await this.layer.convertVectorFieldData(i.pixelBlock,t)),i}updateTileSource(e,i){const r=i.symbolizerParams,{tileData:s}=e;s.key=e.key,s.width=this._tileInfoView.tileInfo.size[0],s.height=this._tileInfoView.tileInfo.size[1];const{symbolTileSize:o}=r,{source:l}=i;if(s.offset=this._getTileSymbolOffset(s.key,o),r$3(l)&&r$3(l.pixelBlock)){const e={extent:l.extent,pixelBlock:l.pixelBlock};s.rawPixelData=e,s.source=this._sampleVectorFieldData(l.pixelBlock,r,s.offset),s.symbolizerParameters=r;}else {const e=[Math.round((this._tileInfoView.tileInfo[0]-s.offset[0])/o),Math.round((this._tileInfoView.tileInfo[1]-s.offset[1])/o)],t=this.createEmptyTilePixelBlock(e);s.source=t,s.symbolizerParameters=r;}return s.invalidateVAO(),Promise.resolve(null)}updateTileSymbolizerParameters(e,i){var r;const s=i.local,{symbolTileSize:o}=s,{tileData:l}=e;l.offset=this._getTileSymbolOffset(l.key,o);const a=l.symbolizerParameters.symbolTileSize;return l.symbolizerParameters=s,r$3(null==(r=l.rawPixelData)?void 0:r.pixelBlock)&&a!==o&&(l.source=this._sampleVectorFieldData(l.rawPixelData.pixelBlock,l.symbolizerParameters,l.offset)),Promise.resolve(null)}install(e){this.container=new o(this._tileInfoView),this.container.isCustomTilingScheme=this._isCustomTilingScheme,this._updateSymbolType(this.layer.renderer),this._handle=this.layer.watch("renderer",(e=>this._updateSymbolType(e))),e.addChild(this.container);}uninstall(){this.container.removeAllChildren(),this._handle.remove(),this._handle=null,this.container.remove(),super.uninstall();}_getTileSymbolOffset(e,t){const i=e.col*this._tileInfoView.tileInfo.size[0]%t,r=e.row*this._tileInfoView.tileInfo.size[1]%t;return [i>t/2?t-i:-i,r>t/2?t-r:-r]}_sampleVectorFieldData(e,t,i){const{symbolTileSize:r}=t;return S(e,"vector-uv",r,i)}_updateSymbolType(e){"vector-field"===e.type&&(this.container.symbolTypes="wind-barb"===e.style?["scalar","triangle"]:"simple-scalar"===e.style?["scalar"]:["triangle"]);}};e$1([d$1()],a.prototype,"container",void 0),e$1([d$1()],a.prototype,"layer",void 0),e$1([d$1()],a.prototype,"type",void 0),a=e$1([i$2("esri.views.2d.layers.imagery.VectorFieldTileView2D")],a);const n=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m=m=>{let f=class extends m{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.fullExtent=null,this.tileInfo=null,this.datumTransformation=null;}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}async fetchPopupFeatures(e,o){const{layer:s}=this;if(!e)return Promise.reject(new s$4("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:s}));const{popupEnabled:a}=s,n=d$2(s,o);if(!a||!r$3(n))throw new s$4("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:n});const l=[],{value:u,magdirValue:m}=await s.identify(e,{timeExtent:this.timeExtent});let f="";if(u&&u.length){var c,h;f="imagery-tile"===s.type&&s.hasStandardTime()&&null!=u[0]?u.map((e=>s.getStandardTimeValue(e))).join(", "):u.join(", ");const e={ObjectId:0},r="Raster.ServicePixelValue";e[r]=this._formatAttributeValue(f,r);const i=null==(c=s.rasterInfo)||null==(h=c.attributeTable)?void 0:h.features;if(i&&i.length>0){const t=i.filter((e=>{const t=e.attributes.value||e.attributes.Value||e.attributes.VALUE;return String(t)===f}));if(t.length>0){const r=t[0];if(r)for(const t in r.attributes)if(r.attributes.hasOwnProperty(t)){const i=this._rasterFieldPrefix+t;e[i]=this._formatAttributeValue(r.attributes[t],i);}}}const o=s.rasterInfo.dataType;"vector-magdir"!==o&&"vector-uv"!==o||(e["Raster.Magnitude"]=null==m?void 0:m[0],e["Raster.Direction"]=null==m?void 0:m[1]);const a=new h$1(this.fullExtent.clone(),null,e);a.layer=s,a.sourceLayer=a.layer,l.push(a);}return l}updateFullExtent(){const e=this.layer.tileInfo;if(!(e&&e.spatialReference))return Promise.reject(new s$4("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));if(t(this.layer.fullExtent))return Promise.reject(new s$4("layerview:extent-missing","The layer doesn't provide a full extent.",{layer:this.layer}));const t$1=w(this.layer.fullExtent,this.view.spatialReference,!1),i=j$3(this.layer.fullExtent,this.view.spatialReference,t$1);return null==i?Promise.reject(new s$4("layerview:projection-not-supported","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})):(this._set("fullExtent",i),this.datumTransformation||(this.datumTransformation=w(this.layer.fullExtent,this.view.spatialReference,!0)),Promise.resolve())}_formatAttributeValue(e,t){if("string"==typeof e){const r=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,i=this._getFieldInfo(r,t),o=i&&i.format;if(o){let t,r;return e.trim().indexOf(",")>-1?(t=",",r=t+" ",this._formatDelimitedString(e,t,r,o)):e.trim().indexOf(" ")>-1?(t=r=" ",this._formatDelimitedString(e,t,r,o)):this._formatNumberFromString(e,o)}}return e}_getFieldInfo(e,t){if(!e||!e.length||!t)return;const r=t.toLowerCase();let i;return e.some((e=>!(!e.fieldName||e.fieldName.toLowerCase()!==r&&e.fieldName.toLowerCase()!==r.replace(/ /g,"_"))&&(i=e,!0))),i}_formatDelimitedString(e,t,r,i){return e&&t&&r&&i?e.trim().split(t).map((e=>this._formatNumberFromString(e,i))).join(r):e}_formatNumberFromString(e,t){if(!e||!t)return e;const r=Number(e);return isNaN(r)?e:t.format(r)}};return e$1([d$1()],f.prototype,"layer",void 0),e$1([d$1(g$2)],f.prototype,"timeExtent",void 0),e$1([d$1()],f.prototype,"view",void 0),e$1([d$1()],f.prototype,"fullExtent",void 0),e$1([d$1()],f.prototype,"tileInfo",void 0),e$1([d$1({readOnly:!0})],f.prototype,"hasTilingEffects",null),f=e$1([i$2("esri.views.layers.ImageryTileLayerView")],f),f};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const v=s.getLogger("esri.views.2d.layers.ImageryTileLayerView2D");let b=class extends(m(i$4(l$1(u$3)))){constructor(){super(...arguments),this._useWebGLForProcessing=!0,this._useProgressiveUpdate=!0,this.subview=null;}initialize(){const e=this.updateFullExtent();this.addResolvingPromise(e);}get useWebGLForProcessing(){return this._useWebGLForProcessing}set useWebGLForProcessing(e){this._useWebGLForProcessing=e,this.subview&&"useWebGLForProcessing"in this.subview&&(this.subview.useWebGLForProcessing=e);}get useProgressiveUpdate(){return this._useWebGLForProcessing}set useProgressiveUpdate(e){this._useProgressiveUpdate=e,this.subview&&"useProgressiveUpdate"in this.subview&&(this.subview.useProgressiveUpdate=e);}update(e){this.subview.update(e),this.notifyChange("updating");}isUpdating(){return !this.subview||this.subview.updating}attach(){this.layer.increaseRasterJobHandlerUsage(),this._updateSubview(),this.handles.add([f$1(this.layer,["bandIds","renderer","interpolation","multidimensionalDefinition"],((e,s,r)=>{const t="multidimensionalDefinition"===r,o="interpolation"===r&&("majority"===e||"majority"===s)&&r$4(this.layer),a="renderer"===r&&s.type!==e.type;a&&this._updateSubview();const n=t||o||a;this.subview.redrawOrRefetch(n).catch((e=>{g$1(e)||v.error(e);})),this.notifyChange("updating");})),i$5(this,["layer.blendMode"],(e=>{this.subview&&(this.subview.container.blendMode=e);}),!0),i$5(this,["layer.effect"],(e=>{this.subview&&(this.subview.container.effect=e);}),!0),i$5(this,"timeExtent",(()=>{this.subview.redrawOrRefetch(!0).catch((e=>{g$1(e)||v.error(e);}));}))],"attach");}detach(){this.handles.remove("attach"),this.layer.decreaseRasterJobHandlerUsage(),this.subview.uninstall();}moveStart(){this.requestUpdate();}viewChange(){this.requestUpdate();}moveEnd(){this.subview.moveEnd();}async hitTest(e,r){return [new h$1({attributes:{},geometry:e.clone()})]}doRefresh(){return this.subview.doRefresh()}_updateSubview(){const e="vector-field"===this.layer.renderer.type?"rasterVF":"animated-flow"===this.layer.renderer.type?"rasterAnimatedFlow":"raster";if(this.subview){if(this.subview.type===e)return;this.subview.uninstall();}const{layer:s}=this;let r;r="rasterVF"===e?new n({layer:s,layerView:this}):"rasterAnimatedFlow"===e?new p$1({layer:s,layerView:this}):new a$1({layer:s,layerView:this}),"useWebGLForProcessing"in r&&(r.useWebGLForProcessing=this._useWebGLForProcessing),"useProgressiveUpdate"in r&&(r.useProgressiveUpdate=this._useProgressiveUpdate),"previousLOD"in r&&(r.previousLOD=this.subview&&"previousLOD"in this.subview&&this.subview.previousLOD),r.attach(),r.install(this.container),r.container.blendMode=s.blendMode,r.container.effect=s.effect,this.subview=r,this.requestUpdate();}};e$1([d$1()],b.prototype,"subview",void 0),e$1([d$1()],b.prototype,"useWebGLForProcessing",null),e$1([d$1()],b.prototype,"useProgressiveUpdate",null),b=e$1([i$2("esri.views.2d.layers.ImageryTileLayerView2D")],b);const y=b;

export default y;
