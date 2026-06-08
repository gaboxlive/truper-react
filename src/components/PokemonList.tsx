import React from "react";
import { Grid } from "./shared/Grid";
import { PokemonCard } from "./info/PokemonCard";
import { usePokemonList } from "../hooks/usePokemonList";

export const PokemonList = () => {
  const { pokemonList, goToNextPage, goToPreviousPage } = usePokemonList();
  return (
    <Grid next={goToNextPage} previous={goToPreviousPage}>
      {pokemonList?.map((pokemon) => (
        <div className="bg-gray-200 p-4 rounded shadow" key={pokemon.name}>
          <PokemonCard
            pokemon={{
              name: pokemon.name,
              url: pokemon.url,
            }}
          />
        </div>
      ))}
    </Grid>
  );
};
