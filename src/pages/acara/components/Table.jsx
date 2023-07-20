import React from "react";

const Table = ({ getData }) => {
  console.log(getData);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>NO</th>
            <th>TANGGAL</th>
            <th>WAKTU</th>
            <th>TEMPAT</th>
            <th>JENIS ACARA</th>
            <th>UNDANGAN PDF</th>
            <th>AKSI</th>
          </tr>
        </thead>
        <tbody>
          {getData.data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th>{index + 1}</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td className="flex gap-3">
                  <button className="btn btn-success hover:bg-success/70">
                    EDIT
                  </button>
                  <button className="btn btn-error text-white hover:bg-error/70">
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
