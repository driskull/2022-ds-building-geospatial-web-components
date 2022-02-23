import { Component, h, Host, Prop, Event, EventEmitter, Listen, State, VNode } from "@stencil/core";
import LabelClass from "@arcgis/core/layers/support/LabelClass";
import * as clusterLabelCreator from "@arcgis/core/smartMapping/labels/clusters";
import { defaultLabelProps, DisplayType } from "./_utils";

@Component({
  tag: "esri-ds2022-label",
  styleUrl: "label.css",
  shadow: true
})
export class Label {
  /**
   * arcgis/core/views/MapView: https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html
   */
  @Prop() mapView: __esri.MapView;

  /**
   * arcgis/core/layers/FeatureLayer: https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html
   */
  @Prop() layer: __esri.FeatureLayer;

  // todo: why are these internal?
  /**
   * @internal feature or cluster
   */
  @Prop() displayType: DisplayType = DisplayType.feature;

  /**
   * @internal if coming from cluster panel
   */
  @Prop() labelPanel?: HTMLCalcitePanelElement;

  /**
   * Emitted when label has been updated.
   */
  @Event() labelUpdated: EventEmitter;

  /**
   * @internal internal label has been updated.
   */
  @Event() internalLabelUpdated: EventEmitter;

  /**
   * @internal to close all popovers
   */
  @Event() closeLabelPopovers: EventEmitter;

  // todo: move these to separate state properties
  // Need this to rerender on any change since we are making changes to label object, which will not trigger a rerender.
  @State() reRender: boolean;

  labelingInfo: __esri.LabelClass[];

  panel: HTMLCalcitePanelElement;

  addLabelBtn: HTMLCalciteFabElement;

  componentWillLoad(): void {
    // handle both feature and cluster labeling info
    // todo: maybe this shoud happen when watching displayType and layer instead of on load?
    this.labelingInfo =
      this.displayType === DisplayType.feature
        ? this.layer.labelingInfo
        : (this.layer.featureReduction as __esri.FeatureReductionCluster).labelingInfo;
  }

  componentDidLoad(): void {
    // add add label button to either label panel or the label panel via clustering component
    // todo: move into render method
    this.addLabelBtn = this.getAddLabelBtn();
    if (this.labelPanel) {
      this.labelPanel.appendChild(this.addLabelBtn);
    } else {
      this.panel.appendChild(this.addLabelBtn);
    }
  }

  // Called after every re-render. Not called on initial draw.
  componentDidUpdate(): void {
    this.internalLabelUpdated.emit();
  }

  // clone labelingInfo to update map.
  @Listen("internalLabelUpdated")
  internalLabelUpdatedHandler(event: CustomEvent<boolean>): void {
    event.stopPropagation();
    if (this.displayType === DisplayType.cluster) {
      (this.layer.featureReduction as __esri.FeatureReductionCluster).labelingInfo = [
        ...this.labelingInfo
      ];
    } else {
      this.layer.labelingInfo = [...this.labelingInfo];
    }
    // for external clients
    this.labelUpdated.emit();
  }

  // disable when style poppver is open
  @Listen("disableLabelPanel", { target: "window" })
  disableLabelPanelHandler(event: CustomEvent<boolean>): void {
    event.stopPropagation();
    if (this.labelPanel) {
      this.labelPanel.disabled = event.detail;
    } else {
      this.panel.disabled = event.detail;
    }
  }

  getLabelsVisible(): boolean {
    if (this.displayType === DisplayType.cluster) {
      return (this.layer.featureReduction as __esri.FeatureReductionCluster).labelsVisible;
    } else {
      return this.layer.labelsVisible;
    }
  }

  // generate feature or cluster label class
  async getLabelClass(): Promise<__esri.LabelClass> {
    if (this.displayType === DisplayType.feature) {
      return new LabelClass(defaultLabelProps(this.layer));
    } else {
      return (
        (
          await clusterLabelCreator.getLabelSchemes({
            layer: this.layer,
            renderer: this.layer?.renderer,
            view: this.mapView
          })
        )?.primaryScheme?.labelingInfo[0] || null
      );
    }
  }

  getAddLabelBtn(): HTMLCalciteFabElement {
    // todo: move into render method
    const calciteFab = document.createElement("calcite-fab") as HTMLCalciteFabElement;
    calciteFab.icon = "plus";
    calciteFab.slot = "fab";
    calciteFab.scale = "s";
    calciteFab.label = "Add label class";
    calciteFab.text = "Add label class";
    calciteFab.textEnabled = true;
    calciteFab.hidden = !this.getLabelsVisible();
    calciteFab.addEventListener("click", async () => {
      this.closeLabelPopovers.emit();
      const labelClass = await this.getLabelClass();
      if (this.labelingInfo) {
        this.labelingInfo.push(labelClass);
      } else {
        this.labelingInfo = [labelClass];
      }
      this.reRender = !this.reRender;
    });
    return calciteFab;
  }

  // rendor methods
  render(): VNode {
    // enable disable labeling and show labeling content
    const labelSwitchAndContent = (
      <div>
        <calcite-label class="switch" alignment="start" layout="inline-space-between">
          Enable labels
          <calcite-switch
            scale="s"
            checked={this.getLabelsVisible()}
            // todo: move into class function
            onCalciteSwitchChange={async (event: CustomEvent) => {
              this.closeLabelPopovers.emit();
              const checked = (event.target as HTMLCalciteSwitchElement).checked;
              if (this.displayType === DisplayType.cluster) {
                (this.layer.featureReduction as __esri.FeatureReductionCluster).labelsVisible =
                  checked;
              } else {
                this.layer.labelsVisible = checked;
              }
              this.addLabelBtn.hidden = !checked;
              this.reRender = !this.reRender;
            }}
          />
        </calcite-label>
        {this.getLabelsVisible() && (
          <div class="content">{this.labelingInfo?.map(this.labelContent)}</div>
        )}
      </div>
    );

    return (
      // labelPanel => coming from cluster panel
      // todo: move into CSS class like: class={{noLabelPanel: !labelPanel }} no inline styles
      <Host style={!this.labelPanel && { display: "flex", flex: "1 1 auto", overflow: "hidden" }}>
        {this.labelPanel ? (
          <div>{labelSwitchAndContent}</div>
        ) : (
          <calcite-flow>
            <calcite-panel
              ref={(el) => (this.panel = el)}
              heading="Label features"
              summary={this.layer.title}
            >
              {labelSwitchAndContent}
            </calcite-panel>
          </calcite-flow>
        )}
      </Host>
    );
  }

  // esri-ds2022-label-content component
  labelContent = (labelClass: __esri.LabelClass): VNode => (
    <esri-ds2022-label-content
      labelClass={labelClass}
      mapView={this.mapView}
      layer={this.layer}
      displayType={this.displayType}
      // todo: move into class function
      onLabelContentDeleted={() => {
        this.closeLabelPopovers.emit();
        this.labelingInfo = this.labelingInfo.filter(
          (label: __esri.LabelClass) => label !== labelClass
        );
        this.reRender = !this.reRender;
      }}
    />
  );
}
