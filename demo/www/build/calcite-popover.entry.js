import { r as registerInstance, e as createEvent, i as forceUpdate, h, f as Host, g as getElement } from './index-5d892dab.js';
import { T as TEXT, A as ARIA_EXPANDED, P as POPOVER_REFERENCE, a as ARIA_CONTROLS, C as CSS, H as HEADING_LEVEL } from './resources-f52515cb.js';
import { d as defaultOffsetDistance, u as updatePopper, c as createPopper, C as CSS$1 } from './popper-25cc6fe7.js';
import { g as guid } from './guid-ec8a882c.js';
import { q as queryElementRoots } from './dom-f581ba0c.js';
import { C as CalciteHeading } from './CalciteHeading-7670f281.js';

const calcitePopoverCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:900;transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;transition:var(--calcite-popper-transition);visibility:hidden;transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host([data-popper-placement^=bottom]) .calcite-popper-anim{transform:translateY(-5px)}:host([data-popper-placement^=top]) .calcite-popper-anim{transform:translateY(5px)}:host([data-popper-placement^=left]) .calcite-popper-anim{transform:translateX(5px)}:host([data-popper-placement^=right]) .calcite-popper-anim{transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;transform:translate(0)}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:\"\";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top]) .arrow{bottom:-4px}:host([data-popper-placement^=bottom]) .arrow{top:-4px}:host([data-popper-placement^=left]) .arrow{right:-4px}:host([data-popper-placement^=right]) .arrow{left:-4px}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-popper-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-bottom-width:1px;border-style:solid;background-color:var(--calcite-ui-foreground-1);border-bottom-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;height:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);overflow:hidden}.container.has-header{flex-direction:column}.content{display:flex;height:100%;width:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;overflow:hidden}::slotted(calcite-panel),::slotted(calcite-flow){height:100%}";

let CalcitePopover = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calcitePopoverClose = createEvent(this, "calcitePopoverClose", 7);
    this.calcitePopoverOpen = createEvent(this, "calcitePopoverOpen", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * Display a close button within the Popover.
     * @deprecated use dismissible instead.
     */
    this.closeButton = false;
    /**
     * Display a close button within the Popover.
     */
    this.dismissible = false;
    /**
     * Prevents flipping the popover's placement when it starts to overlap its reference element.
     */
    this.disableFlip = false;
    /**
     * Removes the caret pointer.
     */
    this.disablePointer = false;
    /**
     * Offset the position of the popover away from the reference element.
     * @default 6
     */
    this.offsetDistance = defaultOffsetDistance;
    /**
     * Offset the position of the popover along the reference element.
     */
    this.offsetSkidding = 0;
    /**
     * Display and position the component.
     */
    this.open = false;
    /** Describes the type of positioning to use for the overlaid content. If your element is in a fixed container, use the 'fixed' value. */
    this.overlayPositioning = "absolute";
    /**
     * Determines where the component will be positioned relative to the referenceElement.
     * @see [PopperPlacement](https://github.com/Esri/calcite-components/blob/master/src/utils/popper.ts#L25)
     */
    this.placement = "auto";
    /** Text for close button.
     * @default "Close"
     */
    this.intlClose = TEXT.close;
    this.guid = `calcite-popover-${guid()}`;
    this.activeTransitionProp = "opacity";
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.setUpReferenceElement = () => {
      this.removeReferences();
      this.effectiveReferenceElement = this.getReferenceElement();
      const { el, referenceElement, effectiveReferenceElement } = this;
      if (referenceElement && !effectiveReferenceElement) {
        console.warn(`${el.tagName}: reference-element id "${referenceElement}" was not found.`, {
          el
        });
      }
      this.addReferences();
      this.createPopper();
    };
    this.getId = () => {
      return this.el.id || this.guid;
    };
    this.setExpandedAttr = () => {
      const { effectiveReferenceElement, open } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      effectiveReferenceElement.setAttribute(ARIA_EXPANDED, open.toString());
    };
    this.addReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      const id = this.getId();
      effectiveReferenceElement.setAttribute(POPOVER_REFERENCE, id);
      effectiveReferenceElement.setAttribute(ARIA_CONTROLS, id);
      this.setExpandedAttr();
    };
    this.removeReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      effectiveReferenceElement.removeAttribute(POPOVER_REFERENCE);
      effectiveReferenceElement.removeAttribute(ARIA_CONTROLS);
      effectiveReferenceElement.removeAttribute(ARIA_EXPANDED);
    };
    this.hide = () => {
      this.open = false;
    };
    this.transitionEnd = (event) => {
      if (event.propertyName === this.activeTransitionProp) {
        this.open ? this.calcitePopoverOpen.emit() : this.calcitePopoverClose.emit();
      }
    };
  }
  offsetDistanceOffsetHandler() {
    this.reposition();
  }
  offsetSkiddingHandler() {
    this.reposition();
  }
  openHandler() {
    this.reposition();
    this.setExpandedAttr();
  }
  placementHandler() {
    this.reposition();
  }
  referenceElementHandler() {
    this.setUpReferenceElement();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  componentWillLoad() {
    this.setUpReferenceElement();
  }
  componentDidLoad() {
    this.reposition();
  }
  disconnectedCallback() {
    this.removeReferences();
    this.destroyPopper();
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Updates the position of the component. */
  async reposition() {
    const { popper, el, placement } = this;
    const modifiers = this.getModifiers();
    popper
      ? await updatePopper({
        el,
        modifiers,
        placement,
        popper
      })
      : this.createPopper();
  }
  /** Sets focus on the component. */
  async setFocus(focusId) {
    var _a;
    const { closeButtonEl } = this;
    if (focusId === "close-button" && closeButtonEl) {
      forceUpdate(closeButtonEl);
      closeButtonEl.setFocus();
      return;
    }
    (_a = this.el) === null || _a === void 0 ? void 0 : _a.focus();
  }
  /** Toggles the popover's open property. */
  async toggle(value = !this.open) {
    this.open = value;
  }
  getReferenceElement() {
    const { referenceElement, el } = this;
    return ((typeof referenceElement === "string"
      ? queryElementRoots(el, { id: referenceElement })
      : referenceElement) || null);
  }
  getModifiers() {
    const { arrowEl, flipPlacements, disableFlip, disablePointer, offsetDistance, offsetSkidding } = this;
    const flipModifier = {
      name: "flip",
      enabled: !disableFlip
    };
    if (flipPlacements) {
      flipModifier.options = {
        fallbackPlacements: flipPlacements
      };
    }
    const arrowModifier = {
      name: "arrow",
      enabled: !disablePointer
    };
    if (arrowEl) {
      arrowModifier.options = {
        element: arrowEl
      };
    }
    const offsetModifier = {
      name: "offset",
      enabled: true,
      options: {
        offset: [offsetSkidding, offsetDistance]
      }
    };
    return [arrowModifier, flipModifier, offsetModifier];
  }
  createPopper() {
    this.destroyPopper();
    const { el, placement, effectiveReferenceElement: referenceEl, overlayPositioning } = this;
    const modifiers = this.getModifiers();
    this.popper = createPopper({
      el,
      modifiers,
      overlayPositioning,
      placement,
      referenceEl
    });
  }
  destroyPopper() {
    const { popper } = this;
    if (popper) {
      popper.destroy();
    }
    this.popper = null;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderCloseButton() {
    const { dismissible, closeButton, intlClose } = this;
    return dismissible || closeButton ? (h("calcite-action", { class: CSS.closeButton, onClick: this.hide, ref: (closeButtonEl) => (this.closeButtonEl = closeButtonEl), text: intlClose }, h("calcite-icon", { icon: "x", scale: "m" }))) : null;
  }
  renderHeader() {
    const { heading, headingLevel } = this;
    const headingNode = heading ? (h(CalciteHeading, { class: CSS.heading, level: headingLevel || HEADING_LEVEL }, heading)) : null;
    return headingNode ? (h("div", { class: CSS.header }, headingNode, this.renderCloseButton())) : null;
  }
  render() {
    const { effectiveReferenceElement, heading, label, open, disablePointer } = this;
    const displayed = effectiveReferenceElement && open;
    const hidden = !displayed;
    const arrowNode = !disablePointer ? (h("div", { class: CSS.arrow, ref: (arrowEl) => (this.arrowEl = arrowEl) })) : null;
    return (h(Host, { "aria-hidden": hidden.toString(), "aria-label": label, "calcite-hydrated-hidden": hidden, id: this.getId(), role: "dialog" }, h("div", { class: {
        [CSS$1.animation]: true,
        [CSS$1.animationActive]: displayed
      }, onTransitionEnd: this.transitionEnd }, arrowNode, h("div", { class: {
        [CSS.hasHeader]: !!heading,
        [CSS.container]: true
      } }, this.renderHeader(), h("div", { class: CSS.content }, h("slot", null)), !heading ? this.renderCloseButton() : null))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "offsetDistance": ["offsetDistanceOffsetHandler"],
    "offsetSkidding": ["offsetSkiddingHandler"],
    "open": ["openHandler"],
    "placement": ["placementHandler"],
    "referenceElement": ["referenceElementHandler"]
  }; }
};
CalcitePopover.style = calcitePopoverCss;

export { CalcitePopover as calcite_popover };
