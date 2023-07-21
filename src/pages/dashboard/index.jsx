import React from "react";
import { Layout, TableSection } from "../../layouts";
import { Card, KasTabel } from "./components";

const Dashboard = () => {
  return (
    <Layout title="Dashboard">
      <div className="grid grid-cols-1 gap-3 lg:gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <Card title="acara" link="/acara" />
        <Card title="ceramah" link="/ceramah" />
        <Card title="keuangan & e-infak" link="/keuangan" />
      </div>
      <div className="flex flex-col w-full gap-5">
        <TableSection
          title="Laporan Keuangan Masjid Al-Ihsan"
          description="Uang digunakan untuk keperluan masjid Al-Ihsan"
        />
        <KasTabel />
        <div className="flex justify-start w-full gap-4">
          <div className="grid grid-cols-2 join ">
            <button className="join-item btn btn-outline hover:bg-stroke">
              Previous page
            </button>
            <button className="join-item btn btn-outline hover:bg-stroke">
              Next page
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
