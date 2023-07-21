import React from "react";
import { Loading } from "../../components";
import { Layout } from "../../layouts";
import {
  useDeleteCeramah,
  useGetCeramah,
  useUpdateCeramah,
} from "../../lib/ceramah";
import { TabelCeramah } from "./components";

const Ceramah = () => {
  const {
    data: ceramahData,
    isLoading: ceramahIsLoad,
    error: ceramahErr,
    isError: ceramahIsErr,
  } = useGetCeramah();
  const deleteCeramahMut = useDeleteCeramah();
  const updateCeramahMut = useUpdateCeramah();

  return (
    <Layout title="Ceramah">
      {ceramahIsLoad ? (
        <Loading loadingName="Tabel Ceramah" />
      ) : (
        <TabelCeramah
          getData={ceramahData}
          error={ceramahErr}
          isError={ceramahIsErr}
          updateMut={updateCeramahMut}
          deleteMut={deleteCeramahMut}
        />
      )}
    </Layout>
  );
};

export default Ceramah;
