import { r as registerInstance, e as createEvent, h } from './index-5d892dab.js';
import { d } from './clusters-854c9849.js';
import { b } from './FeatureReductionCluster-71a4b0f9.js';
import { D as DisplayType } from './index-e2c4afce.js';
import './vec2f32-a88eee2e.js';
import './intl-f9bcf179.js';
import './JSONSupport-add604e3.js';
import './shapingUtils-2219035b.js';
import './Rect-988189d5.js';
import './number-237bc27c.js';
import './definitions-08701efa.js';
import './MD5-6027098a.js';
import './clusterUtils-65e289cf.js';
import './commonProperties-dc6e2688.js';
import './TimeExtent-c4789fb1.js';

const clusteringCss = ":host{display:flex;flex:1 1 auto;overflow:hidden;border-top:solid 1px #cacaca}.switch{background-color:#ffffff;display:flex;padding:1rem 1rem 0.25rem;border-bottom:solid 1px #cacaca}.slider{background-color:#ffffff;border-bottom:solid 1px #cacaca;padding:1rem}.slider-heading{display:inline-block;padding:0.5rem 0;font-size:0.875rem}.slider-div{display:flex;align-items:center;justify-content:space-between;flex-flow:row wrap}.slider-label{display:inline-block;padding:0.2rem 0;font-size:0.75rem;order:2}.slider-slider{display:inline-block;width:100%;order:1}";

let Clustering = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.featureReductionUpdated = createEvent(this, "featureReductionUpdated", 7);
    this.internalFeatureReductionUpdated = createEvent(this, "internalFeatureReductionUpdated", 7);
    this.hasFeatureReduction = null;
    this.clusterRadius = 37.5; // 50px
    this.clusterSizeMin = null;
    this.clusterSizeMax = 37.5; // 50px
    this.showLabelPanel = false;
    this.clusteringRadiusMinVal = 9; // 12px
    this.clusteringRadiusMaxVal = 90; // 120px
    this.clusteringSizeMinVal = 9; // 12px
    this.clusteringSizeMaxVal = 90; // 120px
    this.toggleClustering = async (event) => {
      var _a, _b;
      const checked = event.target.checked;
      if (checked) {
        if (this.tempFeatureReduction) {
          this.layer.featureReduction = this.tempFeatureReduction;
        }
        else {
          // setup featureReduction
          const labelSchemes = await d({
            layer: this.layer,
            view: this.mapView
          });
          this.layer.featureReduction = new b({
            clusterMinSize: ((_a = labelSchemes === null || labelSchemes === void 0 ? void 0 : labelSchemes.primaryScheme) === null || _a === void 0 ? void 0 : _a.clusterMinSize) || this.clusteringSizeMinVal,
            clusterMaxSize: this.clusterSizeMax,
            clusterRadius: this.clusterRadius,
            labelsVisible: true,
            labelingInfo: ((_b = labelSchemes === null || labelSchemes === void 0 ? void 0 : labelSchemes.primaryScheme) === null || _b === void 0 ? void 0 : _b.labelingInfo) || null
          });
        }
      }
      else {
        this.tempFeatureReduction = this.layer.featureReduction;
        this.layer.featureReduction = null;
      }
      this.hasFeatureReduction = !!this.layer.featureReduction;
    };
    this.clusterRadiusChange = (event) => {
      const value = event.target.value;
      this.layer.featureReduction.clusterRadius = value;
      this.clusterRadius = value;
    };
    this.clusterSizeChange = (event) => {
      const slider = event.target;
      this.layer.featureReduction.clusterMinSize =
        slider.minValue;
      this.layer.featureReduction.clusterMaxSize =
        slider.maxValue;
      this.clusterSizeMin = slider.minValue;
      this.clusterSizeMax = slider.maxValue;
    };
  }
  // Called after every re-render. Not called on initial draw.
  componentDidUpdate() {
    this.internalFeatureReductionUpdated.emit();
  }
  // clone featureReduction to update map.
  internalFeatureReductionUpdatedHandler(event) {
    var _a;
    event.stopPropagation();
    this.layer.featureReduction =
      ((_a = this.layer.featureReduction) === null || _a === void 0 ? void 0 : _a.clone()) || null;
    // for external clients
    this.featureReductionUpdated.emit();
  }
  // rendor methods
  render() {
    var _a, _b, _c, _d, _e, _f;
    // enable disable clustering
    const clusterSwitch = (h("calcite-label", { class: "switch", alignment: "start", layout: "inline-space-between" }, "Enable clustering", h("calcite-switch", { scale: "s", checked: this.layer.featureReduction ? true : false, onCalciteSwitchChange: this.toggleClustering })));
    // update cluster radius when slider is moved
    const clusterRadiusSlider = (h("div", { class: "slider" }, h("label", { class: "slider-heading" }, "Cluster radius"), h("div", { class: "slider-div" }, h("label", { class: "slider-label" }, "Low"), h("calcite-slider", { class: "slider-slider", min: this.clusteringRadiusMinVal, max: this.clusteringRadiusMaxVal, value: (_b = (_a = this.layer.featureReduction) === null || _a === void 0 ? void 0 : _a.clusterRadius) !== null && _b !== void 0 ? _b : this.clusterRadius, step: 1, onCalciteSliderInput: this.clusterRadiusChange }), h("label", { class: "slider-label" }, "High"))));
    // update cluster min and max size when slider is moved
    const clusterSizeSlider = (h("div", { class: "slider" }, h("label", { class: "slider-heading" }, "Size range"), h("div", { class: "slider-div" }, h("label", { class: "slider-label" }, "Low"), h("calcite-slider", { class: "slider-slider", min: this.clusteringSizeMinVal, max: this.clusteringSizeMaxVal, minValue: (_d = (_c = this.layer.featureReduction) === null || _c === void 0 ? void 0 : _c.clusterMinSize) !== null && _d !== void 0 ? _d : this.clusteringSizeMinVal, maxValue: (_f = (_e = this.layer.featureReduction) === null || _e === void 0 ? void 0 : _e.clusterMaxSize) !== null && _f !== void 0 ? _f : this.clusteringSizeMaxVal, step: 1, onCalciteSliderInput: this.clusterSizeChange }), h("label", { class: "slider-label" }, "High"))));
    // click on label button takes user to 2nd panel with back button
    const labelBtn = (h("calcite-button", { appearance: "outline", color: "neutral", scale: "l", iconEnd: "chevronRight", alignment: "icon-end-space-between", width: "full", onClick: () => (this.showLabelPanel = true) }, "Cluster label"));
    return (h("calcite-flow", null, h("calcite-panel", { heading: "Clustering", summary: this.layer.title }, clusterSwitch, this.layer.featureReduction && (h("div", null, clusterRadiusSlider, clusterSizeSlider, labelBtn))), this.showLabelPanel ? (h("calcite-panel", { heading: "Label features", summary: this.layer.title || "", ref: (el) => (this.labelPanel = el), onCalcitePanelBackClick: () => (this.showLabelPanel = false) }, h("esri-ds2022-label", { layer: this.layer, mapView: this.mapView, displayType: DisplayType.cluster, labelPanel: this.labelPanel, onLabelUpdated: () => this.internalFeatureReductionUpdated.emit() }))) : null));
  }
};
Clustering.style = clusteringCss;

export { Clustering as esri_ds2022_clustering };
