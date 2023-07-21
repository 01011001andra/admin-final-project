import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postDokumentasi } from "../../utils/client";
import { successNotify } from "../../utils/helper";

const usePostDokumentasi = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (body) => {
      await postDokumentasi(body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dokumentasi"] });
      successNotify("Data berhasil ditambahkan!");
    },
  });
  return mutation;
};

export default usePostDokumentasi;
