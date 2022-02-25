import { Component, h, Prop, Event, EventEmitter, Listen, VNode } from "@stencil/core";

// mark internal so it doesn't show up in stencil-doc output.
// We don't want clients to use this component directly.
/** @internal **/
@Component({
  tag: "esri-ds2022-label-content-style",
  styleUrl: "label-content-style.css",
  shadow: true
})
export class LabelContentStyle {
  // place popover based on this element
  @Prop() labelContentRefElement: HTMLElement;

  // current label class
  @Prop() labelClass: __esri.LabelClass;

  // emit when user makes changes to labelclass symbol
  @Event() labelContentStyleChanges: EventEmitter;

  // close when user hits dismissed
  @Event() closeLabelPopovers: EventEmitter;

  // listen when user hits dismiss on calcite panel
  @Listen("calcitePanelDismissedChange")
  calcitePanelDismissedChangeHandler(): void {
    this.closeLabelPopovers.emit();
  }

  fontSizeSelectionChange = (event: CustomEvent): void => {
    (this.labelClass.symbol as __esri.TextSymbol).font.size = Number(event.detail.value) * 0.75;
    this.labelContentStyleChanges.emit();
  };

  colorChange = (event: CustomEvent): void => {
    this.labelClass.symbol.color = (event.target as any)?.value;
    this.labelContentStyleChanges.emit();
  };

  OffsetXChange = (event: CustomEvent): void => {
    (this.labelClass.symbol as __esri.TextSymbol).xoffset = Number(event.detail.value);
    this.labelContentStyleChanges.emit();
  };

  OffsetYChange = (event: CustomEvent): void => {
    (this.labelClass.symbol as __esri.TextSymbol).yoffset = Number(event.detail.value);
    this.labelContentStyleChanges.emit();
  };

  render(): VNode {
    // change font size
    const fontSizeSelection = (
      <calcite-label>
        Size
        <calcite-input
          type="number"
          scale="s"
          min={5}
          max={125}
          value={`${(this.labelClass.symbol as __esri.TextSymbol).font.size / 0.75 || 0}`}
          onCalciteInputInput={this.fontSizeSelectionChange}
        />
      </calcite-label>
    );

    // change font color
    const color = (
      <calcite-label>
        Color
        <calcite-color-picker
          hideChannels={true}
          hideSaved={true}
          scale="m"
          value={this.labelClass.symbol.color?.toHex() || "#ffffff"}
          onCalciteColorPickerInput={this.colorChange}
        />
      </calcite-label>
    );

    // change offset to move label on the map
    const offset = (
      <div>
        <calcite-label scale="s">
          OffsetX
          <calcite-input
            type="number"
            scale="s"
            placeholder="OffsetX"
            value={`${(this.labelClass.symbol as __esri.TextSymbol).xoffset || 0}`}
            min={-20}
            max={20}
            onCalciteInputInput={this.OffsetXChange}
          />
        </calcite-label>
        <calcite-label scale="s">
          OffsetY
          <calcite-input
            type="number"
            scale="s"
            placeholder="OffsetY"
            value={`${(this.labelClass.symbol as __esri.TextSymbol).yoffset || 0}`}
            min={-20}
            max={20}
            onCalciteInputInput={this.OffsetYChange}
          />
        </calcite-label>
      </div>
    );

    return (
      <calcite-popover
        placement="leading-start"
        open={true}
        disablePointer={true}
        referenceElement={this.labelContentRefElement}
        offsetDistance={-Math.round(this.labelContentRefElement.getBoundingClientRect().width)}
        offsetSkidding={0}
        label=""
        class="popover"
      >
        <calcite-panel
          intlClose="Close"
          dismissible={true}
          heightScale="l"
          style={{
            width: `${this.labelContentRefElement.getBoundingClientRect().width}px`
          }}
        >
          <div slot="header-content">Label style</div>
          <calcite-block heading="" collapsible={false} open={true}>
            {fontSizeSelection}
            {color}
            {offset}
          </calcite-block>
        </calcite-panel>
      </calcite-popover>
    );
  }
}
