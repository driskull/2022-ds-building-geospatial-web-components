import { y as y$1, s as s$1 } from './TimeExtent-c4789fb1.js';
import { aU as b$1, bh as m$3, X as o$2, b as r$2, bg as p$2, c as r$3, a1 as M, a2 as k } from './vec2f32-a88eee2e.js';
import { t, A as e$1, E, k as r$1, e as e$2, d as d$2, i as i$1, az as s$2, a4 as o$1 } from './intl-f9bcf179.js';
import { a as a$1 } from './JSONSupport-add604e3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function m$2(t){return "feature"===(null==t?void 0:t.type)}function s(t){return "map-image"===(null==t?void 0:t.type)}function f$1(t){return void 0!==t.timeInfo}async function u$1(n,r){if(0===n.length)return y$1.allTime;const u=n.filter(f$1);await Promise.all(u.map((t=>t.load({signal:r}))));const a=[],l=[];for(const t of u)(m$2(t)||s(t))&&t.timeInfo.hasLiveData?a.push(t):l.push(t);const c=t$1=>t(t$1)||t$1.isAllTime,p=l.map((t=>t.timeInfo.fullTimeExtent));if(p.some(c))return y$1.allTime;const T=a.map((async t=>{const{timeExtent:n}=await t.fetchRecomputedExtents({signal:r});return n||e$1(t.timeInfo.fullTimeExtent)})),d=(await E(T)).map((t=>t.value));if(d.some(c))return y$1.allTime;return d.concat(p).reduce(((t,e)=>t.union(e)))}function a(e){if(!e)return e;const{start:i,end:o}=e;return new y$1({start:r$1(i)?s$1(i,-i.getTimezoneOffset(),"minutes"):i,end:r$1(o)?s$1(o,-o.getTimezoneOffset(),"minutes"):o})}function l$2(e){if(!e)return e;const{start:i,end:o}=e;return new y$1({start:r$1(i)?s$1(i,i.getTimezoneOffset(),"minutes"):i,end:r$1(o)?s$1(o,o.getTimezoneOffset(),"minutes"):o})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$1;let i=p$1=class extends a$1{async collectRequiredFields(r,s){return b$1(r,s,this.expression)}clone(){return new p$1({expression:this.expression,title:this.title})}};e$2([d$2({type:String,json:{write:!0}})],i.prototype,"expression",void 0),e$2([d$2({type:String,json:{write:!0}})],i.prototype,"title",void 0),i=p$1=e$2([i$1("esri.layers.support.FeatureExpressionInfo")],i);const c$2=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(n){return null!=m$3[n]}function r(n){return 1/(m$3[n]||1)}function e(){const n=Object.keys(m$3);return n.sort(),n}const o=e();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l$1;const m$1=s$2()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),d$1=new o$1({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let c$1=l$1=class extends a$1{constructor(){super(...arguments),this.offset=null;}readFeatureExpressionInfo(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,r,o,t){r[o]=e.write({},t),"0"===e.expression&&(r.featureExpression={value:0});}get mode(){const{offset:e,featureExpressionInfo:r}=this;return this._isOverridden("mode")?this._get("mode"):r$1(e)||r?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e);}set unit(e){this._set("unit",e);}write(e,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,r):null}clone(){return new l$1({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}};e$2([d$2({type:c$2,json:{write:!0}})],c$1.prototype,"featureExpressionInfo",void 0),e$2([o$2("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],c$1.prototype,"readFeatureExpressionInfo",null),e$2([r$2("featureExpressionInfo",{featureExpressionInfo:{type:c$2},"featureExpression.value":{type:[0]}})],c$1.prototype,"writeFeatureExpressionInfo",null),e$2([d$2({type:m$1.apiValues,nonNullable:!0,json:{type:m$1.jsonValues,read:m$1.read,write:{writer:m$1.write,isRequired:!0}}})],c$1.prototype,"mode",null),e$2([d$2({type:Number,json:{write:!0}})],c$1.prototype,"offset",void 0),e$2([d$2({type:o,json:{type:String,read:d$1.read,write:d$1.write}})],c$1.prototype,"unit",null),c$1=l$1=e$2([i$1("esri.layers.support.ElevationInfo")],c$1);const x=c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const l={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:!0}},p={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,r)=>!r.disablePopup},write:{enabled:!0,writer(e,r,i){r[i]=!e;}}}},m={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},f={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:p$2}}},c={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},d={value:null,type:x,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function y(e){return {type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const u={type:Number,json:{origins:{"web-document":{write:!0,read:!0},"portal-item":{write:!0}}}},w={...u,json:{...u.json,origins:{"web-document":{...u.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,r,i)=>i&&"service"!==i.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?r$3(r.layerDefinition.drawingInfo.transparency):void 0:r$3(r.drawingInfo.transparency)}}},g={type:y$1,readOnly:!0,get(){var e,r;if(null==(e=this.layer)||!e.timeInfo)return null;const{datesInUnknownTimezone:i,timeOffset:n,useViewTime:a$1}=this.layer,s=null==(r=this.view)?void 0:r.timeExtent;let l=this.layer.timeExtent;i&&(l=l$2(l));let p=a$1?s&&l?s.intersection(l):s||l:l;if(!p||p.isEmpty||p.isAllTime)return p;n&&(p=p.offset(-n.value,n.unit)),i&&(p=a(p));const m=this._get("timeExtent");return p.equals(m)?m:p}},v={type:M,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,n)=>{const t=M.fromJSON(e);return null!=n.spatialReference&&"object"==typeof n.spatialReference&&(t.spatialReference=k.fromJSON(n.spatialReference)),t}}}},read:!1}},j={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},b={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}},I={type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}};

export { I, b, c, d, f, g, j, l, m, p, u, v, w, x, y };
