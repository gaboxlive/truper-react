import React from "react";
import { useSearchParams } from "react-router";
import { PokemonInfo } from "../components/info/PokemonInfo";

const PokemonDetails = () => {
  const [pokemonUrl] = useSearchParams();

  const url = pokemonUrl.get("url");

  return <PokemonInfo url={url ?? ""} />;
};

export default PokemonDetails;
