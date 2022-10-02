import {IKbdKey} from "../interfaces/virtual-key";


export interface IKbdLayoutItem { kbdKey: IKbdKey,  isHome?: true, css?: string }
export type IKbdLayout = IKbdLayoutItem[][];

export const us: IKbdLayout = [
  [
    { kbdKey: IKbdKey.Backquote },
    { kbdKey: IKbdKey.Digit1 },
    { kbdKey: IKbdKey.Digit2 },
    { kbdKey: IKbdKey.Digit3 },
    { kbdKey: IKbdKey.Digit4 },
    { kbdKey: IKbdKey.Digit5 },
    { kbdKey: IKbdKey.Digit6 },
    { kbdKey: IKbdKey.Digit7 },
    { kbdKey: IKbdKey.Digit8 },
    { kbdKey: IKbdKey.Digit9 },
    { kbdKey: IKbdKey.Digit0 },
    { kbdKey: IKbdKey.Minus },
    { kbdKey: IKbdKey.Equal },
    { kbdKey: IKbdKey.Backspace, css: "w-16 text-xs" },
  ], [
    { kbdKey: IKbdKey.Tab, css: "w-16"},
    { kbdKey: IKbdKey.KeyQ },
    { kbdKey: IKbdKey.KeyW },
    { kbdKey: IKbdKey.KeyE },
    { kbdKey: IKbdKey.KeyR },
    { kbdKey: IKbdKey.KeyT },
    { kbdKey: IKbdKey.KeyY },
    { kbdKey: IKbdKey.KeyU },
    { kbdKey: IKbdKey.KeyI },
    { kbdKey: IKbdKey.KeyO },
    { kbdKey: IKbdKey.KeyP },
    { kbdKey: IKbdKey.BracketLeft },
    { kbdKey: IKbdKey.BracketRight },
    { kbdKey: IKbdKey.Backslash },
  ], [
    { kbdKey: IKbdKey.CapsLock, css: "w-18" },
    { kbdKey: IKbdKey.KeyA },
    { kbdKey: IKbdKey.KeyS },
    { kbdKey: IKbdKey.KeyD },
    { kbdKey: IKbdKey.KeyF, isHome: true },
    { kbdKey: IKbdKey.KeyG },
    { kbdKey: IKbdKey.KeyH },
    { kbdKey: IKbdKey.KeyJ, isHome: true},
    { kbdKey: IKbdKey.KeyK },
    { kbdKey: IKbdKey.KeyL },
    { kbdKey: IKbdKey.Semicolon },
    { kbdKey: IKbdKey.Quote },
    { kbdKey: IKbdKey.Enter, css: "w-18" },
  ], [
    { kbdKey: IKbdKey.ShiftLeft, css: "w-22" },
    { kbdKey: IKbdKey.KeyZ },
    { kbdKey: IKbdKey.KeyX },
    { kbdKey: IKbdKey.KeyC },
    { kbdKey: IKbdKey.KeyV },
    { kbdKey: IKbdKey.KeyB },
    { kbdKey: IKbdKey.KeyN },
    { kbdKey: IKbdKey.KeyM },
    { kbdKey: IKbdKey.Comma },
    { kbdKey: IKbdKey.Period },
    { kbdKey: IKbdKey.Slash },
    { kbdKey: IKbdKey.ShiftRight, css: "w-24" },
  ], [
    { kbdKey: IKbdKey.Fn},
    { kbdKey: IKbdKey.ControlLeft },
    { kbdKey: IKbdKey.AltLeft},
    { kbdKey: IKbdKey.MetaLeft, css: "w-12" },

    { kbdKey: IKbdKey.Space, css: "w-50" },

    { kbdKey: IKbdKey.MetaRight, css: "w-14" },
    { kbdKey: IKbdKey.AltRight },
    { kbdKey: IKbdKey.ArrowLeft },
    { kbdKey: IKbdKey.ArrowUp },
    { kbdKey: IKbdKey.ArrowRight },
  ],
];
