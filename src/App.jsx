import { useState, useMemo } from 'react';
import Header from './components/Header/Header';
import PokemonGrid from './components/PokemonGrid/PokemonGrid';
import PokemonModal from './components/PokemonModal/PokemonModal';
import { usePokemon } from './hooks/usePokemon';
import useInfiniteScroll from './hooks/useInfiniteScroll';
import './App.scss';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const { pokemonList, loading, loadingMore, error, hasMore, loadMore } = usePokemon();

  const filteredPokemonList = useMemo(() => {
    if (!searchValue.trim()) {
      return pokemonList;
    }
    
    const searchLower = searchValue.toLowerCase();
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchLower)
    );
  }, [pokemonList, searchValue]);

  const lastElementRef = useInfiniteScroll(loadMore, hasMore, loadingMore);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
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
          lastElementRef={lastElementRef}
          loadingMore={loadingMore}
          hasMore={hasMore}
        />
      </main>
      {selectedPokemon && (
        <PokemonModal 
          pokemon={selectedPokemon} 
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;

