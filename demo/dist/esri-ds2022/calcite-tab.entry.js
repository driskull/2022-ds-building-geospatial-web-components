import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-5d892dab.js';
import { g as guid } from './guid-ec8a882c.js';
import { n as nodeListToArray } from './dom-f581ba0c.js';

const calciteTabCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([active]) section{display:block}:host{display:none;height:100%;width:100%}:host([active]){display:block;height:100%;width:100%;overflow:auto}section{display:none;height:100%;width:100%}:host([scale=s]){padding-top:0.25rem;padding-bottom:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){padding-top:0.5rem;padding-bottom:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){padding-top:0.75rem;padding-bottom:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}";

let CalciteTab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteTabRegister = createEvent(this, "calciteTabRegister", 7);
    /**
     * Show this tab
     */
    this.active = false;
    /** @internal Parent tabs component scale value */
    this.scale = "m";
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     */
    this.guid = `calcite-tab-title-${guid()}`;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const id = this.el.id || this.guid;
    return (h(Host, { "aria-expanded": this.active.toString(), "aria-labelledby": this.labeledBy, id: id, role: "tabpanel" }, h("section", null, h("slot", null))));
  }
  componentDidLoad() {
    this.calciteTabRegister.emit();
  }
  componentWillRender() {
    var _a;
    this.scale = (_a = this.el.closest("calcite-tabs")) === null || _a === void 0 ? void 0 : _a.scale;
  }
  disconnectedCallback() {
    var _a;
    // Dispatching to body in order to be listened by other elements that are still connected to the DOM.
    (_a = document.body) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new CustomEvent("calciteTabUnregister", {
      detail: this.el
    }));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  tabChangeHandler(event) {
    // to allow `<calcite-tabs>` to be nested we need to make sure this
    // `calciteTabChange` event was actually fired from a title that is a
    // child of the `<calcite-tabs>` that is the a parent of this tab.
    if (event.target.closest("calcite-tabs") !== this.el.closest("calcite-tabs")) {
      return;
    }
    if (this.tab) {
      this.active = this.tab === event.detail.tab;
    }
    else {
      this.getTabIndex().then((index) => {
        this.active = index === event.detail.tab;
      });
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Return the index of this tab within the tab array
   */
  async getTabIndex() {
    return Array.prototype.indexOf.call(nodeListToArray(this.el.parentElement.children).filter((e) => e.matches("calcite-tab")), this.el);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   * @internal
   */
  async updateAriaInfo(tabIds = [], titleIds = []) {
    this.labeledBy = titleIds[tabIds.indexOf(this.el.id)] || null;
  }
  get el() { return getElement(this); }
};
CalciteTab.style = calciteTabCss;

export { CalciteTab as calcite_tab };
