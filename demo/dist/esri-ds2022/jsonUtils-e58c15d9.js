import { s as s$1, a as a$2, c7 as u$1, e as e$1, f as d, q as h, B as c$5, i as i$1, cl as m$3, ah as S, l, c9 as b$1, r, ca as F, cm as t$1, bP as u$2 } from './vec2f32-96e18450.js';
import { o as o$1, l as l$1, P, N } from './UniqueValueRenderer-59efe757.js';
import x from './DictionaryRenderer-148f4879.js';
import { v, p as p$3 } from './VisualVariablesMixin-f7c8cd7e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var n$2;const u=s$1.getLogger("esri.renderers.support.AttributeColorInfo");let c$4=n$2=class extends a$2{constructor(r){super(r),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null;}castField(r){return null==r?r:"function"==typeof r?(u.error(".field: field must be a string value"),null):u$1(r)}getAttributeHash(){return `${this.field}-${this.valueExpression}`}clone(){return new n$2({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};e$1([d({type:h,json:{type:[Number],write:!0}})],c$4.prototype,"color",void 0),e$1([d({type:String,json:{write:!0}})],c$4.prototype,"field",void 0),e$1([c$5("field")],c$4.prototype,"castField",null),e$1([d({type:String,json:{write:!0}})],c$4.prototype,"label",void 0),e$1([d({type:String,json:{write:!0}})],c$4.prototype,"valueExpression",void 0),e$1([d({type:String,json:{write:!0}})],c$4.prototype,"valueExpressionTitle",void 0),c$4=n$2=e$1([i$1("esri.renderers.support.AttributeColorInfo")],c$4);const a$1=c$4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var e;let p$2=e=class extends a$2{constructor(){super(...arguments),this.unit=null;}clone(){return new e({unit:this.unit})}};e$1([d({type:String,json:{write:!0}})],p$2.prototype,"unit",void 0),p$2=e=e$1([i$1("esri.renderers.support.DotDensityLegendOptions")],p$2);const c$3=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var y;let m$2=y=class extends(v(p$3)){constructor(e){super(e),this.attributes=null,this.backgroundColor=new h([0,0,0,0]),this.blendDots=!0,this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new m$3,this.dotValue=null,this.referenceDotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density";}calculateDotValue(e){if(null==this.referenceScale)return this.dotValue;const t=e/this.referenceScale*this.dotValue;return t<1?1:t}getSymbol(){return new S({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return [this.getSymbol()]}getAttributeHash(){return this.attributes&&this.attributes.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new y({attributes:l(this.attributes),backgroundColor:l(this.backgroundColor),dotBlendingEnabled:l(this.dotBlendingEnabled),dotShape:l(this.dotShape),dotSize:l(this.dotSize),dotValue:l(this.dotValue),legendOptions:l(this.legendOptions),outline:l(this.outline),referenceScale:l(this.referenceScale),visualVariables:l(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){return `${this.attributes.map((e=>e.field||e.valueExpression||""))}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const o of this.attributes)o.valueExpression&&await b$1(e,t,o.valueExpression),o.field&&e.add(o.field);}};e$1([d({type:[a$1],json:{write:!0}})],m$2.prototype,"attributes",void 0),e$1([d({type:h,json:{write:!0}})],m$2.prototype,"backgroundColor",void 0),e$1([d({type:Boolean}),o$1("dotBlendingEnabled")],m$2.prototype,"blendDots",void 0),e$1([d({type:Boolean,json:{write:!0}})],m$2.prototype,"dotBlendingEnabled",void 0),e$1([d({type:String,json:{write:!1}})],m$2.prototype,"dotShape",void 0),e$1([d({type:Number,json:{write:!1}})],m$2.prototype,"dotSize",void 0),e$1([d({type:c$3,json:{write:!0}})],m$2.prototype,"legendOptions",void 0),e$1([d({type:m$3,json:{default:null,write:!0}})],m$2.prototype,"outline",void 0),e$1([d({type:Number,json:{write:!0}})],m$2.prototype,"dotValue",void 0),e$1([d({type:Number}),o$1("dotValue")],m$2.prototype,"referenceDotValue",void 0),e$1([d({type:Number,json:{write:!0}})],m$2.prototype,"referenceScale",void 0),e$1([d({type:Number,json:{write:!0}})],m$2.prototype,"seed",void 0),e$1([r({dotDensity:"dot-density"})],m$2.prototype,"type",void 0),m$2=y=e$1([i$1("esri.renderers.DotDensityRenderer")],m$2);const b=m$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$1;let c$2=p$1=class extends a$2{constructor(o){super(o),this.color=null,this.ratio=null;}clone(){return new p$1({color:this.color,ratio:this.ratio})}};e$1([d({type:h,json:{write:!0}})],c$2.prototype,"color",void 0),e$1([d({type:Number,json:{write:!0}})],c$2.prototype,"ratio",void 0),c$2=p$1=e$1([i$1("esri.renderers.support.HeatmapColorStop")],c$2);const i=c$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a;let m$1=a=class extends p$3{constructor(t){super(t),this.blurRadius=10,this.colorStops=[new i({ratio:0,color:new h("rgba(255, 140, 0, 0)")}),new i({ratio:.75,color:new h("rgba(255, 140, 0, 1)")}),new i({ratio:.9,color:new h("rgba(255, 0,   0, 1)")})],this.field=null,this.fieldOffset=0,this.maxPixelIntensity=100,this.minPixelIntensity=0,this.type="heatmap";}async collectRequiredFields(t,e){const r=this.field;r&&"string"==typeof r&&F(t,e,r);}getAttributeHash(){return null}getMeshHash(){return `${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new a({blurRadius:this.blurRadius,colorStops:l(this.colorStops),field:this.field,maxPixelIntensity:this.maxPixelIntensity,minPixelIntensity:this.minPixelIntensity})}};e$1([d({type:Number,json:{write:!0}})],m$1.prototype,"blurRadius",void 0),e$1([d({type:[i],json:{write:!0}})],m$1.prototype,"colorStops",void 0),e$1([d({type:String,json:{write:!0}})],m$1.prototype,"field",void 0),e$1([d({type:Number,json:{write:{overridePolicy:(t,e,r)=>({enabled:null==r})}}})],m$1.prototype,"fieldOffset",void 0),e$1([d({type:Number,json:{write:!0}})],m$1.prototype,"maxPixelIntensity",void 0),e$1([d({type:Number,json:{write:!0}})],m$1.prototype,"minPixelIntensity",void 0),e$1([r({heatmap:"heatmap"})],m$1.prototype,"type",void 0),m$1=a=e$1([i$1("esri.renderers.HeatmapRenderer")],m$1);const c$1=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var c;let n$1=c=class extends(v(p$3)){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple";}async collectRequiredFields(e,s){await Promise.all([this.collectSymbolFields(e,s),this.collectVVRequiredFields(e,s)]);}async collectSymbolFields(e,s){await Promise.all(this.getSymbols().map((r=>r.collectRequiredFields(e,s))));}getSymbol(e,s){return this.symbol}async getSymbolAsync(e,s){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,s)=>e+s.getAttributeHash()),"")}getMeshHash(){return this.getSymbols().reduce(((e,s)=>e+JSON.stringify(s)),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new c({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:l(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}};e$1([d({type:String,json:{write:!0}})],n$1.prototype,"description",void 0),e$1([d({type:String,json:{write:!0}})],n$1.prototype,"label",void 0),e$1([d(l$1)],n$1.prototype,"symbol",void 0),e$1([r({simple:"simple"})],n$1.prototype,"type",void 0),n$1=c=e$1([i$1("esri.renderers.SimpleRenderer")],n$1);const p=n$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m={key:"type",base:p$3,typeMap:{heatmap:c$1,simple:p,"unique-value":P,"class-breaks":N,"dot-density":b,dictionary:x},errorContext:"renderer"},n={key:"type",base:p$3,typeMap:{simple:p,"unique-value":P,"class-breaks":N},errorContext:"renderer"};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(e,r){return o(e,null,r)}const s=u$2({types:m});function o(r,n,t){return r?r&&(r.styleName||r.styleUrl)&&"uniqueValue"!==r.type?(t&&t.messages&&t.messages.push(new t$1("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+r.type+"'",{definition:r,context:t})),null):s(r,n,t):null}

export { m, n, o, p, t };
