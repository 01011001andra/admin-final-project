import { useQuery } from "@tanstack/react-query";
import { getDokumentasi } from "../../utils/client";

const useGetDokumentasi = () => {
  const query = useQuery({
    queryKey: ["dokumentasi"],
    queryFn: getDokumentasi,
  });

  return query;
};

export default useGetDokumentasi;
