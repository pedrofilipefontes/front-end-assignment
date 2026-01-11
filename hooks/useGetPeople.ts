import { useQuery } from "@tanstack/react-query";
import { getPeople } from "services/getPeople";

interface useGetPeopleProps {
  term: string;
}

export const useGetPeople = ({ term }: useGetPeopleProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["people", term],
    queryFn: () => getPeople({ term }),
  });
  return { data: data?.data.results, isLoading, error };
};
