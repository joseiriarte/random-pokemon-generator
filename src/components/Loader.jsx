import { pikachu } from '../assets';

export const Loader = () => {
  return (
    <div className='flex flex-col justify-center items-center my-64'>
      <img
        src={pikachu}
        alt='loader'
        width={100}
      />
      <p className='mt-4'>Loading...</p>
    </div>
  );
};
