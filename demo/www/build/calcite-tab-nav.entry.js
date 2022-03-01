import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-5d892dab.js';
import { a as getElementDir, j as filterDirectChildren } from './dom-f581ba0c.js';
import './guid-ec8a882c.js';

const calciteTabNavCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:flex}:host([scale=s]){min-height:1.5rem}:host([scale=m]){min-height:2rem}:host([scale=l]){min-height:2.75rem}.tab-nav{display:flex;width:100%;justify-content:flex-start;overflow:auto}:host([layout=center]) .tab-nav{justify-content:center}.tab-nav-active-indicator-container{position:absolute;left:0px;right:0px;bottom:0px;height:0.125rem;width:100%;overflow:hidden}.tab-nav-active-indicator{position:absolute;bottom:0px;display:block;height:0.125rem;background-color:var(--calcite-ui-brand);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}:host([position=below]) .tab-nav-active-indicator{bottom:unset;top:0px}:host([position=below]) .tab-nav-active-indicator-container{bottom:unset;top:0px}:host([bordered]) .tab-nav-active-indicator-container{bottom:unset}:host([bordered][position=below]) .tab-nav-active-indicator-container{bottom:0;top:unset}";

let CalciteTabNav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteTabChange = createEvent(this, "calciteTabChange", 7);
    /** @internal Parent tabs component scale value */
    this.scale = "m";
    /** @internal Parent tabs component layout value */
    this.layout = "inline";
    /** @internal Parent tabs component position value */
    this.position = "below";
    /** @internal Parent tabs component bordered value when layout is "inline" */
    this.bordered = false;
    this.animationActiveDuration = 0.3;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.handleContainerScroll = () => {
      // remove active indicator transition duration while container is scrolling to prevent wobble
      this.activeIndicatorEl.style.transitionDuration = "0s";
      this.updateOffsetPosition();
    };
  }
  async selectedTabChanged() {
    if (localStorage &&
      this.storageId &&
      this.selectedTab !== undefined &&
      this.selectedTab !== null) {
      localStorage.setItem(`calcite-tab-nav-${this.storageId}`, JSON.stringify(this.selectedTab));
    }
    this.calciteTabChange.emit({
      tab: this.selectedTab
    });
    this.selectedTabEl = await this.getTabTitleById(this.selectedTab);
  }
  selectedTabElChanged() {
    this.updateOffsetPosition();
    this.updateActiveWidth();
    // reset the animation time on tab selection
    this.activeIndicatorEl.style.transitionDuration = `${this.animationActiveDuration}s`;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    const storageKey = `calcite-tab-nav-${this.storageId}`;
    if (localStorage && this.storageId && localStorage.getItem(storageKey)) {
      const storedTab = JSON.parse(localStorage.getItem(storageKey));
      this.selectedTab = storedTab;
      this.calciteTabChange.emit({
        tab: this.selectedTab
      });
    }
  }
  componentWillRender() {
    var _a, _b, _c, _d;
    this.layout = (_a = this.el.closest("calcite-tabs")) === null || _a === void 0 ? void 0 : _a.layout;
    this.position = (_b = this.el.closest("calcite-tabs")) === null || _b === void 0 ? void 0 : _b.position;
    this.scale = (_c = this.el.closest("calcite-tabs")) === null || _c === void 0 ? void 0 : _c.scale;
    this.bordered = (_d = this.el.closest("calcite-tabs")) === null || _d === void 0 ? void 0 : _d.bordered;
    // fix issue with active tab-title not lining up with blue indicator
    if (this.selectedTabEl) {
      this.updateOffsetPosition();
    }
  }
  componentDidRender() {
    // if every tab title is active select the first tab.
    if (this.tabTitles.length &&
      this.tabTitles.every((title) => !title.active) &&
      !this.selectedTab) {
      this.tabTitles[0].getTabIdentifier().then((tab) => {
        this.calciteTabChange.emit({
          tab
        });
      });
    }
  }
  render() {
    const dir = getElementDir(this.el);
    const width = `${this.indicatorWidth}px`;
    const offset = `${this.indicatorOffset}px`;
    const indicatorStyle = dir !== "rtl" ? { width, left: offset } : { width, right: offset };
    return (h(Host, { role: "tablist" }, h("div", { class: "tab-nav", onScroll: this.handleContainerScroll, ref: (el) => (this.tabNavEl = el) }, h("div", { class: "tab-nav-active-indicator-container", ref: (el) => (this.activeIndicatorContainerEl = el) }, h("div", { class: "tab-nav-active-indicator", ref: (el) => (this.activeIndicatorEl = el), style: indicatorStyle })), h("slot", null))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  resizeHandler() {
    // remove active indicator transition duration during resize to prevent wobble
    this.activeIndicatorEl.style.transitionDuration = "0s";
    this.updateActiveWidth();
    this.updateOffsetPosition();
  }
  focusPreviousTabHandler(e) {
    const currentIndex = this.getIndexOfTabTitle(e.target, this.enabledTabTitles);
    const previousTab = this.enabledTabTitles[currentIndex - 1] ||
      this.enabledTabTitles[this.enabledTabTitles.length - 1];
    previousTab.focus();
    e.stopPropagation();
    e.preventDefault();
  }
  focusNextTabHandler(e) {
    const currentIndex = this.getIndexOfTabTitle(e.target, this.enabledTabTitles);
    const nextTab = this.enabledTabTitles[currentIndex + 1] || this.enabledTabTitles[0];
    nextTab.focus();
    e.stopPropagation();
    e.preventDefault();
  }
  activateTabHandler(e) {
    this.selectedTab = e.detail.tab
      ? e.detail.tab
      : this.getIndexOfTabTitle(e.target);
    e.stopPropagation();
    e.preventDefault();
  }
  /**
   * Check for active tabs on register and update selected
   */
  updateTabTitles(e) {
    if (e.target.active) {
      this.selectedTab = e.detail;
    }
  }
  globalTabChangeHandler(e) {
    if (this.syncId &&
      e.target !== this.el &&
      e.target.syncId === this.syncId &&
      this.selectedTab !== e.detail.tab) {
      this.selectedTab = e.detail.tab;
    }
  }
  updateOffsetPosition() {
    var _a, _b, _c, _d, _e;
    const dir = getElementDir(this.el);
    const navWidth = (_a = this.activeIndicatorContainerEl) === null || _a === void 0 ? void 0 : _a.offsetWidth;
    const tabLeft = (_b = this.selectedTabEl) === null || _b === void 0 ? void 0 : _b.offsetLeft;
    const tabWidth = (_c = this.selectedTabEl) === null || _c === void 0 ? void 0 : _c.offsetWidth;
    const offsetRight = navWidth - (tabLeft + tabWidth);
    this.indicatorOffset =
      dir !== "rtl" ? tabLeft - ((_d = this.tabNavEl) === null || _d === void 0 ? void 0 : _d.scrollLeft) : offsetRight + ((_e = this.tabNavEl) === null || _e === void 0 ? void 0 : _e.scrollLeft);
  }
  updateActiveWidth() {
    var _a;
    this.indicatorWidth = (_a = this.selectedTabEl) === null || _a === void 0 ? void 0 : _a.offsetWidth;
  }
  getIndexOfTabTitle(el, tabTitles = this.tabTitles) {
    // In most cases, since these indexes correlate with tab contents, we want to consider all tab titles.
    // However, when doing relative index operations, it makes sense to pass in this.enabledTabTitles as the 2nd arg.
    return tabTitles.indexOf(el);
  }
  async getTabTitleById(id) {
    return Promise.all(this.tabTitles.map((el) => el.getTabIdentifier())).then((ids) => {
      return this.tabTitles[ids.indexOf(id)];
    });
  }
  get tabTitles() {
    return filterDirectChildren(this.el, "calcite-tab-title");
  }
  get enabledTabTitles() {
    return filterDirectChildren(this.el, "calcite-tab-title:not([disabled])");
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "selectedTab": ["selectedTabChanged"],
    "selectedTabEl": ["selectedTabElChanged"]
  }; }
};
CalciteTabNav.style = calciteTabNavCss;

export { CalciteTabNav as calcite_tab_nav };
