import axios from "axios";

export const getUndangan = () => {
  return axios.get(import.meta.env.VITE_UNDANGAN_API);
};
