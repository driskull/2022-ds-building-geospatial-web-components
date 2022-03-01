import { x as g, s, e, d, i as i$1 } from './intl-f9bcf179.js';
import { $ } from './watchUtils-47c42485.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{initialize(){this.handles.add($(this,"layer","refresh",(r=>{this.doRefresh(r.dataChanged).catch((r=>{g(r)||s.getLogger(this.declaredClass).error(r);}));})),"RefreshableLayerView");}};return e([d()],c.prototype,"layer",void 0),c=e([i$1("esri.layers.mixins.RefreshableLayerView")],c),c};

export { i };
