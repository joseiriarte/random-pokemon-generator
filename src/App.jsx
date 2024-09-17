import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';
import { Card } from './components/Card';
import { Loader } from './components/Loader';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const id = Math.floor(Math.random() * 1025) + 1;

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(setLoading(true))
      .then((res) => res.json())
      .then((data) => setTimeout(() => handlePokemon(data), 300));
  };

  const handlePokemon = (pokemon) => {
    setPokemon([pokemon]);
    setLoading(false);
  };

  return (
    <div className='w-full h-full flex flex-col justify-center items-center bg-slate-50 font-Rubik'>
      <Header />

      {loading ? (
        <Loader />
      ) : (
        pokemon.map((poke) => (
          <Card
            key={poke.id}
            id={poke.id}
            name={poke.name}
            img={poke.sprites.other['official-artwork'].front_default}
            height={poke.height}
            weight={poke.weight}
            types={poke.types}
            getPokemon={getPokemon}
          />
        ))
      )}

      <Footer />
    </div>
  );
}

export default App;
