import { useQuery } from "@tanstack/react-query";

interface PokemonData {
  sprites: {
    front_default: string;
  };
}

export const usePokemonDetail = (url: string) => {
  const { data } = useQuery<PokemonData>({
    queryKey: ["pokemonDetail", url],
    queryFn: async () => {
      const response = await fetch(url);
      return response.json();
    },
  });
  return { pokemonDetail: data };
};
