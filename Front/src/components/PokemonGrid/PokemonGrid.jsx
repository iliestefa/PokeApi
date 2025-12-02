import PokemonCard from '../PokemonCard/PokemonCard';

function PokemonGrid({ pokemonList, onPokemonClick }) {
  if (pokemonList.length === 0) {
    return (
      <div className="no-results">
        <p>No se encontraron pokémones</p>
      </div>
    );
  }

  return (
    <div className="pokemon-grid">
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onClick={onPokemonClick}
        />
      ))}
    </div>
  );
}

export default PokemonGrid;

