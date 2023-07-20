import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUndangan } from "../../utils/client";
import { successNotify } from "../../utils/helper";

const useUpdateUndangan = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (body) => {
      return updateUndangan(body, body.id);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["undangan"] });
      return successNotify(
        `Data ${data?.data?.jenis_acara} berhasil diupdate!`,
        data?.data?.id
      );
    },
  });

  return mutation;
};

export default useUpdateUndangan;
