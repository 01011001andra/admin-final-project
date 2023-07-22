import React from "react";
import { Layout } from "../../layouts";
import { useDeleteInfak, useGetInfak, useUpdateInfak } from "../../lib/infak";
import { useDeleteKas, useGetKas, useUpdateKas } from "../../lib/kas";
import { TabelInfak, TabelKas } from "./components";

const Keuangan = () => {
  const {
    data: infakData,
    isError: infakIsErr,
    error: infakErr,
    isLoading: infakIsLoad,
  } = useGetInfak();
  // console.log(infakData, infakIsErr, infakErr, infakIsLoad);
  const updateInfakMut = useUpdateInfak();
  const deleteInfakMut = useDeleteInfak();
  const {
    data: kasData,
    isError: kasIsErr,
    error: kasErr,
    isLoading: kasIsLoad,
  } = useGetKas();
  // console.log(kasData, kasIsErr, kasErr, kasIsLoad);
  const updateKasMut = useUpdateKas();
  const deleteKasMut = useDeleteKas();
  return (
    <Layout title="Keuangan & Infak">
      <TabelKas
        getData={kasData}
        error={kasErr}
        isError={kasIsErr}
        updateMut={updateKasMut}
        deleteMut={deleteKasMut}
      />
      <TabelInfak
        getData={infakData}
        error={infakErr}
        isError={infakIsErr}
        updateMut={updateInfakMut}
        deleteMut={deleteInfakMut}
      />
    </Layout>
  );
};

export default Keuangan;
