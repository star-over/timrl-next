import { Button } from "../components/Button";
import { KbdButton } from "../components/KbdButton";
import { IPartState } from "../interfaces/interface";

const testButtonPage = () => <>
  <h1 className="font-bold text-xl p-3">Button testing</h1>
  <hr />
  <Button symbol="A" state={IPartState.ACTIVE} />
  <Button symbol="s" state={IPartState.ERROR} />
  <Button symbol="d" state={IPartState.INACTIVE} />
  <Button symbol="F" state={IPartState.INVISIBLE} />
  <Button symbol="g" state={IPartState.ACTIVE} />
  <Button />
  <br />
  <hr />
  <KbdButton symbol="W" state={IPartState.ACTIVE} />
  <KbdButton symbol="W" state={IPartState.ERROR} />
  <KbdButton symbol="I" state={IPartState.INACTIVE} />
  <KbdButton symbol="Q" state={IPartState.INVISIBLE} />
  <KbdButton symbol="A" state={IPartState.ACTIVE} />
</>;

export default testButtonPage;
