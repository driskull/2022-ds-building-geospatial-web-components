import type { Components, JSX } from "../types/components";

interface EsriDs2022MapViewer extends Components.EsriDs2022MapViewer, HTMLElement {}
export const EsriDs2022MapViewer: {
  prototype: EsriDs2022MapViewer;
  new (): EsriDs2022MapViewer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
