import { v as p, V as r, e, f as d, i } from './vec2f32-96e18450.js';
import { a } from './HandleOwner-e0d82d22.js';
import { g } from './commonProperties-73952058.js';
import { n as n$1 } from './sublayerUtils-c6a17833.js';
import { n, l } from './floorFilterUtils-a09da11b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const m={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let c=class extends(a(p)){constructor(e){super(e),this.floors=null,this.scale=0;}destroy(){this.layer=null;}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const r=n(this.floors,e);return e.toExportImageJSON(r)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&n$1(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(m[e.propertyName])))],"layer"));}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const r$1=!(null==(e=this.floors)||!e.length),s=this.visibleSublayers.filter((e=>null!=e.definitionExpression||r$1&&null!=e.floorInfo));return s.length?JSON.stringify(s.reduce(((e,r$1)=>{const s=n(this.floors,r$1),i=r(s)?l(s,r$1):r$1.definitionExpression;return e[r$1.id]=i,e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,s=r=>{const t=this.scale,i=0===t,o=0===r.minScale||t<=r.minScale,a=0===r.maxScale||t>=r.maxScale;r.visible&&(i||o&&a)&&(r.sublayers?r.sublayers.forEach(s):e.unshift(r));};r&&r.forEach(s);const t=this._get("visibleSublayers");return !t||t.length!==e.length||t.some(((r,s)=>e[s]!==r))?e:t}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};e([d({readOnly:!0})],c.prototype,"dynamicLayers",null),e([d()],c.prototype,"floors",void 0),e([d({readOnly:!0})],c.prototype,"hasDynamicLayers",null),e([d()],c.prototype,"layer",null),e([d({readOnly:!0})],c.prototype,"layers",null),e([d({readOnly:!0})],c.prototype,"layerDefs",null),e([d({type:Number})],c.prototype,"scale",void 0),e([d(g)],c.prototype,"timeExtent",void 0),e([d({readOnly:!0})],c.prototype,"version",null),e([d({readOnly:!0})],c.prototype,"visibleSublayers",null),c=e([i("esri.layers.mixins.ExportImageParameters")],c);

export { c };
