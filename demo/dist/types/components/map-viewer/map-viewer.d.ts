export declare class MapViewer {
  mapTitle: string;
  hasChanges: boolean;
  mapView: __esri.MapView;
  featureLayer: __esri.FeatureLayer;
  createMap(): Promise<void>;
  destroyMap(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  render(): any;
}
