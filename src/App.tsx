import { useEffect, useState } from "react";
import "./App.css";
import Pokedex from "./components/Pokedex";
import { getPokemons, getPokemonData } from "./services/getPokemons";

export interface PokemonEndpointObject {
  name: string;
  url: string;
}

export interface PokemonData {
  abilities: [];
  base_experience: number;
  forms: [];
  game_indices: [];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: string;
  order: number;
  past_types: [];
  species: {};
  sprites: {
    front_default: string;
  };
  stats: [];
  types: [];
  weight: number;
}

export default function App() {
  const [pokemons, setPokemons] = useState<Array<PokemonData>>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState<number>(0);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(30, 30 * page);
      setTotal(data.count);
      const promises = await data.results.map(
        async (pokemon: PokemonEndpointObject) => {
          return await getPokemonData(pokemon.url);
        }
      );
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);
  return (
    <div className="App">
      <h1>Crotadex</h1>
      <div className="buttons-wrapper">
        <div className="buttons-container">
          <button onClick={() => setPage((prevPage) => prevPage - 1)}>
            👈
          </button>
          <button onClick={() => setPage((prevPage) => prevPage + 1)}>
            👉
          </button>
        </div>
        <div>
          Página {page + 1} de {Math.floor(total / 30)}
        </div>
      </div>
      {loading ? <h3>Loading...</h3> : <></>}
      {!loading && pokemons ? <Pokedex {...pokemons} /> : <></>}
    </div>
  );
}
