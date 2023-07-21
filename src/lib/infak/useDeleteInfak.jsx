import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteInfak } from "../../utils/client";
import { successNotify } from "../../utils/helper";

const useDeleteInfak = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id) => {
      await deleteInfak(id);
    },
    onSuccess: () => {
      successNotify("Data berhasil dihapus!");
      queryClient.invalidateQueries({ queryKey: ["infak"] });
    },
  });
  return mutation;
};

export default useDeleteInfak;
