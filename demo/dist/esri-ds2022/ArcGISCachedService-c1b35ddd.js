import { e, d, i } from './intl-f9bcf179.js';
import { X as o, a2 as k } from './vec2f32-a88eee2e.js';
import { T, r } from './TilemapCache-a08cfe79.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=s=>{let l=class extends s{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null;}readMinScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}readMaxScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,r){return r.capabilities&&r.capabilities.indexOf("Tilemap")>-1?new T({layer:this}):null}};return e([d({json:{read:{source:"copyrightText"}}})],l.prototype,"copyright",void 0),e([d()],l.prototype,"minScale",void 0),e([o("service","minScale")],l.prototype,"readMinScale",null),e([d()],l.prototype,"maxScale",void 0),e([o("service","maxScale")],l.prototype,"readMaxScale",null),e([d({type:k})],l.prototype,"spatialReference",void 0),e([d({readOnly:!0})],l.prototype,"supportsBlankTile",null),e([d(r)],l.prototype,"tileInfo",void 0),e([d()],l.prototype,"tilemapCache",void 0),e([o("service","tilemapCache",["capabilities"])],l.prototype,"readTilemapCache",null),e([d()],l.prototype,"version",void 0),l=e([i("esri.layers.mixins.ArcGISCachedService")],l),l};

export { s };
