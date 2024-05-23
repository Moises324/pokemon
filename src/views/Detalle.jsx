import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PokeContext } from "../PokemonContext/PokeContext";
const Detalle = () => {
  const { pokemones } = useContext(PokeContext);

  const { id } = useParams();
  const navigate = useNavigate();

  let pokemon = pokemones.find((pokemon) => pokemon.id == id);

  if (!pokemon) {
    return (
      <div className="container mt-3">
        <p>Pokemon no encontrado</p>
        <button
          onClick={() => navigate("/pokemones")}
          className="btn btn-primary"
        >
          Volver
        </button>
      </div>
    );
  }

  const volver = () => {
    navigate(`/pokemones`);
  };

  return (
    <div className="container text-center mt-3">
      <div className="card mb-3 mx-auto" style={{ maxWidth: "70vw" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={pokemon.img}
              className="card-img ms-2"
              alt={pokemon.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-center">
              <h5 className="card-title">{pokemon.name}</h5>
              <ul>
                <li className="card-text">
                  Experiencia Base: {pokemon.base_experience}
                </li>
                <li className="card-text">Altura: {pokemon.height} cm.</li>
                <li className="card-text">Peso: {pokemon.weight} kgs.</li>
                <li className="card-text">Tipo: {pokemon.type}</li>
              </ul>

              <button onClick={volver} className="btn btn-success">
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
