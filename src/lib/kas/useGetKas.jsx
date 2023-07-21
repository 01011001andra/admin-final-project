import { useQuery } from "@tanstack/react-query";
import { getKas } from "../../utils/client";

const useGetKas = () => {
  const query = useQuery({
    queryKey: ["kas"],
    queryFn: getKas,
  });
  return query;
};

export default useGetKas;
