import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { postUndangan } from "../../utils/client";
import { successNotify } from "../../utils/helper";

const usePostUndangan = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (body) => {
      await postUndangan(body);
    },
    onSuccess: () => {
      successNotify(`Data  berhasil ditambahkan!`);
      queryClient.invalidateQueries({ queryKey: ["undangan"] });
    },
  });

  return mutation;
};

export default usePostUndangan;
