import { gC as y$1, V as r, d as n, ct as e, e as e$1, f as d, g as r$1, i as i$1 } from './vec2f32-96e18450.js';
import { l, b } from './MultiOriginJSONSupport-4c0182cb.js';
import { i } from './BlendLayer-9582dc10.js';
import { y } from './OperationalLayer-f90d3a65.js';
import { w } from './PortalLayer-f5d3d653.js';
import { s } from './ScaleRangeLayer-cc4d317e.js';
import { c, p } from './TablesMixin-6baefa72.js';
import './mat4-59c51b41.js';
import './_commonjsHelpers-020ca939.js';
import './commonProperties-73952058.js';
import './TimeExtent-ef5feff1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let m=class extends(i(s(y(w(c(p(l(b)))))))){constructor(i){super(i),this._visibilityHandles={},this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._visibilityWatcher=this._visibilityWatcher.bind(this);}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0);}_writeLayers(i,e,s,r$1){const o=[];if(!i)return o;i.forEach((i=>{const e=y$1(i,r$1.webmap?r$1.webmap.getLayerJSONFromResourceInfo(i):null,r$1);r(e)&&e.layerType&&o.push(e);})),e.layers=o;}set portalItem(i){this._set("portalItem",i);}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible);}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}loadAll(){return n(this,(i=>{i(this.layers);}))}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0);}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible);}_turnOffOtherLayers(i){this.layers.forEach((e=>{e!==i&&(e.visible=!1);}));}_enforceVisibility(i,e$1){if(!e(this).initialized)return;const t=this.layers;let s=t.find((i=>i.visible));switch(i){case"exclusive":t.length&&!s&&(s=t.getItemAt(0),s.visible=!0),this._turnOffOtherLayers(s);break;case"inherited":t.forEach((i=>{i.visible=e$1;}));}}_visibleWatcher(i){"inherited"===this.visibilityMode&&this.layers.forEach((e=>{e.visible=i;}));}_visibilityWatcher(i,e,t,s){const r=s;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(r):this._isAnyLayerVisible()||(r.visible=!0);break;case"inherited":r.visible=this.visible;}}_isAnyLayerVisible(){return this.layers.some((i=>i.visible))}};e$1([d()],m.prototype,"fullExtent",void 0),e$1([d({json:{read:!1,write:{ignoreOrigin:!0}}})],m.prototype,"layers",void 0),e$1([r$1("layers")],m.prototype,"_writeLayers",null),e$1([d({type:["GroupLayer"]})],m.prototype,"operationalLayerType",void 0),e$1([d({json:{origins:{"web-document":{read:!1,write:!1}}}})],m.prototype,"portalItem",null),e$1([d()],m.prototype,"spatialReference",void 0),e$1([d({json:{read:!1},readOnly:!0,value:"group"})],m.prototype,"type",void 0),e$1([d({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],m.prototype,"visibilityMode",null),m=e$1([i$1("esri.layers.GroupLayer")],m);const u=m;

export default u;
