import { r as registerInstance, e as createEvent, h, g as getElement } from './index-5d892dab.js';
import { T as TEXT, C as CSS, I as ICONS, H as HEADING_LEVEL } from './resources-17e71cfb.js';
import { a as getElementDir } from './dom-f581ba0c.js';
import { C as CalciteHeading } from './CalciteHeading-7670f281.js';
import { c as createObserver } from './observers-43ae7e70.js';
import './guid-ec8a882c.js';

const calciteTipManagerCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2);--calcite-tip-manager-height:19vh}:host *{box-sizing:border-box}:host([closed]){display:none}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}h1.heading{font-size:var(--calcite-font-size-2);line-height:1.5rem}h2.heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}h3.heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}h4.heading,h5.heading{font-size:var(--calcite-font-size--1);line-height:1rem}.header{border-width:0px;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-top:0px;padding-bottom:0px;padding-inline-end:0px;padding-inline-start:1rem}.header h2.heading{padding:0px;font-size:var(--calcite-font-size-1);line-height:1.5rem;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-1)}.container{position:relative;outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;overflow:hidden;min-height:150px}.container:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.tip-container{margin-top:1px;display:flex;align-items:flex-start;justify-content:center;overflow:auto;outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;animation-name:none;animation-duration:var(--calcite-animation-timing);height:var(--calcite-tip-manager-height)}.tip-container:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}::slotted(calcite-tip){border-style:none;padding:0.75rem;max-width:var(--calcite-tip-max-width)}.tip-container--advancing{animation-name:tip-advance}.tip-container--retreating{animation-name:tip-retreat}.pagination{display:flex;align-items:center;justify-content:center;padding-left:0px;padding-right:0px;padding-top:0.75rem;padding-bottom:0.5rem}.page-position{margin-top:0px;margin-bottom:0px;margin-left:0.5rem;margin-right:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}@keyframes tip-advance{0%{opacity:0}0%{transform:translate3d(50px, 0, 0) scale(0.99)}100%{opacity:1}100%{transform:translate3d(0, 0, 0) scale(1)}}@keyframes tip-retreat{0%{opacity:0}0%{transform:translate3d(-50px, 0, 0) scale(0.99)}100%{opacity:1}100%{transform:translate3d(0, 0, 0) scale(1)}}";

let CalciteTipManager = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteTipManagerToggle = createEvent(this, "calciteTipManagerToggle", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * Alternate text for closing the `calcite-tip-manager`.
     */
    this.closed = false;
    this.mutationObserver = createObserver("mutation", () => this.setUpTips());
    this.hideTipManager = () => {
      this.closed = true;
      this.calciteTipManagerToggle.emit();
    };
    this.previousClicked = () => {
      this.previousTip();
    };
    this.nextClicked = () => {
      this.nextTip();
    };
    this.tipManagerKeyUpHandler = (event) => {
      if (event.target !== this.container) {
        return;
      }
      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          this.nextTip();
          break;
        case "ArrowLeft":
          event.preventDefault();
          this.previousTip();
          break;
        case "Home":
          event.preventDefault();
          this.selectedIndex = 0;
          break;
        case "End":
          event.preventDefault();
          this.selectedIndex = this.total - 1;
          break;
      }
    };
    this.storeContainerRef = (el) => {
      this.container = el;
    };
  }
  closedChangeHandler() {
    this.direction = null;
    this.calciteTipManagerToggle.emit();
  }
  selectedChangeHandler() {
    this.showSelectedTip();
    this.updateGroupTitle();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    var _a;
    this.setUpTips();
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
  }
  disconnectedCallback() {
    var _a;
    (_a = this.mutationObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Selects the next tip to display */
  async nextTip() {
    this.direction = "advancing";
    const nextIndex = this.selectedIndex + 1;
    this.selectedIndex = (nextIndex + this.total) % this.total;
  }
  /** Selects the previous tip to display */
  async previousTip() {
    this.direction = "retreating";
    const previousIndex = this.selectedIndex - 1;
    this.selectedIndex = (previousIndex + this.total) % this.total;
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  setUpTips() {
    const tips = Array.from(this.el.querySelectorAll("calcite-tip"));
    this.total = tips.length;
    if (this.total === 0) {
      return;
    }
    const selectedTip = this.el.querySelector("calcite-tip[selected]");
    this.tips = tips;
    this.selectedIndex = selectedTip ? tips.indexOf(selectedTip) : 0;
    tips.forEach((tip) => {
      tip.nonDismissible = true;
    });
    this.showSelectedTip();
    this.updateGroupTitle();
  }
  showSelectedTip() {
    this.tips.forEach((tip, index) => {
      const isSelected = this.selectedIndex === index;
      tip.selected = isSelected;
      tip.hidden = !isSelected;
    });
  }
  updateGroupTitle() {
    const selectedTip = this.tips[this.selectedIndex];
    const tipParent = selectedTip.closest("calcite-tip-group");
    this.groupTitle = (tipParent === null || tipParent === void 0 ? void 0 : tipParent.groupTitle) || this.intlDefaultTitle || TEXT.defaultGroupTitle;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderPagination() {
    const dir = getElementDir(this.el);
    const { selectedIndex, tips, total, intlNext, intlPrevious, intlPaginationLabel } = this;
    const nextLabel = intlNext || TEXT.next;
    const previousLabel = intlPrevious || TEXT.previous;
    const paginationLabel = intlPaginationLabel || TEXT.defaultPaginationLabel;
    return tips.length > 1 ? (h("footer", { class: CSS.pagination }, h("calcite-action", { class: CSS.pagePrevious, icon: dir === "ltr" ? ICONS.chevronLeft : ICONS.chevronRight, onClick: this.previousClicked, scale: "m", text: previousLabel }), h("span", { class: CSS.pagePosition }, `${paginationLabel} ${selectedIndex + 1}/${total}`), h("calcite-action", { class: CSS.pageNext, icon: dir === "ltr" ? ICONS.chevronRight : ICONS.chevronLeft, onClick: this.nextClicked, scale: "m", text: nextLabel }))) : null;
  }
  render() {
    const { closed, direction, headingLevel, groupTitle, selectedIndex, intlClose, total } = this;
    const closeLabel = intlClose || TEXT.close;
    if (total === 0) {
      return null;
    }
    return (h("section", { "aria-hidden": closed.toString(), class: CSS.container, hidden: closed, onKeyUp: this.tipManagerKeyUpHandler, ref: this.storeContainerRef, tabIndex: 0 }, h("header", { class: CSS.header }, h(CalciteHeading, { class: CSS.heading, level: headingLevel || HEADING_LEVEL }, groupTitle), h("calcite-action", { class: CSS.close, onClick: this.hideTipManager, scale: "m", text: closeLabel }, h("calcite-icon", { icon: ICONS.close, scale: "m" }))), h("div", { class: {
        [CSS.tipContainer]: true,
        [CSS.tipContainerAdvancing]: !closed && direction === "advancing",
        [CSS.tipContainerRetreating]: !closed && direction === "retreating"
      }, key: selectedIndex, tabIndex: 0 }, h("slot", null)), this.renderPagination()));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "closed": ["closedChangeHandler"],
    "selectedIndex": ["selectedChangeHandler"]
  }; }
};
CalciteTipManager.style = calciteTipManagerCss;

export { CalciteTipManager as calcite_tip_manager };
