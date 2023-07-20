import moment from "moment";
import "moment/locale/id";

export const formatTanggal = (tanggal) => {
  return moment.unix(tanggal).format("DD MMM YYYY");
};

export const formatUnix = (tanggal) => {
  return moment.unix(tanggal).format("YYYY-MM-DD");
};
