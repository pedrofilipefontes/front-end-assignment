import { useQuery } from "@tanstack/react-query";
import { getStarShips } from "services/getStarShips";

interface useGetStarShipsProps {
  term: string;
  page: number;
}

export const useGetStarShips = ({ term, page }: useGetStarShipsProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["starships", term, page],
    queryFn: () => getStarShips({ term, page }),
  });

  return {
    data: data?.data.results,
    isLoading,
    error,
    count: data?.data.count,
  };
};
