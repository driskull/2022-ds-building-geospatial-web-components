import { a, e as e$1, f as d$1, i as i$1, df as o, l, bO as B, dg as D, bN as j } from './vec2f32-96e18450.js';
import { p as p$2, m as m$1 } from './commonProperties-73952058.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var r;let e=r=class extends a{constructor(){super(...arguments),this.statisticType=null,this.onStatisticField=null,this.onStatisticValueExpression=null;}clone(){return new r({statisticType:this.statisticType,onStatisticField:this.onStatisticField,onStatisticValueExpression:this.onStatisticValueExpression})}};e$1([d$1({type:String,json:{write:!0}})],e.prototype,"statisticType",void 0),e$1([d$1({type:String,json:{write:!0}})],e.prototype,"onStatisticField",void 0),e$1([d$1({type:String,json:{write:!0}})],e.prototype,"onStatisticValueExpression",void 0),e=r=e$1([i$1("esri.layers.support.OutStatistic")],e);const p$1=e;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p;let i=p=class extends a{constructor(){super(...arguments),this.name=null;}clone(){return new p({name:this.name,outStatistic:this.outStatistic.clone()})}};e$1([d$1({type:String,json:{write:!0}})],i.prototype,"name",void 0),e$1([d$1({type:p$1,json:{write:!0}})],i.prototype,"outStatistic",void 0),i=p=e$1([i$1("esri.layers.support.AggregateField")],i);const c=i;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var m;let d=m=class extends a{constructor(e){super(e),this.type="cluster",this.clusterRadius=o("80px"),this.clusterMinSize=o("12px"),this.clusterMaxSize=o("50px"),this.popupEnabled=!0,this.popupTemplate=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null;}clone(){return new m({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:l(this.labelingInfo),labelsVisible:this.labelsVisible,fields:l(this.fields),popupEnabled:this.popupEnabled,popupTemplate:l(this.popupTemplate)})}};e$1([d$1({type:["cluster"],readOnly:!0,json:{write:!0}})],d.prototype,"type",void 0),e$1([d$1({type:Number,cast:e=>"auto"===e?e:o(e),json:{write:!0}})],d.prototype,"clusterRadius",void 0),e$1([d$1({type:Number,cast:o,json:{write:!0}})],d.prototype,"clusterMinSize",void 0),e$1([d$1({type:Number,cast:o,json:{write:!0}})],d.prototype,"clusterMaxSize",void 0),e$1([d$1(p$2)],d.prototype,"popupEnabled",void 0),e$1([d$1({type:B,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],d.prototype,"popupTemplate",void 0),e$1([d$1({types:D})],d.prototype,"symbol",void 0),e$1([d$1({type:[j],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],d.prototype,"labelingInfo",void 0),e$1([d$1(m$1)],d.prototype,"labelsVisible",void 0),e$1([d$1({type:[c],json:{write:!0}})],d.prototype,"fields",void 0),d=m=e$1([i$1("esri.layers.support.FeatureReductionCluster")],d);const b=d;

export { b };
