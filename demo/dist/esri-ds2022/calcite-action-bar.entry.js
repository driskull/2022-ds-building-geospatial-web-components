import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-5d892dab.js';
import { t as toggleChildActionText, q as queryActions, g as getOverflowCount, o as overflowActions, a as overflowActionsDebounceInMs, C as CalciteExpandToggle } from './CalciteExpandToggle-e136ffad.js';
import { b as getSlotted, f as focusElement } from './dom-f581ba0c.js';
import { c as createObserver } from './observers-43ae7e70.js';
import { d as debounce } from './lodash-48790aa4.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot-4d8c6f94.js';
import './resources-3ff01e10.js';
import './resources-4ba513c8.js';
import './guid-ec8a882c.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  actionGroupBottom: "action-group--bottom"
};
const SLOTS = {
  bottomActions: "bottom-actions",
  expandTooltip: "expand-tooltip"
};
const TEXT = {
  expand: "Expand",
  collapse: "Collapse"
};

const calciteActionBarCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{pointer-events:auto;display:inline-flex;flex-direction:column;align-self:stretch;max-width:15vw}:host([overflow-actions-disabled]){overflow-y:auto}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-width:0px;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}::slotted(calcite-action-group:last-child){border-bottom-width:0px}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-bottom:0px}";

let CalciteActionBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteActionBarToggle = createEvent(this, "calciteActionBarToggle", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * When set to true, the expand-toggling behavior will be disabled.
     */
    this.expandDisabled = false;
    /**
     * Indicates whether widget is expanded.
     */
    this.expanded = false;
    /**
     * Disables automatically overflowing actions that won't fit into menus.
     */
    this.overflowActionsDisabled = false;
    this.mutationObserver = createObserver("mutation", () => {
      const { el, expanded } = this;
      toggleChildActionText({ parent: el, expanded });
      this.conditionallyOverflowActions();
    });
    this.resizeObserver = createObserver("resize", (entries) => this.resizeHandlerEntries(entries));
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.actionMenuOpenChangeHandler = (event) => {
      if (event.detail) {
        const composedPath = event.composedPath();
        Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((group) => {
          if (!composedPath.includes(group)) {
            group.menuOpen = false;
          }
        });
      }
    };
    this.resizeHandlerEntries = (entries) => {
      entries.forEach(this.resizeHandler);
    };
    this.resizeHandler = (entry) => {
      const { height } = entry.contentRect;
      this.resize(height);
    };
    this.resize = debounce((height) => {
      var _a;
      const { el, expanded, expandDisabled } = this;
      if (!height) {
        return;
      }
      const actions = queryActions(el);
      const actionCount = expandDisabled ? actions.length : actions.length + 1;
      const actionGroups = Array.from(el.querySelectorAll("calcite-action-group"));
      const groupCount = getSlotted(el, SLOTS.bottomActions) || !expandDisabled
        ? actionGroups.length + 1
        : actionGroups.length;
      const overflowCount = getOverflowCount({
        actionCount,
        actionHeight: (_a = actions[0]) === null || _a === void 0 ? void 0 : _a.clientHeight,
        height,
        groupCount
      });
      overflowActions({
        actionGroups,
        expanded,
        overflowCount
      });
    }, overflowActionsDebounceInMs);
    this.conditionallyOverflowActions = () => {
      if (!this.overflowActionsDisabled) {
        this.overflowActions();
      }
    };
    this.toggleExpand = () => {
      this.expanded = !this.expanded;
    };
    this.setExpandToggleRef = (el) => {
      this.expandToggleEl = el;
    };
  }
  expandHandler(expandDisabled) {
    if (!expandDisabled) {
      toggleChildActionText({ parent: this.el, expanded: this.expanded });
    }
    this.conditionallyOverflowActions();
  }
  expandedHandler(expanded) {
    if (!this.expandDisabled) {
      toggleChildActionText({ parent: this.el, expanded });
    }
    this.calciteActionBarToggle.emit();
  }
  overflowDisabledHandler(overflowActionsDisabled) {
    overflowActionsDisabled
      ? this.resizeObserver.disconnect()
      : this.resizeObserver.observe(this.el);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  componentDidLoad() {
    this.conditionallyOverflowActions();
  }
  connectedCallback() {
    var _a, _b;
    const { el, expandDisabled, expanded } = this;
    if (!expandDisabled) {
      toggleChildActionText({ parent: el, expanded });
    }
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(el, { childList: true, subtree: true });
    if (!this.overflowActionsDisabled) {
      (_b = this.resizeObserver) === null || _b === void 0 ? void 0 : _b.observe(el);
    }
    this.conditionallyOverflowActions();
    connectConditionalSlotComponent(this);
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    (_b = this.resizeObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
    disconnectConditionalSlotComponent(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Overflows actions that won't fit into menus.
   * @internal
   */
  async overflowActions() {
    this.resize(this.el.clientHeight);
  }
  /** Sets focus on the component. */
  async setFocus(focusId) {
    if (focusId === "expand-toggle") {
      await focusElement(this.expandToggleEl);
      return;
    }
    this.el.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderBottomActionGroup() {
    const { expanded, expandDisabled, intlExpand, intlCollapse, el, position, toggleExpand, scale } = this;
    const tooltip = getSlotted(el, SLOTS.expandTooltip);
    const expandLabel = intlExpand || TEXT.expand;
    const collapseLabel = intlCollapse || TEXT.collapse;
    const expandToggleNode = !expandDisabled ? (h(CalciteExpandToggle, { el: el, expanded: expanded, intlCollapse: collapseLabel, intlExpand: expandLabel, position: position, ref: this.setExpandToggleRef, scale: scale, toggle: toggleExpand, tooltip: tooltip })) : null;
    return getSlotted(el, SLOTS.bottomActions) || expandToggleNode ? (h("calcite-action-group", { class: CSS.actionGroupBottom, scale: scale }, h("slot", { name: SLOTS.bottomActions }), h("slot", { name: SLOTS.expandTooltip }), expandToggleNode)) : null;
  }
  render() {
    return (h(Host, { onCalciteActionMenuOpenChange: this.actionMenuOpenChangeHandler }, h("slot", null), this.renderBottomActionGroup()));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "expandDisabled": ["expandHandler"],
    "expanded": ["expandedHandler"],
    "overflowActionsDisabled": ["overflowDisabledHandler"]
  }; }
};
CalciteActionBar.style = calciteActionBarCss;

export { CalciteActionBar as calcite_action_bar };
