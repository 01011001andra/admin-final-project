import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUndangan } from "../../utils/client";
import { successNotify } from "../../utils/helper";

const useDeleteUndangan = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id) => {
      await deleteUndangan(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["undangan"] });
      successNotify("Data Berhasil Dihapus!");
    },
  });
  return mutation;
};

export default useDeleteUndangan;
