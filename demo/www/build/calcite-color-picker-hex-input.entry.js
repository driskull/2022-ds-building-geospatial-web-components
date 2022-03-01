import { r as registerInstance, e as createEvent, h, g as getElement } from './index-5d892dab.js';
import { n as normalizeHex, i as isValidHex, a as isLonghandHex, r as rgbToHex, h as hexToRGB, b as hexChar } from './utils-b95a761e.js';
import { c as color } from './index-02f18dea.js';
import { f as focusElement } from './dom-f581ba0c.js';
import { T as TEXT } from './resources-7498f15f.js';
import './_commonjsHelpers-321aa363.js';
import './guid-ec8a882c.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  container: "container",
  preview: "preview",
  input: "input"
};

const calciteColorPickerHexInputCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}.container{display:inline-grid;width:100%;align-items:center;grid-template-columns:1fr auto}.preview{grid-column:2/3;pointer-events:none;margin-top:0px;margin-bottom:0px;margin-left:0.25rem;margin-right:0.25rem;display:flex;align-items:center;z-index:1}.preview,.input{grid-row:1}.input{grid-column:1/3;width:100%;text-transform:uppercase}";

const DEFAULT_COLOR = color();
let CalciteColorPickerHexInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteColorPickerHexInputChange = createEvent(this, "calciteColorPickerHexInputChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /**
     * When false, empty color (null) will be allowed as a value. Otherwise, a color value is always enforced by the component.
     *
     * When true, clearing the input and blurring will restore the last valid color set. When false, it will set it to empty.
     */
    this.allowEmpty = false;
    /**
     * Label used for the hex input.
     * @default "Hex"
     */
    this.intlHex = TEXT.hex;
    /**
     * Label used for the hex input when there is no color selected.
     * @default "No color"
     */
    this.intlNoColor = TEXT.noColor;
    /**
     * The component's scale.
     */
    this.scale = "m";
    /**
     * The hex value.
     */
    this.value = normalizeHex(DEFAULT_COLOR.hex());
    this.onCalciteInputBlur = () => {
      const node = this.inputNode;
      const inputValue = node.value;
      const hex = `#${inputValue}`;
      const willClearValue = this.allowEmpty && !inputValue;
      if (willClearValue || (isValidHex(hex) && isLonghandHex(hex))) {
        return;
      }
      // manipulating DOM directly since rerender doesn't update input value
      node.value =
        this.allowEmpty && !this.internalColor
          ? ""
          : this.formatForInternalInput(rgbToHex(this.internalColor.object()));
    };
    this.onInputChange = () => {
      const inputValue = this.inputNode.value;
      let value;
      if (inputValue) {
        const hex = inputValue;
        const color = hexToRGB(`#${hex}`);
        if (!color) {
          return;
        }
        value = normalizeHex(hex);
      }
      else if (this.allowEmpty) {
        value = null;
      }
      this.value = value;
      this.calciteColorPickerHexInputChange.emit();
    };
    /**
     * The last valid/selected color. Used as a fallback if an invalid hex code is entered.
     */
    this.internalColor = DEFAULT_COLOR;
    this.previousNonNullValue = this.value;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.storeInputRef = (node) => {
      this.inputNode = node;
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    const { allowEmpty, value } = this;
    if (value) {
      const normalized = normalizeHex(value);
      if (isValidHex(normalized)) {
        this.internalColor = color(normalized);
        this.value = normalized;
      }
      return;
    }
    if (allowEmpty) {
      this.internalColor = null;
      this.value = null;
    }
  }
  handleValueChange(value, oldValue) {
    if (value) {
      const normalized = normalizeHex(value);
      if (isValidHex(normalized)) {
        const { internalColor } = this;
        const changed = !internalColor || normalized !== normalizeHex(internalColor.hex());
        this.internalColor = color(normalized);
        this.previousNonNullValue = normalized;
        this.value = normalized;
        if (changed) {
          this.calciteColorPickerHexInputChange.emit();
        }
        return;
      }
    }
    else if (this.allowEmpty) {
      this.internalColor = null;
      this.value = null;
      this.calciteColorPickerHexInputChange.emit();
      return;
    }
    this.value = oldValue;
  }
  // using @Listen as a workaround for VDOM listener not firing
  onInputKeyDown(event) {
    const { altKey, ctrlKey, metaKey, shiftKey } = event;
    const { internalColor, value } = this;
    const key = event.key;
    if (key === "Tab" || key === "Enter") {
      this.onInputChange();
      return;
    }
    const isNudgeKey = key === "ArrowDown" || key === "ArrowUp";
    if (isNudgeKey) {
      if (!value) {
        this.value = this.previousNonNullValue;
        event.preventDefault();
        return;
      }
      const direction = key === "ArrowUp" ? 1 : -1;
      const bump = shiftKey ? 10 : 1;
      this.value = normalizeHex(this.nudgeRGBChannels(internalColor, bump * direction).hex());
      event.preventDefault();
      return;
    }
    const withModifiers = altKey || ctrlKey || metaKey;
    const singleChar = key.length === 1;
    const validHexChar = hexChar.test(key);
    if (singleChar && !withModifiers && !validHexChar) {
      event.preventDefault();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const { intlHex, value } = this;
    const hexInputValue = this.formatForInternalInput(value);
    return (h("div", { class: CSS.container }, h("calcite-input", { class: CSS.input, label: intlHex, maxLength: 6, onCalciteInputBlur: this.onCalciteInputBlur, onCalciteInputChange: this.onInputChange, prefixText: "#", ref: this.storeInputRef, scale: this.scale, value: hexInputValue }), hexInputValue ? (h("calcite-color-picker-swatch", { active: true, class: CSS.preview, color: `#${hexInputValue}`, scale: this.scale })) : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    focusElement(this.inputNode);
  }
  formatForInternalInput(hex) {
    return hex ? hex.replace("#", "") : "";
  }
  nudgeRGBChannels(color$1, amount) {
    return color.rgb(color$1.array().map((channel) => channel + amount));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "value": ["handleValueChange"]
  }; }
};
CalciteColorPickerHexInput.style = calciteColorPickerHexInputCss;

export { CalciteColorPickerHexInput as calcite_color_picker_hex_input };
