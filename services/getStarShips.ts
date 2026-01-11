import axios from "node_modules/axios";

interface getStarShipsProps {
  term: string;
}

export const getStarShips = ({ term }: getStarShipsProps) => {
  const response = axios.get(`https://swapi.dev/api/starships?search=${term}`);
  return response;
};
