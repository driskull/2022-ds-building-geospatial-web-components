import { r as registerInstance, h, g as getElement } from './index-5d892dab.js';
import { P as POPOVER_REFERENCE } from './resources-f52515cb.js';
import { q as queryElementRoots, h as queryElementsRoots } from './dom-f581ba0c.js';
import './guid-ec8a882c.js';

const calcitePopoverManagerCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}";

let CalcitePopoverManager = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * CSS Selector to match reference elements for popovers. Reference elements will be identified by this selector in order to open their associated popover.
     * @default `[data-calcite-popover-reference]`
     */
    this.selector = `[${POPOVER_REFERENCE}]`;
    /**
     * Automatically closes any currently open popovers when clicking outside of a popover.
     */
    this.autoClose = false;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.getRelatedPopover = (element) => {
      var _a;
      const { selector, el } = this;
      const id = (_a = element.closest(selector)) === null || _a === void 0 ? void 0 : _a.getAttribute(POPOVER_REFERENCE);
      return queryElementRoots(el, { id });
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return h("slot", null);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  closeOpenPopovers(event) {
    const target = event.target;
    const { autoClose, el } = this;
    const popoverSelector = "calcite-popover";
    const isTargetInsidePopover = target.closest(popoverSelector);
    const relatedPopover = this.getRelatedPopover(target);
    if (autoClose && !isTargetInsidePopover) {
      queryElementsRoots(el, popoverSelector)
        .filter((popover) => popover.open && popover !== relatedPopover)
        .forEach((popover) => popover.toggle(false));
    }
    if (!el.contains(target) || !relatedPopover) {
      return;
    }
    relatedPopover.toggle();
  }
  get el() { return getElement(this); }
};
CalcitePopoverManager.style = calcitePopoverManagerCss;

export { CalcitePopoverManager as calcite_popover_manager };
