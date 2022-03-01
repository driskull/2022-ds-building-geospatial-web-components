import { EventEmitter, VNode } from "../../stencil-public-runtime";
import LabelClass from "@arcgis/core/layers/support/LabelClass";
import { DisplayType } from "./_utils";
export declare class Label {
  /**
   * arcgis/core/views/MapView: https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html
   */
  mapView: __esri.MapView;
  /**
   * arcgis/core/layers/FeatureLayer: https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html
   */
  layer: __esri.FeatureLayer;
  /**
   * @internal feature or cluster
   */
  displayType: DisplayType;
  /**
   * @internal if coming from cluster panel
   */
  labelPanel?: HTMLCalcitePanelElement;
  /**
   * Emitted when label has been updated.
   */
  labelUpdated: EventEmitter;
  /**
   * @internal internal label has been updated.
   */
  internalLabelUpdated: EventEmitter;
  /**
   * @internal to close all popovers
   */
  closeLabelPopovers: EventEmitter;
  hasLabelEnabled: boolean;
  addLabelingInfo: boolean;
  deleteLabelContent: boolean;
  labelingInfo: __esri.LabelClass[];
  panel: HTMLCalcitePanelElement;
  addLabelBtn: HTMLCalciteFabElement;
  componentWillLoad(): void;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  internalLabelUpdatedHandler(event: CustomEvent<boolean>): void;
  disableLabelPanelHandler(event: CustomEvent<boolean>): void;
  getLabelsVisible(): boolean;
  getLabelClass(): Promise<__esri.LabelClass>;
  getAddLabelBtn(): HTMLCalciteFabElement;
  labelSwitchToggle: (event: CustomEvent<boolean>) => void;
  labelContentDeleted(labelClass: __esri.LabelClass): void;
  render(): VNode;
  labelContent: (labelClass: __esri.LabelClass) => VNode;
}
