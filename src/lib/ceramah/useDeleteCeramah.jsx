import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCeramah } from "../../utils/client";
import { successNotify } from "../../utils/helper";

const useDeleteCeramah = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id) => {
      await deleteCeramah(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ceramah"] });
      successNotify("Data berhasil dihapus!");
    },
  });
  return mutation;
};

export default useDeleteCeramah;
