import { useState } from "react";

export const useSetPage = () => {
  const [page, setPage] = useState<number>(1);
  return { page, setPage };
};
