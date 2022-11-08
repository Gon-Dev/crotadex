export const getPokemons = async (limit: number = 30, offset: number = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};
export async function getPokemonData(pokemonEndpoint: string) {
  try {
    const response = await fetch(pokemonEndpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}