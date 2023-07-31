import { ErrorMessage } from "@hookform/error-message";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  formatTanggal,
  formatTanggalToUnix,
  formatUnixToTanggal,
} from "../../../utils/helper";

const TabelCeramah = (props) => {
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
    setValue("penceramah", body.penceramah);
    setValue("embed", body.embed);
    setValue("judul_ceramah", body.judul_ceramah);
    setId(body.id);
  }

  function handleUpdate() {
    const body = {
      id: id,
      tanggal: formatTanggalToUnix(watch("tanggal")),
      penceramah: watch("penceramah"),
      embed: watch("embed"),
      judul_ceramah: watch("judul_ceramah"),
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
    const body = [
      watch("tanggal"),
      watch("penceramah"),
      watch("embed"),
      watch("judul_ceramah"),
    ];

    // Check if any value in the 'body' array is empty or null
    if (body.some((value) => value === "" || value === null)) {
      return null;
    }

    // If no empty values, continue with the logic
    cancelBtnRef.current.click();
  }
  const filteredData = getData?.data?.filter((item) =>
    item?.penceramah?.toLowerCase().includes(searchQuery?.toLowerCase())
  );
  // Reverse the filteredData array to display from the end
  const reversedData = filteredData?.slice().reverse();
  const totalPages = Math.ceil(reversedData?.length / itemsPerPage);
  const currentData = reversedData?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
              <label htmlFor="penceramah">Penceramah</label>
              <input
                type="text"
                id="penceramah"
                placeholder="Type here"
                className="w-full input input-bordered "
                {...register("penceramah", { required: true })}
              />
              <ErrorMessage
                errors={errors}
                name="penceramah"
                render={({ message }) => (
                  <p className="text-red-600">penceramah tidak boleh kosong</p>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="embed">Embed Youtube</label>
              <input
                type="text"
                id="embed"
                placeholder="Type here"
                className="w-full input input-bordered "
                {...register("embed", { required: true })}
              />
              <ErrorMessage
                errors={errors}
                name="embed"
                render={({ message }) => (
                  <p className="text-red-600">embed tidak boleh kosong</p>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="judul_ceramah">judul Ceramah</label>
              <input
                type="text"
                id="judul_ceramah"
                placeholder="Type here"
                className="w-full input input-bordered "
                {...register("judul_ceramah", { required: true })}
              />
              <ErrorMessage
                errors={errors}
                name="judul_ceramah"
                render={({ message }) => (
                  <p className="text-red-600">
                    Judul Ceramah tidak boleh kosong
                  </p>
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
          <h1 className="text-[18px] font-semibold">Ceramah Masjid Al-Ihsan</h1>
          <span>Ini adalah Ceramah Masjid Al-Ihsan</span>
        </div>
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
          <input
            type="text"
            placeholder="Cari Penceramah"
            className="w-full input input-bordered lg:max-w-xs"
            value={searchQuery}
            onChange={handleSearch}
          />
          <Link className="btn bg-highlight text-stroke" to="/tambahceramah">
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
              PENCERAMAH
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              EMBED YOUTUBE
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              JUDUL
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
                    PENCERAMAH
                  </span>
                  {item.penceramah}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    EMBED YOUTUBE
                  </span>
                  {item.embed}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    JUDUL
                  </span>
                  {item.judul_ceramah}
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

export default TabelCeramah;
