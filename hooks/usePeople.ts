import { useQuery } from "@tanstack/react-query";
import { swapiService, Person, SWAPIResponse } from "../services/swapi";

export const usePeople = (page: number = 1) => {
  return useQuery<SWAPIResponse<Person>, Error>({
    queryKey: ["people", page],
    queryFn: () => swapiService.getPeople(page),
  });
};
