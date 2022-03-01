import { a$ as H, dV as m } from './vec2f32-96e18450.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=96;function r(r,i){const o=i||r.extent,c=r.width,u=H(o&&o.spatialReference);return o&&c?o.width/c*u*m*e:0}function i(r,i){return r/(H(i)*m*e)}function o(r,i){return r*(H(i)*m*e)}function c(t,n){const e=t.extent,r=t.width,o=i(n,e.spatialReference);return e.clone().expand(o*r/e.width)}

export { r };
