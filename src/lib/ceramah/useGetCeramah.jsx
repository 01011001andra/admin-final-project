import { useQuery } from "@tanstack/react-query";
import { getCeramah } from "../../utils/client";

const useGetCeramah = () => {
  const query = useQuery({
    queryKey: ["ceramah"],
    queryFn: getCeramah,
  });
  return query;
};

export default useGetCeramah;
