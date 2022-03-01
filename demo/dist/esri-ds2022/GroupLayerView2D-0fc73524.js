import { S, n, e, f as d, dj as t, i as i$1 } from './vec2f32-96e18450.js';
import { l } from './VertexArrayObject-8085edfb.js';
import './Texture-877bd154.js';
import { a as a$1 } from './WGLContainer-3803447f.js';
import { u, l as l$1 } from './LayerView-13e16160.js';
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
import './mat3-4c6d002d.js';
import './TileStrategy-7c347526.js';
import './screenshotUtils-ea21e5e9.js';
import './capabilities-3951b735.js';
import './definitions-08701efa.js';
import './Utils-b64a9f45.js';
import './number-237bc27c.js';
import './ShaderCompiler-0c24df35.js';
import './config-768959de.js';
import './GeometryUtils-09c2f88c.js';
import './MaterialKey-55ff2aea.js';
import './pixelUtils-56825141.js';
import './Container-a9726ab4.js';
import './earcut-05cd758b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class r extends a$1{constructor(){super(...arguments),this._lastWidth=0,this._lastHeight=0,this.requiresDedicatedFBO=!1;}dispose(){this._renderTarget&&(this._renderTarget.dispose(),this._renderTarget=null);}doRender(e){const t=this.createRenderParams(e),{context:r,painter:s,profiler:i}=t;this._prevFBO=r.getBoundFramebufferObject(),i.recordContainerStart(this.name);const o=this._getFbo(t),a=s.getRenderTarget();r.bindFramebuffer(o),s.setRenderTarget(o),r.setDepthWriteEnabled(!0),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1);for(const n of this.children)n.beforeRender(e);for(const n of this.children)n.processRender(t);for(const n of this.children)n.afterRender(e);s.setRenderTarget(a),r.bindFramebuffer(this._prevFBO),s.beforeRenderLayer(t,this._clippingInfos?255:0,this.computedOpacity),r.setStencilTestEnabled(!1),r.setStencilWriteMask(0),s.blitTexture(r,o.colorTexture,9728),s.compositeLayer(t,this.computedOpacity),i.recordContainerEnd();}createRenderParams(e){return {...super.createRenderParams(e),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(t){const{context:r,painter:s}=t,{width:i,height:o}=r.getViewport();if(i!==this._lastWidth||o!==this._lastHeight)if(this._lastWidth=i,this._lastHeight=o,this._renderTarget)this._renderTarget.resize(i,o);else {const t={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:i,height:o},a={colorTarget:0,depthStencilTarget:3};this._renderTarget=new l(r,a,t,s.getSharedStencilBuffer());}return this._renderTarget}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o=class extends u{constructor(e){super(e),this.type="group",this.layerViews=new S;}initialize(){this.handles.add([this.layerViews.on("change",(e=>this._layerViewsChangeHandler(e))),this.layerViews.on("after-changes",(()=>this._layerViewsAfterChangesHandler())),this.layer.watch("visibilityMode",(()=>this._visibilityModeHandler()),!0),this.watch("visible",(()=>this._visibleHandler()),!0)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]}),this._layerViewsAfterChangesHandler();}set layerViews(e){this._set("layerViews",n(e,this._get("layerViews")));}isUpdating(){return this.layerViews.some((e=>e.updating))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,i)=>e+i.updatingProgress),0)/this.layerViews.length}_hasLayerViewVisibleOverrides(){return this.layerViews.some((e=>e._isOverridden("visible")))}_findLayerViewForLayer(e){return e&&this.layerViews.find((i=>i.layer===e))}_firstVisibleOnLayerOrder(){const e=this.layer.layers.find((e=>{const i=this._findLayerViewForLayer(e);return i&&i.visible}));return e&&this._findLayerViewForLayer(e)}_enforceExclusiveVisibility(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach((i=>{i.visible=i===e;})));}_layerViewsChangeHandler(e){this.handles.remove("grouplayerview:visible"),this.handles.add(this.layerViews.map((e=>e.watch("visible",(i=>this._layerViewVisibleHandler(i,e)),!0))).toArray(),"grouplayerview:visible");const i=e.added[e.added.length-1];let s=null;i&&i.visible&&(s=i),this._enforceVisibility(s);}_layerViewsAfterChangesHandler(){this.handles.remove("grouplayerview:updating"),this.handles.add(this.layerViews.map((e=>e.watch("updating",(()=>this._updateUpdating()),!0))).toArray(),"grouplayerview:updating"),this._updateUpdating();}_enforceVisibility(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":{const e=this.visible;this.layerViews.forEach((i=>{i.visible=e;}));break}case"exclusive":this._enforceExclusiveVisibility(e);}}_visibilityModeHandler(){this._enforceVisibility();}_layerViewVisibleHandler(e,i){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(i.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&i);}}_visibleHandler(){var e;this._hasLayerViewVisibleOverrides()&&"inherited"===(null==(e=this.layer)?void 0:e.visibilityMode)&&this._enforceVisibility();}_updateUpdating(){this.notifyChange("updating");}};e([d({cast:t})],o.prototype,"layerViews",null),e([d()],o.prototype,"view",void 0),e([d({readOnly:!0})],o.prototype,"updatingProgress",null),o=e([i$1("esri.views.layers.GroupLayerView")],o);const h=o;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let a=class extends(l$1(h)){constructor(){super(...arguments),this.container=new r;}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",(()=>this._updateStageChildren())),"grouplayerview2d");}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren();}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)));}};a=e([i$1("esri.views.2d.layers.GroupLayerView2D")],a);const i=a;

export default i;
