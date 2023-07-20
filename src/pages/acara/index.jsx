import React from "react";
import { Loading } from "../../components";
import { Layout } from "../../layouts";
import {
  useDeleteUndangan,
  useGetUndangan,
  useUpdateUndangan,
} from "../../lib";
import TableUndangan from "./components/TableUndangan";

const Acara = () => {
  const { data, isLoading, error, isError } = useGetUndangan();
  const deleteMut = useDeleteUndangan();
  const updateMut = useUpdateUndangan();

  return (
    <Layout title="Acara">
      {isLoading ? (
        <Loading loadingName="Data Tabel" />
      ) : (
        <TableUndangan
          getData={data}
          error={error}
          isError={isError}
          deleteMut={deleteMut}
          updateMut={updateMut}
        />
      )}
    </Layout>
  );
};

export default Acara;
