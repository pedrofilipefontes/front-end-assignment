import axios from "node_modules/axios";

interface getPlanetsProps {
  term: string;
}

export const getPlanets = ({ term }: getPlanetsProps) => {
  const response = axios.get(`https://swapi.dev/api/planets?search=${term}`);
  return response;
};
