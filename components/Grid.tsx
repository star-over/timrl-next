import _ from "lodash";
import { IPartState } from "../interfaces/interface";
import { Button } from "./Button";
import { IKbdLayout, IKbdLayoutItem, kbdUsStandart } from "../data/kbdLayout";
import { en, ILngLayout } from "../data/lngLayout";

const gridClass = "flex-col inline-flex";
const rowClass = "inline-flex flex-nowrap bg-slate-900 overflow-clip";
const keyClass = "flex items-stretch text-2xl w-10 h-10";


const renderGrid = (kbdLayout: IKbdLayout, lngLayout: ILngLayout) => {

  // TODO: make function and move it out from the scope
  const lngIndex = _(lngLayout)
    .filter((e) => !e.shift)
    .keyBy((e) => e.kbdKey)
    .value();

  // TODO: move it out from the scope
  // TODO: make this without separate export interface
  const renderRow = (keys: IKbdLayoutItem[]) =>
    keys.map(({ keyId, isHome=false, css = "", buttonCss = "" }) => (
      <div
        className={`${keyClass} ${css}`}
        key={keyId}
      >
        <Button
          symbol={lngIndex[keyId]?.symbol}
          state={IPartState.INACTIVE}
          isHome={isHome}
          additionClass={buttonCss}
        />
      </div>
    ));

  // TODO: move it out from the scope
  const renderRows = ({ layout }: IKbdLayout) =>
    layout.map(({ rowId, css="", keys }) => (
      <div
        className={`${rowClass} ${css}`}
        key={rowId}
      >
        {renderRow(keys)}
      </div>
    ));

  return (
    <div
      className={`${gridClass} ${kbdLayout.css}`}
    >
      {renderRows(kbdLayout)}
    </div>);
};

export const Grid = () => renderGrid(kbdUsStandart, en);
