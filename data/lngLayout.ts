import {IKbdKey} from "../interfaces/virtual-key";

export interface ILngLayoutItem { kbdKey: IKbdKey, symbol: string, shift:boolean }
export type ILngLayout = ILngLayoutItem[];

export const toLngObject = (lngLayout: ILngLayout) => {
  return lngLayout.reduce((acc, item) => {
    acc[item.kbdKey] = item;
    return acc;
  }, {} as { [key in IKbdKey]: ILngLayoutItem });
};

export const en:ILngLayout = [
  { kbdKey: IKbdKey.Backquote, symbol: "`", shift: false },
  { kbdKey: IKbdKey.Digit1, symbol: "1", shift: false },
  { kbdKey: IKbdKey.Digit2, symbol: "2", shift: false },
  { kbdKey: IKbdKey.Digit3, symbol: "3", shift: false },
  { kbdKey: IKbdKey.Digit4, symbol: "4", shift: false },
  { kbdKey: IKbdKey.Digit5, symbol: "5", shift: false },
  { kbdKey: IKbdKey.Digit6, symbol: "6", shift: false },
  { kbdKey: IKbdKey.Digit7, symbol: "7", shift: false },
  { kbdKey: IKbdKey.Digit8, symbol: "8", shift: false },
  { kbdKey: IKbdKey.Digit9, symbol: "9", shift: false },
  { kbdKey: IKbdKey.Digit0, symbol: "0", shift: false },
  { kbdKey: IKbdKey.Minus, symbol: "-", shift: false },
  { kbdKey: IKbdKey.Equal, symbol: "=", shift: false },
  { kbdKey: IKbdKey.KeyQ, symbol: "q", shift: false },
  { kbdKey: IKbdKey.KeyW, symbol: "w", shift: false },
  { kbdKey: IKbdKey.KeyE, symbol: "e", shift: false },
  { kbdKey: IKbdKey.KeyR, symbol: "r", shift: false },
  { kbdKey: IKbdKey.KeyT, symbol: "t", shift: false },
  { kbdKey: IKbdKey.KeyY, symbol: "y", shift: false },
  { kbdKey: IKbdKey.KeyU, symbol: "u", shift: false },
  { kbdKey: IKbdKey.KeyI, symbol: "i", shift: false },
  { kbdKey: IKbdKey.KeyO, symbol: "o", shift: false },
  { kbdKey: IKbdKey.KeyP, symbol: "p", shift: false },
  { kbdKey: IKbdKey.BracketLeft, symbol: "[", shift: false },
  { kbdKey: IKbdKey.BracketRight, symbol: "]", shift: false },
  { kbdKey: IKbdKey.Backslash, symbol: "\\", shift: false },
  { kbdKey: IKbdKey.KeyA, symbol: "a", shift: false },
  { kbdKey: IKbdKey.KeyS, symbol: "s", shift: false },
  { kbdKey: IKbdKey.KeyD, symbol: "d", shift: false },
  { kbdKey: IKbdKey.KeyF, symbol: "f", shift: false },
  { kbdKey: IKbdKey.KeyG, symbol: "g", shift: false },
  { kbdKey: IKbdKey.KeyH, symbol: "h", shift: false },
  { kbdKey: IKbdKey.KeyJ, symbol: "j", shift: false },
  { kbdKey: IKbdKey.KeyK, symbol: "k", shift: false },
  { kbdKey: IKbdKey.KeyL, symbol: "l", shift: false },
  { kbdKey: IKbdKey.Semicolon, symbol: ";", shift: false },
  { kbdKey: IKbdKey.Quote, symbol: "'", shift: false },
  { kbdKey: IKbdKey.KeyZ, symbol: "z", shift: false },
  { kbdKey: IKbdKey.KeyX, symbol: "x", shift: false },
  { kbdKey: IKbdKey.KeyC, symbol: "c", shift: false },
  { kbdKey: IKbdKey.KeyV, symbol: "v", shift: false },
  { kbdKey: IKbdKey.KeyB, symbol: "b", shift: false },
  { kbdKey: IKbdKey.KeyN, symbol: "n", shift: false },
  { kbdKey: IKbdKey.KeyM, symbol: "m", shift: false },
  { kbdKey: IKbdKey.Comma, symbol: ",", shift: false },
  { kbdKey: IKbdKey.Period, symbol: ".", shift: false },
  { kbdKey: IKbdKey.Slash, symbol: "/", shift: false },

  { kbdKey: IKbdKey.Backquote, symbol: "~", shift: true },
  { kbdKey: IKbdKey.Digit1, symbol: "!", shift: true },
  { kbdKey: IKbdKey.Digit2, symbol: "@", shift: true },
  { kbdKey: IKbdKey.Digit3, symbol: "#", shift: true },
  { kbdKey: IKbdKey.Digit4, symbol: "$", shift: true },
  { kbdKey: IKbdKey.Digit5, symbol: "%", shift: true },
  { kbdKey: IKbdKey.Digit6, symbol: "^", shift: true },
  { kbdKey: IKbdKey.Digit7, symbol: "&", shift: true },
  { kbdKey: IKbdKey.Digit8, symbol: "*", shift: true },
  { kbdKey: IKbdKey.Digit9, symbol: "(", shift: true },
  { kbdKey: IKbdKey.Digit0, symbol: ")", shift: true },
  { kbdKey: IKbdKey.Minus, symbol: "_", shift: true },
  { kbdKey: IKbdKey.Equal, symbol: "+", shift: true },
  { kbdKey: IKbdKey.KeyQ, symbol: "Q", shift: true },
  { kbdKey: IKbdKey.KeyW, symbol: "W", shift: true },
  { kbdKey: IKbdKey.KeyE, symbol: "E", shift: true },
  { kbdKey: IKbdKey.KeyR, symbol: "R", shift: true },
  { kbdKey: IKbdKey.KeyT, symbol: "T", shift: true },
  { kbdKey: IKbdKey.KeyY, symbol: "Y", shift: true },
  { kbdKey: IKbdKey.KeyU, symbol: "U", shift: true },
  { kbdKey: IKbdKey.KeyI, symbol: "I", shift: true },
  { kbdKey: IKbdKey.KeyO, symbol: "O", shift: true },
  { kbdKey: IKbdKey.KeyP, symbol: "P", shift: true },
  { kbdKey: IKbdKey.BracketLeft, symbol: "{", shift: true },
  { kbdKey: IKbdKey.BracketRight, symbol: "}", shift: true },
  { kbdKey: IKbdKey.Backslash, symbol: "|", shift: true },
  { kbdKey: IKbdKey.KeyA, symbol: "A", shift: true },
  { kbdKey: IKbdKey.KeyS, symbol: "S", shift: true },
  { kbdKey: IKbdKey.KeyD, symbol: "D", shift: true },
  { kbdKey: IKbdKey.KeyF, symbol: "F", shift: true },
  { kbdKey: IKbdKey.KeyG, symbol: "G", shift: true },
  { kbdKey: IKbdKey.KeyH, symbol: "H", shift: true },
  { kbdKey: IKbdKey.KeyJ, symbol: "J", shift: true },
  { kbdKey: IKbdKey.KeyK, symbol: "K", shift: true },
  { kbdKey: IKbdKey.KeyL, symbol: "L", shift: true },
  { kbdKey: IKbdKey.Semicolon, symbol: ":", shift: true },
  { kbdKey: IKbdKey.Quote, symbol: '"', shift: true },
  { kbdKey: IKbdKey.KeyZ, symbol: "Z", shift: true },
  { kbdKey: IKbdKey.KeyX, symbol: "X", shift: true },
  { kbdKey: IKbdKey.KeyC, symbol: "C", shift: true },
  { kbdKey: IKbdKey.KeyV, symbol: "V", shift: true },
  { kbdKey: IKbdKey.KeyB, symbol: "B", shift: true },
  { kbdKey: IKbdKey.KeyN, symbol: "N", shift: true },
  { kbdKey: IKbdKey.KeyM, symbol: "M", shift: true },
  { kbdKey: IKbdKey.Comma, symbol: "<", shift: true },
  { kbdKey: IKbdKey.Period, symbol: ">", shift: true },
  { kbdKey: IKbdKey.Slash, symbol: "?", shift: true },
];
