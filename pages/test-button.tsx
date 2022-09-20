import { Button } from "../components/Button";
import { IPartState } from "../interfaces/interface";

const testButtonPage = () => <>
  <h1 className="font-bold text-xl p-3">Button testing</h1>
  <hr />
  <Button symbol="A" state={IPartState.ACTIVE}/>
  <Button symbol="s" state={IPartState.ERROR}/>
  <Button symbol="d" state={IPartState.INACTIVE}/>
  <Button symbol="F" state={IPartState.HIDE}/>
  <Button symbol="g" state={IPartState.ACTIVE}/>
  <Button />
</>;

export default testButtonPage;
