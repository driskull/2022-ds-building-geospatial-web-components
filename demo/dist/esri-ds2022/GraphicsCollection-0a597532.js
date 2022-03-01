import { s, S, z as t, dj as t$1, n, e, f as d, i, bC as n$1, W as h, t as b } from './vec2f32-96e18450.js';
import { a as a$1 } from './HandleOwner-e0d82d22.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
s.getLogger("esri.core.support.OwningCollection");let m=class extends(a$1(S)){constructor(e){super(e),this.handles.add([this.on("before-add",(e=>{t(e.item)&&e.preventDefault();})),this.on("after-add",(e=>this._own(e.item))),this.on("after-remove",(e=>this._release(e.item)))]);}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._releaseAll(),this._set("owner",e),this._ownAll());}_ownAll(){for(const e of this.items)this._own(e);}_releaseAll(){for(const e of this.items)this._release(e);}_createNewInstance(e){return this.itemType?new(S.ofType(this.itemType.Type))(e):new S(e)}};function a(e,t){return {type:e,cast:t$1,set(s){const r=n(s,this._get(t),e);r.owner=this,this._set(t,r);}}}e([d()],m.prototype,"owner",null),m=e([i("esri.core.support.OwningCollection")],m);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let c=class extends m{_own(r){r.layer&&"remove"in r.layer&&r.layer!==this.owner&&r.layer.remove(r),r.layer=this.owner;}_release(r){r.layer===this.owner&&(r.layer=null);}};e([n$1({Type:h,ensureType:b(h)})],c.prototype,"itemType",void 0),c=e([i("esri.support.GraphicsCollection")],c);

export { a, c, m };
