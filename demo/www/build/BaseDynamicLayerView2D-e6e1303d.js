import { s, x as g, e, d as d$1, i as i$1 } from './intl-f9bcf179.js';
import { t } from './BitmapContainer-1de0f60a.js';
import { l, u } from './LayerView-93fcaba5.js';
import { S } from './ExportStrategy-a2804753.js';
import { i } from './RefreshableLayerView-74712ecf.js';
import './WGLContainer-4baf605d.js';
import './esri-ds2022-map-viewer-35c68a1d.js';
import './index-5d892dab.js';
import './vec2f32-a88eee2e.js';
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
import './VertexArrayObject-11463d40.js';
import './Texture-2c125101.js';
import './Utils-03a18796.js';
import './number-237bc27c.js';
import './ShaderCompiler-054f6091.js';
import './config-768959de.js';
import './GeometryUtils-09c2f88c.js';
import './MaterialKey-80102021.js';
import './pixelUtils-0e1dbd21.js';
import './Container-1e7079ff.js';
import './earcut-05cd758b.js';
import './Bitmap-1fa3028e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const h=s.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let c=class extends(i(l(u))){update(t){this.strategy.update(t).catch((t=>{g(t)||h.error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}};e([d$1()],c.prototype,"strategy",void 0),e([d$1()],c.prototype,"updating",void 0),c=e([i$1("esri.views.2d.layers.BaseDynamicLayerView2D")],c);const d=c;

export default d;
