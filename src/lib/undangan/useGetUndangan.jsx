import { useQuery } from "@tanstack/react-query";
import { getUndangan } from "../../utils/client";

const useGetUndangan = () => {
  const query = useQuery({
    queryKey: ["undangan"],
    queryFn: getUndangan,
  });
  return query;
};

export default useGetUndangan;
