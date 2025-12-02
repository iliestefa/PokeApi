const API_BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async (limit = 100, offset = 0) => {
  try {
    const response = await fetch(`${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error('Error al obtener la lista de pokémones');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error en fetchPokemonList: ${error.message}`);
  }
};

export const fetchPokemonDetails = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error al obtener los detalles del pokémon');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error en fetchPokemonDetails: ${error.message}`);
  }
};

export const fetchPokemonById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/pokemon/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener el pokémon');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error en fetchPokemonById: ${error.message}`);
  }
};

