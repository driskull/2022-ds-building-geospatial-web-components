import { t as t$1, k as r$1 } from './intl-f9bcf179.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(t,l,a={}){if(!window.WebGLRenderingContext)return o$1(t,n$1),null;const b=r(t,l,a);return t$1(b)&&o$1(t,i),b}function r(e,t,r={}){const o=1===t?["webgl","experimental-webgl","webkit-3d","moz-webgl"]:["webgl2"];let n=null;for(const l of o){try{n=e.getContext(l,r);}catch(i){}if(n)break}return n}function o$1(e,t){const r=e.parentNode;r&&(r.innerHTML='<table style="background-color: #8CE; width: 100%; height: 100%;"><tr><td align="center"><div style="display: table-cell; vertical-align: middle;"><div style="">'+t+"</div></div></td></tr></table>");}const n$1='This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>',i='It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
let n;function o(){return n||(n=a()),n}function a(){const n={available:!1,version:0,majorPerformanceCaveat:!1,maxTextureSize:0,supportsHighPrecisionFragment:!1,supportsVertexShaderSamplers:!1,supportsElementIndexUint:!1,supportsStandardDerivatives:!1,supportsInstancedArrays:!1,supportsTextureFloat:!1,supportsColorBufferFloat:!1};if(void 0===typeof WebGLRenderingContext)return n;const o=document.createElement("canvas");if(!o)return n;let a=r(o,1,{failIfMajorPerformanceCaveat:!0});if(t$1(a)&&(a=r(o,1),r$1(a)&&(n.majorPerformanceCaveat=!0)),t$1(a))return n;const i=a.getParameter(a.VERSION);if(!i)return n;const u=i.match(/^WebGL\s+([\d.]*)/);if(u){const e=parseFloat(u[1]);n.available=e>=.94;const t=a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT);t&&(n.supportsHighPrecisionFragment=t.precision>0),n.supportsVertexShaderSamplers=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0,n.supportsElementIndexUint=null!==a.getExtension("OES_element_index_uint"),n.supportsStandardDerivatives=null!==a.getExtension("OES_standard_derivatives"),n.supportsInstancedArrays=null!==a.getExtension("ANGLE_instanced_arrays"),n.supportsTextureFloat=null!==a.getExtension("OES_texture_float"),n.supportsColorBufferFloat=null!==a.getExtension("WEBGL_color_buffer_float")&&null!==a.getExtension("EXT_float_blend");}return n.maxTextureSize=a.getParameter(a.MAX_TEXTURE_SIZE),n.version=s()?2:1,n}function s(){if(void 0===typeof WebGL2RenderingContext)return !1;const e=document.createElement("canvas");if(!e)return !1;const n=r(e,2);return !!r$1(n)}

export { o, t };
