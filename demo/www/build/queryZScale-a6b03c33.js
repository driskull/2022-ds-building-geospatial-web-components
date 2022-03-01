import { z as t } from './vec2f32-96e18450.js';
import { o } from './zscale-075392a1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(r,t$1,f){if(!f||!f.features||!f.hasZ)return;const s=o(f.geometryType,t$1,r.outSpatialReference);if(!t(s))for(const e of f.features)s(e.geometry);}

export { r };
