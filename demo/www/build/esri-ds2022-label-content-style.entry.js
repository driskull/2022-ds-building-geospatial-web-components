import { r as registerInstance, e as createEvent, h } from './index-5d892dab.js';

const labelContentStyleCss = ".popover{z-index:100}";

let LabelContentStyle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.labelContentStyleChanges = createEvent(this, "labelContentStyleChanges", 7);
    this.closeLabelPopovers = createEvent(this, "closeLabelPopovers", 7);
    this.fontSizeSelectionChange = (event) => {
      this.labelClass.symbol.font.size = Number(event.detail.value) * 0.75;
      this.labelContentStyleChanges.emit();
    };
    this.colorChange = (event) => {
      var _a;
      this.labelClass.symbol.color = (_a = event.target) === null || _a === void 0 ? void 0 : _a.value;
      this.labelContentStyleChanges.emit();
    };
    this.OffsetXChange = (event) => {
      this.labelClass.symbol.xoffset = Number(event.detail.value);
      this.labelContentStyleChanges.emit();
    };
    this.OffsetYChange = (event) => {
      this.labelClass.symbol.yoffset = Number(event.detail.value);
      this.labelContentStyleChanges.emit();
    };
  }
  // listen when user hits dismiss on calcite panel
  calcitePanelDismissedChangeHandler() {
    this.closeLabelPopovers.emit();
  }
  render() {
    var _a;
    // change font size
    const fontSizeSelection = (h("calcite-label", null, "Size", h("calcite-input", { type: "number", scale: "s", min: 5, max: 125, value: `${this.labelClass.symbol.font.size / 0.75 || 0}`, onCalciteInputInput: this.fontSizeSelectionChange })));
    // change font color
    const color = (h("calcite-label", null, "Color", h("calcite-color-picker", { hideChannels: true, hideSaved: true, scale: "m", value: ((_a = this.labelClass.symbol.color) === null || _a === void 0 ? void 0 : _a.toHex()) || "#ffffff", onCalciteColorPickerInput: this.colorChange })));
    // change offset to move label on the map
    const offset = (h("div", null, h("calcite-label", { scale: "s" }, "OffsetX", h("calcite-input", { type: "number", scale: "s", placeholder: "OffsetX", value: `${this.labelClass.symbol.xoffset || 0}`, min: -20, max: 20, onCalciteInputInput: this.OffsetXChange })), h("calcite-label", { scale: "s" }, "OffsetY", h("calcite-input", { type: "number", scale: "s", placeholder: "OffsetY", value: `${this.labelClass.symbol.yoffset || 0}`, min: -20, max: 20, onCalciteInputInput: this.OffsetYChange }))));
    return (h("calcite-popover", { placement: "leading-start", open: true, disablePointer: true, referenceElement: this.labelContentRefElement, offsetDistance: -Math.round(this.labelContentRefElement.getBoundingClientRect().width), offsetSkidding: 0, label: "", class: "popover" }, h("calcite-panel", { intlClose: "Close", dismissible: true, heightScale: "l", style: {
        width: `${this.labelContentRefElement.getBoundingClientRect().width}px`
      } }, h("div", { slot: "header-content" }, "Label style"), h("calcite-block", { heading: "", collapsible: false, open: true }, fontSizeSelection, color, offset))));
  }
};
LabelContentStyle.style = labelContentStyleCss;

export { LabelContentStyle as esri_ds2022_label_content_style };
