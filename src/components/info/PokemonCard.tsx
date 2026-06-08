import { Link } from "react-router";
import { IPokemon } from "../../models/pokemon.model";
import React from "react";

interface PokemonCardProps {
  pokemon?: IPokemon;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="rounded-lg shadow-md p-4 h-[250px] w-[220px]">
      <h2 className="text-xl font-bold">{pokemon?.name}</h2>
      <Link
        to={`/pokemon?url=${pokemon?.url}`}
        className="text-blue-500 mt-2 inline-block"
      >
        Ver detalles
      </Link>
    </div>
  );
};
