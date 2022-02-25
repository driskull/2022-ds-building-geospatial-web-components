import { Component, h, Prop, Event, EventEmitter, Element, Listen, VNode } from "@stencil/core";
// esri jsapi widget: https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-ScaleRangeSlider.html
import ScaleRangeSlider from "@arcgis/core/widgets/ScaleRangeSlider";
import { DisplayType } from "../_utils";

// mark internal so it doesn't show up in stencil-doc output.
// We don't want clients to use this component directly.
/** @internal **/
@Component({
  tag: "esri-ds2022-label-content",
  styleUrl: "label-content.css",
  shadow: true
})
export class LabelContent {
  @Element() hostElement: HTMLEsriDs2022LabelContentElement;

  // current label class based on which this component is rendered
  @Prop() labelClass: __esri.LabelClass;

  // arcgis/core/views/MapView: https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html
  @Prop() mapView: __esri.MapView;

  // arcgis/core/layers/FeatureLayer: https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html
  @Prop() layer: __esri.FeatureLayer;

  // feature or cluster
  @Prop() displayType: DisplayType;

  // emit when this label class needs to be deleted
  @Event() labelContentDeleted: EventEmitter;

  // let main label component know something has changed and it needs to update the map
  @Event() internalLabelUpdated: EventEmitter;

  // close label popvers => label-content-style component
  @Event() closeLabelPopovers: EventEmitter;

  // emit when main panel should be disabled/enabled
  @Event() disableLabelPanel: EventEmitter;

  dropdownElement: HTMLCalciteDropdownElement;

  dropdownButton: HTMLCalciteButtonElement;

  labelStyle: HTMLEsriDs2022LabelContentStyleElement;

  scaleRangeSlider: __esri.ScaleRangeSlider;

  scaleRangeSliderWatch: __esri.WatchHandle;

  mapViewScaleWatch: __esri.WatchHandle;

  componentWillLoad() {
    this.scaleRangeSlider = new ScaleRangeSlider({
      view: this.mapView,
      layer: this.layer,
      minScale: this.labelClass.minScale || 0,
      maxScale: this.labelClass.maxScale || 0
    });
    this.scaleRangeSliderWatch = this.scaleRangeSlider.watch(
      ["minScale", "maxScale"],
      (value: number, _oldValue: number, name: string) => {
        if (name === "minScale") {
          this.labelClass.minScale = value;
        } else if (name === "maxScale") {
          this.labelClass.maxScale = value;
        }
        this.closeLabelPopovers.emit();
        this.internalLabelUpdated.emit();
      }
    );
    this.mapViewScaleWatch = this.mapView.watch("scale", () => this.scaleRangeSlider.renderNow());
  }

  disconnectedCallback() {
    this.closeLabelPopoversHandler();
    this.scaleRangeSlider?.destroy();
    this.scaleRangeSliderWatch?.remove();
    this.mapViewScaleWatch?.remove();
  }

  @Listen("closeLabelPopovers", { target: "window" })
  closeLabelPopoversHandler(): void {
    if (this.labelStyle) {
      this.labelStyle.removeEventListener(
        "labelContentStyleChanges",
        this.labelContentStyleChanges
      );
      document.body.removeChild(this.labelStyle);
      this.labelStyle = null;
    }
    this.disableLabelPanel.emit(false);
  }

  getDisplayFieldName(): string {
    return this.labelClass.getLabelExpressionSingleField();
  }

  labelFieldSelection = (): void => {
    this.closeLabelPopovers.emit();
    let selectedItem = this.dropdownElement?.selectedItems?.[0]?.id;
    this.dropdownButton.innerHTML = selectedItem;
    this.labelClass.labelExpressionInfo.expression = `$feature["${selectedItem}"]`;
    this.internalLabelUpdated.emit();
  };

  labelContentStyleChanges = (): void => {
    this.internalLabelUpdated.emit();
  };

  openLabelStyle = (): void => {
    this.closeLabelPopovers.emit();
    if (!this.labelStyle) {
      this.labelStyle = document.createElement("esri-ds2022-label-content-style");
      this.labelStyle.labelContentRefElement = this.hostElement;
      this.labelStyle.labelClass = this.labelClass;
      this.labelStyle.addEventListener("labelContentStyleChanges", this.labelContentStyleChanges);
      document.body.appendChild(this.labelStyle);
      this.disableLabelPanel.emit(true);
    }
  };

  render(): VNode {
    // dropdown for list of fields
    const labelField = (
      <calcite-label>
        Label field
        <calcite-dropdown
          ref={(el) => (this.dropdownElement = el)}
          maxItems={12}
          onCalciteDropdownSelect={this.labelFieldSelection}
        >
          <calcite-button
            ref={(el) => (this.dropdownButton = el)}
            slot="dropdown-trigger"
            appearance="outline"
            color="neutral"
            scale="m"
            iconEnd="chevronDown"
            alignment="icon-end-space-between"
            width="full"
          >
            {this.getDisplayFieldName()}
          </calcite-button>
          <calcite-dropdown-group selection-mode="single">
            {this.layer.fields.map((field) => {
              return (
                <calcite-dropdown-item
                  id={field.name}
                  active={field.name === this.getDisplayFieldName()}
                >
                  {field.alias || field.name}
                </calcite-dropdown-item>
              );
            })}
          </calcite-dropdown-group>
        </calcite-dropdown>
      </calcite-label>
    );

    // open style popover component
    const labelStyle = (
      <calcite-label>
        Edit label style
        <calcite-button
          appearance="outline"
          color="neutral"
          scale="m"
          iconEnd="chevronDown"
          alignment="icon-end-space-between"
          width="full"
          onClick={this.openLabelStyle}
        >
          Cluster label
        </calcite-button>
      </calcite-label>
    );

    // jsapi widget for scale range slider
    const sliderBlock = (
      <calcite-label>
        Visible range
        <div class="slider" ref={(el) => (this.scaleRangeSlider.container = el)}></div>
      </calcite-label>
    );
    return (
      <calcite-block
        heading="Label"
        collapsible={true}
        open={true}
        intlCollapse="Collapse"
        intlExpand="Expand"
        onCalciteBlockToggle={() => this.closeLabelPopovers.emit()}
      >
        <calcite-icon slot="icon" scale="m" icon="label" />
        <calcite-action
          slot="control"
          icon="trash"
          text="Delete"
          appearance="clear"
          onClick={() => this.labelContentDeleted.emit()}
        />
        {this.displayType === DisplayType.feature && labelField}
        {labelStyle}
        {sliderBlock}
      </calcite-block>
    );
  }
}
