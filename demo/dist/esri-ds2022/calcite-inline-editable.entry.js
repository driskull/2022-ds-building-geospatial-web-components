import { r as registerInstance, e as createEvent, h, g as getElement } from './index-5d892dab.js';
import { g as getElementProp, b as getSlotted } from './dom-f581ba0c.js';
import { c as connectLabel, d as disconnectLabel, g as getLabelText } from './label-85b60f54.js';
import { c as createObserver } from './observers-43ae7e70.js';
import './guid-ec8a882c.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const CSS = {
  wrapper: "wrapper",
  confirmChangesButton: "confirm-changes-button",
  cancelEditingButton: "cancel-editing-button",
  inputWrapper: "input-wrapper",
  cancelEditingButtonWrapper: "cancel-editing-button-wrapper",
  enableEditingButton: "enable-editing-button",
  controlsWrapper: "controls-wrapper"
};
const TEXT = {
  intlEnablingEditing: "Click to edit",
  intlCancelEditing: "Cancel",
  intlConfirmChanges: "Save"
};

const calciteInlineEditableCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}:host([scale=s]) .controls-wrapper{height:1.5rem}:host([scale=m]) .controls-wrapper{height:2rem}:host([scale=l]) .controls-wrapper{height:2.75rem}:host(:not([editing-enabled]):not([disabled])) .wrapper:hover{background-color:var(--calcite-ui-foreground-2)}.wrapper{box-sizing:border-box;display:flex;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);transition-property:all;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;transition-delay:0s}.wrapper .input-wrapper{flex:1 1 0%}.controls-wrapper{display:flex}:host([disabled]) .cancel-editing-button-wrapper{border-color:var(--calcite-ui-border-2)}";

let CalciteInlineEditable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteInlineEditableEditCancel = createEvent(this, "calciteInlineEditableEditCancel", 7);
    this.calciteInlineEditableEditConfirm = createEvent(this, "calciteInlineEditableEditConfirm", 7);
    this.calciteInlineEditableEnableEditingChange = createEvent(this, "calciteInlineEditableEnableEditingChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Props
    //
    //--------------------------------------------------------------------------
    /** specify whether editing can be enabled */
    this.disabled = false;
    /** specify whether the wrapped input element is editable, defaults to false */
    this.editingEnabled = false;
    /** specify whether the confirm button should display a loading state, defaults to false */
    this.loading = false;
    /** specify whether save/cancel controls should be displayed when editingEnabled is true, defaults to false */
    this.controls = false;
    /** specify text to be user for the enable editing button's aria-label, defaults to `Click to edit`
     * @default "Click to edit"
     */
    this.intlEnableEditing = TEXT.intlEnablingEditing;
    /** specify text to be user for the cancel editing button's aria-label, defaults to `Cancel`
     * @default "Cancel"
     */
    this.intlCancelEditing = TEXT.intlCancelEditing;
    /** specify text to be user for the confirm changes button's aria-label, defaults to `Save`
     * @default "Save"
     */
    this.intlConfirmChanges = TEXT.intlConfirmChanges;
    this.mutationObserver = createObserver("mutation", () => this.mutationObserverCallback());
    this.transitionEnd = () => {
      if (!this.editingEnabled && !!this.shouldEmitCancel) {
        this.calciteInlineEditableEditCancel.emit();
      }
    };
    this.enableEditing = () => {
      var _a, _b;
      this.valuePriorToEditing = (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.value;
      this.editingEnabled = true;
      (_b = this.inputElement) === null || _b === void 0 ? void 0 : _b.setFocus();
      this.calciteInlineEditableEnableEditingChange.emit();
    };
    this.disableEditing = () => {
      this.editingEnabled = false;
    };
    this.cancelEditing = () => {
      if (this.inputElement) {
        this.inputElement.value = this.valuePriorToEditing;
      }
      this.disableEditing();
      this.enableEditingButton.setFocus();
    };
    this.escapeKeyHandler = async (e) => {
      var _a;
      if (e.key !== "Escape") {
        if (e.key === "Tab" && this.shouldShowControls) {
          if (!e.shiftKey && e.target === this.inputElement) {
            e.preventDefault();
            this.cancelEditingButton.setFocus();
          }
          if (!!e.shiftKey && e.target === this.cancelEditingButton) {
            e.preventDefault();
            e.stopPropagation();
            (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.setFocus();
          }
        }
        return;
      }
      this.cancelEditing();
    };
    this.cancelEditingHandler = async (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.cancelEditing();
    };
    this.enableEditingHandler = async (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (this.disabled) {
        return;
      }
      if (!this.editingEnabled) {
        this.enableEditing();
      }
    };
    this.confirmChangesHandler = async (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.calciteInlineEditableEditConfirm.emit();
      try {
        if (this.afterConfirm) {
          this.loading = true;
          await this.afterConfirm();
          this.disableEditing();
          this.enableEditingButton.setFocus();
        }
      }
      catch (e) {
      }
      finally {
        this.loading = false;
      }
    };
  }
  disabledWatcher(disabled) {
    if (this.inputElement) {
      this.inputElement.disabled = disabled;
    }
  }
  editingEnabledWatcher(newValue, oldValue) {
    if (this.inputElement) {
      this.inputElement.editingEnabled = newValue;
    }
    if (!newValue && !!oldValue) {
      this.shouldEmitCancel = true;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    var _a;
    connectLabel(this);
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true });
    this.mutationObserverCallback();
  }
  disconnectedCallback() {
    var _a;
    disconnectLabel(this);
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  render() {
    return (h("div", { class: CSS.wrapper, onClick: this.enableEditingHandler, onKeyDown: this.escapeKeyHandler, onTransitionEnd: this.transitionEnd }, h("div", { class: CSS.inputWrapper }, h("slot", null)), h("div", { class: CSS.controlsWrapper }, h("calcite-button", { appearance: "transparent", class: CSS.enableEditingButton, color: "neutral", disabled: this.disabled, iconStart: "pencil", label: this.intlEnableEditing, onClick: this.enableEditingHandler, ref: (el) => (this.enableEditingButton = el), scale: this.scale, style: {
        opacity: this.editingEnabled ? "0" : "1",
        width: this.editingEnabled ? "0" : "inherit"
      } }), this.shouldShowControls && [
      h("div", { class: CSS.cancelEditingButtonWrapper }, h("calcite-button", { appearance: "transparent", class: CSS.cancelEditingButton, color: "neutral", disabled: this.disabled, iconStart: "x", label: this.intlCancelEditing, onClick: this.cancelEditingHandler, ref: (el) => (this.cancelEditingButton = el), scale: this.scale })),
      h("calcite-button", { appearance: "solid", class: CSS.confirmChangesButton, color: "blue", disabled: this.disabled, iconStart: "check", label: this.intlConfirmChanges, loading: this.loading, onClick: this.confirmChangesHandler, scale: this.scale })
    ])));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  blurHandler() {
    if (!this.controls) {
      this.disableEditing();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  async setFocus() {
    var _a, _b;
    if (this.editingEnabled) {
      (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.setFocus();
    }
    else {
      (_b = this.enableEditingButton) === null || _b === void 0 ? void 0 : _b.setFocus();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  mutationObserverCallback() {
    var _a;
    this.updateSlottedInput();
    this.scale =
      this.scale || ((_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.scale) || getElementProp(this.el, "scale", undefined);
  }
  onLabelClick() {
    this.setFocus();
  }
  updateSlottedInput() {
    const inputElement = getSlotted(this.el, {
      matches: "calcite-input"
    });
    this.inputElement = inputElement;
    if (!inputElement) {
      return;
    }
    this.inputElement.disabled = this.disabled;
    this.inputElement.label = this.inputElement.label || getLabelText(this);
  }
  get shouldShowControls() {
    return this.editingEnabled && this.controls;
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "disabled": ["disabledWatcher"],
    "editingEnabled": ["editingEnabledWatcher"]
  }; }
};
CalciteInlineEditable.style = calciteInlineEditableCss;

export { CalciteInlineEditable as calcite_inline_editable };
