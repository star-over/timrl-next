import { IKbdKey } from "../interfaces/virtual-key";
import { IFingersIds } from "../interfaces/interface";

export interface IFingersLayoutItem {
  keyId: IKbdKey;
  fingerId: IFingersIds;
  base?: boolean;
};
export type IFingersLayout = IFingersLayoutItem[];


export const asdf: IFingersLayout  = [
  { keyId: IKbdKey.Backquote, fingerId: IFingersIds.L4 },
  { keyId: IKbdKey.Digit1, fingerId: IFingersIds.L4 },
  { keyId: IKbdKey.Digit2, fingerId: IFingersIds.L3 },
  { keyId: IKbdKey.Digit3, fingerId: IFingersIds.L2 },
  { keyId: IKbdKey.Digit4, fingerId: IFingersIds.L1 },
  { keyId: IKbdKey.Digit5, fingerId: IFingersIds.L1 },
  { keyId: IKbdKey.Digit6, fingerId: IFingersIds.R1 },
  { keyId: IKbdKey.Digit7, fingerId: IFingersIds.R1 },
  { keyId: IKbdKey.Digit8, fingerId: IFingersIds.R2 },
  { keyId: IKbdKey.Digit9, fingerId: IFingersIds.R3 },
  { keyId: IKbdKey.Digit0, fingerId: IFingersIds.R4 },
  { keyId: IKbdKey.Minus, fingerId: IFingersIds.R4 },
  { keyId: IKbdKey.Equal, fingerId: IFingersIds.R4 },

  { keyId: IKbdKey.KeyQ, fingerId: IFingersIds.L4 },
  { keyId: IKbdKey.KeyW, fingerId: IFingersIds.L3 },
  { keyId: IKbdKey.KeyE, fingerId: IFingersIds.L2 },
  { keyId: IKbdKey.KeyR, fingerId: IFingersIds.L1 },
  { keyId: IKbdKey.KeyT, fingerId: IFingersIds.L1 },
  { keyId: IKbdKey.KeyY, fingerId: IFingersIds.R1 },
  { keyId: IKbdKey.KeyU, fingerId: IFingersIds.R1 },
  { keyId: IKbdKey.KeyI, fingerId: IFingersIds.R2 },
  { keyId: IKbdKey.KeyO, fingerId: IFingersIds.R3 },
  { keyId: IKbdKey.KeyP, fingerId: IFingersIds.R4 },
  { keyId: IKbdKey.BracketLeft, fingerId: IFingersIds.R4 },
  { keyId: IKbdKey.BracketRight, fingerId: IFingersIds.R4 },
  { keyId: IKbdKey.Backslash, fingerId: IFingersIds.R4 },

  { keyId: IKbdKey.KeyA, fingerId: IFingersIds.L4, base: true },
  { keyId: IKbdKey.KeyS, fingerId: IFingersIds.L3, base: true },
  { keyId: IKbdKey.KeyD, fingerId: IFingersIds.L2, base: true },
  { keyId: IKbdKey.KeyF, fingerId: IFingersIds.L1, base: true },
  { keyId: IKbdKey.KeyG, fingerId: IFingersIds.L1 },
  { keyId: IKbdKey.KeyH, fingerId: IFingersIds.R1 },
  { keyId: IKbdKey.KeyJ, fingerId: IFingersIds.R1, base: true },
  { keyId: IKbdKey.KeyK, fingerId: IFingersIds.R2, base: true },
  { keyId: IKbdKey.KeyL, fingerId: IFingersIds.R3, base: true },
  { keyId: IKbdKey.Semicolon, fingerId: IFingersIds.R4, base: true },
  { keyId: IKbdKey.Quote, fingerId: IFingersIds.R4 },

  { keyId: IKbdKey.KeyZ, fingerId: IFingersIds.L4 },
  { keyId: IKbdKey.KeyX, fingerId: IFingersIds.L3 },
  { keyId: IKbdKey.KeyC, fingerId: IFingersIds.L2 },
  { keyId: IKbdKey.KeyV, fingerId: IFingersIds.L1 },
  { keyId: IKbdKey.KeyB, fingerId: IFingersIds.L1 },
  { keyId: IKbdKey.KeyN, fingerId: IFingersIds.R1 },
  { keyId: IKbdKey.KeyM, fingerId: IFingersIds.R1 },
  { keyId: IKbdKey.Comma, fingerId: IFingersIds.R2 },
  { keyId: IKbdKey.Period, fingerId: IFingersIds.R3 },
  { keyId: IKbdKey.Slash, fingerId: IFingersIds.R4 },
];
