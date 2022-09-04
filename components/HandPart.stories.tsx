import  HandPart  from "./HandPart";
import '../styles/globals.css'

export default {
  title: 'HandPart',
  component: HandPart,
};

export const Default = () => (
<>
  <HandPart
    side='RIGHT'
    part='PM'
    state='ERROR'
  />
</>);
