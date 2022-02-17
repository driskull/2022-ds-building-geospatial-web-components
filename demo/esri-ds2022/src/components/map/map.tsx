import { Component, h, Host } from "@stencil/core";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";

@Component({
  tag: "esri-ds2022-map",
  styleUrl: "map.css",
  scoped: true
})
export class EsriMap {
  mapView: __esri.MapView;

  featureLayer: __esri.FeatureLayer;

  contexualPanel: HTMLCalciteShellPanelElement;

  saveButton: HTMLCalciteActionElement;

  async componentDidLoad() {
    // display map and add cluster panel
    const map = new Map({
      basemap: "satellite"
    });
    this.mapView = new MapView({
      container: "viewDiv",
      map: map
    });
    this.featureLayer = new FeatureLayer({
      url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Places_of_Worship_India/FeatureServer/0"
    });
    map.add(this.featureLayer);
    this.mapView.goTo((await this.featureLayer.when()).fullExtent);
    const clusterComponent = document.createElement("esri-ds2022-clustering");
    clusterComponent.mapView = this.mapView;
    clusterComponent.layer = this.featureLayer;
    // listen to featureReductionUpdated event and show the save indicator.
    // save does not work in this example.
    clusterComponent.addEventListener("featureReductionUpdated", () => {
      this.saveButton.indicator = true;
    });
    this.contexualPanel.appendChild(clusterComponent);
  }

  render() {
    return (
      <Host>
        <calcite-shell>
          <div id="viewDiv" class="map" />
          <h2 slot="header"> Geospatial web components demo</h2>
          <calcite-shell-panel slot="primary-panel" position="start" collapsed={true}>
            <calcite-action-bar slot="action-bar">
              <calcite-action
                ref={(el) => {
                  this.saveButton = el;
                }}
                text="Save demo"
                indicator={false}
                icon="save"
                onClick={() => {
                  this.saveButton.indicator = false;
                }}
              />
            </calcite-action-bar>
          </calcite-shell-panel>
          <calcite-shell-panel
            slot="contextual-panel"
            position="end"
            ref={(el) => {
              this.contexualPanel = el;
            }}
          >
            <calcite-action-bar slot="action-bar" />
          </calcite-shell-panel>
        </calcite-shell>
      </Host>
    );
  }
}
