import { Component, h, Prop, State } from "@stencil/core";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";

@Component({
  tag: "esri-ds2022-map-viewer",
  styleUrl: "map-viewer.css",
  scoped: true
})
export class MapViewer {
  @Prop() mapTitle = "Geospatial web components demo";

  @State() hasChanges = false;

  mapView: __esri.MapView;

  featureLayer: __esri.FeatureLayer;

  async createMap(): Promise<void> {
    this.featureLayer = new FeatureLayer({
      url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Places_of_Worship_India/FeatureServer/0"
    });

    const map = new Map({
      basemap: "satellite",
      layers: [this.featureLayer]
    });

    this.mapView = new MapView({
      map
    });

    this.mapView.goTo((await this.featureLayer.when()).fullExtent);
  }

  destroyMap(): void {
    this.featureLayer?.destroy();
    this.mapView?.destroy();
  }

  connectedCallback() {
    this.createMap();
  }

  disconnectedCallback() {
    this.destroyMap();
  }

  render() {
    return (
      <calcite-shell>
        <div ref={(el) => (this.mapView.container = el)} class="map" />
        <h2 slot="header">{this.mapTitle}</h2>
        <calcite-shell-panel slot="primary-panel" position="start" collapsed={true}>
          <calcite-action-bar slot="action-bar">
            <calcite-action
              text="Save demo"
              indicator={this.hasChanges}
              icon="save"
              onClick={() => (this.hasChanges = false)}
            />
          </calcite-action-bar>
        </calcite-shell-panel>
        <calcite-shell-panel slot="contextual-panel" position="end">
          <esri-ds2022-clustering
            mapView={this.mapView}
            layer={this.featureLayer}
            onFeatureReductionUpdated={() => (this.hasChanges = true)}
          />
          <calcite-action-bar slot="action-bar" />
        </calcite-shell-panel>
      </calcite-shell>
    );
  }
}
