import { useState } from "react";
import { IPokemon } from "../models/pokemon.model";
import { useQuery } from "@tanstack/react-query";

interface ResponseData {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}

export const usePokemonList = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");

  const goToNextPage = () => {
    if (data?.next) {
      setUrl(data.next);
    }
  };

  const goToPreviousPage = () => {
    if (data?.previous) {
      setUrl(data.previous);
    }
  };

  const { data, isLoading, error } = useQuery<ResponseData>({
    queryKey: ["pokemonList", url],
    queryFn: async () => {
      const response = await fetch(url);
      return response.json();
    },
  });

  return {
    pokemonList: data?.results,
    isLoading,
    error,
    goToNextPage: data?.next ? goToNextPage : undefined,
    goToPreviousPage: data?.previous ? goToPreviousPage : undefined,
  };
};
