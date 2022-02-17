import { Component, h, Host, Prop, Event, EventEmitter, Listen, State, VNode } from "@stencil/core";
import * as clusterLabelCreator from "@arcgis/core/smartMapping/labels/clusters";
import FeatureReductionCluster from "@arcgis/core/layers/support/FeatureReductionCluster";
import { DisplayType } from "../label/_utils";

@Component({
  tag: "esri-ds2022-clustering",
  styleUrl: "clustering.css",
  shadow: true
})
export class Clustering {
  /**
   * arcgis/core/views/MapView: https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html
   */
  @Prop() mapView: __esri.MapView;

  /**
   * arcgis/core/layers/FeatureLayer: https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html
   */
  @Prop() layer: __esri.FeatureLayer;

  /**
   * Emitted when featureReduction has been updated.
   */
  @Event() featureReductionUpdated: EventEmitter;

  /**
   * @internal Emitted internally when featureReduction has any update.
   */
  @Event() internalFeatureReductionUpdated: EventEmitter;

  // Need this to rerender on any change since we are making changes to layer.featureReduction object, which will not trigger a rerender.
  @State() reRender: boolean;

  clusteringRadiusMinVal = 9; // 12px

  clusteringRadiusMaxVal = 90; // 120px

  clusteringRadiusInitialVal = 37.5; // 50px

  clusteringSizeMinVal = 9; // 12px

  clusteringSizeMaxVal = 90; // 120px

  clusteringSizeMaxInitialVal = 37.5; // 50px

  tempFeatureReduction: __esri.FeatureReductionCluster;

  clusterFlow: HTMLCalciteFlowElement;

  // Called after every re-render. Not called on initial draw.
  componentDidUpdate(): void {
    this.internalFeatureReductionUpdated.emit();
  }

  // clone featureReduction to update map.
  @Listen("internalFeatureReductionUpdated")
  internalFeatureReductionUpdatedHandler(event: Event): void {
    event.stopPropagation();
    this.layer.featureReduction =
      (this.layer.featureReduction as __esri.FeatureReductionCluster)?.clone() || null;
    // for external clients
    this.featureReductionUpdated.emit();
  }

  // rendor methods
  render(): VNode {
    // enable disable clustering
    const clusterSwitch = (
      <calcite-label class="switch" alignment="start" layout="inline-space-between">
        Enable clustering
        <calcite-switch
          scale="s"
          checked={(this.layer.featureReduction as __esri.FeatureReductionCluster) ? true : false}
          onCalciteSwitchChange={async (event: CustomEvent) => {
            const checked = (event.target as HTMLCalciteSwitchElement).checked;
            if (checked) {
              if (this.tempFeatureReduction) {
                this.layer.featureReduction = this.tempFeatureReduction;
              } else {
                // setup featureReduction
                const labelSchemes = await clusterLabelCreator.getLabelSchemes({
                  layer: this.layer,
                  view: this.mapView
                });
                this.layer.featureReduction = new FeatureReductionCluster({
                  clusterMinSize:
                    labelSchemes?.primaryScheme?.clusterMinSize || this.clusteringSizeMinVal,
                  clusterMaxSize: this.clusteringSizeMaxInitialVal,
                  clusterRadius: this.clusteringRadiusInitialVal,
                  labelsVisible: true,
                  labelingInfo: labelSchemes?.primaryScheme?.labelingInfo || null
                });
              }
            } else {
              this.tempFeatureReduction = this.layer
                .featureReduction as __esri.FeatureReductionCluster;
              this.layer.featureReduction = null;
            }
            this.reRender = !this.reRender;
          }}
        />
      </calcite-label>
    );

    // update cluster radius when slider is moved
    const clusterRadiusSlider = (
      <div class="slider">
        <label class="slider-heading">Cluster radius</label>
        <div class="slider-div">
          <label class="slider-label">Low</label>
          <calcite-slider
            class="slider-slider"
            min={this.clusteringRadiusMinVal}
            max={this.clusteringRadiusMaxVal}
            value={
              (this.layer.featureReduction as __esri.FeatureReductionCluster)?.clusterRadius ??
              this.clusteringRadiusInitialVal
            }
            step={1}
            onCalciteSliderInput={(event: CustomEvent) => {
              (this.layer.featureReduction as __esri.FeatureReductionCluster).clusterRadius = (
                event.target as HTMLCalciteSliderElement
              ).value;
              this.reRender = !this.reRender;
            }}
          />
          <label class="slider-label">High</label>
        </div>
      </div>
    );

    // update cluster min and max size when slider is moved
    const clusterSizeSlider = (
      <div class="slider">
        <label class="slider-heading">Size range</label>
        <div class="slider-div">
          <label class="slider-label">Low</label>
          <calcite-slider
            class="slider-slider"
            min={this.clusteringSizeMinVal}
            max={this.clusteringSizeMaxVal}
            minValue={
              (this.layer.featureReduction as __esri.FeatureReductionCluster)?.clusterMinSize ??
              this.clusteringSizeMinVal
            }
            maxValue={
              (this.layer.featureReduction as __esri.FeatureReductionCluster)?.clusterMaxSize ??
              this.clusteringSizeMaxVal
            }
            step={1}
            onCalciteSliderInput={(event: CustomEvent) => {
              const sliderVal = event.target as HTMLCalciteSliderElement;
              (this.layer.featureReduction as __esri.FeatureReductionCluster).clusterMinSize =
                sliderVal.minValue;
              (this.layer.featureReduction as __esri.FeatureReductionCluster).clusterMaxSize =
                sliderVal.maxValue;
              this.reRender = !this.reRender;
            }}
          />
          <label class="slider-label">High</label>
        </div>
      </div>
    );

    // click on label button takes user to 2nd panel with back button
    const labelBtn = (
      <calcite-button
        appearance="outline"
        color="neutral"
        scale="l"
        iconEnd="chevronRight"
        alignment="icon-end-space-between"
        width="full"
        onClick={() => {
          // create calcite panel and insert label component.
          const labelPanel = document.createElement("calcite-panel") as HTMLCalcitePanelElement;
          labelPanel.heading = "Label features";
          labelPanel.summary = this.layer.title || "";
          const labelComponent = document.createElement("esri-ds2022-label");
          labelComponent.layer = this.layer;
          labelComponent.mapView = this.mapView;
          labelComponent.displayType = DisplayType.cluster;
          labelComponent.labelPanel = labelPanel;
          labelPanel.appendChild(labelComponent);
          // when label component is updated
          labelComponent.addEventListener("labelUpdated", () => {
            this.reRender = !this.reRender;
          });
          this.clusterFlow.appendChild(labelPanel);
        }}
      >
        Cluster label
      </calcite-button>
    );

    return (
      <Host>
        <calcite-flow ref={(el) => (this.clusterFlow = el)}>
          <calcite-panel heading="Clustering" summary={this.layer.title}>
            {clusterSwitch}
            {/* only show rest of the option when cluster is enabled */}
            {this.layer.featureReduction && (
              <div>
                {clusterRadiusSlider}
                {clusterSizeSlider}
                {labelBtn}
              </div>
            )}
          </calcite-panel>
        </calcite-flow>
      </Host>
    );
  }
}
