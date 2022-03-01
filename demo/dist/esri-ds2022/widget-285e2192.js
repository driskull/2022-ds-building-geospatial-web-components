import './accessibleHandler-756590a8.js';
import { B as i, au as s, s as s$1 } from './intl-f9bcf179.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function c(c){return function(c,t){i("esri-deprecation-warnings")&&s(s$1.getLogger("esri.core.accessorSupport.decorators"),"'@renderable()' decorator",{version:"4.19",warnOnce:!0});}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){return n.split(",").map((n=>n.trim()))}function t$2(n,t){return n.map((n=>r(n,t)))}function r(n,t){return 0===n.indexOf(t)?n:`${t}.${n}`}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t$1(t){return a=>{a.hasOwnProperty("_delegatedEventNames")||(a._delegatedEventNames=a._delegatedEventNames?a._delegatedEventNames.slice():[]);const r=a._delegatedEventNames,s=Array.isArray(t)?t:n(t);r.push(...s);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e){return e&&"function"==typeof e.render}function t(e){return e&&"function"==typeof e.postMixInProperties&&"function"==typeof e.buildRendering&&"function"==typeof e.postCreate&&"function"==typeof e.startup}

export { t$1 as a, e, t };
