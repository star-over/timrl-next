/* eslint-disable prettier/prettier */
export enum ISide {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}
export enum IPart {
  F1 = "F1",
  F2 = "F2",
  F3 = "F3",
  F4 = "F4",
  F5 = "F5",
  PM = "PM",
}
export enum IFingersKeys {
  L0 = "L0",
  L1 = "L1",
  L2 = "L2",
  L3 = "L3",
  L4 = "L4",
  R0 = "R0",
  R1 = "R1",
  R2 = "R2",
  R3 = "R3",
  R4 = "R4",
}
export enum IPartState {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  ERROR = "ERROR",
  INVISIBLE = "INVISIBLE",
}
export enum IMoveDirection {
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  UP = "UP",
  NONE = "NONE",
}
export type IHandState = {
  [key in IPart]?: IPartState;
};
export const fingers = {
  [IFingersKeys.L1]: { hand: ISide.LEFT, part: IPart.F2 },
  [IFingersKeys.L2]: { hand: ISide.LEFT, part: IPart.F3 },
  [IFingersKeys.L0]: { hand: ISide.LEFT, part: IPart.F1 },
  [IFingersKeys.L3]: { hand: ISide.LEFT, part: IPart.F4 },
  [IFingersKeys.L4]: { hand: ISide.LEFT, part: IPart.F5 },
  [IFingersKeys.R0]: { hand: ISide.RIGHT, part: IPart.F1 },
  [IFingersKeys.R1]: { hand: ISide.RIGHT, part: IPart.F2 },
  [IFingersKeys.R2]: { hand: ISide.RIGHT, part: IPart.F3 },
  [IFingersKeys.R3]: { hand: ISide.RIGHT, part: IPart.F4 },
  [IFingersKeys.R4]: { hand: ISide.RIGHT, part: IPart.F5 },
};
// export type IFingersKeys = keyof typeof IFingers;
