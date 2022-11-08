import { PokemonData } from "../App";
import PokeCard from "./PokeCard";

const Pokedex: React.FC<Array<PokemonData>> = (
  pokeData: Array<PokemonData>
): JSX.Element => {
  const pokeDataArray = Object.values(pokeData);
  return (
    <div className="pokedex-container">
      {pokeDataArray ? pokeDataArray.map((pokemon: PokemonData, index: number) => (
        <PokeCard {...pokemon} key={index}/>
      )) : <></>}
    </div>
  );
};

export default Pokedex;
