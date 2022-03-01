import { k as r, a5 as b$1, a7 as O, C as C$1, bC as C$2, a as s$2, ao as N, e, d as d$1, f as c, i as i$2 } from './intl-f9bcf179.js';
import { a2 as k, X as o$1, b as r$1 } from './vec2f32-a88eee2e.js';
import { a } from './HandleOwner-8815c4dd.js';
import { l, b } from './MultiOriginJSONSupport-9580fd5e.js';
import { i as i$1 } from './APIKeyMixin-8575f837.js';
import { s as s$1 } from './ArcGISCachedService-c1b35ddd.js';
import { f, y as y$1, K } from './SublayersOwner-7bb4128f.js';
import { p } from './ArcGISService-7e7b6abe.js';
import { i } from './BlendLayer-324633cc.js';
import { o } from './CustomParametersMixin-a86b0825.js';
import { y } from './OperationalLayer-4ec71ac3.js';
import { w } from './PortalLayer-1931d936.js';
import { n } from './RefreshableLayer-1f637573.js';
import { s } from './ScaleRangeLayer-e13c0aef.js';
import { d, y as y$2, p as p$1 } from './arcgisLayerUrl-44d1a3ba.js';
import { f as f$1 } from './commonProperties-dc6e2688.js';
import './JSONSupport-add604e3.js';
import './Handles-c08f164d.js';
import './reactiveUtils-7b2ef76d.js';
import './watchUtils-47c42485.js';
import './TilemapCache-a08cfe79.js';
import './TileInfo-70467c72.js';
import './LRUCache-257bc9a6.js';
import './MemCache-cd2cb7cb.js';
import './Version-ffcd8e92.js';
import './CollectionFlattener-bcf03412.js';
import './UniqueValueRenderer-e0928c5a.js';
import './VisualVariablesMixin-8a22cf6b.js';
import './colorRamps-76de530b.js';
import './diffUtils-090e743c.js';
import './styleUtils-4a488c71.js';
import './DictionaryRenderer-3a040527.js';
import './jsonUtils-d380cab0.js';
import './aliasOf-93c38510.js';
import './FeatureType-b8b87e07.js';
import './Field-c0076075.js';
import './fieldType-064db2a2.js';
import './FieldsIndex-a1139706.js';
import './LayerFloorInfo-b956bff1.js';
import './Query-689827fc.js';
import './TimeExtent-c4789fb1.js';
import './popupUtils-74d35ca3.js';
import './floorFilterUtils-a09da11b.js';
import './sublayerUtils-c6a17833.js';
import './mat4-ae511675.js';
import './_commonjsHelpers-020ca939.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const I=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let M=class extends(i(f(s(y(w(s$1(y$1(p(l(a(n(i$1(o(b)))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null;}normalizeCtorArgs(e,r){return "string"==typeof e?{url:e,...r}:e}load(e){const r$1=r(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(b$1).then((()=>this._fetchService(r$1)))),Promise.resolve(this)}get attributionDataUrl(){var e;const r=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}readSpatialReference(e,r){return (e=e||r.tileInfo&&r.tileInfo.spatialReference)&&k.fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray(),o=[],a={writeSublayerStructure:!1,...s};i.forEach((e=>{const r=e.write({},a);o.push(r);}));o.some((e=>Object.keys(e).length>1))&&(r.layers=o);}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>O(e).path)):null}fetchTile(e,t,s,i={}){const{signal:o}=i,a=this.getTileUrl(e,t,s),l={responseType:"image",signal:o,query:{...this.refreshParameters}};return C$1(a,l).then((e=>e.data))}getTileUrl(e,r,t){const s=!this.tilemapCache&&this.supportsBlankTile,i=C$2({...this.parsedUrl.query,blankTile:!s&&null,...this.customParameters,token:this.apiKey}),o=this.tileServers;return `${o&&o.length?o[r%o.length]:this.parsedUrl.path}/tile/${e}/${r}/${t}${i?"?"+i:""}`}_fetchService(e){return new Promise(((s,o)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new s$2("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void s({data:this.sourceJSON})}if(!this.parsedUrl)throw new s$2("tile-layer:undefined-url","layer's url is not defined");const a=d(this.parsedUrl.path);if(r(a)&&"ImageServer"===a.serverType)throw new s$2("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");C$1(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(s,o);})).then((r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!y$2(this.url))return this._fetchServerVersion(this.url,e).then((e=>{this.read({currentVersion:e});})).catch((()=>{}))}))}_fetchServerVersion(e,s){if(!p$1(e))return Promise.reject();const i=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return C$1(i,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:s}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new s$2("tile-layer:version-not-available")}))}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let t=0,s=I.length;t<s;t++)if(r=I[t],r.toLowerCase().indexOf(e)>-1)return N("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return !this.fetchTile.__isDefault__}};e([d$1({readOnly:!0})],M.prototype,"attributionDataUrl",null),e([d$1({type:["show","hide","hide-children"]})],M.prototype,"listMode",void 0),e([d$1({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],M.prototype,"isReference",void 0),e([d$1({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],M.prototype,"operationalLayerType",void 0),e([d$1({type:Boolean})],M.prototype,"resampling",void 0),e([d$1()],M.prototype,"sourceJSON",void 0),e([d$1({type:k})],M.prototype,"spatialReference",void 0),e([o$1("spatialReference",["spatialReference","tileInfo"])],M.prototype,"readSpatialReference",null),e([d$1({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],M.prototype,"path",void 0),e([d$1({readOnly:!0})],M.prototype,"sublayers",void 0),e([r$1("sublayers",{layers:{type:[K]}})],M.prototype,"writeSublayers",null),e([d$1({json:{read:!1,write:!1}})],M.prototype,"popupEnabled",void 0),e([d$1()],M.prototype,"tileServers",null),e([c("tileServers")],M.prototype,"castTileServers",null),e([d$1({readOnly:!0,json:{read:!1}})],M.prototype,"type",void 0),e([d$1(f$1)],M.prototype,"url",void 0),M=e([i$2("esri.layers.TileLayer")],M),M.prototype.fetchTile.__isDefault__=!0;const C=M;

export default C;
