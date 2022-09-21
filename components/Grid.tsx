import { IPartState } from "../interfaces/interface";
import { IVirtualKey } from "../interfaces/virtual-key";
import { Button } from "./Button";
import { keyCodes } from "../shared/key-codes"

export const Grid = () => {
  const rowCl = "inline-flex flex-nowrap bg-slate-200 overflow-clip";
  const keyCl = "flex items-stretch bg-red-100 w-10 h-10 "
  const layout = {
    [IVirtualKey.KeyA]: "A",
    [IVirtualKey.KeyB]: "B",
    [IVirtualKey.KeyC]: "C",
    [IVirtualKey.KeyD]: "D",
    [IVirtualKey.KeyE]: "E",
  }

  return (<>
    <div className="flex-col inline-flex">
      <div className={rowCl}>
        <div className={keyCl}><Button symbol="`" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="1" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="2" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="3" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="4" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="5" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="6" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="7" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="8" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="9" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="0" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="-" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="=" state={IPartState.INACTIVE} /></div>
        <div className="bg-zinc-300 basis-16" />
      </div>
      <div className={rowCl}>
        <div className="bg-zinc-300 basis-16" />
        <div className={keyCl}><Button symbol="q" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="w" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="e" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="r" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="t" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="y" state={IPartState.ACTIVE} /></div>
        <div className={keyCl}><Button symbol="u" state={IPartState.ERROR} /></div>
        <div className={keyCl}><Button symbol="i" state={IPartState.HIDE} /></div>
        <div className={keyCl}><Button symbol="o" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="p" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="[" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="]" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="\" state={IPartState.INACTIVE} /></div>
      </div>
      <div className={rowCl}>
        <div className="bg-zinc-300 basis-18" />
        <div className={keyCl}><Button symbol="a" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="s" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="d" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="f" state={IPartState.INACTIVE} isHome /></div>
        <div className={keyCl}><Button symbol="g" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="h" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="j" state={IPartState.INACTIVE} isHome/></div>
        <div className={keyCl}><Button symbol="k" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="l" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol=";" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="'" state={IPartState.INACTIVE} /></div>
        <div className="bg-zinc-300 w-18" />
      </div>
      <div className={rowCl}>
        <div className="bg-zinc-300 w-22" />
        <div className={keyCl}><Button symbol="z" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="x" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="c" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="v" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="b" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="n" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="m" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="," state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="." state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button symbol="/" state={IPartState.INACTIVE} /></div>
        <div className="bg-zinc-300 w-24" />
      </div>
      <div className={rowCl}>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className="bg-zinc-300 w-12" />
        <div className="bg-zinc-500 w-50" />
        <div className="bg-zinc-300 w-14" />
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
      </div>
    </div>
  </>);
};
