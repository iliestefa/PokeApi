function PokemonCard({ pokemon, onClick }) {
  const pokemonNumber = pokemon.id;
  const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const pokemonImage = pokemon.sprites?.other?.['official-artwork']?.front_default || 
                       pokemon.sprites?.front_default || 
                       '';

  const handleClick = () => {
    if (onClick) {
      onClick(pokemon);
    }
  };

  return (
    <div className="pokemon-card" onClick={handleClick}>
      <div className="pokemon-number-container">
        <div className="pokemon-number">#{pokemonNumber}</div>
      </div>
      <div className="pokemon-image-container">
        <img 
          src={pokemonImage} 
          alt={pokemonName}
          className="pokemon-image"
          loading="lazy"
        />
      </div>
      <h3 className="pokemon-name">{pokemonName}</h3>
      <p className="pokemon-details-text">Click para ver detalles</p>
      <div className="pokeball-background"></div>
    </div>
  );
}

export default PokemonCard;

