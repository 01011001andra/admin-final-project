import React from "react";

const KasTabel = () => {
  return (
    <div>
      <table class="min-w-full border-collapse block md:table">
        <thead class="block md:table-header-group">
          <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              NO
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              TANGGAL
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              WAKTU
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              TEMPAT
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              JENIS ACARA
            </th>
          </tr>
        </thead>
        <tbody class="block md:table-row-group">
          <tr class="bg-white border border-grey-500 md:border-none block md:table-row">
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold uppercase">
                Tanggal
              </span>
              asd
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold uppercase">
                KETERANGAN
              </span>
              afs
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold uppercase">
                MASUK
              </span>
              asd
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold uppercase">
                KELUAR
              </span>
              asd
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold uppercase">
                SALDO
              </span>
              asd
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default KasTabel;
