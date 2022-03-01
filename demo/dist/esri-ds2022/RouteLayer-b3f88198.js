import { z as t, V as r, e, f as d, S, ax as o, i } from './vec2f32-96e18450.js';
import { l, b } from './MultiOriginJSONSupport-4c0182cb.js';
import { G as Ge } from './FeatureLayer-41ac22f1.js';
import { y as y$1 } from './OperationalLayer-f90d3a65.js';
import { w } from './PortalLayer-f5d3d653.js';
import './UniqueValueRenderer-59efe757.js';
import './VisualVariablesMixin-f7c8cd7e.js';
import './colorRamps-44ecefda.js';
import './diffUtils-c0512c3e.js';
import './styleUtils-c0536af9.js';
import './DictionaryRenderer-148f4879.js';
import './LRUCache-6d357264.js';
import './MemCache-e9a0d4f9.js';
import './jsonUtils-e58c15d9.js';
import './Handles-b3021138.js';
import './Field-9ae21d09.js';
import './fieldType-40139de8.js';
import './HeightModelInfo-533ad021.js';
import './HandleOwner-e0d82d22.js';
import './reactiveUtils-5f9c851d.js';
import './watchUtils-be3a5f50.js';
import './workers-2517158a.js';
import './queryZScale-a6b03c33.js';
import './zscale-075392a1.js';
import './FeatureSet-d05d7baa.js';
import './APIKeyMixin-ee03b0ff.js';
import './ArcGISService-bc55d6c8.js';
import './arcgisLayerUrl-e91052aa.js';
import './BlendLayer-9582dc10.js';
import './mat4-59c51b41.js';
import './_commonjsHelpers-020ca939.js';
import './CustomParametersMixin-5d83f8a3.js';
import './labelingInfo-653f3665.js';
import './TimeExtent-ef5feff1.js';
import './Query-f41de01f.js';
import './FeatureReductionCluster-303b0389.js';
import './commonProperties-73952058.js';
import './OrderedLayer-84b64b6e.js';
import './RefreshableLayer-7eca1761.js';
import './ScaleRangeLayer-cc4d317e.js';
import './TemporalLayer-8778bd70.js';
import './TimeInfo-753c74d8.js';
import './FeatureType-3ed2e985.js';
import './fieldProperties-7830ae70.js';
import './FieldsIndex-a573ae50.js';
import './LayerFloorInfo-742e79c9.js';
import './styleUtils-ccdaf8b0.js';
import './TopFeaturesQuery-21746d72.js';
import './popupUtils-0b9004db.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends(y$1(w(l(b)))){constructor(...e){super(...e),this.type="route";}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map((e=>{const t=new Ge;return t.read(e,r),t}))}readFeatureCollectionsFromWebMap(e,t,r){return t.featureCollection.layers.map((e=>{const t=new Ge;return t.read(e,r),t}))}get fullExtent(){if(t(this.featureCollections))return null;const e=null;return this.featureCollections.reduce(((e,t$1)=>t(t$1.fullExtent)?e:t(e)?t$1.fullExtent.clone():e.union(t$1.fullExtent)),e)}get maxScale(){if(t(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce(((e,t)=>null==e?t.maxScale:Math.min(e,t.maxScale)),e)}set maxScale(e){r(this.featureCollections)&&this.featureCollections.forEach((t=>{t.maxScale=e;})),this._set("maxScale",e);}get minScale(){if(t(this.featureCollections))return 0;const e=null;return this.featureCollections.reduce(((e,t)=>null==e?t.minScale:Math.min(e,t.minScale)),e)}set minScale(e){r(this.featureCollections)&&this.featureCollections.forEach((t=>{t.minScale=e;})),this._set("minScale",e);}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}_getNamedFeatureLayer(e){if(!t(this.featureCollections))return this.featureCollections.find((t=>t.title===e))}};e([d()],m.prototype,"barrierLines",null),e([d()],m.prototype,"barrierPoints",null),e([d()],m.prototype,"barrierPolygons",null),e([d()],m.prototype,"directionLines",null),e([d()],m.prototype,"directionPoints",null),e([d({type:S.ofType(Ge)})],m.prototype,"featureCollections",void 0),e([o("portal-item","featureCollections",["layers"])],m.prototype,"readFeatureCollectionsFromItem",null),e([o("web-map","featureCollections",["featureCollection.layers"])],m.prototype,"readFeatureCollectionsFromWebMap",null),e([d({readOnly:!0})],m.prototype,"fullExtent",null),e([d({type:["show","hide"]})],m.prototype,"listMode",void 0),e([d()],m.prototype,"minScale",null),e([d()],m.prototype,"routeInfo",null),e([d()],m.prototype,"stops",null),e([d({readOnly:!0,json:{read:!1}})],m.prototype,"type",void 0),m=e([i("esri.layers.RouteLayer")],m);const y=m;

export default y;
