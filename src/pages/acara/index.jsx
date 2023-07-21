import React from "react";
import { Loading } from "../../components";
import { Layout } from "../../layouts";
import {
  useDeleteDokumentas,
  useDeleteUndangan,
  useGetDokumentasi,
  useGetUndangan,
  useUpdateDokumentasi,
  useUpdateUndangan,
} from "../../lib";
import TabelDokumentasi from "./components/TabelDokumentasi";
import TableUndangan from "./components/TableUndangan";

const Acara = () => {
  // UNDANGAN
  const {
    data: undanganData,
    isLoading: undanganIsLoad,
    error: undanganErr,
    isError: undanganIsErr,
  } = useGetUndangan();
  const deleteUndanganMut = useDeleteUndangan();
  const updateUndanganMut = useUpdateUndangan();

  // DOKUMENTASI
  const {
    data: dokumentasiData,
    isLoading: dokumentasiIsLoad,
    isError: dokumentasiIsErr,
    error: dokumentasiErr,
  } = useGetDokumentasi();
  const deleteDokumentasiMut = useDeleteDokumentas();
  const updateDokumentasiMut = useUpdateDokumentasi();
  return (
    <Layout title="Acara">
      {undanganIsLoad ? (
        <Loading loadingName="Loading Tabel Undangan" />
      ) : (
        <TableUndangan
          getData={undanganData}
          error={undanganErr}
          isError={undanganIsErr}
          deleteMut={deleteUndanganMut}
          updateMut={updateUndanganMut}
        />
      )}
      {dokumentasiIsLoad ? (
        <Loading loadingName="Loading Tabel Undangan" />
      ) : (
        <>
          <TabelDokumentasi
            getData={dokumentasiData}
            isError={dokumentasiIsErr}
            error={dokumentasiErr}
            deleteMut={deleteDokumentasiMut}
            updateMut={updateDokumentasiMut}
          />
        </>
      )}
    </Layout>
  );
};

export default Acara;
