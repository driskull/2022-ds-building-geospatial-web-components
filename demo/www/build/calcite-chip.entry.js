import { r as registerInstance, e as createEvent, h, g as getElement } from './index-5d892dab.js';
import { b as getSlotted } from './dom-f581ba0c.js';
import { g as guid } from './guid-ec8a882c.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot-4d8c6f94.js';
import './observers-43ae7e70.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  title: "title",
  close: "close",
  chipImageContainer: "chip-image-container",
  calciteChipIcon: "calcite-chip--icon"
};
const TEXT = {
  close: "Close"
};
const SLOTS = {
  image: "image"
};
const ICONS = {
  close: "x"
};

const calciteChipCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){height:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-unit-l:0.5rem;--calcite-chip-spacing-unit-s:0.25rem}:host([scale=s]) .chip-image-container{height:1.25rem;width:1.25rem}:host([scale=m]){height:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-unit-l:0.75rem;--calcite-chip-spacing-unit-s:6px}:host([scale=m]) .chip-image-container{height:1.5rem;width:1.5rem;padding-inline-start:0.25rem}:host([scale=l]){height:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-unit-l:1rem;--calcite-chip-spacing-unit-s:0.5rem}:host([scale=l]) .chip-image-container{height:2rem;width:2rem;padding-left:0.25rem}:host{box-sizing:border-box;display:inline-flex;cursor:default;align-items:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container{display:inline-flex;height:100%;max-width:100%;align-items:center}.title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host span{padding:0 var(--calcite-chip-spacing-unit-l)}:host([dismissible]) span{padding-inline:var(--calcite-chip-spacing-unit-l) var(--calcite-chip-spacing-unit-s)}:host([icon]:not([dismissible])) span{padding:0 var(--calcite-chip-spacing-unit-l)}:host button{margin:0px;display:inline-flex;max-height:100%;min-height:100%;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-1);outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition-property:all;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;transition-delay:0s;-webkit-appearance:none;border-start-start-radius:0;border-start-end-radius:50px;border-end-end-radius:50px;border-end-start-radius:0;padding:0 var(--calcite-chip-spacing-unit-s);color:inherit;--calcite-chip-transparent-hover:var(--calcite-button-transparent-hover);--calcite-chip-transparent-press:var(--calcite-button-transparent-press)}:host button:hover{background-color:var(--calcite-chip-transparent-hover)}:host button:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host button:active{background-color:var(--calcite-chip-transparent-press)}.chip-image-container{display:inline-flex;border-radius:50%;overflow:hidden}:host slot[name=image]::slotted(*){display:flex;height:100%;width:100%;border-radius:50%;overflow:hidden}.calcite-chip--icon{position:relative;margin-top:0px;margin-bottom:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:0;margin-inline-start:var(--calcite-chip-spacing-unit-l);border-start-start-radius:0;border-start-end-radius:50px;border-end-end-radius:50px;border-end-start-radius:0}:host([color=blue][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-info);color:var(--calcite-ui-text-inverse)}:host([color=red][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-danger);color:var(--calcite-ui-text-inverse)}:host([color=yellow][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-warning);color:#151515}:host([color=green][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-success);color:#151515}:host([color=grey][appearance=solid]){border-color:transparent;background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host([color=grey][appearance=solid]) button,:host([color=grey][appearance=solid]) calcite-icon{color:var(--calcite-ui-text-3)}:host([color=blue][appearance=clear]){border-color:var(--calcite-ui-info)}:host([color=blue][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-info)}:host([color=red][appearance=clear]){border-color:var(--calcite-ui-danger)}:host([color=red][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-danger)}:host([color=yellow][appearance=clear]){border-color:var(--calcite-ui-warning)}:host([color=yellow][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-warning)}:host([color=green][appearance=clear]){border-color:var(--calcite-ui-success)}:host([color=green][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-success)}:host([color=grey][appearance=clear]){border-color:var(--calcite-ui-border-1)}:host([color=grey][appearance=clear]) .calcite-chip--icon{color:var(--calcite-ui-text-3)}";

let CalciteChip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteChipDismiss = createEvent(this, "calciteChipDismiss", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /** specify the appearance style of the button, defaults to solid. */
    this.appearance = "solid";
    /** specify the color of the button, defaults to blue */
    this.color = "grey";
    /** Optionally show a button the user can click to dismiss the chip */
    this.dismissible = false;
    /** Aria label for the "x" button
     * @default "Close"
     */
    this.dismissLabel = TEXT.close;
    /** flip the icon in rtl */
    this.iconFlipRtl = false;
    /** specify the scale of the chip, defaults to m */
    this.scale = "m";
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.closeClickHandler = (event) => {
      event.preventDefault();
      this.calciteChipDismiss.emit(this.el);
    };
    this.guid = guid();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    connectConditionalSlotComponent(this);
  }
  disconnectedCallback() {
    disconnectConditionalSlotComponent(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    var _a;
    (_a = this.closeButton) === null || _a === void 0 ? void 0 : _a.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderChipImage() {
    const { el } = this;
    const hasChipImage = getSlotted(el, SLOTS.image);
    return hasChipImage ? (h("div", { class: CSS.chipImageContainer, key: "image" }, h("slot", { name: SLOTS.image }))) : null;
  }
  render() {
    const iconEl = (h("calcite-icon", { class: CSS.calciteChipIcon, flipRtl: this.iconFlipRtl, icon: this.icon, scale: "s" }));
    const closeButton = (h("button", { "aria-describedby": this.guid, "aria-label": this.dismissLabel, class: CSS.close, onClick: this.closeClickHandler, ref: (el) => (this.closeButton = el) }, h("calcite-icon", { icon: ICONS.close, scale: "s" })));
    return (h("div", { class: "container" }, this.renderChipImage(), this.icon ? iconEl : null, h("span", { class: CSS.title, id: this.guid }, h("slot", null)), this.dismissible ? closeButton : null));
  }
  get el() { return getElement(this); }
};
CalciteChip.style = calciteChipCss;

export { CalciteChip as calcite_chip };
