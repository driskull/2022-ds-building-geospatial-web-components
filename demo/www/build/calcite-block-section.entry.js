import { r as registerInstance, e as createEvent, h, g as getElement } from './index-5d892dab.js';
import { a as getElementDir } from './dom-f581ba0c.js';
import './guid-ec8a882c.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  content: "content",
  invalid: "invalid",
  toggle: "toggle",
  toggleSwitch: "toggle--switch",
  toggleSwitchContent: "toggle--switch__content",
  toggleSwitchText: "toggle--switch__text",
  sectionHeader: "section-header",
  sectionHeaderText: "section-header__text",
  statusIcon: "status-icon",
  valid: "valid"
};
const TEXT = {
  collapse: "Collapse",
  expand: "Expand"
};
const ICONS = {
  menuOpen: "chevron-down",
  menuClosedLeft: "chevron-left",
  menuClosedRight: "chevron-right",
  valid: "check-circle",
  invalid: "exclamation-mark-triangle"
};

const calciteBlockSectionCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host([open]){border-width:0px;border-bottom-width:1px;border-style:solid;border-bottom-color:var(--calcite-ui-border-3)}:host(:last-child){border-bottom-width:0px}.toggle{width:100%;border-width:0px;background-color:transparent;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}.toggle--switch,.section-header{margin-left:0px;margin-right:0px;margin-top:0.25rem;margin-bottom:0.25rem;display:flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;padding-left:0px;padding-right:0px;padding-top:0.5rem;padding-bottom:0.5rem;font-size:var(--calcite-font-size--1);outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header .status-icon{align-self:flex-end}.section-header__text{margin-left:0.75rem;margin-right:0.75rem;margin-top:0px;margin-bottom:0px;flex:1 1 auto;text-align:initial;word-wrap:anywhere}.toggle--switch calcite-switch{pointer-events:none;margin-inline-start:0.25rem}.toggle--switch .status-icon{margin-inline-start:0.5rem}.toggle--switch__content{display:flex;flex:1 1 auto;align-items:center}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}";

let CalciteBlockSection = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteBlockSectionToggle = createEvent(this, "calciteBlockSectionToggle", 7);
    /**
     * When true, the block's section content will be displayed.
     */
    this.open = false;
    /**
     * This property determines the look of the section toggle.
     * If the value is "switch", a toggle-switch will be displayed.
     * If the value is "button", a clickable header is displayed.
     */
    this.toggleDisplay = "button";
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleHeaderKeyDown = (event) => {
      if (event.key === " " || event.key === "Enter") {
        this.toggleSection();
        event.preventDefault();
        event.stopPropagation();
      }
    };
    this.toggleSection = () => {
      this.open = !this.open;
      this.calciteBlockSectionToggle.emit();
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderStatusIcon() {
    var _a;
    const { status } = this;
    const statusIcon = (_a = ICONS[status]) !== null && _a !== void 0 ? _a : false;
    const statusIconClasses = {
      [CSS.statusIcon]: true,
      [CSS.valid]: status == "valid",
      [CSS.invalid]: status == "invalid"
    };
    return !!statusIcon ? (h("calcite-icon", { class: statusIconClasses, icon: statusIcon, scale: "s" })) : null;
  }
  render() {
    const { el, intlCollapse, intlExpand, open, text, toggleDisplay } = this;
    const dir = getElementDir(el);
    const arrowIcon = open
      ? ICONS.menuOpen
      : dir === "rtl"
        ? ICONS.menuClosedLeft
        : ICONS.menuClosedRight;
    const toggleLabel = open ? intlCollapse || TEXT.collapse : intlExpand || TEXT.expand;
    const headerNode = toggleDisplay === "switch" ? (h("div", { "aria-label": toggleLabel, class: {
        [CSS.toggle]: true,
        [CSS.toggleSwitch]: true
      }, onClick: this.toggleSection, onKeyDown: this.handleHeaderKeyDown, tabIndex: 0, title: toggleLabel }, h("div", { class: CSS.toggleSwitchContent }, h("span", { class: CSS.toggleSwitchText }, text)), h("calcite-switch", { checked: open, label: toggleLabel, scale: "s", tabIndex: -1 }), this.renderStatusIcon())) : (h("button", { "aria-label": toggleLabel, class: {
        [CSS.sectionHeader]: true,
        [CSS.toggle]: true
      }, name: toggleLabel, onClick: this.toggleSection }, h("calcite-icon", { icon: arrowIcon, scale: "s" }), h("span", { class: CSS.sectionHeaderText }, text), this.renderStatusIcon()));
    return (h("section", { "aria-expanded": open.toString() }, headerNode, h("div", { class: CSS.content, hidden: !open }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
CalciteBlockSection.style = calciteBlockSectionCss;

export { CalciteBlockSection as calcite_block_section };
