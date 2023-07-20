import React from "react";
import { Layout } from "../../layouts";

const Keuangan = () => {
  return (
    <Layout title="Keuangan & Infak">
      <div className="lg:flex-row flex flex-col gap-2 lg:gap-4 ">
        <input
          type="text"
          placeholder="Cari disini"
          className="input input-bordered w-full  lg:max-w-xs"
        />
        <button className="btn bg-highlight ">Tambah Data</button>
      </div>
    </Layout>
  );
};

export default Keuangan;
