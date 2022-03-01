import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-5d892dab.js';
import { g as getElementProp } from './dom-f581ba0c.js';
import './guid-ec8a882c.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  containerLink: "container--link",
  containerSmall: "container--s",
  containerMedium: "container--m",
  containerLarge: "container--l",
  containerMulti: "container--multi-selection",
  containerSingle: "container--single-selection",
  containerNone: "container--none-selection"
};

const calciteDropdownItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}.container--s{padding-top:0.25rem;padding-bottom:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-inline-end:0.5rem;padding-inline-start:1.5rem}.container--m{padding-top:0.5rem;padding-bottom:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-inline-end:0.75rem;padding-inline-start:2rem}.container--l{padding-top:0.75rem;padding-bottom:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-inline-end:1rem;padding-inline-start:2.5rem}.container--s.container--none-selection{padding-inline-start:0.25rem}.container--s.container--none-selection .dropdown-link{padding-inline-start:0px}.container--m.container--none-selection{padding-inline-start:0.5rem}.container--m.container--none-selection .dropdown-link{padding-inline-start:0px}.container--l.container--none-selection{padding-inline-start:0.75rem}.container--l.container--none-selection .dropdown-link{padding-inline-start:0px}:host{position:relative;display:flex;flex-grow:1;align-items:center}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);-webkit-text-decoration-line:none;text-decoration-line:none;outline:2px solid transparent;outline-offset:2px;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.dropdown-item-content{flex:1 1 auto;padding-inline-end:auto;padding-inline-start:0.25rem}:host,.container--link a{outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.container--link{padding:0px}.container--link a{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);-webkit-text-decoration-line:none;text-decoration-line:none;outline:2px solid transparent;outline-offset:2px;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.container--s .dropdown-link{padding-top:0.25rem;padding-bottom:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-inline-end:0.5rem;padding-inline-start:1.5rem}.container--m .dropdown-link{padding-top:0.5rem;padding-bottom:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-inline-end:0.75rem;padding-inline-start:2rem}.container--l .dropdown-link{padding-top:0.75rem;padding-bottom:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-inline-end:1rem;padding-inline-start:2.5rem}:host(:hover) .container,:host(:active) .container{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);-webkit-text-decoration-line:none;text-decoration-line:none}:host(:hover) .container--link .dropdown-link,:host(:active) .container--link .dropdown-link{color:var(--calcite-ui-text-1)}:host(:focus) .container{color:var(--calcite-ui-text-1);-webkit-text-decoration-line:none;text-decoration-line:none}:host(:active) .container{background-color:var(--calcite-ui-foreground-3)}:host(:hover) .container:before,:host(:active) .container:before,:host(:focus) .container:before{opacity:1}:host([active]) .container:not(.container--none-selection),:host([active]) .container--link .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([active]) .container:not(.container--none-selection):before,:host([active]) .container--link .dropdown-link:before{opacity:1;color:var(--calcite-ui-brand)}:host([active]) .container:not(.container--none-selection) calcite-icon,:host([active]) .container--link .dropdown-link calcite-icon{color:var(--calcite-ui-brand)}.container--multi-selection:before,.container--none-selection:before{display:none}.container--s:before{inset-inline-start:0.5rem}.container--m:before{inset-inline-start:0.75rem}.container--l:before{inset-inline-start:1rem}.dropdown-item-icon{position:absolute;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(0.9)}.container--s .dropdown-item-icon{inset-inline-start:0.25rem}.container--m .dropdown-item-icon{inset-inline-start:0.5rem}.container--l .dropdown-item-icon{inset-inline-start:0.75rem}:host(:hover) .dropdown-item-icon{color:var(--calcite-ui-border-1);opacity:1}:host([active]) .dropdown-item-icon{color:var(--calcite-ui-brand);opacity:1}.container--s .dropdown-item-icon-start{margin-inline-end:0.5rem;margin-inline-start:0.25rem}.container--s .dropdown-item-icon-end{margin-inline-start:0.5rem}.container--m .dropdown-item-icon-start{margin-inline-end:0.75rem;margin-inline-start:0.25rem}.container--m .dropdown-item-icon-end{margin-inline-start:0.75rem}.container--l .dropdown-item-icon-start{margin-inline-end:1rem;margin-inline-start:0.25rem}.container--l .dropdown-item-icon-end{margin-inline-start:1rem}";

let CalciteDropdownItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteDropdownItemSelect = createEvent(this, "calciteDropdownItemSelect", 7);
    this.calciteDropdownItemKeyEvent = createEvent(this, "calciteDropdownItemKeyEvent", 7);
    this.calciteDropdownCloseRequest = createEvent(this, "calciteDropdownCloseRequest", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /** Indicates whether the item is active. */
    this.active = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    this.el.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.selectionMode = getElementProp(this.el, "selection-mode", "single");
    this.parentDropdownGroupEl = this.el.closest("calcite-dropdown-group");
    if (this.selectionMode === "none") {
      this.active = false;
    }
  }
  render() {
    const scale = getElementProp(this.el, "scale", "m");
    const iconStartEl = (h("calcite-icon", { class: "dropdown-item-icon-start", flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: "s" }));
    const contentNode = (h("span", { class: "dropdown-item-content" }, h("slot", null)));
    const iconEndEl = (h("calcite-icon", { class: "dropdown-item-icon-end", flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: "s" }));
    const slottedContent = this.iconStart && this.iconEnd
      ? [iconStartEl, contentNode, iconEndEl]
      : this.iconStart
        ? [iconStartEl, h("slot", null)]
        : this.iconEnd
          ? [contentNode, iconEndEl]
          : contentNode;
    const contentEl = !this.href ? (slottedContent) : (h("a", { "aria-label": this.label, class: "dropdown-link", href: this.href, ref: (el) => (this.childLink = el), rel: this.rel, target: this.target }, slottedContent));
    const itemRole = this.href
      ? null
      : this.selectionMode === "single"
        ? "menuitemradio"
        : this.selectionMode === "multi"
          ? "menuitemcheckbox"
          : "menuitem";
    const itemAria = this.selectionMode !== "none" ? this.active.toString() : null;
    return (h(Host, { "aria-checked": itemAria, role: itemRole, tabindex: "0" }, h("div", { class: {
        container: true,
        [CSS.containerLink]: !!this.href,
        [CSS.containerSmall]: scale === "s",
        [CSS.containerMedium]: scale === "m",
        [CSS.containerLarge]: scale === "l",
        [CSS.containerMulti]: this.selectionMode === "multi",
        [CSS.containerSingle]: this.selectionMode === "single",
        [CSS.containerNone]: this.selectionMode === "none"
      } }, this.selectionMode !== "none" ? (h("calcite-icon", { class: "dropdown-item-icon", icon: this.selectionMode === "multi" ? "check" : "bullet-point", scale: "s" })) : null, contentEl)));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onClick() {
    this.emitRequestedItem();
  }
  keyDownHandler(e) {
    switch (e.key) {
      case " ":
        this.emitRequestedItem();
        if (this.href) {
          e.preventDefault();
          this.childLink.click();
        }
        break;
      case "Enter":
        this.emitRequestedItem();
        if (this.href) {
          this.childLink.click();
        }
        break;
      case "Escape":
        this.calciteDropdownCloseRequest.emit();
        break;
      case "Tab":
      case "ArrowUp":
      case "ArrowDown":
      case "Home":
      case "End":
        this.calciteDropdownItemKeyEvent.emit({ keyboardEvent: e });
        break;
    }
    e.preventDefault();
  }
  updateActiveItemOnChange(event) {
    const parentEmittedChange = event.composedPath().includes(this.parentDropdownGroupEl);
    if (parentEmittedChange) {
      this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
      this.requestedDropdownItem = event.detail.requestedDropdownItem;
      this.determineActiveItem();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  determineActiveItem() {
    switch (this.selectionMode) {
      case "multi":
        if (this.el === this.requestedDropdownItem) {
          this.active = !this.active;
        }
        break;
      case "single":
        if (this.el === this.requestedDropdownItem) {
          this.active = true;
        }
        else if (this.requestedDropdownGroup === this.parentDropdownGroupEl) {
          this.active = false;
        }
        break;
      case "none":
        this.active = false;
        break;
    }
  }
  emitRequestedItem() {
    this.calciteDropdownItemSelect.emit({
      requestedDropdownItem: this.el,
      requestedDropdownGroup: this.parentDropdownGroupEl
    });
  }
  get el() { return getElement(this); }
};
CalciteDropdownItem.style = calciteDropdownItemCss;

export { CalciteDropdownItem as calcite_dropdown_item };
