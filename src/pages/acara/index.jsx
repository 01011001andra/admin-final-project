import React from "react";
import { Error, Loading } from "../../components";
import { Layout, TableSection } from "../../layouts";
import { useGetUndangan } from "../../lib";
import Table from "./components/Table";

const Acara = () => {
  const { data, isLoading, error, isError } = useGetUndangan();


  return (
    <Layout title="Acara">
        
      {isLoading ? (
        <Loading loadingName="Data Tabel" />
      ) : (
        <Table getData={data} error={error} isError={isError} />
      )}
    </Layout>
  );
};

export default Acara;
