import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-5d892dab.js';
import { g as getElementProp } from './dom-f581ba0c.js';
import './guid-ec8a882c.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const SLOTS = {
  input: "input"
};
const CSS = {
  radioGroupItemIcon: "radio-group-item-icon"
};

const calciteRadioGroupItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:flex;cursor:pointer;align-self:stretch;font-weight:var(--calcite-font-weight-normal);transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out, border-color var(--calcite-animation-timing) ease-in-out}:host label{pointer-events:none;margin:0.125rem;box-sizing:border-box;display:flex;flex:1 1 0%;align-items:center;color:var(--calcite-ui-text-3);transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out, border-color var(--calcite-internal-animation-timing-fast) ease-in-out, color var(--calcite-internal-animation-timing-fast) ease-in-out}.label--horizontal{justify-content:center}:host{outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:-1px}.label--scale-s{padding-left:0.5rem;padding-right:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-top:0.125rem;padding-bottom:0.125rem}.label--scale-m{padding-left:0.75rem;padding-right:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-top:0.375rem;padding-bottom:0.375rem}.label--scale-l{padding-left:1rem;padding-right:1rem;padding-top:0.625rem;padding-bottom:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host(:hover) label{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:active) label{background-color:var(--calcite-ui-foreground-3)}:host([checked]) label{cursor:default;border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-brand);color:var(--calcite-ui-background)}:host([checked]) .label--outline{border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-foreground-1);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);color:var(--calcite-ui-brand)}::slotted(input){display:none}.radio-group-item-icon{position:relative;margin:0px;display:inline-flex;line-height:inherit}:host([icon-position=start]) .label--scale-s .radio-group-item-icon{margin-inline-end:0.5rem}:host([icon-position=end]) .label--scale-s .radio-group-item-icon{margin-inline-end:unset;margin-inline-start:0.5rem}:host([icon-position=start]) .label--scale-m .radio-group-item-icon{margin-inline-end:0.75rem}:host([icon-position=end]) .label--scale-m .radio-group-item-icon{margin-inline-end:unset;margin-inline-start:0.75rem}:host([icon-position=start]) .label--scale-l .radio-group-item-icon{margin-inline-end:1rem}:host([icon-position=end]) .label--scale-l .radio-group-item-icon{margin-inline-end:unset;margin-inline-start:1rem}";

let CalciteRadioGroupItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteRadioGroupItemChange = createEvent(this, "calciteRadioGroupItemChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** Indicates whether the control is checked. */
    this.checked = false;
    /** flip the icon in rtl */
    this.iconFlipRtl = false;
    /** optionally used with icon, select where to position the icon */
    this.iconPosition = "start";
  }
  handleCheckedChange() {
    this.calciteRadioGroupItemChange.emit();
  }
  render() {
    const { checked, value } = this;
    const scale = getElementProp(this.el, "scale", "m");
    const appearance = getElementProp(this.el, "appearance", "solid");
    const layout = getElementProp(this.el, "layout", "horizontal");
    const iconEl = (h("calcite-icon", { class: CSS.radioGroupItemIcon, flipRtl: this.iconFlipRtl, icon: this.icon, scale: "s" }));
    return (h(Host, { "aria-checked": checked.toString(), role: "radio" }, h("label", { class: {
        "label--scale-s": scale === "s",
        "label--scale-m": scale === "m",
        "label--scale-l": scale === "l",
        "label--horizontal": layout === "horizontal",
        "label--outline": appearance === "outline"
      } }, this.icon && this.iconPosition === "start" ? iconEl : null, h("slot", null, value), h("slot", { name: SLOTS.input }), this.icon && this.iconPosition === "end" ? iconEl : null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "checked": ["handleCheckedChange"]
  }; }
};
CalciteRadioGroupItem.style = calciteRadioGroupItemCss;

export { CalciteRadioGroupItem as calcite_radio_group_item };
