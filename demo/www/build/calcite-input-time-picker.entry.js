import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-5d892dab.js';
import { g as guid } from './guid-ec8a882c.js';
import { l as localizeTimeString, f as formatTimeString, i as isValidTime } from './time-49b4b6c3.js';
import { c as connectLabel, d as disconnectLabel, g as getLabelText } from './label-85b60f54.js';
import { c as connectForm, d as disconnectForm, H as HiddenFormInputSlot } from './form-614eaea5.js';
import './number-c0828bbc.js';
import './dom-f581ba0c.js';

const calciteInputTimePickerCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:inline-block;-webkit-user-select:none;user-select:none}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

let CalciteInputTimePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteInputTimePickerChange = createEvent(this, "calciteInputTimePickerChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** The active state of the time input */
    this.active = false;
    /** The disabled state of the time input */
    this.disabled = false;
    /**
     * BCP 47 language tag for desired language and country format
     * @internal
     */
    this.locale = document.documentElement.lang || navigator.language || "en";
    /**
     * When true, makes the component required for form-submission.
     *
     * @internal
     */
    this.required = false;
    /** The scale (size) of the time input */
    this.scale = "m";
    /** number (seconds) that specifies the granularity that the value must adhere to */
    this.step = 60;
    /** The selected time in UTC (always 24-hour format) */
    this.value = null;
    /** whether the value of the input was changed as a result of user typing or not */
    this.internalValueChange = false;
    this.previousValidValue = null;
    this.referenceElementId = `input-time-picker-${guid()}`;
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    this.calciteInputBlurHandler = () => {
      this.active = false;
      const shouldIncludeSeconds = this.shouldIncludeSeconds();
      const localizedInputValue = localizeTimeString(this.calciteInputEl.value, this.locale, shouldIncludeSeconds);
      this.setInputValue(localizedInputValue || localizeTimeString(this.value, this.locale, shouldIncludeSeconds));
    };
    this.calciteInputFocusHandler = () => {
      this.active = true;
    };
    this.calciteInputInputHandler = (event) => {
      const target = event.target;
      this.setValue({ value: target.value });
    };
    this.timePickerChangeHandler = (event) => {
      event.stopPropagation();
      const target = event.target;
      const value = target.value;
      this.setValue({ value, origin: "time-picker" });
    };
    this.setCalciteInputEl = (el) => {
      this.calciteInputEl = el;
    };
    this.setCalciteTimePickerEl = (el) => {
      this.calciteTimePickerEl = el;
    };
    this.setInputValue = (newInputValue) => {
      if (!this.calciteInputEl) {
        return;
      }
      this.calciteInputEl.value = newInputValue;
    };
    this.setValue = ({ value, origin = "input" }) => {
      const previousValue = this.value;
      const newValue = formatTimeString(value);
      const newLocalizedValue = localizeTimeString(newValue, this.locale, this.shouldIncludeSeconds());
      this.internalValueChange = origin !== "external" && origin !== "loading";
      const shouldEmit = origin !== "loading" &&
        origin !== "external" &&
        ((value !== this.previousValidValue && !value) ||
          !!(!this.previousValidValue && newValue) ||
          (newValue !== this.previousValidValue && newValue));
      if (value) {
        if (shouldEmit) {
          this.previousValidValue = newValue;
        }
        if (newValue && newValue !== this.value) {
          this.value = newValue;
        }
        this.localizedValue = newLocalizedValue;
      }
      else {
        this.value = value;
        this.localizedValue = null;
      }
      if (origin === "time-picker" || origin === "external") {
        this.setInputValue(newLocalizedValue);
      }
      if (shouldEmit) {
        const changeEvent = this.calciteInputTimePickerChange.emit();
        if (changeEvent.defaultPrevented) {
          this.internalValueChange = false;
          this.value = previousValue;
          this.setInputValue(previousValue);
          this.previousValidValue = previousValue;
        }
        else {
          this.previousValidValue = newValue;
        }
      }
    };
  }
  localeWatcher(newLocale) {
    this.setInputValue(localizeTimeString(this.value, newLocale, this.shouldIncludeSeconds()));
  }
  valueWatcher(newValue) {
    if (!this.internalValueChange) {
      this.setValue({ value: newValue, origin: "external" });
    }
    this.internalValueChange = false;
  }
  clickHandler(event) {
    if (event.composedPath().includes(this.calciteTimePickerEl)) {
      return;
    }
    this.setFocus();
  }
  keyUpHandler(event) {
    if (event.key === "Escape" && this.active) {
      this.active = false;
    }
  }
  timePickerBlurHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    this.active = false;
  }
  timePickerFocusHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    this.active = true;
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    this.calciteInputEl.setFocus();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  onLabelClick() {
    this.setFocus();
  }
  shouldIncludeSeconds() {
    return this.step < 60;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    if (this.value) {
      this.setValue({ value: isValidTime(this.value) ? this.value : undefined, origin: "loading" });
    }
    connectLabel(this);
    connectForm(this);
  }
  componentDidLoad() {
    this.setInputValue(this.localizedValue);
  }
  disconnectedCallback() {
    disconnectLabel(this);
    disconnectForm(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const popoverId = `${this.referenceElementId}-popover`;
    return (h(Host, null, h("div", { "aria-controls": popoverId, "aria-haspopup": "dialog", "aria-label": this.name, "aria-owns": popoverId, id: this.referenceElementId, role: "combobox" }, h("calcite-input", { disabled: this.disabled, icon: "clock", label: getLabelText(this), onCalciteInputBlur: this.calciteInputBlurHandler, onCalciteInputFocus: this.calciteInputFocusHandler, onCalciteInputInput: this.calciteInputInputHandler, ref: this.setCalciteInputEl, scale: this.scale, step: this.step })), h("calcite-popover", { id: popoverId, label: "Time Picker", open: this.active || false, referenceElement: this.referenceElementId }, h("calcite-time-picker", { intlHour: this.intlHour, intlHourDown: this.intlHourDown, intlHourUp: this.intlHourUp, intlMeridiem: this.intlMeridiem, intlMeridiemDown: this.intlMeridiemDown, intlMeridiemUp: this.intlMeridiemUp, intlMinute: this.intlMinute, intlMinuteDown: this.intlMinuteDown, intlMinuteUp: this.intlMinuteUp, intlSecond: this.intlSecond, intlSecondDown: this.intlSecondDown, intlSecondUp: this.intlSecondUp, lang: this.locale, onCalciteTimePickerChange: this.timePickerChangeHandler, ref: this.setCalciteTimePickerEl, scale: this.scale, step: this.step, value: this.value })), h(HiddenFormInputSlot, { component: this })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "locale": ["localeWatcher"],
    "value": ["valueWatcher"]
  }; }
};
CalciteInputTimePicker.style = calciteInputTimePickerCss;

export { CalciteInputTimePicker as calcite_input_time_picker };
