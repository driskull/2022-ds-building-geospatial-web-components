import { aC as a } from './vec2f32-a88eee2e.js';
import { h, ab as t$1 } from './intl-f9bcf179.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function t(t,i,n){const s=t&&t.getAtOrigin&&t.getAtOrigin("renderer",i.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const a$1=await a(s.populateFromStyle());if(h(n),!1===a$1.ok){const e=a$1.error;i&&i.messages&&i.messages.push(new t$1("renderer:style-reference",`Failed to create unique value renderer from style reference: ${e.message}`,{error:e,context:i})),t.clear("renderer",i.origin);}}}

export { t };
