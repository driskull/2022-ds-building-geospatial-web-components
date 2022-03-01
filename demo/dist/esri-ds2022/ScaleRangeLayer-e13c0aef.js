import { e, d, i } from './intl-f9bcf179.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const s=s=>{let t=class extends s{constructor(){super(...arguments),this.minScale=0,this.maxScale=0;}get scaleRangeId(){return `${this.minScale},${this.maxScale}`}};return e([d({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),e([d({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),e([d({readOnly:!0})],t.prototype,"scaleRangeId",null),t=e([i("esri.layers.mixins.ScaleRangeLayer")],t),t};

export { s };
