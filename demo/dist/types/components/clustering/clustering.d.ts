import { EventEmitter, VNode } from "../../stencil-public-runtime";
export declare class Clustering {
  /**
   * arcgis/core/views/MapView: https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html
   */
  mapView: __esri.MapView;
  /**
   * arcgis/core/layers/FeatureLayer: https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html
   */
  layer: __esri.FeatureLayer;
  /**
   * Emitted when featureReduction has been updated.
   */
  featureReductionUpdated: EventEmitter;
  /**
   * @internal Emitted internally when featureReduction has any update.
   */
  internalFeatureReductionUpdated: EventEmitter;
  hasFeatureReduction: boolean;
  clusterRadius: number;
  clusterSizeMin: number;
  clusterSizeMax: number;
  showLabelPanel: boolean;
  clusteringRadiusMinVal: number;
  clusteringRadiusMaxVal: number;
  clusteringSizeMinVal: number;
  clusteringSizeMaxVal: number;
  tempFeatureReduction: __esri.FeatureReductionCluster;
  labelPanel: HTMLCalcitePanelElement;
  componentDidUpdate(): void;
  internalFeatureReductionUpdatedHandler(event: Event): void;
  toggleClustering: (event: CustomEvent) => Promise<void>;
  clusterRadiusChange: (event: CustomEvent) => void;
  clusterSizeChange: (event: CustomEvent) => void;
  render(): VNode;
}
