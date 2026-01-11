import axios from "node_modules/axios";

interface getPeopleProps {
  term: string;
}

export const getPeople = ({ term }: getPeopleProps) => {
  const response = axios.get(`https://swapi.dev/api/people?search=${term}`);
  return response;
};
