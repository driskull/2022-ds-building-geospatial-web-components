import { h, cd as r$4 } from './vec2f32-a88eee2e.js';
import { C, k as r, A as e, O as o, t, c6 as r$2 } from './intl-f9bcf179.js';
import { j } from './mat3-5a3bab08.js';
import { a as e$2 } from './quat-28cfe247.js';
import { b as n, a as l, d as r$1, r as r$3, o as o$1, e as r$5, t as t$2, g as r$6, q as d, i as f$2, j as e$3, v as o$2, k as i$1, m as o$3, p as n$2, w as a } from './DefaultMaterial_COLOR_GAMMA-0e834da1.js';
import { m, c, y, f } from './meshFeatureSet-1259e24c.js';
import { T, i, c as c$1, x, u, L, O, E } from './BufferView-8daab669.js';
import { a as e$1, f as f$1, g as t$1, r as r$7, c as e$4, h as n$1 } from './vec33-5e4e0456.js';
import { b } from './georeference-e81a13e5.js';
import './JSONSupport-add604e3.js';
import './types-ca362d61.js';
import './Version-ffcd8e92.js';
import './mat4-ae511675.js';
import './vec2f64-503345b4.js';
import './HandleOwner-8815c4dd.js';
import './Handles-c08f164d.js';
import './reactiveUtils-7b2ef76d.js';
import './watchUtils-47c42485.js';
import './screenshotUtils-9bdc6cab.js';
import './earcut-05cd758b.js';
import './deduplicate-8fc01ba8.js';
import './projection-60b2cc57.js';
import './zscale-41674b48.js';
import './FeatureSet-4fb958ac.js';
import './Field-c0076075.js';
import './fieldType-064db2a2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function K(t,e,r$1){const o=new n(P(r$1)),n$1=(await l(o,e,r$1,!0)).model,i=n$1.lods.shift(),a=new Map,c=new Map;n$1.textures.forEach(((t,e)=>a.set(e,W(t)))),n$1.materials.forEach(((t,e)=>c.set(e,X(t,a))));const l$1=J(i);for(const s of l$1.parts)Y(l$1,s,c);const{position:u,normal:f,tangent:m,color:p,texCoord0:g}=l$1.vertexAttributes,x={position:u.typedBuffer,normal:r(f)?f.typedBuffer:null,tangent:r(m)?m.typedBuffer:null,uv:r(g)?g.typedBuffer:null,color:r(p)?p.typedBuffer:null},h=b(x,t,r$1);return {transform:h.transform,components:l$1.components,spatialReference:t.spatialReference,vertexAttributes:new y({position:h.vertexAttributes.position,normal:h.vertexAttributes.normal,tangent:h.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function P(t){return null!=t&&t.resolveFile?{busy:!1,request:async(r$1,o,n)=>{const i=t.resolveFile(r$1),a="image"===o?"image":"binary"===o?"array-buffer":"json";return (await C(i,{responseType:a,signal:r(n)?n.signal:null})).data}}:null}function Q(t$1,e){if(t(t$1))return "-";const o=t$1.typedBuffer;return `${r$2(e,o.buffer,(()=>e.size))}/${o.byteOffset}/${o.byteLength}`}function H(t){return r(t)?t.toString():"-"}function J(t){let e=0;const o={color:!1,tangent:!1,normal:!1,texCoord0:!1},n=new Map,s=new Map,i$1=[];for(const a of t.parts){const{attributes:{position:t,normal:c,color:l,tangent:u,texCoord0:f}}=a,m=`\n      ${Q(t,n)}/\n      ${Q(c,n)}/\n      ${Q(l,n)}/\n      ${Q(u,n)}/\n      ${Q(f,n)}/\n      ${H(a.transform)}\n    `;let p=!1;const d=r$2(s,m,(()=>(p=!0,{start:e,length:t.count})));p&&(e+=t.count),c&&(o.normal=!0),l&&(o.color=!0),u&&(o.tangent=!0),f&&(o.texCoord0=!0),i$1.push({gltf:a,writeVertices:p,region:d});}return {vertexAttributes:{position:r$1(T,e),normal:o.normal?r$1(i,e):null,tangent:o.tangent?r$1(c$1,e):null,color:o.color?r$1(x,e):null,texCoord0:o.texCoord0?r$1(u,e):null},parts:i$1,components:[]}}function W(t){return new m({data:t.data,wrap:rt(t.parameters.wrap)})}function X(e$1,r){const s=new h(st(e$1.color,e$1.opacity)),i=e$1.emissiveFactor?new h(it(e$1.emissiveFactor)):null;return new c({color:s,colorTexture:e(o(e$1.textureColor,(t=>r.get(t)))),normalTexture:e(o(e$1.textureNormal,(t=>r.get(t)))),emissiveColor:i,emissiveTexture:e(o(e$1.textureEmissive,(t=>r.get(t)))),occlusionTexture:e(o(e$1.textureOcclusion,(t=>r.get(t)))),alphaMode:et(e$1.alphaMode),alphaCutoff:e$1.alphaCutoff,doubleSided:e$1.doubleSided,metallic:e$1.metallicFactor,roughness:e$1.roughnessFactor,metallicRoughnessTexture:e(o(e$1.textureMetallicRoughness,(t=>r.get(t))))})}function Y(t,e,r){e.writeVertices&&Z(t,e);const o=e.gltf,n=tt(o.indices||o.attributes.position.count,o.primitiveType),s=e.region.start;if(s)for(let i=0;i<n.length;i++)n[i]+=s;t.components.push(new f({faces:n,material:r.get(o.material),trustSourceNormals:!0}));}function Z(t,e){const{position:r$1,normal:o,tangent:n,color:i$1,texCoord0:l}=t.vertexAttributes,u=e.region.start,{attributes:f,transform:m}=e.gltf,p=f.position.count;if(e$1(r$1.slice(u,p),f.position,m),r(f.normal)&&r(o)){const t=j(e$2(),m);f$1(o.slice(u,p),f.normal,t);}else r(o)&&t$1(o,0,0,1,{dstIndex:u,count:p});if(r(f.tangent)&&r(n)){const t=j(e$2(),m);r$5(n.slice(u,p),f.tangent,t);}else r(n)&&t$2(n,0,0,1,1,{dstIndex:u,count:p});if(r(f.texCoord0)&&r(l)?r$6(l.slice(u,p),f.texCoord0):r(l)&&d(l,0,0,{dstIndex:u,count:p}),r(f.color)&&r(i$1)){const t=f.color,e=i$1.slice(u,p);if(4===t.elementCount)t instanceof c$1?f$2(e,t,255):t instanceof x?e$3(e,t):t instanceof L&&o$2(e,t,8);else {t$2(e,255,255,255,255);const r=O.fromTypedArray(e.typedBuffer,e.typedBufferStride);t instanceof i?r$7(r,t,255):t instanceof O?e$4(r,t):t instanceof E&&n$1(r,t,8);}}else r(i$1)&&t$2(i$1.slice(u,p),255,255,255,255);}function tt(t,e){switch(e){case 4:return n$2(t,a);case 5:return o$3(t);case 6:return i$1(t)}}function et(t){switch(t){case"OPAQUE":return "opaque";case"MASK":return "mask";case"BLEND":return "blend"}}function rt(t){return {horizontal:ot(t.s),vertical:ot(t.t)}}function ot(t){switch(t){case 33071:return "clamp";case 33648:return "mirror";case 10497:return "repeat"}}function nt(t){return t**(1/o$1)*255}function st(t,e){return r$3(nt(t[0]),nt(t[1]),nt(t[2]),e)}function it(t){return r$4(nt(t[0]),nt(t[1]),nt(t[2]))}

export { K as loadGLTFMesh };
