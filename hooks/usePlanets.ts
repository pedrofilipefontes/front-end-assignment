import { useQuery } from "@tanstack/react-query";
import { swapiService, Planet, SWAPIResponse } from "../services/swapi";

export const usePlanets = (page: number = 1) => {
  return useQuery<SWAPIResponse<Planet>, Error>({
    queryKey: ["planets", page],
    queryFn: () => swapiService.getPlanets(page),
  });
};
