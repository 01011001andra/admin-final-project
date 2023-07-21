import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteKas } from "../../utils/client";
import { successNotify } from "../../utils/helper";

const useDeleteKas = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id) => {
      await deleteKas(id);
    },
    onSuccess: () => {
      successNotify("Data berhasil dihapus!");
      queryClient.invalidateQueries({ queryKey: ["kas"] });
    },
  });
  return mutation;
};

export default useDeleteKas;
