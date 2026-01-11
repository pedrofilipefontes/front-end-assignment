import axios from "node_modules/axios";
import { GetPlanetsProps } from "types/types";

export const getPlanets = ({ term, page }: GetPlanetsProps) => {
  const response = axios.get(
    `https://swapi.dev/api/planets/?search=${term}&page=${page}`
  );
  return response;
};
