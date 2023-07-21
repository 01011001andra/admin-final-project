import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDokumentasi } from "../../utils/client";
import { successNotify } from "../../utils/helper";

const useDeleteDokumentas = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id) => {
      await deleteDokumentasi(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["dokumentasi"] });
      successNotify("Data berhasil dihapus!");
    },
  });
  return mutation;
};

export default useDeleteDokumentas;
