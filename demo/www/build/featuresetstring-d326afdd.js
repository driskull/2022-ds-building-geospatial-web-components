import { g, M as D, F } from './arcadeUtils-69024017.js';
import { P, X, n as ne, L, c as ce, l as le, f as fe, e as ee, O } from './languageUtils-884f50f9.js';
import './intl-f9bcf179.js';
import './vec2f32-a88eee2e.js';
import './JSONSupport-add604e3.js';
import './Field-c0076075.js';
import './fieldType-064db2a2.js';
import './featureConversionUtils-a3d8ec70.js';
import './OptimizedFeature-b2ac674d.js';
import './OptimizedFeatureSet-27736f1f.js';
import './number-18a63da8.js';
import './FeatureSetReader-cc8f6cc6.js';
import './centroid-b9a46ae8.js';
import './_commonjsHelpers-321aa363.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function m(e){return e&&e.domain?"coded-value"===e.domain.type||"codedValue"===e.domain.type?g.convertObjectToArcadeDictionary({type:"codedValue",name:e.domain.name,dataType:D[e.field.type],codedValues:e.domain.codedValues.map((n=>({name:n.name,code:n.code})))}):g.convertObjectToArcadeDictionary({type:"range",name:e.domain.name,dataType:D[e.field.type],min:e.domain.min,max:e.domain.max}):null}function l(f){"async"===f.mode&&(f.functions.domain=function(n,c){return f.standardFunctionAsync(n,c,(function(n,c,u){if(P(u,2,3),u[0]instanceof F){return m(u[0].fullDomain(X(u[1]),void 0===u[2]?void 0:ne(u[2])))}if(L(u[0]))return u[0]._ensureLoaded().then((()=>m(ce(X(u[1]),u[0],null,void 0===u[2]?void 0:ne(u[2])))));throw new Error("Invalid Parameter")}))},f.functions.subtypes=function(o,r){return f.standardFunctionAsync(o,r,(function(o,r,i){if(P(i,1,1),i[0]instanceof F){const e=i[0].subtypes();return e?g.convertObjectToArcadeDictionary(e):null}if(L(i[0]))return i[0]._ensureLoaded().then((()=>{const e=i[0].subtypes();return e?g.convertObjectToArcadeDictionary(e):null}));throw new Error("Invalid Parameter")}))},f.functions.domainname=function(n,u){return f.standardFunctionAsync(n,u,(function(n,u,d){if(P(d,2,4),d[0]instanceof F)return d[0].domainValueLookup(X(d[1]),d[2],void 0===d[3]?void 0:ne(d[3]));if(L(d[0]))return d[0]._ensureLoaded().then((()=>{const n=ce(X(d[1]),d[0],null,void 0===d[3]?void 0:ne(d[3]));return le(n,d[2])}));throw new Error("Invalid Parameter")}))},f.signatures.push({name:"domainname",min:"2",max:"4"}),f.functions.domaincode=function(n,c){return f.standardFunctionAsync(n,c,(function(n,c,d){if(P(d,2,4),d[0]instanceof F)return d[0].domainCodeLookup(X(d[1]),d[2],void 0===d[3]?void 0:ne(d[3]));if(L(d[0]))return d[0]._ensureLoaded().then((()=>{const n=ce(X(d[1]),d[0],null,void 0===d[3]?void 0:ne(d[3]));return fe(n,d[2])}));throw new Error("Invalid Parameter")}))},f.signatures.push({name:"domaincode",min:"2",max:"4"})),f.functions.text=function(n,e){return f.standardFunctionAsync(n,e,(function(n,e,o){if(P(o,1,2),!L(o[0]))return ee(o[0],o[1]);{const e=O(o[1],"");if(""===e)return o[0].castToText();if("schema"===e.toLowerCase())return o[0].convertToText("schema",n.abortSignal);if("featureset"===e.toLowerCase())return o[0].convertToText("featureset",n.abortSignal)}}))},f.functions.gdbversion=function(n,o){return f.standardFunctionAsync(n,o,(function(n,o,r){if(P(r,1,1),r[0]instanceof F)return r[0].gdbVersion();if(L(r[0]))return r[0].load().then((n=>n.gdbVersion));throw new Error("Invalid Parameter")}))},f.functions.schema=function(o,r){return f.standardFunctionAsync(o,r,(function(o,r,i){if(P(i,1,1),L(i[0]))return i[0].load().then((()=>g.convertObjectToArcadeDictionary(i[0].schema())));if(i[0]instanceof F){const e=i[0].schema();return e?g.convertObjectToArcadeDictionary(e):null}throw new Error("Invalid Parameter")}))};}

export { l as registerFunctions };
