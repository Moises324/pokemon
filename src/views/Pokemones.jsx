import { useContext, useState } from "react";
import React from "react";
import { PokeContext } from "../PokemonContext/PokeContext";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const { pokemones } = useContext(PokeContext);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSelectedPokemon(e.target.value);
  };
  const handleSubmit = () => {
    if (selectedPokemon) {
      navigate(`/pokemones/${selectedPokemon}`);
    }
  };
  return (
    <div className="container mt-3 text-center">
      <div className="form-group">
        <label htmlFor="pokemonSelect">Elige a un Pokemon</label>
        <select
          id="pokemonSelect"
          className="form-control w-25 mx-auto text-center"
          value={selectedPokemon}
          onChange={handleChange}
        >
          <option value="" disabled>
            Elige a un Pokemon
          </option>
          {pokemones.map((pokemon) => (
            <option className="text-center" key={pokemon.id} value={pokemon.id}>
              {pokemon.name}
            </option>
          ))}
        </select>
      </div>
      <button
        className="btn btn-primary mt-3 text-center"
        onClick={handleSubmit}
      >
        Ver detalles
      </button>
    </div>
  );
};

export default Pokemones;
