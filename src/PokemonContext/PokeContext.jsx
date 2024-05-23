import { createContext, useEffect, useState } from "react";

export const PokeContext = createContext();

const PokeProvider = ({ children }) => {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    const getPoke = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"
      );
      const data = await response.json();

      const { results } = data;
      const newPokemons = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();
        // console.log(poke);
        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.dream_world.front_default,
          base_experience: poke.base_experience,
          height: poke.height,
          weight: poke.weight,
          type: poke.types[0].type.name,
        };
      });
      setPokemones(await Promise.all(newPokemons));
    };
    getPoke();
  }, []);
  return (
    <PokeContext.Provider value={{ pokemones, setPokemones }}>
      {children}
    </PokeContext.Provider>
  );
};

export default PokeProvider;
