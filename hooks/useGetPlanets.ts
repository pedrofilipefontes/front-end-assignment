import { useQuery } from "@tanstack/react-query";
import { getPlanets } from "services/getPlanets";

interface useGetPlanetsProps {
  term: string;
  page: number;
}

export const useGetPlanets = ({ term, page }: useGetPlanetsProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["planets", term, page],
    queryFn: () => getPlanets({ page, term }),
  });

  return {
    data: data?.data.results,
    isLoading,
    error,
    count: data?.data.count,
  };
};
