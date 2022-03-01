import { S, e, d, i as i$1 } from './intl-f9bcf179.js';
import { l } from './VertexArrayObject-11463d40.js';
import './Texture-2c125101.js';
import { a as a$1 } from './WGLContainer-4baf605d.js';
import { u, l as l$1 } from './LayerView-93fcaba5.js';
import { n, bv as t } from './vec2f32-a88eee2e.js';
import './esri-ds2022-map-viewer-35c68a1d.js';
import './index-5d892dab.js';
import './JSONSupport-add604e3.js';
import './CollectionFlattener-bcf03412.js';
import './HandleOwner-8815c4dd.js';
import './Handles-c08f164d.js';
import './reactiveUtils-7b2ef76d.js';
import './watchUtils-47c42485.js';
import './TablesMixin-ae9b8027.js';
import './MultiOriginJSONSupport-9580fd5e.js';
import './iteratorUtils-07a71e8c.js';
import './workers-b2f67d28.js';
import './accessibleHandler-756590a8.js';
import './uuid-917a1a17.js';
import './aliasOf-93c38510.js';
import './executeQueryJSON-99aa27d5.js';
import './utils-8e500178.js';
import './scaleUtils-88e9eb11.js';
import './floorFilterUtils-a09da11b.js';
import './query-f9bc0945.js';
import './normalizeUtils-4a0b810f.js';
import './arcgisLayerUrl-44d1a3ba.js';
import './pbfQueryUtils-cdfd4767.js';
import './pbf-82f66092.js';
import './OptimizedFeature-b2ac674d.js';
import './OptimizedFeatureSet-27736f1f.js';
import './queryZScale-5052a726.js';
import './zscale-41674b48.js';
import './Query-689827fc.js';
import './TimeExtent-c4789fb1.js';
import './Field-c0076075.js';
import './fieldType-064db2a2.js';
import './FeatureSet-4fb958ac.js';
import './TopFeaturesQuery-1ab1fe83.js';
import './widget-285e2192.js';
import './QueryTask-b0a64993.js';
import './featureConversionUtils-a3d8ec70.js';
import './Task-634f7f0c.js';
import './languageUtils-884f50f9.js';
import './_commonjsHelpers-321aa363.js';
import './number-18a63da8.js';
import './FeatureLayer-d0cffc77.js';
import './UniqueValueRenderer-e0928c5a.js';
import './VisualVariablesMixin-8a22cf6b.js';
import './colorRamps-76de530b.js';
import './diffUtils-090e743c.js';
import './styleUtils-4a488c71.js';
import './DictionaryRenderer-3a040527.js';
import './LRUCache-257bc9a6.js';
import './MemCache-cd2cb7cb.js';
import './jsonUtils-d380cab0.js';
import './HeightModelInfo-d5d3aa1e.js';
import './APIKeyMixin-8575f837.js';
import './ArcGISService-7e7b6abe.js';
import './BlendLayer-324633cc.js';
import './mat4-ae511675.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-a86b0825.js';
import './labelingInfo-25767b21.js';
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
import './popupUtils-74d35ca3.js';
import './utils-0c74ca00.js';
import './ItemCache-f1121cd2.js';
import './utils-86b5682d.js';
import './TileStore-07b000ac.js';
import './TileKey-a7cf75b8.js';
import './quickselect-ccfd8cff.js';
import './TileInfo-70467c72.js';
import './GraphicsCollection-29817947.js';
import './Scheduler-69870efa.js';
import './projection-60b2cc57.js';
import './unitBezier-0f2e6a45.js';
import './vec2f64-503345b4.js';
import './mat3-5a3bab08.js';
import './TileStrategy-94fc5f8a.js';
import './screenshotUtils-9bdc6cab.js';
import './capabilities-7c6ba5e3.js';
import './definitions-08701efa.js';
import './Utils-03a18796.js';
import './number-237bc27c.js';
import './ShaderCompiler-054f6091.js';
import './config-768959de.js';
import './GeometryUtils-09c2f88c.js';
import './MaterialKey-80102021.js';
import './pixelUtils-0e1dbd21.js';
import './Container-1e7079ff.js';
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
