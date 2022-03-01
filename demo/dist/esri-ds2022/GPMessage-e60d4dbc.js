import { a4 as o, e, d, i as i$1 } from './intl-f9bcf179.js';
import { a as a$1 } from './JSONSupport-add604e3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const p=new o({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let i=class extends a$1{constructor(e){super(e),this.description=null,this.type=null;}};e([d({type:String,json:{write:!0}})],i.prototype,"description",void 0),e([d({type:String,json:{read:p.read,write:p.write}})],i.prototype,"type",void 0),i=e([i$1("esri.rest.support.GPMessage")],i);const a=i;

export { a };
