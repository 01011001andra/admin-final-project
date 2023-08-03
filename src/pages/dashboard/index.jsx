import React from "react";
import { Layout } from "../../layouts";
import { useGetKas } from "../../lib/kas";
import { TabelKas } from "../keuangan/components";
import { Card } from "./components";
import { Error, Loading } from "../../components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { successNotify } from "../../utils/helper";

const Dashboard = () => {
  const { accessToken } = useSelector((state) => state);

  const navigate = useNavigate();
  const {
    data: kasData,
    isError: kasIsErr,
    error: kasErr,
    isLoading: kasIsLoad,
  } = useGetKas();

  React.useEffect(() => {
    if (accessToken === null) {
      navigate("/login");
      successNotify("Logout berhasil");
    }
  }, [accessToken]);

  return (
    <Layout title="Dashboard">
      <div className="grid grid-cols-1 gap-3 lg:gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <Card title="acara" link="/acara" />
        <Card title="ceramah" link="/ceramah" />
        <Card title="keuangan & e-infak" link="/keuangan" />
      </div>
      {kasIsErr && <Error message={kasErr} />}
      {kasIsLoad ? (
        <Loading loadingName="Tabel data" />
      ) : (
        <TabelKas getData={kasData} error={kasErr} isError={kasIsErr} />
      )}
    </Layout>
  );
};

export default Dashboard;
