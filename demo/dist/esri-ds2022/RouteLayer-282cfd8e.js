import { t, k as r, e, d, S, i } from './intl-f9bcf179.js';
import { l, b } from './MultiOriginJSONSupport-9580fd5e.js';
import { X as o } from './vec2f32-a88eee2e.js';
import { G as Ge } from './FeatureLayer-d0cffc77.js';
import { y as y$1 } from './OperationalLayer-4ec71ac3.js';
import { w } from './PortalLayer-1931d936.js';
import './JSONSupport-add604e3.js';
import './UniqueValueRenderer-e0928c5a.js';
import './VisualVariablesMixin-8a22cf6b.js';
import './colorRamps-76de530b.js';
import './diffUtils-090e743c.js';
import './styleUtils-4a488c71.js';
import './DictionaryRenderer-3a040527.js';
import './LRUCache-257bc9a6.js';
import './MemCache-cd2cb7cb.js';
import './jsonUtils-d380cab0.js';
import './aliasOf-93c38510.js';
import './Handles-c08f164d.js';
import './Field-c0076075.js';
import './fieldType-064db2a2.js';
import './HeightModelInfo-d5d3aa1e.js';
import './HandleOwner-8815c4dd.js';
import './reactiveUtils-7b2ef76d.js';
import './watchUtils-47c42485.js';
import './workers-b2f67d28.js';
import './queryZScale-5052a726.js';
import './zscale-41674b48.js';
import './FeatureSet-4fb958ac.js';
import './APIKeyMixin-8575f837.js';
import './ArcGISService-7e7b6abe.js';
import './arcgisLayerUrl-44d1a3ba.js';
import './BlendLayer-324633cc.js';
import './mat4-ae511675.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-a86b0825.js';
import './labelingInfo-25767b21.js';
import './TimeExtent-c4789fb1.js';
import './Query-689827fc.js';
import './FeatureReductionCluster-71a4b0f9.js';
import './commonProperties-dc6e2688.js';
import './OrderedLayer-c71463ea.js';
import './RefreshableLayer-1f637573.js';
import './ScaleRangeLayer-e13c0aef.js';
import './TemporalLayer-53bb7671.js';
import './TimeInfo-eeca5f4b.js';
import './FeatureType-b8b87e07.js';
import './fieldProperties-49d5cbad.js';
import './FieldsIndex-a1139706.js';
import './LayerFloorInfo-b956bff1.js';
import './styleUtils-d505ace0.js';
import './TopFeaturesQuery-1ab1fe83.js';
import './popupUtils-74d35ca3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends(y$1(w(l(b)))){constructor(...e){super(...e),this.type="route";}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map((e=>{const t=new Ge;return t.read(e,r),t}))}readFeatureCollectionsFromWebMap(e,t,r){return t.featureCollection.layers.map((e=>{const t=new Ge;return t.read(e,r),t}))}get fullExtent(){if(t(this.featureCollections))return null;const e=null;return this.featureCollections.reduce(((e,t$1)=>t(t$1.fullExtent)?e:t(e)?t$1.fullExtent.clone():e.union(t$1.fullExtent)),e)}get maxScale(){if(t(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce(((e,t)=>null==e?t.maxScale:Math.min(e,t.maxScale)),e)}set maxScale(e){r(this.featureCollections)&&this.featureCollections.forEach((t=>{t.maxScale=e;})),this._set("maxScale",e);}get minScale(){if(t(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce(((e,t)=>null==e?t.minScale:Math.min(e,t.minScale)),e)}set minScale(e){r(this.featureCollections)&&this.featureCollections.forEach((t=>{t.minScale=e;})),this._set("minScale",e);}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}_getNamedFeatureLayer(e){if(!t(this.featureCollections))return this.featureCollections.find((t=>t.title===e))}};e([d()],m.prototype,"barrierLines",null),e([d()],m.prototype,"barrierPoints",null),e([d()],m.prototype,"barrierPolygons",null),e([d()],m.prototype,"directionLines",null),e([d()],m.prototype,"directionPoints",null),e([d({type:S.ofType(Ge)})],m.prototype,"featureCollections",void 0),e([o("portal-item","featureCollections",["layers"])],m.prototype,"readFeatureCollectionsFromItem",null),e([o("web-map","featureCollections",["featureCollection.layers"])],m.prototype,"readFeatureCollectionsFromWebMap",null),e([d({readOnly:!0})],m.prototype,"fullExtent",null),e([d({type:["show","hide"]})],m.prototype,"listMode",void 0),e([d()],m.prototype,"minScale",null),e([d()],m.prototype,"routeInfo",null),e([d()],m.prototype,"stops",null),e([d({readOnly:!0,json:{read:!1}})],m.prototype,"type",void 0),m=e([i("esri.layers.RouteLayer")],m);const y=m;

export default y;
