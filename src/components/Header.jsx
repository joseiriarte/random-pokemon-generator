import { pokeball } from '../assets';

export const Header = () => {
  return (
    <header className='w-full flex justify-center mb-8 py-8 bg-blue border-b-2 border-slate-200'>
      <div className='w-4/5 flex items-center justify-start gap-8 max-md:flex-col max-md:justify-center max-md:gap-4'>
        <img
          src={pokeball}
          alt='logo'
          width={75}
        />
        <h1 className='font-bold text-3xl text-center text-balance'>Random Pokémon Generator</h1>
      </div>
    </header>
  );
};
