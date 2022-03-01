import { r as registerInstance, e as createEvent, h, g as getElement } from './index-5d892dab.js';

const calciteAccordionCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-accordion-item-spacing-unit:0.25rem;--calcite-accordion-icon-margin:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-icon-margin:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-icon-margin:1rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:block;max-width:100%;border-width:1px;border-bottom-width:0px;border-style:solid;border-color:var(--calcite-ui-border-2);line-height:1.5rem;--calcite-accordion-item-border:var(--calcite-ui-border-2);--calcite-accordion-item-background:var(--calcite-ui-foreground-1)}.accordion--transparent{border-color:transparent;--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}.accordion--minimal{--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0;border-color:transparent}";

let CalciteAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteAccordionChange = createEvent(this, "calciteAccordionChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /** specify the appearance - default (containing border), or minimal (no containing border), defaults to default */
    this.appearance = "default";
    /** specify the placement of the icon in the header, defaults to end */
    this.iconPosition = "end";
    /** specify the type of the icon in the header, defaults to chevron */
    this.iconType = "chevron";
    /** specify the scale of accordion, defaults to m */
    this.scale = "m";
    /** specify the selection mode - multi (allow any number of open items), single (allow one open item),
     * or single-persist (allow and require one open item), defaults to multi */
    this.selectionMode = "multi";
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    /** created list of Accordion items */
    this.items = [];
    /** keep track of whether the items have been sorted so we don't re-sort */
    this.sorted = false;
    this.sortItems = (items) => items.sort((a, b) => a.position - b.position).map((a) => a.item);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentDidLoad() {
    if (!this.sorted) {
      this.items = this.sortItems(this.items);
      this.sorted = true;
    }
  }
  render() {
    return (h("div", { class: {
        "accordion--transparent": this.appearance === "transparent",
        "accordion--minimal": this.appearance === "minimal"
      } }, h("slot", null)));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  calciteAccordionItemKeyEvent(e) {
    const item = e.detail.item;
    const parent = e.detail.parent;
    if (this.el === parent) {
      const key = item.key;
      const itemToFocus = e.target;
      const isFirstItem = this.itemIndex(itemToFocus) === 0;
      const isLastItem = this.itemIndex(itemToFocus) === this.items.length - 1;
      switch (key) {
        case "ArrowDown":
          if (isLastItem) {
            this.focusFirstItem();
          }
          else {
            this.focusNextItem(itemToFocus);
          }
          break;
        case "ArrowUp":
          if (isFirstItem) {
            this.focusLastItem();
          }
          else {
            this.focusPrevItem(itemToFocus);
          }
          break;
        case "Home":
          this.focusFirstItem();
          break;
        case "End":
          this.focusLastItem();
          break;
      }
    }
  }
  registerCalciteAccordionItem(e) {
    const item = {
      item: e.target,
      parent: e.detail.parent,
      position: e.detail.position
    };
    if (this.el === item.parent) {
      this.items.push(item);
    }
  }
  updateActiveItemOnChange(event) {
    this.requestedAccordionItem = event.detail.requestedAccordionItem;
    this.calciteAccordionChange.emit({
      requestedAccordionItem: this.requestedAccordionItem
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  focusFirstItem() {
    const firstItem = this.items[0];
    this.focusElement(firstItem);
  }
  focusLastItem() {
    const lastItem = this.items[this.items.length - 1];
    this.focusElement(lastItem);
  }
  focusNextItem(e) {
    const index = this.itemIndex(e);
    const nextItem = this.items[index + 1] || this.items[0];
    this.focusElement(nextItem);
  }
  focusPrevItem(e) {
    const index = this.itemIndex(e);
    const prevItem = this.items[index - 1] || this.items[this.items.length - 1];
    this.focusElement(prevItem);
  }
  itemIndex(e) {
    return this.items.indexOf(e);
  }
  focusElement(item) {
    const target = item;
    target.focus();
  }
  get el() { return getElement(this); }
};
CalciteAccordion.style = calciteAccordionCss;

export { CalciteAccordion as calcite_accordion };
