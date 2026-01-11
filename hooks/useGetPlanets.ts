import { useQuery } from "@tanstack/react-query";
import { getPlanets } from "services/getPlanets";

interface useGetPlanetsProps {
  term: string;
}

export const useGetPlanets = ({ term }: useGetPlanetsProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["planets", term],
    queryFn: () => getPlanets({ term }),
  });

  return { data: data?.data.results, isLoading, error };
};
