import { cL as b, c as s } from './vec2f32-96e18450.js';
import { a } from './lazyLayerLoader-1dc746dc.js';
import { m as m$1, h as h$1, f as f$1, n as n$1 } from './layersLoader-a59dd769.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(e,n){if(!t(e,n)){const t=e.typeKeywords;t?t.push(n):e.typeKeywords=[n];}}function t(e,t){return !!e.typeKeywords&&e.typeKeywords.indexOf(t)>-1}function n(e,t){const n=e.typeKeywords;if(n){const e=n.indexOf(t);e>-1&&n.splice(e,1);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function u(e){return !e.portalItem||e.portalItem instanceof b||(e={...e,portalItem:new b(e.portalItem)}),l(e.portalItem).then((r=>{const t={portalItem:e.portalItem,...r.properties},a=r.constructor;return Promise.resolve(new a(t))}))}function l(e){return e.load().then(i).then(y)}function i(r){switch(r.type){case"Map Service":return m(r);case"Feature Service":return p(r);case"Feature Collection":return L(r);case"Scene Service":return f(r);case"Image Service":return d(r);case"Stream Service":return N();case"Vector Tile Service":return S();case"KML":return I();case"WFS":return h();case"WMTS":return v();case"WMS":return g();case"Feed":return w();default:return Promise.reject(new s("portal:unknown-item-type","Unknown item type '${type}'",{type:r.type}))}}function y(e){return (0,a[e.className])().then((r=>({constructor:r,properties:e.properties})))}function m(e){return T(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}))}function p(e){return M(e).then((e=>{if("object"==typeof e){const r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return {className:"GroupLayer"}}))}function f(e){return M(e).then((r=>{if("object"==typeof r){const t={};let a;if(null!=r.id?(t.layerId=r.id,a=`${e.url}/layers/${r.id}`):a=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const r={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const t of Object.keys(r))if(-1!==e.typeKeywords.indexOf(t))return {className:r[t]}}return n$1(a).then((e=>{let r="SceneLayer";const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&a[e.layerType]&&(r=a[e.layerType]),{className:r,properties:t}}))}return !1===r?n$1(e.url).then((e=>"Voxel"===(null==e?void 0:e.layerType)?{className:"VoxelLayer"}:{className:"GroupLayer"})):{className:"GroupLayer"}}))}async function L(e){await e.load();if(t(e,"Map Notes"))return {className:"MapNotesLayer"};if(t(e,"Route Layer"))return {className:"RouteLayer"};const r=await e.fetchData();return 1===h$1(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function d(e){var r,t,a;await e.load();const n=null!=(r=null==(t=e.typeKeywords)?void 0:t.map((e=>e.toLowerCase())))?r:[];if(n.indexOf("elevation 3d layer")>-1)return {className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return {className:"ImageryTileLayer"};const o=await e.fetchData(),s=null==o?void 0:o.layerType;if("ArcGISTiledImageServiceLayer"===s)return {className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===s)return {className:"ImageryLayer"};return "map"===(null==(a=(await n$1(e.url)).cacheType)?void 0:a.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function N(){return {className:"StreamLayer"}}function S(){return {className:"VectorTileLayer"}}function I(){return {className:"KMLLayer"}}function h(){return {className:"WFSLayer"}}function g(){return {className:"WMSLayer"}}function v(){return {className:"WMTSLayer"}}function w(){return {className:"StreamLayer"}}function T(e){return n$1(e.url).then((e=>e.tileInfo))}function M(e){return !e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((async r=>{if("Feature Service"===e.type)return j(r=await m$1(r,e.url));return h$1(r)>0?j(r):n$1(e.url).then(j)}))}function j(e){return 1===h$1(e)&&{id:f$1(e)}}

const portalLayers = /*#__PURE__*/Object.freeze({
	__proto__: null,
	fromItem: u,
	selectLayerClassPath: i
});

export { i, portalLayers as p, t };
