import { bF as o, a as a$1, l, e, f as d$2, ay as i, V as r$1, i as i$1, c as s$1, bH as o$1, bN as j } from './vec2f32-96e18450.js';
import { n as n$2, a as a$2 } from './BlendLayer-9582dc10.js';
import { y as y$1 } from './TimeExtent-ef5feff1.js';
import { b } from './Query-f41de01f.js';
import { b as b$1 } from './FeatureReductionCluster-303b0389.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c$1;const m=new o({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),u=new o({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let d$1=c$1=class extends a$1{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null;}createQuery(e={}){const{where:t,geometry:i,spatialRelationship:r,timeExtent:s,objectIds:n,units:a,distance:l$1}=this;return new b({geometry:l(i),objectIds:l(n),spatialRelationship:r,timeExtent:l(s),where:t,units:a,distance:l$1,...e})}clone(){const{where:e,geometry:t,spatialRelationship:i,timeExtent:r,objectIds:s,units:n,distance:a}=this;return new c$1({geometry:l(t),objectIds:l(s),spatialRelationship:i,timeExtent:l(r),where:e,units:n,distance:a})}};e([d$2({type:String,json:{write:!0}})],d$1.prototype,"where",void 0),e([d$2({types:i,json:{write:!0}})],d$1.prototype,"geometry",void 0),e([d$2({type:m.apiValues,json:{name:"spatialRel",read:{reader:m.read},write:{allowNull:!1,writer:m.write,overridePolicy(){return {enabled:r$1(this.geometry)}}}}})],d$1.prototype,"spatialRelationship",void 0),e([d$2({type:Number,json:{write:{overridePolicy(e){return {enabled:null!=e&&null!=this.geometry}}}}})],d$1.prototype,"distance",void 0),e([d$2({type:[Number],json:{write:!0}})],d$1.prototype,"objectIds",void 0),e([d$2({type:u.apiValues,json:{read:u.read,write:{writer:u.write,overridePolicy(e){return {enabled:null!=e&&null!=this.geometry}}}}})],d$1.prototype,"units",void 0),e([d$2({type:y$1,json:{write:!0}})],d$1.prototype,"timeExtent",void 0),d$1=c$1=e([i$1("esri.layers.support.FeatureFilter")],d$1);const y=d$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d;let n$1=d=class extends a$1{constructor(e){super(e),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1;}write(e,t){const l=super.write(e,t);if(null!=t&&t.origin){if(l.filter){const e=Object.keys(l.filter);var i;if(e.length>1||"where"!==e[0])return null==(i=t.messages)||i.push(new s$1("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:t.layer,effect:this})),null}var s;if("showExcludedLabels"in l)return null==(s=t.messages)||s.push(new s$1("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:t.layer,effect:this})),null}return l}clone(){return new d({filter:r$1(this.filter)&&this.filter.clone(),includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};e([d$2({type:y,json:{write:{allowNull:!0,writer(e,r,t,l){const s=null==e?void 0:e.write({},l);s&&0!==Object.keys(s).length?o$1(t,s,r):o$1(t,null,r);}}}})],n$1.prototype,"filter",void 0),e([d$2({json:{write:!0,origins:{"web-map":{read:{reader:n$2},write:{writer:a$2,overridePolicy(){return {allowNull:null!=this.excludedEffect,isRequired:null==this.excludedEffect}}}}}}})],n$1.prototype,"includedEffect",void 0),e([d$2({json:{write:!0,origins:{"web-map":{read:{reader:n$2},write:{writer:a$2,overridePolicy(){return {allowNull:null!=this.includedEffect,isRequired:null==this.includedEffect}}}}}}})],n$1.prototype,"excludedEffect",void 0),e([d$2({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":{name:"showExcludedLabels",default:!0}}}})],n$1.prototype,"excludedLabelsVisible",void 0),n$1=d=e([i$1("esri.layers.support.FeatureEffect")],n$1);const a=n$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const t$3=t=>{let p=class extends t{constructor(){super(...arguments),this.featureEffect=null;}};return e([d$2({type:a,json:{origins:{"web-map":{write:{allowNull:!0}}}}})],p.prototype,"featureEffect",void 0),p=e([i$1("esri.layers.mixins.FeatureEffectLayer")],p),p};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let t$2=class extends a$1{constructor(){super(...arguments),this.type=null;}};e([d$2({type:["selection","cluster"],readOnly:!0,json:{read:!1,write:!0}})],t$2.prototype,"type",void 0),t$2=e([i$1("esri.layers.support.FeatureReduction")],t$2);const p$1=t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var t$1;let c=t$1=class extends p$1{constructor(r){super(r),this.type="selection";}clone(){return new t$1}};e([d$2({type:["selection"]})],c.prototype,"type",void 0),c=t$1=e([i$1("esri.layers.support.FeatureReductionSelection")],c);const p=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s={types:{key:"type",base:p$1,typeMap:{selection:p,cluster:b$1}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:{key:"type",base:p$1,typeMap:{selection:b$1}}},"web-scene":{types:{key:"type",base:p$1,typeMap:{selection:p}}}}}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n=/\[([^\[\]]+)\]/gi;function r(r,i,o){return r?r.map((r=>{const s=new j;if(s.read(r,o),s.labelExpression){const e=i.fields||i.layerDefinition&&i.layerDefinition.fields||this.fields;s.labelExpression=s.labelExpression.replace(n,((n,r)=>`[${t(r,e)}]`));}return s})):null}function t(e,n){if(!n)return e;const r=e.toLowerCase();for(let t=0;t<n.length;t++){const e=n[t].name;if(e.toLowerCase()===r)return e}return e}

export { a, p as b, p$1 as p, r, s, t$3 as t, y };
