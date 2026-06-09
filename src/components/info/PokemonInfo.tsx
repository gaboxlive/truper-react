import React from "react";
import { usePokemonDetail } from "../../hooks/usePokemonDetail";

interface PokemonInfoProps {
  url: string;
}

export const PokemonInfo = ({ url }: PokemonInfoProps) => {
  const { pokemonDetail } = usePokemonDetail(url ?? "");
  return (
    <div className="flex flex-col">
      <div className="w-4/12 mx-auto ">
        <img
          className="w-full h-full object-contain"
          src={pokemonDetail?.sprites?.front_default}
          alt={url}
        />
      </div>
    </div>
  );
};
