export const searchPokemon = async (pokemon) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("searchPokemon Error: ", error);
  }
};

export const fetchPokemons = async (limit =5, offset = 0) => {
  let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("searchPokemons Error: ", error);
  }
};

export const getPokemonUrlResponse = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("searchPokemons Error: ", error);
  }
};
