import { r as registerInstance, e as createEvent, h, F as Fragment, g as getElement } from './index-5d892dab.js';
import { g as guid } from './guid-ec8a882c.js';
import { c as connectLabel, d as disconnectLabel } from './label-85b60f54.js';
import { c as connectForm, d as disconnectForm, H as HiddenFormInputSlot } from './form-614eaea5.js';
import './dom-f581ba0c.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
const TEXT = {
  rating: "Rating",
  stars: "Stars: ${num}"
};

const calciteRatingCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:flex;align-items:center;width:-moz-fit-content;width:fit-content}:host([scale=s]){height:1.5rem;--calcite-rating-spacing-unit:0.25rem}:host([scale=m]){height:2rem;--calcite-rating-spacing-unit:0.5rem}:host([scale=l]){height:2.75rem;--calcite-rating-spacing-unit:0.75rem}:host([disabled]){pointer-events:none;opacity:0.5}:host([read-only]){pointer-events:none}.fieldset{margin:0px;display:flex;border-width:0px;padding:0px}.wrapper{display:inline-block;margin-inline-end:var(--calcite-rating-spacing-unit)}.star{position:relative;display:flex;cursor:pointer;outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;color:var(--calcite-ui-border-input);transition:var(--calcite-animation-timing);transform:scale(1)}.star:active{transform:scale(1.1)}.focused{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.average,.fraction{color:var(--calcite-ui-warning)}.hovered,.selected,:host([read-only]) .average,:host([read-only]) .fraction{color:var(--calcite-ui-brand)}.hovered:not(.selected){transform:scale(0.9)}:host .fraction{pointer-events:none;position:absolute;top:0px;overflow:hidden;transition:var(--calcite-animation-timing);inset-inline-start:0}calcite-chip{pointer-events:none;cursor:default}.number--average{font-weight:var(--calcite-font-weight-bold)}.number--count{color:var(--calcite-ui-text-2);font-style:italic}.number--count:not(:first-child){margin-inline-start:var(--calcite-rating-spacing-unit)}.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

let CalciteRating = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteRatingChange = createEvent(this, "calciteRatingChange", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /** specify the scale of the component, defaults to m */
    this.scale = "m";
    /** the value of the rating component */
    this.value = 0;
    /** is the rating component in a selectable mode */
    this.readOnly = false;
    /** is the rating component in a selectable mode */
    this.disabled = false;
    /** Show average and count data summary chip (if available) */
    this.showChip = false;
    /** Localized string for "Rating" (used for aria label)
     * @default "Rating"
     */
    this.intlRating = TEXT.rating;
    /** Localized string for labelling each star, `${num}` in the string will be replaced by the number
     * @default "Stars: ${num}"
     */
    this.intlStars = TEXT.stars;
    /**
     * When true, makes the component required for form-submission.
     *
     * @internal
     */
    this.required = false;
    this.guid = `calcite-ratings-${guid()}`;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    connectLabel(this);
    connectForm(this);
  }
  disconnectedCallback() {
    disconnectLabel(this);
    disconnectForm(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  blurHandler() {
    this.hasFocus = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderStars() {
    return [1, 2, 3, 4, 5].map((i) => {
      const selected = this.value >= i;
      const average = this.average && !this.value && i <= this.average;
      const hovered = i <= this.hoverValue;
      const fraction = this.average && this.average + 1 - i;
      const partial = !this.value && !hovered && fraction > 0 && fraction < 1;
      const focused = this.hasFocus && this.focusValue === i;
      return (h("span", { class: { wrapper: true } }, h("label", { class: { star: true, focused, selected, average, hovered, partial }, htmlFor: `${this.guid}-${i}`, onMouseOver: () => {
          this.hoverValue = i;
        } }, h("calcite-icon", { "aria-hidden": "true", class: "icon", icon: selected || average || this.readOnly ? "star-f" : "star", scale: this.scale }), partial && (h("div", { class: "fraction", style: { width: `${fraction * 100}%` } }, h("calcite-icon", { icon: "star-f", scale: this.scale }))), h("span", { class: "visually-hidden" }, this.intlStars.replace("${num}", `${i}`))), h("input", { checked: i === this.value, class: "visually-hidden", disabled: this.disabled || this.readOnly, id: `${this.guid}-${i}`, name: this.guid, onChange: () => this.updateValue(i), onFocus: () => {
          this.hasFocus = true;
          this.focusValue = i;
        }, ref: (el) => (i === 1 || i === this.value) && (this.inputFocusRef = el), type: "radio", value: i })));
    });
  }
  render() {
    const { intlRating, showChip, scale, count, average } = this;
    return (h(Fragment, null, h("fieldset", { class: "fieldset", onBlur: () => (this.hoverValue = null), onMouseLeave: () => (this.hoverValue = null), onTouchEnd: () => (this.hoverValue = null) }, h("legend", { class: "visually-hidden" }, intlRating), this.renderStars()), (count || average) && showChip ? (h("calcite-chip", { scale: scale, value: count === null || count === void 0 ? void 0 : count.toString() }, !!average && h("span", { class: "number--average" }, average.toString()), !!count && h("span", { class: "number--count" }, "(", count === null || count === void 0 ? void 0 :
      count.toString(), ")"))) : null, h(HiddenFormInputSlot, { component: this })));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  onLabelClick() {
    this.setFocus();
  }
  updateValue(value) {
    this.value = value;
    this.calciteRatingChange.emit({ value });
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    this.inputFocusRef.focus();
  }
  get el() { return getElement(this); }
};
CalciteRating.style = calciteRatingCss;

export { CalciteRating as calcite_rating };
