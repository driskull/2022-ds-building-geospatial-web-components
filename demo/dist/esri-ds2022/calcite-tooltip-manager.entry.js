import { r as registerInstance, h, g as getElement } from './index-5d892dab.js';
import { T as TOOLTIP_REFERENCE, a as TOOLTIP_DELAY_MS } from './resources-a0247471.js';
import { q as queryElementRoots } from './dom-f581ba0c.js';
import './guid-ec8a882c.js';

const calciteTooltipManagerCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}";

let CalciteTooltipManager = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hoverTimeouts = new WeakMap();
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * CSS Selector to match reference elements for tooltips. Reference elements will be identified by this selector in order to open their associated tooltip.
     * @default `[data-calcite-tooltip-reference]`
     */
    this.selector = `[${TOOLTIP_REFERENCE}]`;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.queryTooltip = (element) => {
      var _a;
      const { selector, el } = this;
      const id = (_a = element.closest(selector)) === null || _a === void 0 ? void 0 : _a.getAttribute(TOOLTIP_REFERENCE);
      return queryElementRoots(el, { id });
    };
    this.clearHoverTimeout = (tooltip) => {
      const { hoverTimeouts } = this;
      if (hoverTimeouts.has(tooltip)) {
        window.clearTimeout(hoverTimeouts.get(tooltip));
        hoverTimeouts.delete(tooltip);
      }
    };
    this.closeExistingTooltip = () => {
      const { tooltipEl } = this;
      if (tooltipEl) {
        this.toggleTooltip(tooltipEl, false);
      }
    };
    this.focusTooltip = ({ tooltip, value }) => {
      this.closeExistingTooltip();
      if (value) {
        this.clearHoverTimeout(tooltip);
      }
      this.toggleTooltip(tooltip, value);
    };
    this.toggleTooltip = (tooltip, value) => {
      tooltip.open = value;
      if (value) {
        this.tooltipEl = tooltip;
      }
    };
    this.hoverToggle = ({ tooltip, value }) => {
      const { hoverTimeouts } = this;
      hoverTimeouts.delete(tooltip);
      if (value) {
        this.closeExistingTooltip();
      }
      this.toggleTooltip(tooltip, value);
    };
    this.hoverTooltip = ({ tooltip, value }) => {
      this.clearHoverTimeout(tooltip);
      const { hoverTimeouts } = this;
      const timeoutId = window.setTimeout(() => this.hoverToggle({ tooltip, value }), TOOLTIP_DELAY_MS || 0);
      hoverTimeouts.set(tooltip, timeoutId);
    };
    this.activeTooltipHover = (event) => {
      const { tooltipEl, hoverTimeouts } = this;
      const { type } = event;
      if (!tooltipEl) {
        return;
      }
      if (type === "mouseover" && event.composedPath().includes(tooltipEl)) {
        this.clearHoverTimeout(tooltipEl);
      }
      else if (type === "mouseout" && !hoverTimeouts.has(tooltipEl)) {
        this.hoverTooltip({ tooltip: tooltipEl, value: false });
      }
    };
    this.hoverEvent = (event, value) => {
      const tooltip = this.queryTooltip(event.target);
      this.activeTooltipHover(event);
      if (!tooltip) {
        return;
      }
      this.hoverTooltip({ tooltip, value });
    };
    this.focusEvent = (event, value) => {
      const tooltip = this.queryTooltip(event.target);
      if (!tooltip || tooltip === this.clickedTooltip) {
        this.clickedTooltip = null;
        return;
      }
      this.focusTooltip({ tooltip, value });
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
  keyUpHandler(event) {
    if (event.key === "Escape") {
      const { tooltipEl } = this;
      if (tooltipEl) {
        this.clearHoverTimeout(tooltipEl);
        this.toggleTooltip(tooltipEl, false);
      }
    }
  }
  mouseEnterShow(event) {
    this.hoverEvent(event, true);
  }
  mouseLeaveHide(event) {
    this.hoverEvent(event, false);
  }
  clickHandler(event) {
    const clickedTooltip = this.queryTooltip(event.target);
    this.clickedTooltip = clickedTooltip;
    if (clickedTooltip) {
      this.toggleTooltip(clickedTooltip, false);
    }
  }
  focusShow(event) {
    this.focusEvent(event, true);
  }
  blurHide(event) {
    this.focusEvent(event, false);
  }
  get el() { return getElement(this); }
};
CalciteTooltipManager.style = calciteTooltipManagerCss;

export { CalciteTooltipManager as calcite_tooltip_manager };
