/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){return 32+n.length}function t(){return 16}function e(e){if(!e)return 0;let r=32;for(const o in e)if(e.hasOwnProperty(o)){const c=e[o];switch(typeof c){case"string":r+=n(c);break;case"number":r+=t();break;case"boolean":r+=4;}}return r}function r(n,t){return 32+n.length*t}

export { e, r };
