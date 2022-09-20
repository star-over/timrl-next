import { IPartState } from "../interfaces/interface";
import { IVirtualKey } from "../interfaces/virtual-key";
import { Button } from "./Button";
import { keyCodes } from "../shared/key-codes"

export const Grid = () => {
  const rowCl = "flex flex-row gap-1 h-10 bg-slate-200";
  const keyCl = "bg-red-100 w-10"
  const layout = {
    [IVirtualKey.KeyA]: "A",
    [IVirtualKey.KeyB]: "B",
    [IVirtualKey.KeyC]: "C",
    [IVirtualKey.KeyD]: "D",
    [IVirtualKey.KeyE]: "E",
  }

  console.log('>>>>', JSON.stringify(keyCodes));

  return (<>
    <div className="w-auto">
      <div className={rowCl}>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button symbol="f" state={IPartState.ACTIVE} /></div>
        <div className={keyCl}><Button symbol="g" state={IPartState.INACTIVE} /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className="bg-zinc-300 w-16" />
      </div>
      <div className={rowCl}>
        <div className="bg-zinc-300 w-16" />
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
      </div>
      <div className={rowCl}>
        <div className="bg-zinc-300 w-19" />
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className="bg-zinc-300 w-18" />
      </div>
      <div className={rowCl}>
        <div className="bg-zinc-300 w-24" />
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className={keyCl}><Button /></div>
        <div className="bg-zinc-300 w-24" />
      </div>
    </div>
  </>);
};
