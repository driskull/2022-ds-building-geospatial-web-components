import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-5d892dab.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  container: "container"
};

const calciteLabelCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:inline}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{margin-bottom:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) .container{margin-bottom:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) .container{margin-bottom:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host .container{margin-top:0px;margin-right:0px;margin-left:0px;width:100%;line-height:1.375;color:var(--calcite-ui-text-1)}:host([layout=default]) .container{display:flex;flex-direction:column;gap:0.25rem}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:0.5rem}:host([layout=inline][scale=l]) .container{gap:0.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted(*){pointer-events:none}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity:0}:host([disable-spacing]) .container{margin:0px;gap:0px}";

let CalciteLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteInternalLabelClick = createEvent(this, "calciteInternalLabelClick", 3);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** specify the text alignment of the label */
    this.alignment = "start";
    /**
     * specify the status of the label and any child input / input messages
     * @deprecated set directly on child element instead
     */
    this.status = "idle";
    /** specify the scale of the label, defaults to m */
    this.scale = "m";
    /** is the wrapped element positioned inline with the label slotted text */
    this.layout = "default";
    /** eliminates any space around the label */
    this.disableSpacing = false;
    /** is the label disabled  */
    this.disabled = false;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.labelClickHandler = (event) => {
      this.calciteInternalLabelClick.emit({
        sourceEvent: event
      });
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    return (h(Host, { onClick: this.labelClickHandler }, h("div", { class: CSS.container }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
CalciteLabel.style = calciteLabelCss;

export { CalciteLabel as calcite_label };
