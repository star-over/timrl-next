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
export enum IFingersIds {
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
  [IFingersIds.L1]: { hand: ISide.LEFT, part: IPart.F2 },
  [IFingersIds.L2]: { hand: ISide.LEFT, part: IPart.F3 },
  [IFingersIds.L0]: { hand: ISide.LEFT, part: IPart.F1 },
  [IFingersIds.L3]: { hand: ISide.LEFT, part: IPart.F4 },
  [IFingersIds.L4]: { hand: ISide.LEFT, part: IPart.F5 },
  [IFingersIds.R0]: { hand: ISide.RIGHT, part: IPart.F1 },
  [IFingersIds.R1]: { hand: ISide.RIGHT, part: IPart.F2 },
  [IFingersIds.R2]: { hand: ISide.RIGHT, part: IPart.F3 },
  [IFingersIds.R3]: { hand: ISide.RIGHT, part: IPart.F4 },
  [IFingersIds.R4]: { hand: ISide.RIGHT, part: IPart.F5 },
};
// export type IFingersKeys = keyof typeof IFingers;
