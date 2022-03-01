import { EventEmitter, VNode } from "../../../stencil-public-runtime";
/** @internal **/
export declare class LabelContentStyle {
  labelContentRefElement: HTMLElement;
  labelClass: __esri.LabelClass;
  labelContentStyleChanges: EventEmitter;
  closeLabelPopovers: EventEmitter;
  calcitePanelDismissedChangeHandler(): void;
  fontSizeSelectionChange: (event: CustomEvent) => void;
  colorChange: (event: CustomEvent) => void;
  OffsetXChange: (event: CustomEvent) => void;
  OffsetYChange: (event: CustomEvent) => void;
  render(): VNode;
}
