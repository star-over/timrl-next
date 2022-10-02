import { IPartState } from "../interfaces/interface";
import { Button } from "./Button";
import { IKbdLayout, IKbdLayoutItem, us } from "../data/kbdLayot";
import { en, ILngLayout } from "../data/lngLayout";
import cm from "classnames"
import _ from "lodash";

const rowClass = "inline-flex flex-nowrap bg-slate-200 overflow-clip";
const keyClass = "flex items-stretch bg-red-100 w-10 h-10"

const makeGrid = (kbdLayout: IKbdLayout, lngLayout: ILngLayout ) => {
  const lngIndex = _(lngLayout)
    .filter(e => !e.shift)
    .keyBy(e => e.kbdKey)
    .value();

  const makeRow = (keys: IKbdLayoutItem[]) =>
    keys.map(({ kbdKey, isHome, css="" }) => {
      return (
        <div className={`${keyClass} ${css}`} key={kbdKey}>
          <Button symbol={lngIndex[kbdKey]?.symbol} state={IPartState.INACTIVE} isHome={isHome}/>
        </div>
      );
    });

  const makeRows = (layout: IKbdLayout) => {
    return layout.map((rows) => (
      <div className={rowClass}>
        {makeRow(rows)}
      </div>
    ))
  };

  return makeRows(kbdLayout);
}
export const Grid = () => {


  return (<>
    <div className="flex-col inline-flex">
      <div className={rowClass}>
        <div className={keyClass}><Button symbol="`" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="1" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="2" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="3" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="4" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="5" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="6" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="7" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="8" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="9" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="0" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="-" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="=" state={IPartState.INACTIVE} /></div>
        <div className="bg-zinc-300 w-16" />
      </div>
      <div className={rowClass}>
        <div className="bg-zinc-300 w-16" />
        <div className={keyClass}><Button symbol="q" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="w" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="e" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="r" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="t" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="y" state={IPartState.ACTIVE} /></div>
        <div className={keyClass}><Button symbol="u" state={IPartState.ERROR} /></div>
        <div className={keyClass}><Button symbol="i" state={IPartState.HIDE} /></div>
        <div className={keyClass}><Button symbol="o" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="p" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="[" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="]" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="\" state={IPartState.INACTIVE} /></div>
      </div>
      <div className={rowClass}>
        <div className="bg-zinc-300 w-18" />
        <div className={keyClass}><Button symbol="a" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="s" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="d" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="f" state={IPartState.INACTIVE} isHome /></div>
        <div className={keyClass}><Button symbol="g" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="h" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="j" state={IPartState.INACTIVE} isHome/></div>
        <div className={keyClass}><Button symbol="k" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="l" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol=";" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="'" state={IPartState.INACTIVE} /></div>
        <div className="bg-zinc-300 w-18" />
      </div>
      <div className={rowClass}>
        <div className="bg-zinc-300 w-22" />
        <div className={keyClass}><Button symbol="z" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="x" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="c" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="v" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="b" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="n" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="m" state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="," state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="." state={IPartState.INACTIVE} /></div>
        <div className={keyClass}><Button symbol="/" state={IPartState.INACTIVE} /></div>
        <div className="bg-zinc-300 w-24" />
      </div>
      <div className={rowClass}>
        <div className={keyClass}><Button /></div>
        <div className={keyClass}><Button /></div>
        <div className={keyClass}><Button /></div>
        <div className="bg-zinc-300 w-12" />
        <div className="bg-zinc-500 w-50" />
        <div className="bg-zinc-300 w-14" />
        <div className={keyClass}><Button /></div>
        <div className={keyClass}><Button /></div>
        <div className={keyClass}><Button /></div>
        <div className={keyClass}><Button /></div>
      </div>
    </div>
    <br/>
    {makeGrid(us, en)}
  </>);
};
