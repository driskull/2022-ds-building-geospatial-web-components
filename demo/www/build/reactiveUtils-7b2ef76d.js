import { J as s$1, bh as A, aL as e, aM as r, P as n } from './intl-f9bcf179.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function i(n,t,o={}){return c(n,t,o,l)}function u(n,t,o={}){return c(n,t,o,s)}function c(n,t,o={},i){let u=null;const c=o.once?(n,o)=>{i(n)&&(s$1(u),t(n,o));}:(n,o)=>{i(n)&&t(n,o);};if(u=A(n,c,o.sync,o.equals),o.initial){const t=n();c(t,t);}return u}function l(n){return !0}function s(n){return !!n}function f(i,u,c,l={}){let s=null,f=null,m=null;function a(){s&&f&&(f.remove(),null==l.onListenerRemove||l.onListenerRemove(s),s=null,f=null);}function p(n){l.once&&l.once&&s$1(m),c(n);}const d=A(i,((o,e$1)=>{a(),e(o)&&(s=o,f=r(o,u,p),null==l.onListenerAdd||l.onListenerAdd(o));}),l.sync);return m=n((()=>{d.remove(),a();})),m}const m={sync:!0},a={initial:!0},p={sync:!0,initial:!0};

export { i, u };
