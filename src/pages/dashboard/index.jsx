import React from "react";
import { Layout, TableSection } from "../../layouts";
import { Card } from "./components";

const Dashboard = () => {
  return (
    <Layout title="Dashboard">
      <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <Card title="acara" link="/acara" />
        <Card title="ceramah" link="/ceramah" />
        <Card title="keuangan & e-infak" link="/keuangan" />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <TableSection
          title="Laporan Keuangan Masjid Al-Ihsan"
          description="Uang digunakan untuk keperluan masjid Al-Ihsan"
        />
        <div className="flex overflow-x-auto w-full">
          <div className="overflow-x-auto w-full">
            <table className="table ">
              {/* head */}
              <thead>
                <tr>
                  <th>NO</th>
                  <th>TANGGAL</th>
                  <th>KETERANGAN</th>
                  <th>MASUK</th>
                  <th>KELUAR</th>
                  <th>SALDO</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td>Blue</td>
                  <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                  <td>Purple</td>
                  <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                  <td>Red</td>
                  <td>Red</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>4</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                  <td>Red</td>
                  <td>Red</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>5</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                  <td>Red</td>
                  <td>Red</td>
                </tr>
                <tr>
                  <th></th>
                  <td></td>
                  <td></td>
                  <td className="font-bold">JUMLAH SALDO</td>
                  <td colSpan={2} className="font-bold">
                    : Rp. 3.000.000.-
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full flex justify-start gap-4">
          <div className="join grid grid-cols-2 ">
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
