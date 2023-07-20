import React from "react";
import { Loading } from "../../components";
import { Layout, TableSection } from "../../layouts";
import { useGetUndangan } from "../../lib";
import Table from "./components/Table";

const Acara = () => {
  const { data, isLoading } = useGetUndangan();

  return (
    <Layout title="Acara">
      <TableSection title="Undangan">
        <div className="lg:flex-row flex flex-col gap-2 lg:gap-4 ">
          <input
            type="text"
            placeholder="Cari disini"
            className="input input-bordered w-full  lg:max-w-xs"
          />
          <button className="btn bg-highlight ">Tambah Data</button>
        </div>
      </TableSection>
      {isLoading ? (
        <Loading loadingName="Data Tabel" />
      ) : (
        <Table getData={data} />
      )}
    </Layout>
  );
};

export default Acara;
