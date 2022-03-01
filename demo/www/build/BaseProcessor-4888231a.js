import { e, f as d$1, i } from './vec2f32-96e18450.js';
import { d } from './HandleOwner-e0d82d22.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let s=class extends d{initialize(){}destroy(){}get supportsTileUpdates(){return !1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};e([d$1({readOnly:!0})],s.prototype,"supportsTileUpdates",null),e([d$1({constructOnly:!0})],s.prototype,"remoteClient",void 0),e([d$1({constructOnly:!0})],s.prototype,"service",void 0),e([d$1()],s.prototype,"spatialReference",null),e([d$1({constructOnly:!0})],s.prototype,"tileInfo",void 0),e([d$1({constructOnly:!0})],s.prototype,"tileStore",void 0),s=e([i("esri.views.2d.layers.features.processors.BaseProcessor")],s);const p=s;

export { p };
