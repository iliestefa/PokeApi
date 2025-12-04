import { useState, useEffect } from 'react';
import { fetchPokemonList, fetchPokemonDetails } from '../services/pokemonService';

export const usePokemon = (limit = 100, offset = 0) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await fetchPokemonList(limit, offset);
        
        const pokemonDetailsPromises = data.results.map((pokemon) =>
          fetchPokemonDetails(pokemon.url)
        );
        
        const pokemonDetails = await Promise.all(pokemonDetailsPromises);
        
        setPokemonList(pokemonDetails);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPokemon();
  }, [limit, offset]);

  return { pokemonList, loading, error };
};

