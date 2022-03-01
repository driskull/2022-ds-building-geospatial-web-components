import { n as n$2 } from './esri-ds2022-map-viewer-eaf1b8e9.js';
import { v as p$1, ac as i, s as s$1, l, e, f as d$1, i as i$1, u as n$1, z as t, ez as z } from './vec2f32-96e18450.js';
import { d as d$2, b as n, e as e$1 } from './BlendLayer-9582dc10.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a$1=-1;let h=class extends p$1{constructor(t){super(t),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=i("mapview-transitions-duration"),this.effects=[];}set effect(t){if(this._get("effect")!==(t=t||"")){this._set("effect",t);try{this._transitionTo(_(t));}catch(e){this._transitionTo([]),s$1.getLogger(this.declaredClass).warn("Invalid Effect",{effect:t,error:e});}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(t){this._updateForScale(t);}get transitioning(){return null!==this._to}canTransitionTo(t){try{return this.scale>0&&p(this._current,_(t),this.scale)}catch{return !1}}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e);}end(){this._applyTimeTransition(this.duration);}_transitionTo(t){this.scale>0&&p(this._current,t,this.scale)?(this._final=t,this._to=l(t),m(this._current,this._to,this.scale),this._from=l(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?l(this._current[0].effects):[]);}_applyTimeTransition(t){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let s=0;s<this._current.length;s++){const t=this._current[s],r=this._from[s],i=this._to[s];t.scale=g(r.scale,i.scale,e);for(let s=0;s<t.effects.length;s++){const n=t.effects[s],c=r.effects[s],o=i.effects[s];n.interpolate(c,o,e);}}1===e&&(this._current=this._final,this._set("effects",this._current[0]?l(this._current[0].effects):[]),this._from=this._to=this._final=null);}_updateForScale(t){if(this._set("scale",t),0===this._current.length)return;const e=this._current,s=this._current.length-1;let r,i,n=1;if(1===e.length||t>=e[0].scale)i=r=e[0].effects;else if(t<=e[s].scale)i=r=e[s].effects;else for(let c=0;c<s;c++){const s=e[c],o=e[c+1];if(s.scale>=t&&o.scale<=t){n=(t-s.scale)/(o.scale-s.scale),r=s.effects,i=o.effects;break}}for(let c=0;c<this.effects.length;c++){this.effects[c].interpolate(r[c],i[c],n);}}};e([d$1()],h.prototype,"_to",void 0),e([d$1()],h.prototype,"duration",void 0),e([d$1({value:""})],h.prototype,"effect",null),e([d$1({readOnly:!0})],h.prototype,"effects",void 0),e([d$1({readOnly:!0})],h.prototype,"hasEffects",null),e([d$1({value:0})],h.prototype,"scale",null),e([d$1({readOnly:!0})],h.prototype,"transitioning",null),h=e([i$1("esri.layers.effects.EffectView")],h);const u=h;function _(t){const e=d$2(t)||[];return d(e)?[{scale:a$1,effects:e}]:e}function p(t,e,s){var r,i,n$1,c;if(null==(r=t[0])||!r.effects||null==(i=e[0])||!i.effects)return !0;return !(((null==(n$1=t[0])?void 0:n$1.scale)===a$1||(null==(c=e[0])?void 0:c.scale)===a$1)&&(t.length>1||e.length>1)&&s<=0)&&n(t[0].effects,e[0].effects)}function m(t,e,s){var r,i;const n=t.length>e.length?t:e,c=t.length>e.length?e:t,o=c[c.length-1],l=null!=(r=null==o?void 0:o.scale)?r:s,h=null!=(i=null==o?void 0:o.effects)?i:[];for(let f=c.length;f<n.length;f++)c.push({scale:l,effects:[...h]});for(let u=0;u<n.length;u++)c[u].scale=c[u].scale===a$1?s:c[u].scale,n[u].scale=n[u].scale===a$1?s:n[u].scale,e$1(c[u].effects,n[u].effects);}function g(t,e,s){return t+(e-t)*s}function d(t){const e=t[0];return !!e&&"type"in e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const r=1/i("mapview-transitions-duration");class a extends n$1{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this._stage=null,this._visible=!0;}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender();}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender());}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const e=this._stage;this._stage=t,t?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e.trashDisplayObject(this);}get transforms(){return this._getTransforms()}_getTransforms(){return t(this._transforms)&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender());}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=z(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=z(),this.requestRender()),this._fadeOutResolver.promise}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale);}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null);}remove(){var t;null==(t=this.parent)||t.removeChild(this);}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t);}requestRender(){this.stage&&this.stage.requestRender();}processDetach(){this.onDetach(),this.emit("detach");}updateTransitionProperties(t,e){if(this.fadeTransitionEnabled){const e=this._fadeOutResolver||!this.visible?0:this.opacity,s=this.computedOpacity;if(s===e)this.computedVisible=this.visible;else {const i=t*r;this.computedOpacity=s>e?Math.max(e,s-i):Math.min(e,s+i),this.computedVisible=this.computedOpacity>0;const a=e===this.computedOpacity;this.inFadeTransition=!a,a||this.requestRender();}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible;}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender());}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class s extends a{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null;}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender();}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach((t=>t.clips=e));}get computedEffects(){var e,t;return null!=(e=null==(t=this._effectView)?void 0:t.effects)?e:null}get effect(){var e,t;return null!=(e=null==(t=this._effectView)?void 0:t.effect)?e:""}set effect(e){(this._effectView||e)&&(this._effectView||(this._effectView=new u),this._effectView.effect=e,this.requestRender());}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._effectView&&(this._effectView.transitionStep(e,t),this._effectView.transitioning&&this.requestRender());}doRender(e){const t=this.createRenderParams(e);this.renderChildren(t);}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e,t=this.children.length){if(!e)return e;if(this.contains(e))return e;this._needsSort=!0;const i=e.parent;return i&&i!==this&&i.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),e}contains(e){return this._childrenSet.has(e)}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0;}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;const t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,t}sortChildren(e){this._needsSort&&(this.children.sort(e),this._needsSort=!1);}_createTransforms(){return {dvs:n$2()}}onAttach(){super.onAttach();const e=this.stage;for(const t of this.children)t.stage=e;}onDetach(){super.onDetach();for(const e of this.children)e.stage=null;}renderChildren(e){for(const t of this.children)t.beforeRender(e);for(const t of this.children)t.processRender(e);for(const t of this.children)t.afterRender(e);}createRenderParams(e){return {...e,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}}}

export { a, s, u };
