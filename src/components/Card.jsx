import { Type } from './Type';

export const Card = ({ name, id, img, height, weight, types, getPokemon }) => {
  return (
    <article className='w-full flex flex-col justify-center items-center'>
      <div className='w-4/5 max-w-5xl flex items-center justify-around max-md:flex-col max-md:text-center max-md:gap-8'>
        <img
          src={img}
          alt={name}
        />

        <div className='flex flex-col'>
          <div className='mb-8'>
            <p className='text-lg opacity-70'>#{id}</p>
            <h2 className='text-2xl font-semibold'>{name.toUpperCase()}</h2>
          </div>

          <div className='mb-8'>
            <p className='mb-2 opacity-70'>Type:</p>
            <ul className='flex flex-col gap-2'>
              {types.map((type) => (
                <Type
                  key={type.type.name}
                  name={type.type.name}
                  color={`bg-${type.type.name}`}
                />
              ))}
            </ul>
          </div>

          <div>
            <p className='mb-1 opacity-70'>Height:</p>
            <p className='mb-4 font-medium opacity-80'>{height * 10} cm</p>
            <p className='mb-1 opacity-70'>Weight:</p>
            <p className='mb-4 font-medium opacity-80'>{weight / 10} kg</p>
          </div>
        </div>
      </div>
      <div className='w-4/5 max-w-5xl flex flex-col items-center justify-center my-8 gap-8'>
        <a
          href={`https://bulbapedia.bulbagarden.net/wiki/${name}_(Pokémon)`}
          target='_blank'
          className='btn bg-white border-red-500 font-medium transition hover:bg-slate-50 active:bg-slate-100 duration-200 max-md:w-4/5'
        >
          More info
        </a>
        <button
          onClick={() => getPokemon()}
          className='btn bg-red-500 border-black text-white font-medium transition hover:bg-red-600 active:bg-red-700 duration-200 max-md:w-4/5'
        >
          Show me another one!
        </button>
      </div>
    </article>
  );
};
