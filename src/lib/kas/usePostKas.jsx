import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postKas } from "../../utils/client";
import { successNotify } from "../../utils/helper";

const usePostKas = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (body) => {
      await postKas(body);
    },
    onSuccess: () => {
      successNotify(`Data  berhasil ditambahkan!`);
      queryClient.invalidateQueries({ queryKey: ["kas"] });
    },
  });

  return mutation;
};

export default usePostKas;
