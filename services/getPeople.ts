import axios from "node_modules/axios";
import { GetPeopleProps } from "types/types";

export const getPeople = ({ term, page }: GetPeopleProps) => {
  const response = axios.get(
    `https://swapi.dev/api/people/?page=${page}&search=${term}`
  );
  return response;
};
