import { useState } from "react";
import { Link } from "react-router-dom";
import { formatTanggal } from "../../../utils/helper";

const TabelDokumentasi = (props) => {
  const { getData = [], isError, error, deleteMut, updateMut } = props;

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  function handleDelete(id) {
    let validate = window.confirm("are you sure?");
    if (validate) {
      return deleteMut.mutate(id);
    }
  }

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };
  const filteredData = getData?.data.filter((item) =>
    item.jenis_acara.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // Reverse the filteredData array to display from the end
  const reversedData = filteredData.slice().reverse();
  const totalPages = Math.ceil(reversedData.length / itemsPerPage);
  const currentData = reversedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Menghitung nomor awal pada setiap halaman
  const calculateStartNumber = () => {
    return (currentPage - 1) * itemsPerPage + 1;
  };
  return (
    <>
      <div className="flex flex-col justify-between gap-2 lg:flex-row lg:gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-[18px] font-semibold">Dokumentasi Acara</h1>
          <span>Ini adalah Dokumentasi acara</span>
        </div>
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
          <input
            type="text"
            placeholder="Cari Jenis Acara"
            className="w-full input input-bordered lg:max-w-xs"
            value={searchQuery}
            onChange={handleSearch}
          />
          <Link
            className="btn bg-highlight text-stroke"
            to="/tambahdokumentasi"
          >
            Tambah Data
          </Link>
        </div>
      </div>
      <table class="min-w-full border-collapse block md:table">
        <thead class="block md:table-header-group">
          <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              NO
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              GAMBAR
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
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              DESKRIPSI
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              AKSI
            </th>
          </tr>
        </thead>
        <tbody className="flex-col-reverse block md:table-row-group">
          {currentData.map((item, index) => {
            // Menghitung nomor asli berdasarkan halaman dan indeks data pada halaman tersebut
            const actualIndex = calculateStartNumber() + index;

            return (
              <tr
                key={item.id}
                className="block bg-white border border-grey-500 md:border-none md:table-row"
              >
                <td className="hidden p-2 text-left md:border md:border-grey-500 md:table-cell">
                  <span className="inline-block w-1/3 font-bold md:hidden">
                    NO
                  </span>
                  {actualIndex}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left lg:block md:table-cell flex">
                  <span class=" flex items-center w-1/3 md:hidden font-bold ">
                    GAMBAR
                  </span>
                  <img
                    src={item.gambar}
                    alt={item.jenis_acara}
                    className="w-40 h-20 lg:mx-auto"
                  />
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    TANGGAL
                  </span>
                  {formatTanggal(item.tanggal)}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    WAKTU
                  </span>
                  {item.waktu}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    TEMPAT
                  </span>
                  {item.tempat}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    JENIS ACARA
                  </span>
                  {item.jenis_acara}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    DESKRIPSI
                  </span>
                  {item.deskripsi}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left  md:table-cell flex">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    AKSI
                  </span>
                  <div className="flex gap-2">
                    <a
                      href="#my_modal_8"
                      className="text-white btn btn-success hover:bg-success/70"
                    >
                      Edit
                    </a>
                    <button
                      className="text-white btn btn-error hover:bg-error/70"
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      DELETE
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-start w-full gap-4">
        <div className="grid grid-cols-2 join ">
          <button
            className="join-item btn btn-outline hover:bg-stroke"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous page
          </button>
          <button
            className="join-item btn btn-outline hover:bg-stroke"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next page
          </button>
        </div>
      </div>
    </>
  );
};

export default TabelDokumentasi;
