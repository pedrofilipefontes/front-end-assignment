import axios from "node_modules/axios";
import { GetStarShipsProps } from "types/types";

export const getStarShips = ({ term, page }: GetStarShipsProps) => {
  const response = axios.get(
    `https://swapi.dev/api/starships?search=${term}&page=${page}`
  );
  return response;
};
