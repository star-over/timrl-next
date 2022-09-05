import cn from 'classnames';
import { F4svg, RHsvg } from '../assets/svg';


const Hand = (props:any) => {
  const red = '#a00';
  const green = '#0a0';
  const blue = '#00a'
  const gray = '#aaa'
  const black = '#000'

  console.log(props);
  console.log('fill-slate-500')

  return (
    <>
      <svg
      className='fill-orange-300'
        viewBox='0 0 173 184'
        fill='#aaf'
        width="281" height="321"
      >
      <path id='PM'
          fill='fill-current'
        d='M57.8.3c13.4 0 77 2.7 88.8 7.4 23 9 30.2 24.7 23.3 48.4a95 95 0 0 0-1.7 42c.4 4.1.6 5.2.5 9.4-.5 14.4-9.6 30.7-14.5 44.2-5.9 16.2-12.7 28.9-31.6 31.2l-25.5.3-21.2-2.9c-34.4-6.2-64.3-14.9-75-52.7-.7-6.9-.4-12.8.7-20.3l.6-3.8c4.2-24 8.8-47.9 12.5-72C17.3 15 27 6.2 42.4 2.5 47.4 1.2 52.6.8 57.8.3Z'
      />
      <path id='F1'
        fill={red}
        d="M.7 105.8c2-2.3 4-3.3 6.3-3.8 12.3-3 20-11.6 26.9-21.4C48.2 60.3 62 39.6 77 19.8A65 65 0 0 1 95.2 4c2-1.2 2.4-1.4 6.7-2.5 9.4-2.6 13.6 4 11.1 13.3a61 61 0 0 1-8.3 17c-19.5 29.9-39.3 59.5-58.9 89.4-5.1 7.9-9.4 16.4-14.3 24.5-4.3 7-6.6 6.8-10.6-.4L.7 108.5c-.5-.8-.4-1.8 0-2.7Z"
      />
      <F4svg className='fill-rose-50' width='100'/>
      </svg>
      <RHsvg className='fill-slate-400'/>
      <div className='bg-red-200'>hello</div>
    </>
  );

}

export default Hand;
