import { k as r, a as s$1 } from './intl-f9bcf179.js';
import { a as a$1 } from './pbf-82f66092.js';
import { e as e$1, s, t as t$1 } from './OptimizedFeature-b2ac674d.js';
import { aF as E, aE as Y } from './vec2f32-a88eee2e.js';
import { e } from './OptimizedFeatureSet-27736f1f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n$1=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class a{constructor(e){this.options=e,this.geometryTypes=n$1,this._coordinatePtr=0,this._vertexDimension=0;}createFeatureResult(){return new e}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++;}finishFeatureResult(r){if(!r||!r.features||!r.hasZ||!this.options.sourceSpatialReference||!r.spatialReference||E(r.spatialReference,this.options.sourceSpatialReference)||r.spatialReference.vcsWkid)return;const i=Y(this.options.sourceSpatialReference)/Y(r.spatialReference);if(1!==i)for(const e of r.features){if(!e$1(e))continue;const t=e.geometry.coords;for(let e=2;e<t.length;e+=3)t[e]*=i;}}addFeature(e,t){e.features.push(t);}createFeature(){return new s}createSpatialReference(){return {wkid:0}}createGeometry(){return new t$1}addField(e,t){e.fields.push(t);}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,t)=>e+t),0)*this._vertexDimension,this._coordinatePtr=0;}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t;}addCoordinatePoint(e,t){e.coords.push(t);}addLength(e,t){e.lengths.push(t);}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType;}createPointGeometry(){return new t$1}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],o=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],i=["upperLeft","lowerLeft"];function c(e){return e>=n.length?null:n[e]}function l(e){return e>=o.length?null:o[e]}function g(e){return e>=i.length?null:i[e]}function p(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function u(e,t,r){const s=3,a=t.createPointGeometry(r);for(;e.next();)switch(e.tag()){case s:{const r=e.getUInt32(),s=e.pos()+r;let n=0;for(;e.pos()<s;)t.addCoordinatePoint(a,e.getSInt64(),n++);break}default:e.skip();}return a}function y(e,t,r){const s=2,a=3,n=t.createGeometry(r),o=2+(r.hasZ?1:0)+(r.hasM?1:0);for(;e.next();)switch(e.tag()){case s:{const r=e.getUInt32(),s=e.pos()+r;let a=0;for(;e.pos()<s;)t.addLength(n,e.getUInt32(),a++);break}case a:{const r=e.getUInt32(),s=e.pos()+r;let a=0;for(t.allocateCoordinates(n);e.pos()<s;)t.addCoordinate(n,e.getSInt64(),a),a++,a===o&&(a=0);break}default:e.skip();}return n}function b(e){const t=1,r=2,n=3,o=new t$1;let i="esriGeometryPoint";for(;e.next();)switch(e.tag()){case r:{const t=e.getUInt32(),r=e.pos()+t;for(;e.pos()<r;)o.lengths.push(e.getUInt32());break}case n:{const t=e.getUInt32(),r=e.pos()+t;for(;e.pos()<r;)o.coords.push(e.getSInt64());break}case t:i=n$1[e.getEnum()];break;default:e.skip();}return {queryGeometry:o,queryGeometryType:i}}function f(e){const t=1,r=2,s=3,a=4,n=5,o=6,i=7,c=8,l=9;for(;e.next();)switch(e.tag()){case t:return e.getString();case r:return e.getFloat();case s:return e.getDouble();case a:return e.getSInt32();case n:return e.getUInt32();case o:return e.getInt64();case i:return e.getUInt64();case c:return e.getSInt64();case l:return e.getBool();default:return e.skip(),null}return null}function k(e){const t=1,r=2,s=3,a=4,n=5,o=6,i={type:c(0)};for(;e.next();)switch(e.tag()){case t:i.name=e.getString();break;case r:i.type=c(e.getEnum());break;case s:i.alias=e.getString();break;case a:i.sqlType=l(e.getEnum());break;case n:e.skip();break;case o:i.defaultValue=e.getString();break;default:e.skip();}return i}function d(e){const t=1,r=2,s={};for(;e.next();)switch(e.tag()){case t:s.name=e.getString();break;case r:s.isSystemMaintained=e.getBool();break;default:e.skip();}return s}function m(e,t,r,s){const a=1,n=2,o=4,i=t.createFeature(r);let c=0;for(;e.next();)switch(e.tag()){case a:{const t=s[c++].name;i.attributes[t]=e.processMessage(f);break}case n:i.geometry=e.processMessageWithArgs(y,t,r);break;case o:i.centroid=e.processMessageWithArgs(u,t,r);break;default:e.skip();}return i}function h(e){const t=1,r=2,s=3,a=4,n=[1,1,1,1];for(;e.next();)switch(e.tag()){case t:n[0]=e.getDouble();break;case r:n[1]=e.getDouble();break;case a:n[2]=e.getDouble();break;case s:n[3]=e.getDouble();break;default:e.skip();}return n}function T(e){const t=1,r=2,s=3,a=4,n=[0,0,0,0];for(;e.next();)switch(e.tag()){case t:n[0]=e.getDouble();break;case r:n[1]=e.getDouble();break;case a:n[2]=e.getDouble();break;case s:n[3]=e.getDouble();break;default:e.skip();}return n}function q(e){const t=1,r=2,s=3,a={originPosition:g(0)};for(;e.next();)switch(e.tag()){case t:a.originPosition=g(e.getEnum());break;case r:a.scale=e.processMessage(h);break;case s:a.translate=e.processMessage(T);break;default:e.skip();}return a}function I(e){const t=1,r=2,s=3,a={};for(;e.next();)switch(e.tag()){case t:a.shapeAreaFieldName=e.getString();break;case r:a.shapeLengthFieldName=e.getString();break;case s:a.units=e.getString();break;default:e.skip();}return a}function F(e,t){const r=1,s=2,a=3,n=4,o=5,i=t.createSpatialReference();for(;e.next();)switch(e.tag()){case r:i.wkid=e.getUInt32();break;case o:i.wkt=e.getString();break;case s:i.latestWkid=e.getUInt32();break;case a:i.vcsWkid=e.getUInt32();break;case n:i.latestVcsWkid=e.getUInt32();break;default:e.skip();}return i}function S(e,t){const r=1,s=2,a=3,n=4,o=5,i=7,c=8,l=9,g=10,u=11,y=12,b=13,f=15,h=t.createFeatureResult();h.geometryType=p(t,0);let T=!1;for(;e.next();)switch(e.tag()){case r:h.objectIdFieldName=e.getString();break;case a:h.globalIdFieldName=e.getString();break;case n:h.geohashFieldName=e.getString();break;case o:h.geometryProperties=e.processMessage(I);break;case i:h.geometryType=p(t,e.getEnum());break;case c:h.spatialReference=e.processMessageWithArgs(F,t);break;case g:h.hasZ=e.getBool();break;case u:h.hasM=e.getBool();break;case y:h.transform=e.processMessage(q);break;case l:{const t=e.getBool();h.exceededTransferLimit=t;break}case b:t.addField(h,e.processMessage(k));break;case f:T||(t.prepareFeatures(h),T=!0),t.addFeature(h,e.processMessageWithArgs(m,t,h,h.fields));break;case s:h.uniqueIdField=e.processMessage(d);break;default:e.skip();}return t.finishFeatureResult(h),h}function w(e,r$1){const s=1,a=4,n={};let o=null;for(;e.next();)switch(e.tag()){case a:o=e.processMessageWithArgs(b);break;case s:n.featureResult=e.processMessageWithArgs(S,r$1);break;default:e.skip();}return r(o)&&n.featureResult&&r$1.addQueryGeometry(n,o),n}function D(t,s){try{const e=2,a=new a$1(new Uint8Array(t),new DataView(t)),n={};for(;a.next();)if(a.tag()===e)n.queryResult=a.processMessageWithArgs(w,s);else a.skip();return n}catch(a){throw new s$1("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:a})}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,r){const u=D(t,r),o=u.queryResult.featureResult,s=u.queryResult.queryGeometry,y=u.queryResult.queryGeometryType;if(o&&o.features&&o.features.length&&o.objectIdFieldName){const e=o.objectIdFieldName;for(const t of o.features)t.attributes&&(t.objectId=t.attributes[e]);}return o&&(o.queryGeometry=s,o.queryGeometryType=y),o}

export { a, c, q, t };
