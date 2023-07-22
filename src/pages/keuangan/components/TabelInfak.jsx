import { ErrorMessage } from "@hookform/error-message";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const TabelInfak = (props) => {
  const { getData = [], deleteMut, updateMut, isError, error } = props;
  console.log(getData);
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
    setValue("nama_infak", body.nama_infak);
    setValue("no_rek", body.no_rek);
    setValue("penerima", body.penerima);
    setValue("deskripsi", body.deskripsi);
    setId(body.id);
  }

  function handleUpdate() {
    const body = {
      id: id,
      nama_infak: watch("nama_infak"),
      no_rek: watch("no_rek"),
      penerima: watch("penerima"),
      deskripsi: watch("deskripsi"),
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
    item?.penerima?.toLowerCase().includes(searchQuery?.toLowerCase())
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
        id="my_modal_12"
      >
        <div className="flex flex-col w-full gap-4 modal-box ">
          <h3 className="text-lg font-bold">UPDATE DOKUMENTASI</h3>
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(handleUpdate)}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="nama_infak">Nama Infak</label>
              <input
                type="text"
                id="nama_infak"
                placeholder="Type here"
                className="w-full input input-bordered "
                {...register("nama_infak", { required: true })}
              />
              <ErrorMessage
                errors={errors}
                name="nama_infak"
                render={({ message }) => (
                  <p className="text-red-600">Nama Infak tidak boleh kosong</p>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="no_rek">No rek.</label>
              <input
                type="text"
                id="no_rek"
                placeholder="Type here"
                className="w-full input input-bordered "
                {...register("no_rek", {
                  required: "no rek tidak boleh kosong",
                  pattern: {
                    value: /^\d+$/,
                    message: "Hanya boleh angka.",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="no_rek"
                render={({ message }) => (
                  <p className="text-red-600" key={message}>
                    {message}
                  </p>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="penerima">penerima</label>
              <input
                type="text"
                id="penerima"
                placeholder="Type here"
                className="w-full input input-bordered "
                {...register("penerima", { required: true })}
              />
              <ErrorMessage
                errors={errors}
                name="penerima"
                render={({ message }) => (
                  <p className="text-red-600">penerima tidak boleh kosong</p>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="deskripsi">deskripsi</label>
              <input
                type="text"
                id="deskripsi"
                placeholder="Type here"
                className="w-full input input-bordered "
                {...register("deskripsi", { required: true })}
              />
              <ErrorMessage
                errors={errors}
                name="deskripsi"
                render={({ message }) => (
                  <p className="text-red-600">deskripsi tidak boleh kosong</p>
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
            placeholder="Cari Penerima"
            className="w-full input input-bordered lg:max-w-xs"
            value={searchQuery}
            onChange={handleSearch}
          />
          <Link className="btn bg-highlight text-stroke" to="/tambahinfak">
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
              NAMA INFAK
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              NO REK
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              PENERIMA
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
                    NAMA INFAK
                  </span>
                  {item.nama_infak}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    NO REK
                  </span>
                  {item.no_rek}
                </td>
                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span class="inline-block w-1/3 md:hidden font-bold">
                    PENERIMA
                  </span>
                  {item.penerima}
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
                      href="#my_modal_12"
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

export default TabelInfak;
