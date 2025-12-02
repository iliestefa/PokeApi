import { useState, useMemo } from 'react';
import Header from './components/Header/Header';
import PokemonGrid from './components/PokemonGrid/PokemonGrid';
import { usePokemon } from './hooks/usePokemon';
import './App.scss';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const { pokemonList, loading, error } = usePokemon(100, 0);

  const filteredPokemonList = useMemo(() => {
    if (!searchValue.trim()) {
      return pokemonList;
    }
    
    const searchLower = searchValue.toLowerCase();
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchLower)
    );
  }, [pokemonList, searchValue]);

  const handlePokemonClick = (pokemon) => {
    console.log('Pokémon seleccionado:', pokemon);
  };

  if (loading) {
    return (
      <div className="App">
        <Header searchValue={searchValue} onSearchChange={setSearchValue} />
        <div className="loading-container">
          <p>Cargando pokémones...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <Header searchValue={searchValue} onSearchChange={setSearchValue} />
        <div className="error-container">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header searchValue={searchValue} onSearchChange={setSearchValue} />
      <main className="main-content">
        <PokemonGrid 
          pokemonList={filteredPokemonList} 
          onPokemonClick={handlePokemonClick}
        />
      </main>
    </div>
  );
};

export default App;

