import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateInfak } from "../../utils/client";
import { successNotify } from "../../utils/helper";

const useUpdateInfak = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (body) => {
      await updateInfak(body, body.id);
    },
    onSuccess: () => {
      successNotify("Data berhasil diupdate!");
      queryClient.invalidateQueries({ queryKey: ["infak"] });
    },
  });

  return mutation;
};

export default useUpdateInfak;
