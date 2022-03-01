import { Component, h, Host, Prop, Event, EventEmitter, Listen, State, VNode } from "@stencil/core";
import LabelClass from "@arcgis/core/layers/support/LabelClass";
import * as clusterLabelCreator from "@arcgis/core/smartMapping/labels/clusters";
import { defaultLabelProps, DisplayType } from "./_utils";
import guid from "./_utils/guid";

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

  @State() hasLabelEnabled: boolean = null;

  @State() deleteLabelContent = false;

  @State() labelContents: VNode[] = [];

  labelingInfo: __esri.LabelClass[];

  panel: HTMLCalcitePanelElement;

  addLabelBtn: HTMLCalciteFabElement;

  componentWillLoad(): void {
    // handle both feature and cluster labeling info
    this.labelingInfo =
      this.displayType === DisplayType.feature
        ? this.layer.labelingInfo
        : (this.layer.featureReduction as __esri.FeatureReductionCluster).labelingInfo;
    // add for existing via forEach since we dont want to map/clone labeling info
    if (Array.isArray(this.labelingInfo)) {
      this.labelingInfo.forEach((labelClass: __esri.LabelClass) => {
        this.addLabelClass(labelClass);
      });
    }
  }

  componentDidLoad(): void {
    // add add label button to either label panel or the label panel via clustering component
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
      this.addLabelClass(labelClass);
    });
    return calciteFab;
  }

  labelSwitchToggle = (event: CustomEvent<boolean>): void => {
    this.closeLabelPopovers.emit();
    const checked = (event.target as HTMLCalciteSwitchElement).checked;
    if (this.displayType === DisplayType.cluster) {
      (this.layer.featureReduction as __esri.FeatureReductionCluster).labelsVisible = checked;
    } else {
      this.layer.labelsVisible = checked;
    }
    this.addLabelBtn.hidden = !checked;
    this.hasLabelEnabled = checked;
  };

  labelContentDeleted(labelClass: __esri.LabelClass): void {
    this.closeLabelPopovers.emit();
    for (let x = 0; x < this.labelingInfo.length; x++) {
      if (this.labelingInfo[x] === labelClass) {
        this.labelingInfo.splice(x, 1);
        this.labelContents.splice(x, 1);
        break;
      }
    }
    this.deleteLabelContent = !this.deleteLabelContent;
  }

  addLabelClass(labelClass: __esri.LabelClass): void {
    this.labelContents = [...this.labelContents, this.labelContent(labelClass)];
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
            onCalciteSwitchChange={this.labelSwitchToggle}
          />
        </calcite-label>
        {this.getLabelsVisible() && <div class="content">{this.labelContents}</div>}
      </div>
    );

    return (
      // labelPanel => coming from cluster panel
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
      key={guid()}
      labelClass={labelClass}
      mapView={this.mapView}
      layer={this.layer}
      displayType={this.displayType}
      onLabelContentDeleted={() => this.labelContentDeleted(labelClass)}
    />
  );
}
