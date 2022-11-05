import _ from "lodash";
import { cx } from "cva";
import { FC } from "react";
import { IPartState } from "../interfaces/interface";
import { KbdButton } from "./KbdButton";
import { IKbdLayout, IKbdLayoutItem } from "../data/kbdLayout";
import { ILngLayout, ILngLayoutItem } from "../data/lngLayout";
import { IFingersLayout, IFingersLayoutItem } from "../data/fingersLayout";

const makeLngIndex = (lngLayout: ILngLayout) => _(lngLayout)
  .filter((e) => !e.shift)
  .keyBy((e) => e.keyId)
  .value() as _.Dictionary<ILngLayoutItem>;

const makeFingersIndex = (fingersLayout: IFingersLayout) => _(fingersLayout)
  .keyBy((e) => e.keyId)
  .value() as _.Dictionary<IFingersLayoutItem>;

const Row = (keys: IKbdLayoutItem[], lngIndex: _.Dictionary<ILngLayoutItem>, fingersIndex: _.Dictionary<IFingersLayoutItem>) => {
  const keyClass = "flex items-stretch text-2xl w-10 h-10";

  return keys.map(({ keyId, homie, css, buttonCss }) => (
    <div
      className={cx(keyClass, css)}
      key={keyId}
    >
      <KbdButton
        state={IPartState.INACTIVE}
        finger={fingersIndex[keyId]?.fingerId}
        base={fingersIndex[keyId]?.base}
        homie={homie}
        css={buttonCss}
      >
        {lngIndex[keyId]?.symbol}
      </KbdButton>
    </div>
  ));
};

const Rows = (layout: IKbdLayout["layout"], lngIndex: _.Dictionary<ILngLayoutItem>, fingersIndex: _.Dictionary<IFingersLayoutItem>) => {
  const rowClass = "inline-flex flex-nowrap bg-slate-50 overflow-clip";

  return layout.map(({ rowId, css, keys }) => (
    <div
      className={cx(rowClass, css)}
      key={rowId}
    >
      {Row(keys, lngIndex, fingersIndex)}
    </div>
  ));
};

export interface IGridProps {
  kbdLayout: IKbdLayout;
  lngLayout: ILngLayout;
  fingersLayout: IFingersLayout;
}

export const KbdGrid: FC<IGridProps> = ({ kbdLayout: { layout: kbdLayout, css }, lngLayout, fingersLayout }) => {
  const gridClass = "flex-col inline-flex";
  const languageIndex = makeLngIndex(lngLayout);
  const fingersIndex = makeFingersIndex(fingersLayout);


  return (
    <div className={cx(gridClass, css)} >
      {Rows(kbdLayout, languageIndex, fingersIndex)}
    </div>);
};
