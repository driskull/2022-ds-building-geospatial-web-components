import { ae as r, a as s } from './intl-f9bcf179.js';
import { aX as B } from './vec2f32-a88eee2e.js';
import { a, n } from './project-3b613903.js';
import './JSONSupport-add604e3.js';
import './utils-8e500178.js';
import './scaleUtils-88e9eb11.js';
import './floorFilterUtils-a09da11b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function i(o=null,n){var i,l;if(r.geometryServiceUrl)return r.geometryServiceUrl;if(!o)throw new s("internal:geometry-service-url-not-configured");let a;a="portal"in o?o.portal||B.getDefault():o,await a.load({signal:n});const c=null==(i=a.helperServices)||null==(l=i.geometry)?void 0:l.url;if(!c)throw new s("internal:geometry-service-url-not-configured");return c}async function l(r,t,l=null,a$1){const c=await i(l,a$1),s$1=new a;s$1.geometries=[r],s$1.outSpatialReference=t;const m=await n(c,s$1,{signal:a$1});if(m&&Array.isArray(m)&&1===m.length)return m[0];throw new s("internal:geometry-service-projection-failed")}

export { i as getGeometryServiceURL, l as projectGeometry };
