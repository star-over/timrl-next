import type { NextPage } from 'next';
import  HandPart  from '../components/HandPart';

const Home: NextPage = () => (
  <div>
    <h1 className='font-bold text-xl'>timrl site</h1>
    <HandPart
      side='RIGHT'
      part='PM'
      state='ERROR'
    />
  </div>
);

export default Home;
