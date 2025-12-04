import { useState, useEffect, useCallback } from 'react';
import { fetchPokemonList, fetchPokemonDetails } from '../services/pokemonService';

const POKEMON_PER_PAGE = 20;

export const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const loadPokemon = useCallback(async (currentOffset, isInitial = false) => {
    try {
      if (isInitial) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }
      setError(null);
      
      const data = await fetchPokemonList(POKEMON_PER_PAGE, currentOffset);
      
      if (data.results.length === 0 || !data.next) {
        setHasMore(false);
      }
      
      const pokemonDetailsPromises = data.results.map((pokemon) =>
        fetchPokemonDetails(pokemon.url)
      );
      
      const pokemonDetails = await Promise.all(pokemonDetailsPromises);
      
      setPokemonList((prev) => isInitial ? pokemonDetails : [...prev, ...pokemonDetails]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    loadPokemon(0, true);
  }, [loadPokemon]);

  const loadMore = useCallback(() => {
    if (!loadingMore && !loading && hasMore) {
      const newOffset = offset + POKEMON_PER_PAGE;
      setOffset(newOffset);
      loadPokemon(newOffset, false);
    }
  }, [offset, loadingMore, loading, hasMore, loadPokemon]);

  return { pokemonList, loading, loadingMore, error, hasMore, loadMore };
};

