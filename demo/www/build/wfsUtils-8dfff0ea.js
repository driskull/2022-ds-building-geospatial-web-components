import { $ as C$1, fa as c, c as s$1, z as t$1, gb as et, eS as B$1, gc as st, aS as k$1, aR as M$1, bA as E$1, E as E$2, cX as i, V as r } from './vec2f32-96e18450.js';
import { n as n$1, o as o$1 } from './iteratorUtils-07a71e8c.js';
import { u as un, Q as Q$1 } from './projection-f0a42b06.js';
import { i as i$1 } from './geojson-4fd1ce8f.js';
import { n as n$2, o } from './xmlUtils-ed1df04b.js';
import { y } from './Field-9ae21d09.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){var s;return null!=(s=t(n))?s:e(n)}function e(n){const e=new Date(n).getTime();return Number.isNaN(e)?null:e}function t(n){var e,t,u,r;const o=s.exec(n);if(!o)return null;const l=o.groups,f=+l.year,i=+l.month-1,d=+l.day,a=+(null!=(e=l.hours)?e:"0"),c=+(null!=(t=l.minutes)?t:"0"),m=+(null!=(u=l.seconds)?u:"0");if(a>23)return null;if(c>59)return null;if(m>59)return null;const g=null!=(r=l.ms)?r:"0",T=g?+g.padEnd(3,"0").substring(0,3):0;let N;if(l.isUTC)N=Date.UTC(f,i,d,a,c,m,T);else if(l.offsetSign){const n=+l.offsetHours,e=+l.offsetMinutes;N=6e4*("+"===l.offsetSign?-1:1)*(60*n+e)+Date.UTC(f,i,d,a,c,m,T);}else N=new Date(f,i,d,a,c,m,T).getTime();return Number.isNaN(N)?null:N}const s=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const S="xlink:href",x="2.0.0",v="__esri_wfs_id__",C="wfs-layer:getWFSLayerTypeInfo-error",E="wfs-layer:empty-service",N="wfs-layer:feature-type-not-found",P="wfs-layer:geojson-not-supported",R="wfs-layer:kvp-encoding-not-supported",j="wfs-layer:malformed-json",A="wfs-layer:unknown-geometry-type",G="wfs-layer:unknown-field-type",k="wfs-layer:unsupported-spatial-reference",U="wfs-layer:unsupported-wfs-version";async function D(t,r){const n=I((await C$1(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:x,...null==r?void 0:r.customParameters},signal:null==r?void 0:r.signal})).data);return $(t,n),n}function I(e){const t=te(e);ne(t),ae(t);const r=t.firstElementChild,a=n$1(M(r));return {operations:L(r),get featureTypes(){return Array.from(a())},readFeatureTypes:a}}const O=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function L(e){let r=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(o(e,{OperationsMetadata:{Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return {DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(S);}}}};case"DescribeFeatureType":return {DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(S);}}}};case"GetFeature":return {DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(S);}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return {AllowedValues:{Value:e=>{const t=e.textContent;O.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t);}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return {DefaultValue:e=>{r="true"===e.textContent.toLowerCase();}};case"ImplementsResultPaging":return {DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase();}}}}}}),!r)throw new s$1(R,"WFS service doesn't support key/value pair (KVP) encoding");if(t$1(n.GetFeature.outputFormat))throw new s$1(P,"WFS service doesn't support GeoJSON output format");return n}function $(e,t){et(e)&&(B$1(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=st(t.operations.DescribeFeatureType.url)),B$1(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=st(t.operations.GetFeature.url)));}function M(e){return n$2(e,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},r=new Set([4326]),n=e=>{var t,n;const a=parseInt(null==(t=e.textContent.match(/(?<wkid>\d+$)/i))||null==(n=t.groups)?void 0:n.wkid,10);Number.isNaN(a)||r.add(a);};return o(e,{Name:e=>{const{name:r,prefix:n}=re(e.textContent);t.typeName=`${n}:${r}`,t.name=r,t.namespacePrefix=n,t.namespaceUri=e.lookupNamespaceURI(n);},Abstract:e=>{t.description=e.textContent;},Title:e=>{t.title=e.textContent;},WGS84BoundingBox:e=>{t.extent=V(e);},DefaultSRS:n,DefaultCRS:n,OtherSRS:n,OtherCRS:n}),t.title||(t.title=t.name),t.supportedSpatialReferences.push(...r),t}}})}function V(e){let t,r,n,a;for(const o of e.children)switch(o.localName){case"LowerCorner":[t,r]=o.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[n,a]=o.textContent.split(" ").map((e=>Number.parseFloat(e)));}return {xmin:t,ymin:r,xmax:n,ymax:a,spatialReference:c}}function W(e,t,n){return o$1(e,(e=>n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t))}async function X(e,t,r,n={}){var a;const{featureType:o,extent:i}=await Y(e,t,r,n),{fields:s,geometryType:u,swapXY:l,objectIdField:p,geometryField:c}=await q(e,o.typeName,n);return {url:e.operations.GetCapabilities.url,name:o.name,namespaceUri:o.namespaceUri,fields:s,geometryField:c,geometryType:u,objectIdField:p,spatialReference:null!=(a=n.spatialReference)?a:k$1.WGS84,extent:i,swapXY:l,wfsCapabilities:e,customParameters:n.customParameters}}async function Y(e,r,n,o={}){const{spatialReference:i=k$1.WGS84}=o,s=e.readFeatureTypes(),u=r?W(s,r,n):s.next().value;if(t$1(u))throw r?new s$1(N,`The type '${r}' could not be found in the service`):new s$1(E,"The service is empty");let l=new M$1({...u.extent,spatialReference:i});if(!E$1(i,c))try{await un(c,i,void 0,o),l=Q$1(l,c);}catch{throw new s$1(k,"Projection not supported")}return {extent:l,spatialReference:i,featureType:u}}async function q(e,r,n={}){const[o,s]=await E$2([J(e.operations.DescribeFeatureType.url,r,n),_(e,r,n)]);if(o.error||s.error)throw new s$1(C,`An error occurred while getting info about the feature type '${r}'`,{error:o.error||s.error});const{fields:u,errors:l}=o.value,p=o.value.geometryType||s.value.geometryType,c=s.value.swapXY;if(t$1(p))throw new s$1(A,`The geometry type could not be determined for type '${r}`,{typeName:r,geometryType:p,fields:u,errors:l});return {...z(u),geometryType:p,swapXY:c}}function z(e){var t;const r=e.find((e=>"geometry"===e.type));let n=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),n||(n=new y({name:v,type:"oid",alias:v}),e.unshift(n)),{geometryField:null!=(t=null==r?void 0:r.name)?t:null,objectIdField:n.name,fields:e}}async function _(t,r,n={}){var a;let o,i$2=!1;const[s,u]=await Promise.all([K(t.operations.GetFeature.url,r,t.operations.GetFeature.outputFormat,{...n,count:1}),C$1(t.operations.GetFeature.url,{responseType:"text",query:Z(r,void 0,{...n,count:1}),signal:null==n?void 0:n.signal})]),l="FeatureCollection"===s.type&&(null==(a=s.features[0])?void 0:a.geometry);if(l){let e;switch(o=i.fromJSON(i$1(l.type)),l.type){case"Point":e=l.coordinates;break;case"LineString":case"MultiPoint":e=l.coordinates[0];break;case"MultiLineString":case"Polygon":e=l.coordinates[0][0];break;case"MultiPolygon":e=l.coordinates[0][0][0];}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(u.data);if(t){const r=e[0].toFixed(3),n=e[1].toFixed(3),a=parseFloat(t[1]).toFixed(3);r===parseFloat(t[2]).toFixed(3)&&n===a&&(i$2=!0);}}return {geometryType:o,swapXY:i$2}}async function J(t,r,n){return Q(r,(await C$1(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:x,TYPENAME:r,...null==n?void 0:n.customParameters},signal:null==n?void 0:n.signal})).data)}function Q(e,n){const{name:a}=re(e),i=te(n);ae(i);const s=o$1(n$2(i.firstElementChild,{element:e=>({name:e.getAttribute("name"),typeName:re(e.getAttribute("type")).name})}),(({name:e})=>e===a));if(r(s)){const e=o$1(n$2(i.firstElementChild,{complexType:e=>e}),(e=>e.getAttribute("name")===s.typeName));if(r(e))return B(e)}throw new s$1(N,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(i)})}const H=new Set(["objectid","fid"]);function B(e){var r,n;const a=[],o$1=[];let i;const s=n$2(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const u of s){const s=u.getAttribute("name");if(!s)continue;let l,p;if(u.hasAttribute("type")?l=re(u.getAttribute("type")).name:o(u,{simpleType:{restriction:e=>(l=re(e.getAttribute("base")).name,{maxLength:e=>{p=+e.getAttribute("value");}})}}),!l)continue;const c="true"===u.getAttribute("nillable");let m=!1;switch(l.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":o$1.push(new y({name:s,alias:s,type:"integer",nullable:c}));break;case"float":case"double":case"decimal":o$1.push(new y({name:s,alias:s,type:"double",nullable:c}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":o$1.push(new y({name:s,alias:s,type:"string",nullable:c,length:null!=(r=p)?r:255}));break;case"datetime":case"date":o$1.push(new y({name:s,alias:s,type:"date",nullable:c,length:null!=(n=p)?n:36}));break;case"pointpropertytype":i="point",m=!0;break;case"multipointpropertytype":i="multipoint",m=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":i="polyline",m=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":i="polygon",m=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":m=!0,a.push(new s$1(A,`geometry type '${l}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:a.push(new s$1(G,`Unknown field type '${l}'`,{type:(new XMLSerializer).serializeToString(e)}));}m&&o$1.push(new y({name:s,alias:s,type:"geometry",nullable:c}));}for(const t of o$1)if("integer"===t.type&&!t.nullable&&H.has(t.name.toLowerCase())){t.type="oid";break}return {geometryType:i,fields:o$1,errors:a}}async function K(r,n$1,a,o){let{data:i}=await C$1(r,{responseType:"text",query:Z(n$1,a,o),signal:null==o?void 0:o.signal});i=i.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{var s;if(null!=o&&null!=(s=o.dateFields)&&s.length){const e=new Set(o.dateFields);return JSON.parse(i,((t,r)=>e.has(t)?n(r):r))}return JSON.parse(i)}catch(u){throw new s$1(j,"Error while parsing the response",{response:i,error:u})}}function Z(e,t,r){return {SERVICE:"WFS",REQUEST:"GetFeature",VERSION:x,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:null==r?void 0:r.startIndex,COUNT:null==r?void 0:r.count,...null==r?void 0:r.customParameters}}async function ee(t,r,n){const a=te((await C$1(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:x,TYPENAMES:r,RESULTTYPE:"hits",...null==n?void 0:n.customParameters},signal:null==n?void 0:n.signal})).data);ae(a);const o=Number.parseFloat(a.firstElementChild.getAttribute("numberMatched"));return Number.isNaN(o)?0:o}function te(e){return (new DOMParser).parseFromString(e.trim(),"text/xml")}function re(e){const[t,r]=e.split(":");return {prefix:r?t:"",name:null!=r?r:t}}function ne(e){const r=e.firstElementChild.getAttribute("version");if(r&&r!==x)throw new s$1(U,`Unsupported WFS version ${r}. Supported version: ${x}`)}function ae(e){let r,n;if(o(e.firstElementChild,{Exception:e=>(r=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent;}})}),r)throw new s$1(`wfs-layer:${r}`,n)}

export { D, K, W, X, v, z };
