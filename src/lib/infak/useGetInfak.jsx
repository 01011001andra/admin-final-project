import { useQuery } from "@tanstack/react-query";
import { getInfak } from "../../utils/client";

const useGetInfak = () => {
  const query = useQuery({
    queryKey: ["infak"],
    queryFn: getInfak,
  });
  return query;
};

export default useGetInfak;
