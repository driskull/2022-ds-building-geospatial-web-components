/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(){return [0,0]}function r(n){return [n[0],n[1]]}function t(n,r){return [n,r]}function e(r){const t=n(),e=Math.min(2,r.length);for(let n=0;n<e;++n)t[n]=r[n];return t}function u(n,r){return new Float64Array(n,r,2)}function a(){return n()}function o(){return t(1,1)}function s(){return t(1,0)}function c(){return t(0,1)}const f=a(),i=o(),l=s(),_=c(),O=Object.freeze({__proto__:null,create:n,clone:r,fromValues:t,fromArray:e,createView:u,zeros:a,ones:o,unitX:s,unitY:c,ZEROS:f,ONES:i,UNIT_X:l,UNIT_Y:_});

export { n, t, u };
