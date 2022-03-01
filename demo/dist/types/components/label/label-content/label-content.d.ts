import { EventEmitter, VNode } from "../../../stencil-public-runtime";
import { DisplayType } from "../_utils";
/** @internal **/
export declare class LabelContent {
  hostElement: HTMLEsriDs2022LabelContentElement;
  labelClass: __esri.LabelClass;
  mapView: __esri.MapView;
  layer: __esri.FeatureLayer;
  displayType: DisplayType;
  labelContentDeleted: EventEmitter;
  internalLabelUpdated: EventEmitter;
  closeLabelPopovers: EventEmitter;
  disableLabelPanel: EventEmitter;
  dropdownElement: HTMLCalciteDropdownElement;
  dropdownButton: HTMLCalciteButtonElement;
  labelStyle: HTMLEsriDs2022LabelContentStyleElement;
  scaleRangeSlider: __esri.ScaleRangeSlider;
  scaleRangeSliderWatch: __esri.WatchHandle;
  mapViewScaleWatch: __esri.WatchHandle;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  closeLabelPopoversHandler(): void;
  getDisplayFieldName(): string;
  labelFieldSelection: () => void;
  labelContentStyleChanges: () => void;
  openLabelStyle: () => void;
  destroySlider: () => void;
  setSliderContainer: (el: HTMLDivElement) => void;
  createSlider: () => void;
  render(): VNode;
}
