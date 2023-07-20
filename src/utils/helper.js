import moment from "moment";
import "moment/locale/id";
import { toast } from "react-toastify";
import axios from "axios";

export const client = axios.create({
  baseURL: import.meta.env.VITE_UNDANGAN_API,
});

export const formatTanggal = (tanggal) => {
  return moment.unix(tanggal).format("DD MMM YYYY");
};

export const formatUnixToTanggal = (tanggal) => {
  return moment.unix(tanggal).format("YYYY-MM-DD");
};

export const formatTanggalToUnix = (tanggal) => {
  return moment(tanggal).unix();
};

export const successNotify = (deskripsi, id) =>
  toast.success(deskripsi, {
    toastId: id,
  });
