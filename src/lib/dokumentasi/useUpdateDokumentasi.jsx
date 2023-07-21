import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateDokumentasi } from "../../utils/client";
import { successNotify } from "../../utils/helper";

const useUpdateDokumentasi = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (body) => {
      await updateDokumentasi(body, body.id);
    },
    onSuccess: (data) => {
      successNotify(`Data berhasil diupdate!`, data?.data?.id);
      queryClient.invalidateQueries({ queryKey: ["dokumentasi"] });
    },
  });
  return mutation;
};

export default useUpdateDokumentasi;
