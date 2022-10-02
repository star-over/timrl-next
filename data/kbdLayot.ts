import {IKbdKey} from "../interfaces/virtual-key";


export interface IKbdLayoutItem { kbdKey: IKbdKey }
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
  ],[
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
    { kbdKey: IKbdKey.KeyA },
    { kbdKey: IKbdKey.KeyS },
    { kbdKey: IKbdKey.KeyD },
    { kbdKey: IKbdKey.KeyF },
    { kbdKey: IKbdKey.KeyG },
    { kbdKey: IKbdKey.KeyH },
    { kbdKey: IKbdKey.KeyJ },
    { kbdKey: IKbdKey.KeyK },
    { kbdKey: IKbdKey.KeyL },
    { kbdKey: IKbdKey.Semicolon },
    { kbdKey: IKbdKey.Quote },
  ],[
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
  ],
];
