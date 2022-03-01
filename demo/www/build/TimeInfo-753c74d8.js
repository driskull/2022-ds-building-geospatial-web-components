import { cy as s, a as a$2, e as e$1, f as d$1, i as i$1, ax as o$1, V as r, l as l$1, g as r$1 } from './vec2f32-96e18450.js';
import { o, y } from './TimeExtent-ef5feff1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e=s()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var p$1;let a$1=p$1=class extends a$2{constructor(r){super(r),this.value=0,this.unit="milliseconds";}toMilliseconds(){return o(this.value,this.unit,"milliseconds")}clone(){return new p$1({value:this.value,unit:this.unit})}};e$1([d$1({type:Number,json:{write:!0},nonNullable:!0})],a$1.prototype,"value",void 0),e$1([d$1({type:e.apiValues,json:{type:e.jsonValues,read:e.read,write:e.write},nonNullable:!0})],a$1.prototype,"unit",void 0),a$1=p$1=e$1([i$1("esri.TimeInterval")],a$1);const l=a$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var i;let a=i=class extends a$2{constructor(e){super(e),this.respectsDaylightSaving=!1,this.timezone=null;}readRespectsDaylightSaving(e,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving}clone(){const{respectsDaylightSaving:e,timezone:t}=this;return new i({respectsDaylightSaving:e,timezone:t})}};e$1([d$1({type:Boolean,json:{write:!0}})],a.prototype,"respectsDaylightSaving",void 0),e$1([o$1("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],a.prototype,"readRespectsDaylightSaving",null),e$1([d$1({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],a.prototype,"timezone",void 0),a=i=e$1([i$1("esri.layers.support.TimeReference")],a);const p=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var d;let c=d=class extends a$2{constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeReference=null,this.trackIdField=null,this.useTime=!0;}readFullTimeExtent(e,r){if(!r.timeExtent||!Array.isArray(r.timeExtent)||2!==r.timeExtent.length)return null;const i=new Date(r.timeExtent[0]),l=new Date(r.timeExtent[1]);return new y({start:i,end:l})}writeFullTimeExtent(e,t){e&&r(e.start)&&r(e.end)?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null;}readInterval(e$1,t){return t.timeInterval&&t.timeIntervalUnits?new l({value:t.timeInterval,unit:e.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new l({value:t.defaultTimeInterval,unit:e.fromJSON(t.defaultTimeIntervalUnits)}):null}writeInterval(e,t){if(e){const r=e.toJSON();t.timeInterval=r.value,t.timeIntervalUnits=r.unit;}else t.timeInterval=null,t.timeIntervalUnits=null;}clone(){const{cumulative:e,endField:t,hasLiveData:r,interval:i,startField:o,timeReference:n,fullTimeExtent:a,trackIdField:s,useTime:m}=this;return new d({cumulative:e,endField:t,hasLiveData:r,interval:i,startField:o,timeReference:l$1(n),fullTimeExtent:l$1(a),trackIdField:s,useTime:m})}};e$1([d$1({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],c.prototype,"cumulative",void 0),e$1([d$1({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],c.prototype,"endField",void 0),e$1([d$1({type:y,json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,"fullTimeExtent",void 0),e$1([o$1("fullTimeExtent",["timeExtent"])],c.prototype,"readFullTimeExtent",null),e$1([r$1("fullTimeExtent")],c.prototype,"writeFullTimeExtent",null),e$1([d$1({type:Boolean,json:{write:!0}})],c.prototype,"hasLiveData",void 0),e$1([d$1({type:l,json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,"interval",void 0),e$1([o$1("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],c.prototype,"readInterval",null),e$1([r$1("interval")],c.prototype,"writeInterval",null),e$1([d$1({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],c.prototype,"startField",void 0),e$1([d$1({type:p,json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,"timeReference",void 0),e$1([d$1({type:String,json:{write:{enabled:!0,allowNull:!0}}})],c.prototype,"trackIdField",void 0),e$1([d$1({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],c.prototype,"useTime",void 0),c=d=e$1([i$1("esri.layers.support.TimeInfo")],c);const v=c;

export { e, l, v };
