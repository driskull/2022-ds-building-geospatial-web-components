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

  @State() hasFeatureReduction: boolean = null;

  @State() clusterRadius: number = 37.5; // 50px

  @State() clusterSizeMin: number = null;

  @State() clusterSizeMax: number = 37.5; // 50px

  @State() showLabelPanel = false;

  clusteringRadiusMinVal = 9; // 12px

  clusteringRadiusMaxVal = 90; // 120px

  clusteringSizeMinVal = 9; // 12px

  clusteringSizeMaxVal = 90; // 120px

  tempFeatureReduction: __esri.FeatureReductionCluster;

  labelPanel: HTMLCalcitePanelElement;

  // Called after every re-render. Not called on initial draw.
  componentDidUpdate(): void {
    this.internalFeatureReductionUpdated.emit();
  }

  // clone featureReduction to update map.
  @Listen("internalFeatureReductionUpdated")
  internalFeatureReductionUpdatedHandler(event: Event): void {
    event.stopPropagation();
    this.layer.featureReduction =
      (this.layer.featureReduction as __esri.FeatureReductionCluster)?.toJSON() || null;
    // for external clients
    this.featureReductionUpdated.emit();
  }

  toggleClustering = async (event: CustomEvent) => {
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
        this.layer.featureReduction = {
          type: "cluster",
          clusterMinSize: labelSchemes?.primaryScheme?.clusterMinSize || this.clusteringSizeMinVal,
          clusterMaxSize: this.clusterSizeMax,
          clusterRadius: this.clusterRadius,
          labelsVisible: true,
          labelingInfo: labelSchemes?.primaryScheme?.labelingInfo || null
        } as __esri.FeatureReductionCluster;
      }
    } else {
      this.tempFeatureReduction =
        (this.layer.featureReduction as __esri.FeatureReductionCluster)?.toJSON() || null;
      this.layer.featureReduction = null;
    }

    this.hasFeatureReduction = !!this.layer.featureReduction;
  };

  clusterRadiusChange = (event: CustomEvent) => {
    const value = (event.target as HTMLCalciteSliderElement).value;

    (this.layer.featureReduction as __esri.FeatureReductionCluster).clusterRadius = value;

    this.clusterRadius = value;
  };

  clusterSizeChange = (event: CustomEvent) => {
    const slider = event.target as HTMLCalciteSliderElement;

    (this.layer.featureReduction as __esri.FeatureReductionCluster).clusterMinSize =
      slider.minValue;
    (this.layer.featureReduction as __esri.FeatureReductionCluster).clusterMaxSize =
      slider.maxValue;

    this.clusterSizeMin = slider.minValue;
    this.clusterSizeMax = slider.maxValue;
  };

  // rendor methods
  render(): VNode {
    // enable disable clustering
    const clusterSwitch = (
      <calcite-label class="switch" alignment="start" layout="inline-space-between">
        Enable clustering
        <calcite-switch
          scale="s"
          checked={(this.layer.featureReduction as __esri.FeatureReductionCluster) ? true : false}
          onCalciteSwitchChange={this.toggleClustering}
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
              this.clusterRadius
            }
            step={1}
            onCalciteSliderInput={this.clusterRadiusChange}
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
            onCalciteSliderInput={this.clusterSizeChange}
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
        onClick={() => (this.showLabelPanel = true)}
      >
        Cluster label
      </calcite-button>
    );

    return (
      <Host>
        <calcite-flow>
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
          {this.showLabelPanel ? (
            <calcite-panel
              heading="Label features"
              summary={this.layer.title || ""}
              ref={(el) => (this.labelPanel = el)}
              onCalcitePanelBackClick={() => (this.showLabelPanel = false)}
            >
              <esri-ds2022-label
                layer={this.layer}
                mapView={this.mapView}
                displayType={DisplayType.cluster}
                labelPanel={this.labelPanel}
              />
            </calcite-panel>
          ) : null}
        </calcite-flow>
      </Host>
    );
  }
}
