import { IKbdKey } from "../interfaces/virtual-key";

export interface IKbdLayoutItem {
  keyId: IKbdKey,
  isHome?: boolean,
  css?: string,
  buttonCss?:
  string
};

export interface IKbdLayout {
  id: string,
  name: string,
  css?: string,
  layout: {
    rowId: number,
    css?: string,
    keys: IKbdLayoutItem[],
  }[],
};

export const kbdUsStandart: IKbdLayout = {
  id: "US",
  name: "US Standart Layout",
  css: "",
  layout: [
    {
      rowId: 1,
      css: "",
      keys: [
        { keyId: IKbdKey.Tab, css: "w-16 text-base", buttonCss: "bg-zinc-200" },
        { keyId: IKbdKey.KeyQ },
        { keyId: IKbdKey.KeyW },
        { keyId: IKbdKey.KeyE },
        { keyId: IKbdKey.KeyR },
        { keyId: IKbdKey.KeyT },
        { keyId: IKbdKey.KeyY },
        { keyId: IKbdKey.KeyU },
        { keyId: IKbdKey.KeyI },
        { keyId: IKbdKey.KeyO },
        { keyId: IKbdKey.KeyP },
        { keyId: IKbdKey.BracketLeft },
        { keyId: IKbdKey.BracketRight },
        { keyId: IKbdKey.Backslash },
      ],
    },
    {
      rowId: 2,
      css: "",
      keys: [
        { keyId: IKbdKey.CapsLock, css: "w-18 text-base", buttonCss: "bg-zinc-200" },
        { keyId: IKbdKey.KeyA },
        { keyId: IKbdKey.KeyS },
        { keyId: IKbdKey.KeyD },
        { keyId: IKbdKey.KeyF, isHome: true },
        { keyId: IKbdKey.KeyG },
        { keyId: IKbdKey.KeyH },
        { keyId: IKbdKey.KeyJ, isHome: true },
        { keyId: IKbdKey.KeyK },
        { keyId: IKbdKey.KeyL },
        { keyId: IKbdKey.Semicolon },
        { keyId: IKbdKey.Quote },
        { keyId: IKbdKey.Enter, css: "w-18 text-base", buttonCss: "bg-zinc-200" },
      ],
    },
    {
      rowId: 3,
      css: "",
      keys: [
        { keyId: IKbdKey.ShiftLeft, css: "w-22 text-base", buttonCss: "bg-zinc-200" },
        { keyId: IKbdKey.KeyZ },
        { keyId: IKbdKey.KeyX },
        { keyId: IKbdKey.KeyC },
        { keyId: IKbdKey.KeyV },
        { keyId: IKbdKey.KeyB },
        { keyId: IKbdKey.KeyN },
        { keyId: IKbdKey.KeyM },
        { keyId: IKbdKey.Comma },
        { keyId: IKbdKey.Period },
        { keyId: IKbdKey.Slash },
        { keyId: IKbdKey.ShiftRight, css: "w-24 text-base", buttonCss: "bg-zinc-200" },
      ],
    },
    {
      rowId: 4,
      css: "",
      keys: [
        { keyId: IKbdKey.Fn, css: "w-10 text-base", buttonCss: "bg-zinc-200" },
        { keyId: IKbdKey.ControlLeft, css: "w-10", buttonCss: "bg-zinc-200" },
        { keyId: IKbdKey.AltLeft, css: "w-10", buttonCss: "bg-zinc-200" },
        { keyId: IKbdKey.MetaLeft, css: "w-12", buttonCss: "bg-zinc-200" },
        { keyId: IKbdKey.Space, css: "w-50 text-base" },
        { keyId: IKbdKey.MetaRight, css: "w-14", buttonCss: "bg-zinc-200" },
        { keyId: IKbdKey.AltRight, buttonCss: "bg-zinc-200" },
        { keyId: IKbdKey.ArrowLeft, buttonCss: "bg-zinc-200" },
        { keyId: IKbdKey.ArrowUp, buttonCss: "bg-zinc-200" },
        { keyId: IKbdKey.ArrowRight, buttonCss: "bg-zinc-200" },
      ],
    },
  ],
};
