import { r as registerInstance, e as createEvent, h, f as Host } from './index-5d892dab.js';
import { aM as j } from './vec2f32-a88eee2e.js';
import { d } from './clusters-854c9849.js';
import { D as DisplayType, d as defaultLabelProps } from './index-e2c4afce.js';
import './intl-f9bcf179.js';
import './JSONSupport-add604e3.js';
import './shapingUtils-2219035b.js';
import './Rect-988189d5.js';
import './number-237bc27c.js';
import './definitions-08701efa.js';
import './MD5-6027098a.js';
import './clusterUtils-65e289cf.js';

const labelCss = ".switch{background-color:#ffffff;display:flex;padding:1rem 1rem 0rem;border-bottom:solid 1px #cacaca}.content{margin:0 0 1rem;padding:0}";

let Label = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.labelUpdated = createEvent(this, "labelUpdated", 7);
    this.internalLabelUpdated = createEvent(this, "internalLabelUpdated", 7);
    this.closeLabelPopovers = createEvent(this, "closeLabelPopovers", 7);
    /**
     * @internal feature or cluster
     */
    this.displayType = DisplayType.feature;
    this.hasLabelEnabled = null;
    this.addLabelingInfo = false;
    this.deleteLabelContent = false;
    this.labelSwitchToggle = (event) => {
      this.closeLabelPopovers.emit();
      const checked = event.target.checked;
      if (this.displayType === DisplayType.cluster) {
        this.layer.featureReduction.labelsVisible = checked;
      }
      else {
        this.layer.labelsVisible = checked;
      }
      this.addLabelBtn.hidden = !checked;
      this.hasLabelEnabled = checked;
    };
    // esri-ds2022-label-content component
    this.labelContent = (labelClass) => (h("esri-ds2022-label-content", { labelClass: labelClass, mapView: this.mapView, layer: this.layer, displayType: this.displayType, onLabelContentDeleted: () => this.labelContentDeleted(labelClass) }));
  }
  componentWillLoad() {
    // handle both feature and cluster labeling info
    this.labelingInfo =
      this.displayType === DisplayType.feature
        ? this.layer.labelingInfo
        : this.layer.featureReduction.labelingInfo;
  }
  componentDidLoad() {
    // add add label button to either label panel or the label panel via clustering component
    this.addLabelBtn = this.getAddLabelBtn();
    if (this.labelPanel) {
      this.labelPanel.appendChild(this.addLabelBtn);
    }
    else {
      this.panel.appendChild(this.addLabelBtn);
    }
  }
  // Called after every re-render. Not called on initial draw.
  componentDidUpdate() {
    this.internalLabelUpdated.emit();
  }
  // clone labelingInfo to update map.
  internalLabelUpdatedHandler(event) {
    event.stopPropagation();
    if (this.displayType === DisplayType.cluster) {
      this.layer.featureReduction.labelingInfo = [
        ...this.labelingInfo
      ];
    }
    else {
      this.layer.labelingInfo = [...this.labelingInfo];
    }
    // for external clients
    this.labelUpdated.emit();
  }
  // disable when style poppver is open
  disableLabelPanelHandler(event) {
    event.stopPropagation();
    if (this.labelPanel) {
      this.labelPanel.disabled = event.detail;
    }
    else {
      this.panel.disabled = event.detail;
    }
  }
  getLabelsVisible() {
    if (this.displayType === DisplayType.cluster) {
      return this.layer.featureReduction.labelsVisible;
    }
    else {
      return this.layer.labelsVisible;
    }
  }
  // generate feature or cluster label class
  async getLabelClass() {
    var _a, _b, _c;
    if (this.displayType === DisplayType.feature) {
      return new j(defaultLabelProps(this.layer));
    }
    else {
      return (((_c = (_b = (await d({
        layer: this.layer,
        renderer: (_a = this.layer) === null || _a === void 0 ? void 0 : _a.renderer,
        view: this.mapView
      }))) === null || _b === void 0 ? void 0 : _b.primaryScheme) === null || _c === void 0 ? void 0 : _c.labelingInfo[0]) || null);
    }
  }
  getAddLabelBtn() {
    const calciteFab = document.createElement("calcite-fab");
    calciteFab.icon = "plus";
    calciteFab.slot = "fab";
    calciteFab.scale = "s";
    calciteFab.label = "Add label class";
    calciteFab.text = "Add label class";
    calciteFab.textEnabled = true;
    calciteFab.hidden = !this.getLabelsVisible();
    calciteFab.addEventListener("click", async () => {
      this.closeLabelPopovers.emit();
      const labelClass = await this.getLabelClass();
      if (this.labelingInfo) {
        this.labelingInfo.push(labelClass);
      }
      else {
        this.labelingInfo = [labelClass];
      }
      this.addLabelingInfo = !this.addLabelingInfo;
    });
    return calciteFab;
  }
  labelContentDeleted(labelClass) {
    this.closeLabelPopovers.emit();
    this.labelingInfo = this.labelingInfo.filter((label) => label !== labelClass);
    this.deleteLabelContent = !this.deleteLabelContent;
  }
  // rendor methods
  render() {
    var _a;
    // enable disable labeling and show labeling content
    const labelSwitchAndContent = (h("div", null, h("calcite-label", { class: "switch", alignment: "start", layout: "inline-space-between" }, "Enable labels", h("calcite-switch", { scale: "s", checked: this.getLabelsVisible(), onCalciteSwitchChange: this.labelSwitchToggle })), this.getLabelsVisible() && (h("div", { class: "content" }, (_a = this.labelingInfo) === null || _a === void 0 ? void 0 : _a.map((info) => this.labelContent(info))))));
    return (
    // labelPanel => coming from cluster panel
    h(Host, { style: !this.labelPanel && { display: "flex", flex: "1 1 auto", overflow: "hidden" } }, this.labelPanel ? (h("div", null, labelSwitchAndContent)) : (h("calcite-flow", null, h("calcite-panel", { ref: (el) => (this.panel = el), heading: "Label features", summary: this.layer.title }, labelSwitchAndContent)))));
  }
};
Label.style = labelCss;

export { Label as esri_ds2022_label };
