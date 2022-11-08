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

const PokeCard = (pokemon: PokemonData): JSX.Element => {
  return (
    <div className="pokemon-card">
      <h3>{pokemon.name[0].toUpperCase()}{pokemon.name.slice(1)}</h3>
      <img src={pokemon.sprites.front_default} />
      <p># {pokemon.id}</p>
    </div>
  )
};

export default PokeCard;
