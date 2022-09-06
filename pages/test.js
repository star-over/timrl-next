import { Hand } from "../components/Hand";
import { IHandSide, IPartState } from "../interfaces/interface";

const testPage = () => {
  return (
    <>
      <Hand
        side={IHandSide.LEFT}
        state={{ F1: IPartState.ACTIVE, F5: IPartState.ERROR }}
      />
      <Hand
        side={IHandSide.RIGHT}
        state={{ F1: IPartState.ACTIVE, F2: IPartState.ERROR, F3: IPartState.INACTIVE }}
      />
    </>
  );
};

export default testPage;
