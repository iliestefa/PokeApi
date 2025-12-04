import { useEffect } from 'react';
import './PokemonModal.scss';
import pokemonConstants from '../../constants/pokemonConstants';


function PokemonModal({ pokemon, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!pokemon) return null;

  const pokemonNumber = String(pokemon.id).padStart(3, '0');
  const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const pokemonImage = pokemon.sprites?.other?.['official-artwork']?.front_default || 
                       pokemon.sprites?.front_default;
  
  const mainType = pokemon.types[0].type.name;
  const typeColor = pokemonConstants.TYPE_COLORS[mainType] || '#A8A878';

  const weight = (pokemon.weight / 10).toFixed(1);
  const height = (pokemon.height / 10).toFixed(1);

  const abilities = pokemon.abilities
    .filter(ability => !ability.is_hidden)
    .map(ability => ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1).replace('-', ' '));

  const stats = pokemon.stats.map(stat => ({
    name: stat.stat.name.toUpperCase().replace('-', ''),
    value: stat.base_stat
  }));

  const maxStat = 255;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        <div className="modal-header" style={{ backgroundColor: typeColor }}>
          <div className="pokemon-image-modal">
            <img src={pokemonImage} alt={pokemonName} />
          </div>
        </div>

        <div className="modal-body">
          <p className="pokemon-number-modal">#{pokemonNumber}</p>
          <h2 className="pokemon-name-modal">{pokemonName}</h2>
          
          <div className="pokemon-type">
            {pokemon.types.map((type) => (
              <span 
                key={type.type.name} 
                className="type-badge"
                style={{ backgroundColor: pokemonConstants.TYPE_COLORS[type.type.name] || '#A8A878' }}
              >
                {type.type.name.toUpperCase()}
              </span>
            ))}
          </div>

          <div className="pokemon-info-grid">
            <div className="info-item">
              <p className="info-label">PESO</p>
              <p className="info-value">{weight} kg</p>
            </div>
            <div className="info-divider"></div>
            <div className="info-item">
              <p className="info-label">ALTURA</p>
              <p className="info-value">{height} m</p>
            </div>
          </div>

          <div className="pokemon-abilities">
            <h3>Habilidades</h3>
            <div className="abilities-list">
              {abilities.map((ability, index) => (
                <span key={index} className="ability-badge">
                  {ability}
                </span>
              ))}
            </div>
          </div>

          <div className="pokemon-stats">
            <h3>Estadísticas Base</h3>
            <div className="stats-list">
              {stats.map((stat) => (
                <div key={stat.name} className="stat-row">
                  <span className="stat-name">{stat.name.slice(0, 3).toUpperCase()}</span>
                  <div className="stat-bar-container">
                    <div 
                      className="stat-bar" 
                      style={{ 
                        width: `${(stat.value / maxStat) * 100}%`,
                        backgroundColor: typeColor
                      }}
                    ></div>
                  </div>
                  <span className="stat-value">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonModal;

