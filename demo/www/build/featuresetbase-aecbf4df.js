import { J as l, s as s$1, g, F, q as s$2 } from './arcadeUtils-69024017.js';
import { D, q as q$1, r, P as P$1, G, y, _, e, a, b as a$1, g as g$1, w, T, j, c as T$1, C, v, E, d as w$1 } from './featureSetUtils-4302dcb1.js';
import { J as J$1, z, P, O, X as X$1, L as L$1, o as oe, Z as Z$1, t, a as t$1, b as M, A, n as ne, S as Se, _ as _$1 } from './languageUtils-884f50f9.js';
import { d as n, b as E$1 } from './SpatialFilter-323b552d.js';
import { w as s, ac as L, Z as O$1 } from './intl-f9bcf179.js';
import { WhereClause as m } from './WhereClause-f2a82fd7.js';
import { G as Ge } from './FeatureLayer-d0cffc77.js';
import { y as y$1 } from './Field-c0076075.js';
import './vec2f32-a88eee2e.js';
import './JSONSupport-add604e3.js';
import './featureConversionUtils-a3d8ec70.js';
import './OptimizedFeature-b2ac674d.js';
import './OptimizedFeatureSet-27736f1f.js';
import './number-18a63da8.js';
import './FeatureSetReader-cc8f6cc6.js';
import './centroid-b9a46ae8.js';
import './MD5-6027098a.js';
import './FieldsIndex-a1139706.js';
import './pbfQueryUtils-cdfd4767.js';
import './pbf-82f66092.js';
import './FeatureSet-4fb958ac.js';
import './fieldType-064db2a2.js';
import './Query-689827fc.js';
import './TimeExtent-c4789fb1.js';
import './QueryTask-b0a64993.js';
import './utils-8e500178.js';
import './scaleUtils-88e9eb11.js';
import './floorFilterUtils-a09da11b.js';
import './executeQueryJSON-99aa27d5.js';
import './query-f9bc0945.js';
import './normalizeUtils-4a0b810f.js';
import './arcgisLayerUrl-44d1a3ba.js';
import './queryZScale-5052a726.js';
import './zscale-41674b48.js';
import './TopFeaturesQuery-1ab1fe83.js';
import './Task-634f7f0c.js';
import './FeatureType-b8b87e07.js';
import './_commonjsHelpers-321aa363.js';
import './geometryEngineAsync-40a40c23.js';
import './workers-b2f67d28.js';
import './_commonjsHelpers-020ca939.js';
import './UniqueValueRenderer-e0928c5a.js';
import './VisualVariablesMixin-8a22cf6b.js';
import './colorRamps-76de530b.js';
import './diffUtils-090e743c.js';
import './styleUtils-4a488c71.js';
import './DictionaryRenderer-3a040527.js';
import './LRUCache-257bc9a6.js';
import './MemCache-cd2cb7cb.js';
import './jsonUtils-d380cab0.js';
import './aliasOf-93c38510.js';
import './Handles-c08f164d.js';
import './MultiOriginJSONSupport-9580fd5e.js';
import './HeightModelInfo-d5d3aa1e.js';
import './HandleOwner-8815c4dd.js';
import './reactiveUtils-7b2ef76d.js';
import './watchUtils-47c42485.js';
import './APIKeyMixin-8575f837.js';
import './ArcGISService-7e7b6abe.js';
import './BlendLayer-324633cc.js';
import './mat4-ae511675.js';
import './CustomParametersMixin-a86b0825.js';
import './labelingInfo-25767b21.js';
import './FeatureReductionCluster-71a4b0f9.js';
import './commonProperties-dc6e2688.js';
import './OperationalLayer-4ec71ac3.js';
import './OrderedLayer-c71463ea.js';
import './PortalLayer-1931d936.js';
import './RefreshableLayer-1f637573.js';
import './ScaleRangeLayer-e13c0aef.js';
import './TemporalLayer-53bb7671.js';
import './TimeInfo-eeca5f4b.js';
import './fieldProperties-49d5cbad.js';
import './LayerFloorInfo-b956bff1.js';
import './styleUtils-d505ace0.js';
import './popupUtils-74d35ca3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function J(e,t,n,r){if(1===r.length){if(J$1(r[0]))return l(e,r[0],-1);if(z(r[0]))return l(e,r[0].toArray(),-1)}return l(e,r,-1)}function q(e,t,n){const r=e.getVariables();if(r.length>0){const i=[];for(let e=0;e<r.length;e++){const a={name:r[e]};i.push(t.evaluateIdentifier(n,a));}return s(i).then((t=>{const n={};for(let e=0;e<r.length;e++)n[r[e]]=t[e];return e.parameters=n,e}))}return L(e)}function K(e,t,n=null){for(const r in e)if(r.toLowerCase()===t.toLowerCase())return e[r];return n}function Y(e){if(null===e)return null;const t={type:K(e,"type",""),name:K(e,"name","")};if("range"===t.type)t.range=K(e,"range",[]);else {t.codedValues=[];for(const n of K(e,"codedValues",[]))t.codedValues.push({name:K(n,"name",""),code:K(n,"code",null)});}return t}function Z(e){if(null===e)return null;const t={},n=K(e,"wkt",null);null!==n&&(t.wkt=n);const r=K(e,"wkid",null);return null!==r&&(t.wkid=r),t}function Q(e){if(null===e)return null;const t={hasZ:K(e,"hasz",!1),hasM:K(e,"hasm",!1)},n=K(e,"spatialreference",null);n&&(t.spatialReference=Z(n));const r=K(e,"x",null);if(null!==r)return t.x=r,t.y=K(e,"y",null),t;const i=K(e,"rings",null);if(null!==i)return t.rings=i,t;const a=K(e,"paths",null);if(null!==a)return t.paths=a,t;const s=K(e,"points",null);if(null!==s)return t.points=s,t;for(const l of ["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const n=K(e,l,null);null!==n&&(t[l]=n);}return t}function X(e,t){for(const n of t)if(n===e)return !0;return !1}function ee(e){return !!e.layerDefinition&&(!!e.featureSet&&(!1!==X(e.layerDefinition.geometryType,["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&(null!==e.layerDefinition.objectIdField&&""!==e.layerDefinition.objectIdField&&(!1!==J$1(e.layerDefinition.fields)&&!1!==J$1(e.featureSet.features)))))}function te(B){"async"===B.mode&&(B.functions.getuser=function(n,r){return B.standardFunctionAsync(n,r,((r,s,l)=>{P(l,1,2);let o=O(l[1],""),f=!0===o;if(o=!0===o||!1===o?"":X$1(o),l[0]instanceof s$1){let e=null;return n.services&&n.services.portal&&(e=n.services.portal),e=D(l[0],e),q$1(e,o,f).then((e=>{if(e){const n=JSON.parse(JSON.stringify(e));for(const e of ["lastLogin","created","modified"])void 0!==n[e]&&null!==n[e]&&(n[e]=new Date(n[e]));return g.convertObjectToArcadeDictionary(n)}return null}))}let u=null;if(L$1(l[0])&&(u=l[0]),u)return f=!1,o?null:u.load().then((()=>u.getOwningSystemUrl())).then((r=>{if(!r)return o?null:u.getIdentityUser().then((e=>e?g.convertObjectToArcadeDictionary({username:e}):null));let s=null;return n.services&&n.services.portal&&(s=n.services.portal),s=D(new s$1(r),s),q$1(s,o,f).then((e=>{if(e){const n=JSON.parse(JSON.stringify(e));for(const e of ["lastLogin","created","modified"])void 0!==n[e]&&null!==n[e]&&(n[e]=new Date(n[e]));return g.convertObjectToArcadeDictionary(n)}return null}))}));throw new Error("Invalid Parameter")}))},B.signatures.push({name:"getuser",min:"1",max:"2"}),B.functions.featuresetbyid=function(e,t){return B.standardFunctionAsync(e,t,((e,t,n)=>{if(P(n,2,4),n[0]instanceof r){const e=X$1(n[1]);let t=O(n[2],null);const r=oe(O(n[3],!0));if(null===t&&(t=["*"]),!1===J$1(t))throw new Error("Invalid Parameter");return n[0].featureSetById(e,r,t)}throw new Error("Invalid Parameter")}))},B.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),B.functions.getfeatureset=function(e,t){return B.standardFunctionAsync(e,t,((t,r,i)=>{if(P(i,1,2),i[0]instanceof F){let t=O(i[1],"datasource");return null===t&&(t="datasource"),t=X$1(t).toLowerCase(),P$1(i[0]._layer,t,e.lrucache,e.interceptor,e.spatialReference)}throw new Error("Invalid Parameter")}))},B.signatures.push({name:"getfeatureset",min:"1",max:"2"}),B.functions.featuresetbyportalitem=function(t,n){return B.standardFunctionAsync(t,n,((n,r,a)=>{if(P(a,2,5),null===a[0])throw new Error("Portal is required");if(a[0]instanceof s$1){const e=X$1(a[1]),n=X$1(a[2]);let r=O(a[3],null);const s=oe(O(a[4],!0));if(null===r&&(r=["*"]),!1===J$1(r))throw new Error("Invalid Parameter");let o=null;return t.services&&t.services.portal&&(o=t.services.portal),o=D(a[0],o),G(e,n,t.spatialReference,r,s,o,t.lrucache,t.interceptor)}if(!1===Z$1(a[0]))throw new Error("Portal is required");const s=X$1(a[0]),o=X$1(a[1]);let f=O(a[2],null);const u=oe(O(a[3],!0));if(null===f&&(f=["*"]),!1===J$1(f))throw new Error("Invalid Parameter");if(t.services&&t.services.portal)return G(s,o,t.spatialReference,f,u,t.services.portal,t.lrucache,t.interceptor);throw new Error("Portal is required")}))},B.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),B.functions.featuresetbyname=function(e,t){return B.standardFunctionAsync(e,t,((e,t,n)=>{if(P(n,2,4),n[0]instanceof r){const e=X$1(n[1]);let t=O(n[2],null);const r=oe(O(n[3],!0));if(null===t&&(t=["*"]),!1===J$1(t))throw new Error("Invalid Parameter");return n[0].featureSetByName(e,r,t)}throw new Error("Invalid Parameter")}))},B.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),B.functions.featureset=function(e,n){return B.standardFunction(e,n,((n,r,i)=>{P(i,1,1);let a=i[0];const s={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(Z$1(a))a=JSON.parse(a),void 0!==a.layerDefinition?(s.layerDefinition=a.layerDefinition,s.featureSet=a.featureSet,a.layerDefinition.spatialReference&&(s.layerDefinition.spatialReference=a.layerDefinition.spatialReference)):(s.featureSet.features=a.features,s.featureSet.geometryType=a.geometryType,s.layerDefinition.geometryType=s.featureSet.geometryType,s.layerDefinition.objectIdField=a.objectIdFieldName,s.layerDefinition.typeIdField=a.typeIdFieldName,s.layerDefinition.globalIdField=a.globalIdFieldName,s.layerDefinition.fields=a.fields,a.spatialReference&&(s.layerDefinition.spatialReference=a.spatialReference));else {if(!(i[0]instanceof g))throw new Error("Invalid Parameter");{a=JSON.parse(i[0].castToText());const e=K(a,"layerdefinition");if(null!==e){s.layerDefinition.geometryType=K(e,"geometrytype",""),s.featureSet.geometryType=s.layerDefinition.geometryType,s.layerDefinition.globalIdField=K(e,"globalidfield",""),s.layerDefinition.objectIdField=K(e,"objectidfield",""),s.layerDefinition.typeIdField=K(e,"typeidfield","");const t=K(e,"spatialreference",null);t&&(s.layerDefinition.spatialReference=Z(t));for(const r of K(e,"fields",[])){const e={name:K(r,"name",""),alias:K(r,"alias",""),type:K(r,"type",""),nullable:K(r,"nullable",!0),editable:K(r,"editable",!0),length:K(r,"length",null),domain:Y(K(r,"domain"))};s.layerDefinition.fields.push(e);}const n=K(a,"featureset",null);if(n){const e={};for(const t of s.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of K(n,"features",[])){const n={},r=K(t,"attributes",{});for(const t in r)n[e[t.toLowerCase()]]=r[t];s.featureSet.features.push({attributes:n,geometry:Q(K(t,"geometry",null))});}}}else {s.layerDefinition.geometryType=K(a,"geometrytype",""),s.featureSet.geometryType=s.layerDefinition.geometryType,s.layerDefinition.objectIdField=K(a,"objectidfieldname",""),s.layerDefinition.typeIdField=K(a,"typeidfieldname","");const e=K(a,"spatialreference",null);e&&(s.layerDefinition.spatialReference=Z(e));for(const n of K(a,"fields",[])){const e={name:K(n,"name",""),alias:K(n,"alias",""),type:K(n,"type",""),nullable:K(n,"nullable",!0),editable:K(n,"editable",!0),length:K(n,"length",null),domain:Y(K(n,"domain"))};s.layerDefinition.fields.push(e);}const t={};for(const n of s.layerDefinition.fields)t[n.name.toLowerCase()]=n.name;for(const n of K(a,"features",[])){const e={},r=K(n,"attributes",{});for(const n in r)e[t[n.toLowerCase()]]=r[n];s.featureSet.features.push({attributes:e,geometry:Q(K(n,"geometry",null))});}}}}if(!1===ee(s))throw new Error("Invalid Parameter");return y.create(s,e.spatialReference)}))},B.signatures.push({name:"featureset",min:"1",max:"1"}),B.functions.filter=function(e,t$2){return B.standardFunctionAsync(e,t$2,((t$2,n,r)=>{if(P(r,2,2),J$1(r[0])||z(r[0])){const t$2=[];let n=r[0];n instanceof t&&(n=n.toArray());let i=null;if(r[1]instanceof t$1)i=B.arcadeCustomFunctionHandler(r[1]);else if(r[1]instanceof M)i=(...t)=>r[1].fn(e,{preparsed:!0,arguments:t});else {if(!(r[1]instanceof A))throw new Error("Invalid Parameter");i=(...e)=>{if(e.length!==r[1].paramCount)throw new Error("Invalid parameters");return r[1].fn(...e)};}return n.reduce(((e,r,a)=>e.then((e=>{a>0&&!0===e&&t$2.push(n[a-1]);const s=i(r);return O$1(s)?s:L(s)}))),Promise.resolve(!1)).then((e=>(!0===e&&n.length>0&&t$2.push(n[n.length-1]),t$2)))}return L$1(r[0])?r[0].load().then((t=>{const n=m.create(r[1],t.getFieldsIndex()),i=n.getVariables();if(i.length>0){const t=[];for(let n=0;n<i.length;n++){const r={name:i[n]};t.push(B.evaluateIdentifier(e,r));}return s(t).then((e=>{const t={};for(let n=0;n<i.length;n++)t[i[n]]=e[n];return n.parameters=t,new _({parentfeatureset:r[0],whereclause:n})}))}return L(new _({parentfeatureset:r[0],whereclause:n}))})):B.failDefferred("Filter cannot accept this parameter type")}))},B.signatures.push({name:"filter",min:"2",max:"2"}),B.functions.orderby=function(e$1,t){return B.standardFunctionAsync(e$1,t,((e$1,t,n)=>{if(P(n,2,2),L$1(n[0])){const e$1=new e(n[1]);return L(new a({parentfeatureset:n[0],orderbyclause:e$1}))}return B.failDefferred("Order cannot accept this parameter type")}))},B.signatures.push({name:"orderby",min:"2",max:"2"}),B.functions.top=function(e,t){return B.standardFunctionAsync(e,t,((e,t,n)=>(P(n,2,2),L$1(n[0])?L(new a$1({parentfeatureset:n[0],topnum:n[1]})):J$1(n[0])?ne(n[1])>=n[0].length?n[0].slice(0):n[0].slice(0,ne(n[1])):z(n[0])?ne(n[1])>=n[0].length()?n[0].slice(0):n[0].slice(0,ne(n[1])):B.failDefferred("Top cannot accept this parameter type"))))},B.signatures.push({name:"top",min:"2",max:"2"}),B.functions.first=function(e,t){return B.standardFunctionAsync(e,t,((e,t,r)=>(P(r,1,1),L$1(r[0])?r[0].first(e.abortSignal).then((e=>{if(null!==e){const t=F.createFromGraphicLikeObject(e.geometry,e.attributes,r[0]);t._underlyingGraphic=e,e=t;}return e})):J$1(r[0])?0===r[0].length?L(null):L(r[0][0]):z(r[0])?0===r[0].length()?L(null):L(r[0].get(0)):null)))},B.signatures.push({name:"first",min:"1",max:"1"}),B.functions.attachments=function(e,r){return B.standardFunctionAsync(e,r,((r,i,a)=>{P(a,1,2);const s={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(a.length>1)if(a[1]instanceof g){if(a[1].hasField("minsize")&&(s.minsize=ne(a[1].field("minsize"))),a[1].hasField("metadata")&&(s.returnMetadata=oe(a[1].field("metadata"))),a[1].hasField("maxsize")&&(s.maxsize=ne(a[1].field("maxsize"))),a[1].hasField("types")){const e=Se(a[1].field("types"),!1);e.length>0&&(s.types=e);}}else if(null!==a[1])throw new Error("Invalid Parameter");if(a[0]instanceof F){let t=a[0]._layer;return t instanceof Ge&&(t=g$1(t,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===t||!1===L$1(t)?[]:t.load().then((()=>t.queryAttachments(a[0].field(t.objectIdField),s.minsize,s.maxsize,s.types,s.returnMetadata)))}if(null===a[0])return [];throw new Error("Invalid Parameter")}))},B.signatures.push({name:"attachments",min:"1",max:"2"}),B.functions.featuresetbyrelationshipname=function(e,t){return B.standardFunctionAsync(e,t,((t,r,i)=>{P(i,2,4);const a=i[0],s=X$1(i[1]);let l=O(i[2],null);const c=oe(O(i[3],!0));if(null===l&&(l=["*"]),!1===J$1(l))throw new Error("Invalid Parameter");if(null===i[0])return null;if(!(i[0]instanceof F))throw new Error("Invalid Parameter");let d=a._layer;return d instanceof Ge&&(d=g$1(d,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===d||!1===L$1(d)?null:d.load().then((t=>{const n$1=t.relationshipMetaData().filter((e=>e.name===s));if(0===n$1.length)return null;if(void 0!==n$1[0].relationshipTableId&&null!==n$1[0].relationshipTableId&&n$1[0].relationshipTableId>-1)return w(t,n$1[0],a.field(t.objectIdField),t.spatialReference,l,c,e.lrucache,e.interceptor);let r=t.serviceUrl();return r?(r="/"===r.charAt(r.length-1)?r+n$1[0].relatedTableId.toString():r+"/"+n$1[0].relatedTableId.toString(),T(r,t.spatialReference,l,c,e.lrucache,e.interceptor).then((e=>e.load().then((()=>e.relationshipMetaData())).then((r=>{if(r=r.filter((e=>e.id===n$1[0].id)),!1===a.hasField(n$1[0].keyField)||null===a.field(n$1[0].keyField))return t.getFeatureByObjectId(a.field(t.objectIdField),[n$1[0].keyField]).then((t=>{if(t){const i=m.create(r[0].keyField+"= @id",e.getFieldsIndex());return i.parameters={id:t.attributes[n$1[0].keyField]},e.filter(i)}return new n({parentfeatureset:e})}));const i=m.create(r[0].keyField+"= @id",e.getFieldsIndex());return i.parameters={id:a.field(n$1[0].keyField)},e.filter(i)}))))):null}))}))},B.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),B.functions.featuresetbyassociation=function(e,t){return B.standardFunctionAsync(e,t,((t,r,i)=>{P(i,2,3);const a=i[0],s=X$1(O(i[1],"")).toLowerCase(),l=Z$1(i[2])?X$1(i[2]):null;if(null===i[0])return null;if(!(i[0]instanceof F))throw new Error("Invalid Parameter");let f=a._layer;return f instanceof Ge&&(f=g$1(f,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===f||!1===L$1(f)?null:f.load().then((()=>{const t=f.serviceUrl();return j(t,e.spatialReference)})).then((e=>{let t=null,n=null,r=!1;if(null!==l&&""!==l&&void 0!==l){for(const t of e.terminals)t.terminalName===l&&(n=t.terminalId);null===n&&(r=!0);}const i=e.associations.getFieldsIndex(),o=i.get("TOGLOBALID").name,u=i.get("FROMGLOBALID").name,c=i.get("TOTERMINALID").name,d=i.get("FROMTERMINALID").name,m$1=i.get("FROMNETWORKSOURCEID").name,p=i.get("TONETWORKSOURCEID").name,y=i.get("ASSOCIATIONTYPE").name,g=i.get("ISCONTENTVISIBLE").name,h=i.get("OBJECTID").name;for(const s of f.fields)if("global-id"===s.type){t=a.field(s.name);break}let F=null,I=new T$1(new y$1({name:"percentalong",alias:"percentalong",type:"double"}),m.create("0",e.associations.getFieldsIndex())),E$1=new T$1(new y$1({name:"side",alias:"side",type:"string"}),m.create("''",e.associations.getFieldsIndex()));const D="globalid",w="globalId",b={};for(const a in e.lkp)b[a]=e.lkp[a].sourceId;const A=new C(new y$1({name:"classname",alias:"classname",type:"string"}),null,b);let N="";switch(s){case"midspan":{N=`((${o}='${t}') OR ( ${u}='${t}')) AND (${y} IN (5))`,A.codefield=m.create(`CASE WHEN (${o}='${t}') THEN ${m$1} ELSE ${p} END`,e.associations.getFieldsIndex());const n=s$2(E.findField(e.associations.fields,u));n.name=D,n.alias=D,F=new T$1(n,m.create(`CASE WHEN (${u}='${t}') THEN ${o} ELSE ${u} END`,e.associations.getFieldsIndex())),I=e.unVersion>=4?new w$1(E.findField(e.associations.fields,i.get("PERCENTALONG").name)):new T$1(new y$1({name:"percentalong",alias:"percentalong",type:"double"}),m.create("0",e.associations.getFieldsIndex()));break}case"junctionedge":{N=`((${o}='${t}') OR ( ${u}='${t}')) AND (${y} IN (4,6))`,A.codefield=m.create(`CASE WHEN (${o}='${t}') THEN ${m$1} ELSE ${p} END`,e.associations.getFieldsIndex());const n=s$2(E.findField(e.associations.fields,u));n.name=D,n.alias=D,F=new T$1(n,m.create(`CASE WHEN (${u}='${t}') THEN ${o} ELSE ${u} END`,e.associations.getFieldsIndex())),E$1=new T$1(new y$1({name:"side",alias:"side",type:"string"}),m.create(`CASE WHEN (${y}=4) THEN 'from' ELSE 'to' END`,e.associations.getFieldsIndex()));break}case"connected":{let r=`${o}='@T'`,i=`${u}='@T'`;null!==n&&(r+=` AND ${c}=@A`,i+=` AND ${d}=@A`),N="(("+r+") OR ("+i+"))",N=_$1(N,"@T",t),r=_$1(r,"@T",t),null!==n&&(r=_$1(r,"@A",n.toString()),N=_$1(N,"@A",n.toString())),A.codefield=m.create("CASE WHEN "+r+` THEN ${m$1} ELSE ${p} END`,e.associations.getFieldsIndex());const a=s$2(E.findField(e.associations.fields,u));a.name=D,a.alias=D,F=new T$1(a,m.create("CASE WHEN "+r+` THEN ${u} ELSE ${o} END`,e.associations.getFieldsIndex()));break}case"container":N=`${o}='${t}' AND ${y} = 2`,null!==n&&(N+=` AND ${c} = `+n.toString()),A.codefield=m$1,N="( "+N+" )",F=new v(E.findField(e.associations.fields,u),D,D);case"content":N=`(${u}='${t}' AND ${y} = 2)`,null!==n&&(N+=` AND ${d} = `+n.toString()),A.codefield=p,N="( "+N+" )",F=new v(E.findField(e.associations.fields,o),D,D);break;case"structure":N=`(${o}='${t}' AND ${y} = 3)`,null!==n&&(N+=` AND ${c} = `+n.toString()),A.codefield=m$1,N="( "+N+" )",F=new v(E.findField(e.associations.fields,u),D,w);break;case"attached":N=`(${u}='${t}' AND ${y} = 3)`,null!==n&&(N+=` AND ${d} = `+n.toString()),A.codefield=p,N="( "+N+" )",F=new v(E.findField(e.associations.fields,o),D,w);break;default:throw new Error("Invalid Parameter")}r&&(N="1 <> 1");return new E({parentfeatureset:e.associations,adaptedFields:[new w$1(E.findField(e.associations.fields,h)),new w$1(E.findField(e.associations.fields,g)),F,E$1,A,I],extraFilter:N?m.create(N,e.associations.getFieldsIndex()):null})}))}))},B.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),B.functions.groupby=function(e,n){return B.standardFunctionAsync(e,n,((n,r,i)=>(P(i,3,3),L$1(i[0])?i[0].load().then((n=>{const r=[],a=[];let s$1=!1,l=[];if(Z$1(i[1]))l.push(i[1]);else if(i[1]instanceof g)l.push(i[1]);else if(J$1(i[1]))l=i[1];else {if(!z(i[1]))return B.failDefferred("Illegal Value: GroupBy");l=i[1].toArray();}for(const e of l)if(Z$1(e)){const t=m.create(X$1(e),n.getFieldsIndex()),i=!0===E$1(t)?X$1(e):"%%%%FIELDNAME";r.push({name:i,expression:t}),"%%%%FIELDNAME"===i&&(s$1=!0);}else {if(!(e instanceof g))return B.failDefferred("Illegal Value: GroupBy");{const t=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",i=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===t&&(s$1=!0),!t)return B.failDefferred("Illegal Value: GroupBy");r.push({name:t,expression:m.create(i||t,n.getFieldsIndex())});}}if(l=[],Z$1(i[2]))l.push(i[2]);else if(J$1(i[2]))l=i[2];else if(z(i[2]))l=i[2].toArray();else {if(!(i[2]instanceof g))return B.failDefferred("Illegal Value: GroupBy");l.push(i[2]);}for(const e of l){if(!(e instanceof g))return B.failDefferred("Illegal Value: GroupBy");{const t=e.hasField("name")?e.field("name"):"",r=e.hasField("statistic")?e.field("statistic"):"",i=e.hasField("expression")?e.field("expression"):"";if(!t||!r||!i)return B.failDefferred("Illegal Value: GroupBy");a.push({name:t,statistic:r.toLowerCase(),expression:m.create(i,n.getFieldsIndex())});}}if(s$1){const e={};for(const r of n.fields)e[r.name.toLowerCase()]=1;for(const n of r)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);for(const n of a)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of r)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString();}}const o=[];for(const t of r)o.push(q(t.expression,B,e));for(const t of a)o.push(q(t.expression,B,e));return o.length>0?s(o).then((()=>L(i[0].groupby(r,a)))):L(i[0].groupby(r,a))})):B.failDefferred("Illegal Value: GroupBy"))))},B.signatures.push({name:"groupby",min:"3",max:"3"}),B.functions.distinct=function(e,n){return B.standardFunctionAsync(e,n,((n,r,i)=>L$1(i[0])?(P(i,2,2),i[0].load().then((n=>{const r=[];let a=[];if(Z$1(i[1]))a.push(i[1]);else if(i[1]instanceof g)a.push(i[1]);else if(J$1(i[1]))a=i[1];else {if(!z(i[1]))return B.failDefferred("Illegal Value: GroupBy");a=i[1].toArray();}let s$1=!1;for(const e of a)if(Z$1(e)){const t=m.create(X$1(e),n.getFieldsIndex()),i=!0===E$1(t)?X$1(e):"%%%%FIELDNAME";r.push({name:i,expression:t}),"%%%%FIELDNAME"===i&&(s$1=!0);}else {if(!(e instanceof g))return B.failDefferred("Illegal Value: GroupBy");{const t=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",i=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===t&&(s$1=!0),!t)return B.failDefferred("Illegal Value: GroupBy");r.push({name:t,expression:m.create(i||t,n.getFieldsIndex())});}}if(s$1){const e={};for(const r of n.fields)e[r.name.toLowerCase()]=1;for(const n of r)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of r)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString();}}const l=[];for(const t of r)l.push(q(t.expression,B,e));return l.length>0?s(l).then((()=>L(i[0].groupby(r,[])))):L(i[0].groupby(r,[]))}))):J("distinct",n,r,i)))});}

export { te as registerFunctions };
