import {
  Component,
  h,
  Prop,
  Host,
  Event,
  EventEmitter,
  State,
  Element,
  Listen,
  VNode
} from "@stencil/core";
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

  // Need this to rerender on any change since we are making changes to labelclass object, which will not trigger a rerender.
  @State() reRender = true;

  visibleRangeSlider: HTMLDivElement;

  dropdownElement: HTMLCalciteDropdownElement;

  dropdownButton: HTMLCalciteButtonElement;

  labelStyle: HTMLEsriDs2022LabelContentStyleElement;

  // add widget after render
  componentDidLoad(): void {
    this.addScaleRangeSlider();
  }

  // Called after every re-render. Not called on initial draw.

  componentDidUpdate(): void {
    this.internalLabelUpdated.emit();
  }

  @Listen("closeLabelPopovers", { target: "window" })
  closeLabelPopoversHandler(): void {
    if (this.labelStyle) {
      document.body.removeChild(this.labelStyle);
      this.labelStyle = null;
    }
    this.disableLabelPanel.emit(false);
  }

  getDisplayFieldName(): string {
    return (this.labelClass as any).getLabelExpressionSingleField();
  }

  addScaleRangeSlider(): void {
    const scaleRangeSlider = new ScaleRangeSlider({
      container: this.visibleRangeSlider,
      view: this.mapView,
      layer: this.layer,
      minScale: this.labelClass.minScale || 0,
      maxScale: this.labelClass.maxScale || 0
    });
    // watch for slider changes and update the map
    scaleRangeSlider.watch(
      ["minScale", "maxScale"],
      (value: number, _oldValue: number, name: string) => {
        if (name === "minScale") {
          this.labelClass.minScale = value;
        } else if (name === "maxScale") {
          this.labelClass.maxScale = value;
        }
        this.closeLabelPopovers.emit();
        this.reRender = !this.reRender;
      }
    );
  }

  render(): VNode {
    // dropdown for list of fields
    const labelField = (
      <calcite-label>
        Label field
        <calcite-dropdown
          ref={(el) => (this.dropdownElement = el)}
          maxItems={12}
          onCalciteDropdownSelect={(): void => {
            this.closeLabelPopovers.emit();
            let selectedItem = this.dropdownElement?.selectedItems?.[0]?.id;
            this.dropdownButton.innerHTML = selectedItem;
            this.labelClass.labelExpressionInfo.expression = `$feature["${selectedItem}"]`;
            this.reRender = !this.reRender;
          }}
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
          onClick={() => {
            this.closeLabelPopovers.emit();
            if (!this.labelStyle) {
              this.labelStyle = document.createElement("esri-ds2022-label-content-style");
              this.labelStyle.labelContentRefElement = this.hostElement;
              this.labelStyle.labelClass = this.labelClass;
              this.labelStyle.addEventListener("labelContentStyleChanges", () => {
                this.reRender = !this.reRender;
              });
              document.body.appendChild(this.labelStyle);
              this.disableLabelPanel.emit(true);
            }
          }}
        >
          Cluster label
        </calcite-button>
      </calcite-label>
    );

    // jsapi widget for scale range slider
    const sliderBlock = (
      <calcite-label>
        Visible range
        <div class="slider" ref={(el) => (this.visibleRangeSlider = el)}></div>
      </calcite-label>
    );
    return (
      <Host>
        <calcite-block
          heading="Label"
          collapsible={true}
          open={true}
          intlCollapse="Collapse"
          intlExpand="Expand"
          onCalciteBlockToggle={() => {
            this.closeLabelPopovers.emit();
          }}
        >
          <calcite-icon slot="icon" scale="m" icon="label" />
          <calcite-action
            slot="control"
            icon="trash"
            text="Delete"
            appearance="clear"
            onClick={() => {
              this.labelContentDeleted.emit();
            }}
          />
          {this.displayType === DisplayType.feature && labelField}
          {labelStyle}
          {sliderBlock}
        </calcite-block>
      </Host>
    );
  }
}
