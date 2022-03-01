import { e as e$1, i as i$1 } from './vec2f32-96e18450.js';
import { o as o$1, e } from './heatmapUtils-8c9f2879.js';
import { n } from './BitmapTileContainer-d8cc0076.js';
import { o as o$2 } from './BaseTileRenderer-18378f56.js';
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
import './Bitmap-c04369b7.js';
import './Container-a9726ab4.js';
import './Texture-877bd154.js';
import './TileContainer-e8755e5e.js';
import './Utils-b64a9f45.js';
import './number-237bc27c.js';
import './WGLContainer-3803447f.js';
import './definitions-08701efa.js';
import './VertexArrayObject-8085edfb.js';
import './ShaderCompiler-0c24df35.js';
import './config-768959de.js';
import './GeometryUtils-09c2f88c.js';
import './MaterialKey-55ff2aea.js';
import './pixelUtils-56825141.js';
import './earcut-05cd758b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class i{constructor(){this.gradient=null,this.height=512,this.width=512;}render(i){o$1(i,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let o=class extends o$2{constructor(e){super(e),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new n(e.tileInfoView);}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e$1=this.layer.renderer;if("heatmap"===e$1.type){const{minPixelIntensity:t,maxPixelIntensity:r}=e$1;this._intensityInfo.minPixelIntensity=t,this._intensityInfo.maxPixelIntensity=r,this._gradient=e(e$1.toJSON()),this.tiles.forEach((e=>{const i=e.bitmap.source;i&&(i.minPixelIntensity=t,i.maxPixelIntensity=r,i.gradient=this._gradient,e.bitmap.invalidateTexture());}));}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container);}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container);}disposeTile(e){this._container.removeChild(e),e.destroy();}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i$1=e.intensityInfo,{minPixelIntensity:r,maxPixelIntensity:s}=this._intensityInfo,o=t.bitmap.source||new i;o.intensities=i$1&&i$1.matrix||null,o.minPixelIntensity=r,o.maxPixelIntensity=s,o.gradient=this._gradient,t.bitmap.source=o,this._container.addChild(t),this._container.requestRender(),this.requestUpdate();}onTileError(e){console.error(e);}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(e,t){return console.error(e),Promise.reject()}};o=e$1([i$1("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const a=o;

export default a;
