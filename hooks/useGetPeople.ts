import { useQuery } from "@tanstack/react-query";
import { getPeople } from "services/getPeople";

interface useGetPeopleProps {
  term: string;
  page: number;
}

export const useGetPeople = ({ term, page }: useGetPeopleProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["people", term, page],
    queryFn: () => getPeople({ term, page }),
  });
  return {
    data: data?.data.results,
    count: data?.data.count,
    isLoading,
    error,
  };
};
