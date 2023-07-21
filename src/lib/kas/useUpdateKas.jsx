import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateKas } from "../../utils/client";
import { successNotify } from "../../utils/helper";

const useUpdateKas = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (body) => {
      await updateKas(body, body.id);
    },
    onSuccess: () => {
      successNotify("Data berhasil diupdate!");
      queryClient.invalidateQueries({ queryKey: ["kas"] });
    },
  });

  return mutation;
};

export default useUpdateKas;
