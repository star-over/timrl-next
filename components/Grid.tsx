import _ from "lodash";
import { IPartState } from "../interfaces/interface";
import { Button } from "./Button";
import { IKbdLayout, IKbdLayoutItem, us } from "../data/kbdLayout";
import { en, ILngLayout } from "../data/lngLayout";

const gridClass = "flex-col inline-flex";
const rowClass = "inline-flex flex-nowrap bg-slate-200 overflow-clip";
const keyClass = "flex items-stretch text-2xl w-10 h-10";

const renderGrid = (kbdLayout: IKbdLayout, lngLayout: ILngLayout) => {
  const lngIndex = _(lngLayout)
    .filter((e) => !e.shift)
    .keyBy((e) => e.kbdKey)
    .value();

  const renderRow = (keys: IKbdLayoutItem[]) =>
    keys.map(({ kbdKey, isHome, additionClass = "", buttonClass = "" }) => (
      <div
        className={`${keyClass} ${additionClass}`}
        key={kbdKey}
      >
        <Button
          symbol={lngIndex[kbdKey]?.symbol}
          state={IPartState.INACTIVE}
          isHome={isHome}
          additionClass={buttonClass}
        />
      </div>
    ));

  const renderRows = (layout: IKbdLayout) =>
    layout.map((rows, index) => (
      <div
        className={rowClass}
        // eslint-disable-next-line react/no-array-index-key
        key={index}
      >
        {renderRow(rows)}
      </div>
    ));

  return <div className={gridClass}>{renderRows(kbdLayout)}</div>;
};

export const Grid = () => renderGrid(us, en);
