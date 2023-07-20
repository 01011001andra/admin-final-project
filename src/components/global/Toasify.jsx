import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Toasify() {
  React.useEffect(() => {
    toast("DATA BERHASIL DIHAPUS");
  }, []);

  return <ToastContainer />;
}
