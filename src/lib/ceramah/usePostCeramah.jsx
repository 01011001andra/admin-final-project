import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postCeramah } from "../../utils/client";
import { successNotify } from "../../utils/helper";

const usePostCeramah = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (body) => {
      await postCeramah(body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ceramah"] });
      successNotify("Data berhasil ditambahkan!");
    },
  });
  return mutation;
};

export default usePostCeramah;
