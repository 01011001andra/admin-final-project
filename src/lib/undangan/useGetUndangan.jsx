import { useQuery } from "@tanstack/react-query";
import { getUndangan } from "../../utils/client";

const useGetUndangan = () => {
  const data = useQuery({
    queryKey: ["undangan"],
    queryFn: getUndangan,
  });
  return data;
};

export default useGetUndangan;
