/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function t(){const t=crypto.getRandomValues(new Uint16Array(8));t[3]=4095&t[3]|16384,t[4]=16383&t[4]|32768;const n=n=>t[n].toString(16);return n(0)+n(1)+"-"+n(2)+"-"+n(3)+"-"+n(4)+"-"+n(5)+n(6)+n(7)}

export { t };
