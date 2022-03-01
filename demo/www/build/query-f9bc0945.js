import { k as r, C, a8 as z, a7 as O } from './intl-f9bcf179.js';
import { bW as v } from './vec2f32-a88eee2e.js';
import { v as v$1 } from './normalizeUtils-4a0b810f.js';
import { y as y$1 } from './arcgisLayerUrl-44d1a3ba.js';
import { t as t$1 } from './pbfQueryUtils-cdfd4767.js';
import { r as r$1 } from './queryZScale-5052a726.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(n){const o={};for(const e in n){if("declaredClass"===e)continue;const r=n[e];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){o[e]=[];for(let n=0;n<r.length;n++)o[e][n]=t(r[n]);}else "object"==typeof r?r.toJSON&&(o[e]=JSON.stringify(r)):o[e]=r;}return o}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m="Layer does not support extent calculation.";function y(t,r$1,n=!1){const o=t.geometry,s=t.toJSON(),a=s,u=t.outSpatialReference;let l,m;if(r(o)){if(l=o.spatialReference,m=o.spatialReference.wkid||JSON.stringify(o.spatialReference),a.geometryType=v(o),n&&"extent"===o.type)a.geometry=`${o.xmin},${o.ymin},${o.xmax},${o.ymax}`;else if(n&&"point"===o.type)a.geometry=`${o.x},${o.y}`;else {const t=o.toJSON();delete t.spatialReference,a.geometry=JSON.stringify(t);}a.inSR=m;}if(l||(l=u),s.groupByFieldsForStatistics&&(a.groupByFieldsForStatistics=s.groupByFieldsForStatistics.join(",")),s.objectIds&&(a.objectIds=s.objectIds.join(",")),s.orderByFields&&(a.orderByFields=s.orderByFields.join(",")),!s.outFields||!s.returnDistinctValues&&(null!=r$1&&r$1.returnCountOnly||null!=r$1&&r$1.returnExtentOnly||null!=r$1&&r$1.returnIdsOnly)?delete a.outFields:-1!==s.outFields.indexOf("*")?a.outFields="*":a.outFields=s.outFields.join(","),s.outSR?a.outSR=s.outSR.wkid||JSON.stringify(s.outSR):o&&(s.returnGeometry||s.returnCentroid)&&(a.outSR=a.inSR),s.returnGeometry&&delete s.returnGeometry,s.outStatistics&&(a.outStatistics=JSON.stringify(s.outStatistics)),s.pixelSize&&(a.pixelSize=JSON.stringify(s.pixelSize)),s.quantizationParameters&&(n&&r(l)&&r(t.quantizationParameters)&&r(t.quantizationParameters.extent)&&l.equals(t.quantizationParameters.extent.spatialReference)&&delete s.quantizationParameters.extent.spatialReference,a.quantizationParameters=JSON.stringify(s.quantizationParameters)),s.parameterValues&&(a.parameterValues=JSON.stringify(s.parameterValues)),s.rangeValues&&(a.rangeValues=JSON.stringify(s.rangeValues)),s.dynamicDataSource&&(a.layer=JSON.stringify({source:s.dynamicDataSource}),delete s.dynamicDataSource),s.timeExtent){const t=s.timeExtent,{start:e,end:r}=t;null==e&&null==r||(a.time=e===r?e:`${null==e?"null":e},${null==r?"null":r}`),delete s.timeExtent;}return a}async function c(t,r$2,n,i){const o=r(r$2.timeExtent)&&r$2.timeExtent.isEmpty?{data:{features:[]}}:await g(t,r$2,"json",i);return r$1(r$2,n,o.data),o}async function p(t,r$1,n,i){if(r(r$1.timeExtent)&&r$1.timeExtent.isEmpty)return Promise.resolve({data:n.createFeatureResult()});const o=await f(t,r$1,i),s=o;return s.data=t$1(o.data,n),s}function f(t,e,r){return g(t,e,"pbf",r)}function d(t,r$1,n){return r(r$1.timeExtent)&&r$1.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):g(t,r$1,"json",n,{returnIdsOnly:!0})}function x(t,r$1,n){return r(r$1.timeExtent)&&r$1.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):g(t,r$1,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function S(t,r$1,n){return r(r$1.timeExtent)&&r$1.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):g(t,r$1,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(m);if(e.hasOwnProperty("count"))throw new Error(m);return t}))}function g(i,a,u,m={},c={}){const p="string"==typeof i?O(i):i,f=a.geometry?[a.geometry]:[];return m.responseType="pbf"===u?"array-buffer":"json",v$1(f,null,m).then((n=>{const i=n&&n[0];r(i)&&((a=a.clone()).geometry=i);const o=y$1(p.path),f=t({...p.query,f:u,...c,...y(a,c,o)});return C(z(p.path,"query"),{...m,query:{...f,...m.query}})}))}

const query = /*#__PURE__*/Object.freeze({
	__proto__: null,
	executeQuery: c,
	executeQueryForCount: x,
	executeQueryForExtent: S,
	executeQueryForIds: d,
	executeQueryPBF: p,
	executeQueryPBFBuffer: f,
	queryToQueryStringParameters: y,
	runQuery: g
});

export { S, c, d, f, p, query as q, t, x };
