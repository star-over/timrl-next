import { Hand } from "./Hand";
import { ISide, IPartState } from "../interfaces/interface";
import "../styles/globals.css";

export default {
  title: "Hand",
  component: Hand,
};

export const Default = () => (
  <Hand
    side={ISide.LEFT}
    state={{ F1: IPartState.ACTIVE, F5: IPartState.ERROR }}
  />
);
