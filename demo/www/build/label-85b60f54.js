import { q as queryElementRoots, d as closestElementCrossShadowBoundary } from './dom-f581ba0c.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 */
/**
 * Exported for testing purposes only
 * @internal
 */
const labelClickEvent = "calciteInternalLabelClick";
const labelTagName = "calcite-label";
const onLabelClickMap = new WeakMap();
const findLabelForComponent = (componentEl) => {
  const { id } = componentEl;
  const forLabel = id && queryElementRoots(componentEl, { selector: `${labelTagName}[for="${id}"]` });
  if (forLabel) {
    return forLabel;
  }
  const parentLabel = closestElementCrossShadowBoundary(componentEl, labelTagName);
  if (!parentLabel ||
    // labelable components within other custom elements are not considered labelable
    hasAncestorCustomElements(parentLabel, componentEl)) {
    return null;
  }
  return parentLabel;
};
function hasAncestorCustomElements(label, componentEl) {
  let traversedElements;
  const customElementAncestorCheckEventType = "custom-element-ancestor-check";
  const listener = (event) => {
    event.stopImmediatePropagation();
    const composedPath = event.composedPath();
    traversedElements = composedPath.slice(composedPath.indexOf(componentEl), composedPath.indexOf(label));
  };
  label.addEventListener(customElementAncestorCheckEventType, listener, { once: true });
  componentEl.dispatchEvent(new CustomEvent(customElementAncestorCheckEventType, { composed: true, bubbles: true }));
  label.removeEventListener(customElementAncestorCheckEventType, listener);
  const ancestorCustomElements = traversedElements
    .filter((el) => el !== componentEl && el !== label)
    .filter((el) => { var _a; return (_a = el.tagName) === null || _a === void 0 ? void 0 : _a.includes("-"); });
  return ancestorCustomElements.length > 0;
}
/**
 * Helper to set up label interactions on connectedCallback.
 */
function connectLabel(component) {
  const labelEl = findLabelForComponent(component.el);
  if (!labelEl || onLabelClickMap.has(labelEl)) {
    return;
  }
  component.labelEl = labelEl;
  const boundOnLabelClick = onLabelClick.bind(component);
  onLabelClickMap.set(component.labelEl, boundOnLabelClick);
  component.labelEl.addEventListener(labelClickEvent, boundOnLabelClick);
}
/**
 * Helper to tear down label interactions on disconnectedCallback.
 */
function disconnectLabel(component) {
  if (!component.labelEl) {
    return;
  }
  const boundOnLabelClick = onLabelClickMap.get(component.labelEl);
  component.labelEl.removeEventListener(labelClickEvent, boundOnLabelClick);
  onLabelClickMap.delete(component.labelEl);
}
/**
 * Helper to get the label text from a component.
 */
function getLabelText(component) {
  var _a, _b;
  return component.label || ((_b = (_a = component.labelEl) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || "";
}
function onLabelClick(event) {
  if (this.disabled) {
    return;
  }
  const containedLabelableChildClicked = this.el.contains(event.detail.sourceEvent.target);
  if (containedLabelableChildClicked) {
    return;
  }
  this.onLabelClick(event);
}

export { connectLabel as c, disconnectLabel as d, getLabelText as g };
