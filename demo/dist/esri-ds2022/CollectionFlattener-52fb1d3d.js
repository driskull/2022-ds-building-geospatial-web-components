import { S, bR as l$1, V as r, z as t, e, f as d, i } from './vec2f32-96e18450.js';
import { a } from './HandleOwner-e0d82d22.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let l=class extends(a(S)){constructor(t){super(t),this.getCollections=null;}initialize(){this.handles.add(l$1((()=>this.refresh())));}destroy(){this.getCollections=null;}refresh(){const t$1=r(this.getCollections)?this.getCollections():null;if(t(t$1))return void this.removeAll();let o=0;for(const s of t$1)r(s)&&(o=this._processCollection(o,s));this.splice(o,this.length);}_createNewInstance(t){return new S(t)}_processCollection(t,o){if(!o)return t;const s=this.itemFilterFunction?this.itemFilterFunction:t=>!!t;for(const e of o)if(e){if(s(e)){const o=this.indexOf(e,t);o>=0?o!==t&&this.reorder(e,t):this.add(e,t),++t;}if(this.getChildrenFunction){const o=this.getChildrenFunction(e);if(Array.isArray(o))for(const s of o)t=this._processCollection(t,s);else t=this._processCollection(t,o);}}return t}};e([d()],l.prototype,"getCollections",void 0),e([d()],l.prototype,"getChildrenFunction",void 0),e([d()],l.prototype,"itemFilterFunction",void 0),l=e([i("esri.core.CollectionFlattener")],l);const p=l;

export { p };
