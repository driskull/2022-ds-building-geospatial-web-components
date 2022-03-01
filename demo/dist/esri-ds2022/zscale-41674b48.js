import { t } from './intl-f9bcf179.js';
import { aF as E, aE as Y } from './vec2f32-a88eee2e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function o(o,f,u){if(t(f)||t(u)||u.vcsWkid||E(f,u))return null;const a=Y(f)/Y(u);if(1===a)return null;switch(o){case"point":case"esriGeometryPoint":return n=>r(n,a);case"polyline":case"esriGeometryPolyline":return n=>s(n,a);case"polygon":case"esriGeometryPolygon":return n=>i(n,a);case"multipoint":case"esriGeometryMultipoint":return n=>c(n,a);case"extent":case"esriGeometryExtent":return n=>l(n,a);default:return null}}function r(n,e){n&&null!=n.z&&(n.z*=e);}function i(n,e){if(n)for(const t of n.rings)for(const n of t)n.length>2&&(n[2]*=e);}function s(n,e){if(n)for(const t of n.paths)for(const n of t)n.length>2&&(n[2]*=e);}function c(n,e){if(n)for(const t of n.points)t.length>2&&(t[2]*=e);}function l(n,e){n&&null!=n.zmin&&null!=n.zmax&&(n.zmin*=e,n.zmax*=e);}

export { o };
