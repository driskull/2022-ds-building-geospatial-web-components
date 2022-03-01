import { bF as o, a as a$1, e, f as d, i, ax as o$1, g as r } from './vec2f32-96e18450.js';
import { t } from './Field-9ae21d09.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=new o({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let l=class extends a$1{constructor(o){super(o),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null;}};e([d({json:{write:!0}})],l.prototype,"name",void 0),e([d({json:{write:!0}})],l.prototype,"description",void 0),e([d({json:{read:s.read,write:s.write}})],l.prototype,"drawingTool",void 0),e([d({json:{write:!0}})],l.prototype,"prototype",void 0),e([d({json:{write:!0}})],l.prototype,"thumbnail",void 0),l=e([i("esri.layers.support.FeatureTemplate")],l);const a=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends a$1{constructor(o){super(o),this.id=null,this.name=null,this.domains=null,this.templates=null;}readDomains(o){const r={};for(const s of Object.keys(o))r[s]=t(o[s]);return r}writeDomains(o,r){const s={};for(const e of Object.keys(o)){var t;if(o[e])s[e]=null==(t=o[e])?void 0:t.toJSON();}r.domains=s;}};e([d({json:{write:!0}})],c.prototype,"id",void 0),e([d({json:{write:!0}})],c.prototype,"name",void 0),e([d({json:{write:!0}})],c.prototype,"domains",void 0),e([o$1("domains")],c.prototype,"readDomains",null),e([r("domains")],c.prototype,"writeDomains",null),e([d({type:[a],json:{write:!0}})],c.prototype,"templates",void 0),c=e([i("esri.layers.support.FeatureType")],c);const m=c;

export { a, m };
