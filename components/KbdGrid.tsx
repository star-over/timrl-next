import _ from "lodash";
import { cx } from "cva";
import { FC } from "react";
import { IPartState } from "../interfaces/interface";
import { KbdButton } from "./KbdButton";
import { IKbdLayout, IKbdLayoutItem } from "../data/kbdLayout";
import { ILngLayout, ILngLayoutItem } from "../data/lngLayout";

const makeLngIndex = (lngLayout: ILngLayout) => _(lngLayout)
  .filter((e) => !e.shift)
  .keyBy((e) => e.kbdKey)
  .value() as _.Dictionary<ILngLayoutItem>;

const Row = (keys: IKbdLayoutItem[], lngIndex: _.Dictionary<ILngLayoutItem>) => {
  const keyClass = "flex items-stretch text-2xl w-10 h-10";

  return keys.map(({ keyId, isHome, css, buttonCss }) => (
    <div
      className={cx(keyClass, css)}
      key={keyId}
    >
      <KbdButton
        symbol={lngIndex[keyId]?.symbol}
        state={IPartState.INACTIVE}
        isHome={isHome}
        css={buttonCss}
      />
    </div>
  ));
};

const Rows = (layout: IKbdLayout["layout"], lngIndex: _.Dictionary<ILngLayoutItem>) => {
  const rowClass = "inline-flex flex-nowrap bg-slate-900 overflow-clip";

  return layout.map(({ rowId, css, keys }) => (
    <div
      className={cx(rowClass, css)}
      key={rowId}
    >
      {Row(keys, lngIndex)}
    </div>
  ));
};

export interface IGridProps {
  kbdLayout: IKbdLayout;
  lngLayout: ILngLayout;
}

export const KbdGrid: FC<IGridProps> = ({ kbdLayout: { layout: kbdLayout, css }, lngLayout }) => {
  const gridClass = "flex-col inline-flex";
  const lngIndex = makeLngIndex(lngLayout);

  return (
    <div className={cx(gridClass, css)} >
      {Rows(kbdLayout, lngIndex)}
    </div>);
};
