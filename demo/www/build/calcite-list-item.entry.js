import { r as registerInstance, h, f as Host, g as getElement } from './index-5d892dab.js';
import { b as getSlotted } from './dom-f581ba0c.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot-4d8c6f94.js';
import './guid-ec8a882c.js';
import './observers-43ae7e70.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  container: "container",
  contentContainer: "content-container",
  nestedContainer: "nested-container",
  contentContainerButton: "content-container--button",
  content: "content",
  actionsStart: "actions-start",
  contentStart: "content-start",
  label: "label",
  description: "description",
  contentEnd: "content-end",
  actionsEnd: "actions-end"
};
const SLOTS = {
  actionsStart: "actions-start",
  contentStart: "content-start",
  contentEnd: "content-end",
  actionsEnd: "actions-end"
};

const calciteListItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:flex;flex-direction:column}:host([disabled]){pointer-events:none;cursor:default}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family)}.container *{box-sizing:border-box}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1)}.content-container{display:flex;flex:1 1 auto;align-items:stretch;padding:0px;color:var(--calcite-ui-text-2);outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.content-container--button{cursor:pointer;border-style:none;background-color:var(--calcite-ui-foreground-1);outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;text-align:initial}.content-container--button:hover{background-color:var(--calcite-ui-foreground-2)}.content-container--button:hover .label,.content-container--button:hover .description{color:var(--calcite-ui-text-1)}.content-container--button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child{margin:0px;padding-top:0.25rem;padding-bottom:0.25rem}.label{color:var(--calcite-ui-text-1)}.description{margin-top:0.125rem;color:var(--calcite-ui-text-3)}.content-start,.content-end{pointer-events:none;flex:0 1 auto}.actions-start,.actions-end,.content-start,.content-end{display:flex;align-items:center}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){align-self:center;padding-left:0.75rem;padding-right:0.75rem}.actions-start ::slotted(calcite-action),.actions-end ::slotted(calcite-action){align-self:stretch;color:inherit}::slotted(calcite-list-item-group),::slotted(calcite-list-item){padding-left:0.5rem}";

let CalciteListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * When true, prevents the content of the list item from user interaction.
     */
    this.nonInteractive = false;
    /**
     * When true, disabled prevents interaction.
     */
    this.disabled = false;
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
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    var _a;
    (_a = this.focusEl) === null || _a === void 0 ? void 0 : _a.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderActionsStart() {
    const { el } = this;
    return getSlotted(el, SLOTS.actionsStart) ? (h("div", { class: CSS.actionsStart }, h("slot", { name: SLOTS.actionsStart }))) : null;
  }
  renderActionsEnd() {
    const { el } = this;
    return getSlotted(el, SLOTS.actionsEnd) ? (h("div", { class: CSS.actionsEnd }, h("slot", { name: SLOTS.actionsEnd }))) : null;
  }
  renderContentStart() {
    const { el } = this;
    return getSlotted(el, SLOTS.contentStart) ? (h("div", { class: CSS.contentStart }, h("slot", { name: SLOTS.contentStart }))) : null;
  }
  renderContentEnd() {
    const { el } = this;
    return getSlotted(el, SLOTS.contentEnd) ? (h("div", { class: CSS.contentEnd }, h("slot", { name: SLOTS.contentEnd }))) : null;
  }
  renderContent() {
    const { label, description } = this;
    return !!label || !!description ? (h("div", { class: CSS.content }, label ? h("div", { class: CSS.label }, label) : null, description ? h("div", { class: CSS.description }, description) : null)) : null;
  }
  renderContentContainer() {
    const { disabled, nonInteractive } = this;
    const content = [this.renderContentStart(), this.renderContent(), this.renderContentEnd()];
    return !nonInteractive ? (h("button", { class: { [CSS.contentContainer]: true, [CSS.contentContainerButton]: true }, disabled: disabled, ref: (focusEl) => (this.focusEl = focusEl) }, content)) : (h("div", { class: CSS.contentContainer, ref: () => (this.focusEl = null) }, content));
  }
  render() {
    return (h(Host, { role: "listitem" }, h("div", { class: CSS.container }, this.renderActionsStart(), this.renderContentContainer(), this.renderActionsEnd()), h("div", { class: CSS.nestedContainer }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
CalciteListItem.style = calciteListItemCss;

export { CalciteListItem as calcite_list_item };
