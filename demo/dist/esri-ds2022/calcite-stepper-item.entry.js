import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-5d892dab.js';
import { g as getElementProp } from './dom-f581ba0c.js';
import './guid-ec8a882c.js';

const calciteStepperItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-stepper-item-spacing-unit-s:0.25rem;--calcite-stepper-item-spacing-unit-m:0.75rem;--calcite-stepper-item-spacing-unit-l:1rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-inline-end:0.25rem}:host([scale=s]) .stepper-item-subtitle{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-stepper-item-spacing-unit-s:0.5rem;--calcite-stepper-item-spacing-unit-m:1rem;--calcite-stepper-item-spacing-unit-l:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-inline-end:0.5rem}:host([scale=m]) .stepper-item-subtitle{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-stepper-item-spacing-unit-s:0.75rem;--calcite-stepper-item-spacing-unit-m:1.25rem;--calcite-stepper-item-spacing-unit-l:1.5rem;font-size:var(--calcite-font-size-1);line-height:1.5rem;margin-inline-end:0.75rem}:host([scale=l]) .stepper-item-subtitle{font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:flex;flex-grow:1;flex-direction:column;margin-bottom:var(--calcite-stepper-item-spacing-unit-s)}:host .container{position:relative;display:flex;flex-grow:1;cursor:pointer;flex-direction:column;border-width:0px;border-top-width:2px;border-style:solid;border-color:var(--calcite-ui-border-3);color:var(--calcite-ui-text-3);-webkit-text-decoration-line:none;text-decoration-line:none;outline:2px solid transparent;outline-offset:2px;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host{outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host .stepper-item-header{display:flex;cursor:pointer;align-items:flex-start}:host .stepper-item-content,:host .stepper-item-header{transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);padding-block:var(--calcite-stepper-item-spacing-unit-l);padding-inline-end:var(--calcite-stepper-item-spacing-unit-m);text-align:start}:host .stepper-item-header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .stepper-item-content{display:none;width:100%;flex-direction:column;font-size:var(--calcite-font-size--2);line-height:1.375}:host .stepper-item-icon{margin-inline-end:var(--calcite-stepper-item-spacing-unit-m);margin-top:1px;display:inline-flex;height:0.75rem;flex-shrink:0;align-self:flex-start;color:var(--calcite-ui-text-3);opacity:var(--calcite-ui-opacity-disabled);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .stepper-item-header-text{flex-direction:column;text-align:initial;margin-inline-end:auto}:host .stepper-item-title,:host .stepper-item-subtitle{display:flex;width:100%}:host .stepper-item-title{margin-bottom:0.25rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}:host .stepper-item-subtitle{color:var(--calcite-ui-text-3)}:host .stepper-item-number{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-stepper-item-spacing-unit-m)}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]),:host([disabled]) *{pointer-events:auto;cursor:not-allowed}:host([complete]) .container{border-color:rgba(0, 122, 194, 0.5)}:host([complete]) .container .stepper-item-icon{color:var(--calcite-ui-brand)}:host([error]) .container{border-top-color:var(--calcite-ui-danger)}:host([error]) .container .stepper-item-number{color:var(--calcite-ui-danger)}:host([error]) .container .stepper-item-icon{opacity:1;color:var(--calcite-ui-danger)}:host(:hover:not([disabled]):not([active])) .container,:host(:focus:not([disabled]):not([active])) .container{border-top-color:var(--calcite-ui-brand)}:host(:hover:not([disabled]):not([active])) .container .stepper-item-title,:host(:focus:not([disabled]):not([active])) .container .stepper-item-title{color:var(--calcite-ui-text-1)}:host(:hover:not([disabled]):not([active])) .container .stepper-item-subtitle,:host(:focus:not([disabled]):not([active])) .container .stepper-item-subtitle{color:var(--calcite-ui-text-2)}:host([error]:hover:not([disabled]):not([active])) .container,:host([error]:focus:not([disabled]):not([active])) .container{border-top-color:var(--calcite-ui-danger-hover)}:host([active]) .container{border-top-color:var(--calcite-ui-brand)}:host([active]) .container .stepper-item-title{color:var(--calcite-ui-text-1)}:host([active]) .container .stepper-item-subtitle{color:var(--calcite-ui-text-2)}:host([active]) .container .stepper-item-number{color:var(--calcite-ui-brand)}:host([active]) .container .stepper-item-icon{color:var(--calcite-ui-brand);opacity:1}:host([layout=vertical]) .container{margin-left:0px;margin-right:0px;margin-top:0px;flex:1 1 auto;border-top-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-top:0px;padding-bottom:0px;border-inline-start-width:2px;padding-inline-start:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical]) .container .stepper-item-icon{order:3;margin-top:1px;margin-bottom:0px;padding-inline-start:var(--calcite-stepper-item-spacing-unit-s);margin-inline-start:auto}:host([layout=vertical]) .container .stepper-item-header{padding-inline-end:0px}:host([layout=vertical]) .container .stepper-item-content{padding:0px}:host([layout=vertical][active]) .container .stepper-item-content{display:flex}:host([layout=vertical][active]) .container .stepper-item-content ::slotted(:last-child){margin-bottom:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical][complete]) .container{border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][complete]:hover:not([disabled]):not([active])) .container,:host([layout=vertical][complete]:focus:not([disabled]):not([active])) .container{border-color:var(--calcite-ui-brand)}:host([layout=vertical][error]) .container{border-color:var(--calcite-ui-danger)}:host([layout=vertical][active]) .container{border-color:var(--calcite-ui-brand)}:host([layout=vertical]:hover:not([disabled]):not([active])) .container,:host([layout=vertical]:focus:not([disabled]):not([active])) .container{border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][error]:hover:not([disabled]):not([active])) .container,:host([layout=vertical][error]:focus:not([disabled]):not([active])) .container{border-color:var(--calcite-ui-danger-hover)}";

let CalciteStepperItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteStepperItemKeyEvent = createEvent(this, "calciteStepperItemKeyEvent", 7);
    this.calciteStepperItemSelect = createEvent(this, "calciteStepperItemSelect", 7);
    this.calciteStepperItemRegister = createEvent(this, "calciteStepperItemRegister", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /** is the step active */
    this.active = false;
    /** has the step been completed */
    this.complete = false;
    /** does the step contain an error that needs to be resolved by the user */
    this.error = false;
    /** is the step disabled and not navigable to by a user */
    this.disabled = false;
    /** should the items display an icon based on status */
    /** @internal */
    this.icon = false;
    /** optionally display the step number next to the title and subtitle */
    /** @internal */
    this.numbered = false;
    /** the scale of the item */
    /** @internal */
    this.scale = "m";
  }
  // watch for removal of disabled to register step
  disabledWatcher() {
    this.registerStepperItem();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.icon = getElementProp(this.el, "icon", false);
    this.numbered = getElementProp(this.el, "numbered", false);
    this.layout = getElementProp(this.el, "layout", false);
    this.scale = getElementProp(this.el, "scale", "m");
    this.parentStepperEl = this.el.parentElement;
  }
  componentDidLoad() {
    this.itemPosition = this.getItemPosition();
    this.itemContent = this.getItemContent();
    this.registerStepperItem();
    if (this.active) {
      this.emitRequestedItem();
    }
  }
  componentDidUpdate() {
    if (this.active) {
      this.emitRequestedItem();
    }
  }
  render() {
    return (h(Host, { "aria-expanded": this.active.toString(), onClick: () => this.emitRequestedItem(), tabindex: this.disabled ? null : 0 }, h("div", { class: "container" }, h("div", { class: "stepper-item-header" }, this.icon ? this.renderIcon() : null, this.numbered ? (h("div", { class: "stepper-item-number" }, this.getItemPosition() + 1, ".")) : null, h("div", { class: "stepper-item-header-text" }, h("span", { class: "stepper-item-title" }, this.itemTitle), h("span", { class: "stepper-item-subtitle" }, this.itemSubtitle))), h("div", { class: "stepper-item-content" }, h("slot", null)))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyDownHandler(e) {
    if (!this.disabled && e.target === this.el) {
      switch (e.key) {
        case " ":
        case "Enter":
          this.emitRequestedItem();
          e.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
        case "Home":
        case "End":
          this.calciteStepperItemKeyEvent.emit({ item: e });
          e.preventDefault();
          break;
      }
    }
  }
  updateActiveItemOnChange(event) {
    if (event.target === this.parentStepperEl) {
      this.activePosition = event.detail.position;
      this.determineActiveItem();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  renderIcon() {
    const path = this.active
      ? "circleF"
      : this.error
        ? "exclamationMarkCircleF"
        : this.complete
          ? "checkCircleF"
          : "circle";
    return h("calcite-icon", { class: "stepper-item-icon", icon: path, scale: "s" });
  }
  determineActiveItem() {
    this.active = !this.disabled && this.itemPosition === this.activePosition;
  }
  registerStepperItem() {
    this.calciteStepperItemRegister.emit({
      position: this.itemPosition,
      content: this.itemContent
    });
  }
  emitRequestedItem() {
    if (!this.disabled) {
      this.calciteStepperItemSelect.emit({
        position: this.itemPosition,
        content: this.itemContent
      });
    }
  }
  getItemContent() {
    var _a;
    // todo: Remove IE/Edge specific code.
    return ((_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("slot"))
      ? this.el.shadowRoot.querySelector("slot").assignedNodes({ flatten: true })
      : this.el.querySelector(".stepper-item-content")
        ? this.el.querySelector(".stepper-item-content").childNodes
        : null;
  }
  getItemPosition() {
    return Array.prototype.indexOf.call(this.parentStepperEl.querySelectorAll("calcite-stepper-item"), this.el);
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "disabled": ["disabledWatcher"]
  }; }
};
CalciteStepperItem.style = calciteStepperItemCss;

export { CalciteStepperItem as calcite_stepper_item };
