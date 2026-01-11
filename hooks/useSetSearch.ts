import { useState } from "react";

export const useSetSearch = () => {
  const [search, setSearch] = useState<string>("");
  return { search, setSearch };
};
