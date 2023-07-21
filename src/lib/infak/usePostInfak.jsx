import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postInfak } from "../../utils/client";
import { successNotify } from "../../utils/helper";

const usePostInfak = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (body) => {
      await postInfak(body);
    },
    onSuccess: () => {
      successNotify(`Data  berhasil ditambahkan!`);
      queryClient.invalidateQueries({ queryKey: ["infak"] });
    },
  });

  return mutation;
};

export default usePostInfak;
