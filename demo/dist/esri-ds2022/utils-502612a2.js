import { bI as O, V as r$1 } from './vec2f32-96e18450.js';
import { r } from './scaleUtils-009949b4.js';
import { n, l as l$1 } from './floorFilterUtils-a09da11b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s(e,t){return t?{...t,query:{...e,...t.query}}:{query:e}}function o(e){return "string"==typeof e?O(e):e}function l(e,t,i){const n={};for(const r in e){if("declaredClass"===r)continue;const s=e[r];if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){n[r]=[];for(let e=0;e<s.length;e++)n[r][e]=l(s[e]);}else if("object"==typeof s)if(s.toJSON){const e=s.toJSON(i&&i[r]);n[r]=t?e:JSON.stringify(e);}else n[r]=t?s:JSON.stringify(s);else n[r]=s;}return n}function f({mapExtent:e,floors:t,width:r$1,sublayers:s,layerIds:o}){const l={},f={extent:e,width:r$1,spatialReference:null==e?void 0:e.spatialReference};let c=s;o&&o.length&&s&&(c=s.filter((e=>o.includes(e.id))));const u=r(f),y=[],p=e=>{const t=0===u,i=0===e.minScale||u<=e.minScale,n=0===e.maxScale||u>=e.maxScale;e.visible&&(t||i&&n)&&(e.sublayers?e.sublayers.forEach(p):y.unshift(e));};if(c&&c.forEach(p),c&&c.length){const e=y.map((e=>{const i=n(t,e);return e.toExportImageJSON(i)})),i=e.some((e=>"mapLayer"===e.source.type?e.source.mapLayerId!==e.id:"dataLayer"===e.source.type));if(i){let t=JSON.stringify(e);"[]"===t&&(t="[{}]"),l.dynamicLayers=t;}else if(!i){if(o&&o.length)l.layerIds=o;else {const e=c.map((({id:e})=>e));e.length&&(l.layerIds=e);}const e=a({floors:t,visibleSublayers:y});if(e&&e.length){const t=e.reduce(((e,t)=>(t.definitionExpression&&(e[t.id]=t.definitionExpression),e)),{});Object.keys(t).length&&(l.layerDefs=JSON.stringify(t));}}}return l}function a({floors:t,visibleSublayers:i}){const s=!(null==t||!t.length),o=i.filter((e=>null!=e.definitionExpression||s&&null!=e.floorInfo));if(!o.length)return null;return o.map((i=>{const s=n(t,i),o=r$1(s)?l$1(s,i):i.definitionExpression,l={id:i.id,definitionExpression:null};return o&&(l.definitionExpression=o),l}))}

export { l, o, s };
