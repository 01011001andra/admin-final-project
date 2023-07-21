import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCeramah } from "../../utils/client";
import { successNotify } from "../../utils/helper";

const useUpdateCeramah = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (body) => {
      await updateCeramah(body, body.id);
    },
    onSuccess: () => {
      successNotify("Data berhasil diupdate!");
      queryClient.invalidateQueries({ queryKey: ["ceramah"] });
    },
  });

  return mutation;
};

export default useUpdateCeramah;
