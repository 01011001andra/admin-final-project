import moment from "moment";
import "moment/locale/id";
import { toast } from "react-toastify";
import axios from "axios";
import { faker } from "@faker-js/faker";

// undangan
export const undanganClient = axios.create({
  baseURL: import.meta.env.VITE_UNDANGAN_API,
});
// ceramah
export const ceramahClient = axios.create({
  baseURL: import.meta.env.VITE_CERAMAH_API,
});
// keuangan
export const keuanganClient = axios.create({
  baseURL: import.meta.env.VITE_LAYANAN_API,
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

export const errorNotify = (deskripsi, id) =>
  toast.error(deskripsi, {
    toastId: id,
  });

export const randomImage = () => {
  return faker.image.city();
};
