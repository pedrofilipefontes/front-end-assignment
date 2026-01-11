import { useQuery } from "@tanstack/react-query";
import { swapiService, Starship, SWAPIResponse } from "../services/swapi";

export const useStarships = (page: number = 1) => {
  return useQuery<SWAPIResponse<Starship>, Error>({
    queryKey: ["starships", page],
    queryFn: () => swapiService.getStarships(page),
  });
};
