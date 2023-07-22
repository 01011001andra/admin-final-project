import { ErrorMessage } from "@hookform/error-message";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  formatTanggal,
  formatTanggalToUnix,
  formatUnixToTanggal,
} from "../../../utils/helper";

const TabelKas = (props) => {
  const { getData = [], deleteMut, updateMut, isError, error } = props;
  const cancelBtnRef = useRef(null);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [id, setId] = useState(0);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  function handleUpdateData(body) {
    setValue("tanggal", formatUnixToTanggal(body.tanggal));
    setValue("keterangan", body.keterangan);
    setValue("masuk", body.masuk);
    setValue("keluar", body.keluar);
    setValue("saldo", body.saldo);
    setId(body.id);
  }

  function handleUpdate() {
    const body = {
      id: id,
      tanggal: formatTanggalToUnix(watch("tanggal")),
      keterangan: watch("keterangan"),
      masuk: watch("masuk"),
      keluar: watch("keluar"),
      saldo: watch("saldo"),
    };
    updateMut.mutate(body);
  }

  function handleDelete(id) {
    let validate = window.confirm("are you sure?");
    if (validate) {
      return deleteMut.mutate(id);
    }
  }

  function handleCancelClick() {
    cancelBtnRef.current.click();
  }
  const filteredData = getData?.data?.filter((item) =>
    item?.keterangan?.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  // Reverse the filteredData array to display from the end
  const reversedData = filteredData?.slice().reverse();
  const totalPages = Math.ceil(reversedData?.length / itemsPerPage);
  const currentData = reversedData?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  console.log(reversedData);
  // Menghitung nomor awal pada setiap halaman
  const calculateStartNumber = () => {
    return (currentPage - 1) * itemsPerPage + 1;
  };
  if (isError) {
    return <Error message={error.message} />;
  }
  return (
    <>
      {/* FORM UPDATE */}
      <div
        className="flex items-center justify-center w-full px-2 modal lg:px-0"
        id="my_modal_10"
      >
        <div className="flex flex-col w-full gap-4 modal-box ">
          <h3 className="text-lg font-bold">UPDATE DOKUMENTASI</h3>
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(handleUpdate)}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="tanggal">Tanggal</label>
              <input
                type="date"
                id="tanggal"
                placeholder="Type here"
                className="w-full input input-bordered "
                {...register("tanggal", { required: true })}
              />
              <ErrorMessage
                errors={errors}
                name="tanggal"
                render={({ message }) => (
                  <p className="text-red-600">tanggal tidak boleh kosong</p>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="keterangan">Keterangan</label>
              <input
                type="text"
                id="keterangan"
                placeholder="Type here"
                className="w-full input input-bordered "
                {...register("keterangan", { required: true })}
              />
              <ErrorMessage
                errors={errors}
                name="keterangan"
                render={({ message }) => (
                  <p className="text-red-600">keterangan tidak boleh kosong</p>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="masuk">Masuk</label>
              <input
                type="text"
                id="masuk"
                placeholder="Type here"
                className="w-full input input-bordered "
                {...register("masuk", { required: true })}
              />
              <ErrorMessage
                errors={errors}
                name="masuk"
                render={({ message }) => (
                  <p className="text-red-600">masuk tidak boleh kosong</p>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="keluar">Keluar</label>
              <input
                type="text"
                id="keluar"
                placeholder="Type here"
                className="w-full input input-bordered "
                {...register("keluar", { required: true })}
              />
              <ErrorMessage
                errors={errors}
                name="keluar"
                render={({ message }) => (
                  <p className="text-red-600">
                    Judul Ceramah tidak boleh kosong
                  </p>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="saldo">Saldo</label>
              <input
                type="text"
                id="saldo"
                placeholder="Type here"
                className="w-full input input-bordered "
                {...register("saldo", { required: true })}
              />
              <ErrorMessage
                errors={errors}
                name="saldo"
                render={({ message }) => (
                  <p className="text-red-600">Saldo tidak boleh kosong</p>
                )}
              />
            </div>

            <div className="modal-action">
              <button
                type="submit"
                className="btn btn-success text-main hover:bg-success/70"
                onClick={() => {
                  handleCancelClick();
                }}
              >
                UPDATE
              </button>
              <a
                href="#"
                className="btn btn-error text-main hover:bg-error/70"
                ref={cancelBtnRef}
              >
                KEMBALI
              </a>
            </div>
          </form>
        </div>
      </div>
      {/* TABEL DOKUMENTASI */}
      <div className="flex flex-col justify-between gap-2 lg:flex-row lg:gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-[18px] font-semibold">
            Laporan Keuangan Masjid Al-Ihsan
          </h1>
          <span>Ini adalah Laporan Keuangan Masjid Al-Ihsan</span>
        </div>
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
          <input
            type="text"
            placeholder="Cari keterangan"
            className="w-full input input-bordered lg:max-w-xs"
            value={searchQuery}
            onChange={handleSearch}
          />
          <Link className="btn bg-highlight text-stroke" to="/tambahkas">
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
              TANGGAL
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              KETERANGAN
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              MASUK
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              KELUAR
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              SALDO
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              AKSI
            </th>
          </tr>
        </thead>
        <tbody className="flex-col-reverse block md:table-row-group">
          {currentData?.map((item, index) => {
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

                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    TANGGAL
                  </span>
                  {formatTanggal(item?.tanggal)}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    KETERANGAN
                  </span>
                  {item.keterangan}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    MASUK
                  </span>
                  {item.masuk}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    KELUAR
                  </span>
                  {item.keluar}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    SALDO
                  </span>
                  {item.saldo}
                </td>

                <td class="p-2 md:border md:border-grey-500 text-left  md:table-cell flex">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    AKSI
                  </span>
                  <div className="flex gap-2">
                    <a
                      href="#my_modal_10"
                      className="text-white btn btn-success hover:bg-success/70"
                      onClick={() => {
                        handleUpdateData(item);
                      }}
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

export default TabelKas;
