import PokemonCard from '../PokemonCard/PokemonCard';
import './PokemonGrid.scss';

const PokemonGrid = ({ pokemonList, onPokemonClick, lastElementRef, loadingMore, hasMore }) => {
  if (pokemonList.length === 0) {
    return (
      <div className="no-results">
        <p>No se encontraron pokémones</p>
      </div>
    );
  }

  return (
    <>
      <div className="pokemon-grid">
        {pokemonList.map((pokemon, index) => {
          const isLastElement = index === pokemonList.length - 1;
          
          return (
            <div 
              key={pokemon.id} 
              ref={isLastElement ? lastElementRef : null}
            >
              <PokemonCard
                pokemon={pokemon}
                onClick={onPokemonClick}
              />
            </div>
          );
        })}
      </div>
      {loadingMore && (
        <div className="loading-more">
          <p>Cargando más pokémones...</p>
        </div>
      )}
      {!hasMore && pokemonList.length > 0 && (
        <div className="end-message">
          <p>¡Has visto todos los pokémones!</p>
        </div>
      )}
    </>
  );
};

export default PokemonGrid;

