import { useQuery } from "@tanstack/react-query";

interface PokemonData {
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites?: IPokemonSprites;
}

export interface IPokemonSprites {
  front_default?: string;
  back_default?: string;
  front_shiny?: string;
  back_shiny?: string;
}

export const usePokemonDetail = (name?: string, url?: string) => {
  const { data } = useQuery<PokemonData>({
    queryKey: ["pokemonDetail", `https://pokeapi.co/api/v2/pokemon/${name}`],
    queryFn: async () => {
      const response = await fetch(url ?? "");
      return response.json();
    },
  });
  return { pokemonDetail: data };
};
