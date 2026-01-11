import { useQuery } from "@tanstack/react-query";
import { getStarShips } from "services/getStarShips";

interface useGetStarShipsProps {
  term: string;
}

export const useGetStarShips = ({ term }: useGetStarShipsProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["starships", term],
    queryFn: () => getStarShips({ term }),
  });

  return { data: data?.data.results, isLoading, error };
};
