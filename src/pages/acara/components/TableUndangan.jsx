import { ErrorMessage } from "@hookform/error-message";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Error } from "../../../components";
import {
  formatTanggal,
  formatTanggalToUnix,
  formatUnixToTanggal,
} from "../../../utils/helper";

const Table = (props) => {
  const { getData = [], isError, error, deleteMut, updateMut } = props;
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const cancelBtnRef = useRef(null);
  let dataUndangan =
    getData?.data && getData.data.length > 0 ? getData.data[0] : null;

  function handleUpdateData() {
    setValue("tanggal", formatUnixToTanggal(dataUndangan?.tanggal));
    setValue("waktu", dataUndangan?.waktu);
    setValue("tempat", dataUndangan?.tempat);
    setValue("jenis_acara", dataUndangan?.jenis_acara);
    setValue("undangan_pdf", dataUndangan.undangan_pdf);
  }

  function handleCancelClick() {
    cancelBtnRef.current.click();
  }

  function handleDelete(id) {
    deleteMut.mutate(id);
  }

  function handleUpdate() {
    let body = {
      id: dataUndangan?.id,
      tanggal: formatTanggalToUnix(watch("tanggal")),
      waktu: watch("waktu"),
      tempat: watch("tempat"),
      jenis_acara: watch("jenis_acara"),
      undangan_pdf: watch("undangan_pdf"),
    };
    updateMut.mutate(body);
  }

  if (isError) {
    return <Error message={error.message} />;
  }
  return (
    <>
      {/* FORM UPDATE */}
      <div
        className="flex items-center justify-center w-full px-2 modal lg:px-0"
        id="my_modal_8"
      >
        <div className="flex flex-col w-full gap-4 modal-box ">
          <h3 className="text-lg font-bold">UPDATE UNDANGAN</h3>
          <form
            onSubmit={handleSubmit(handleUpdate)}
            className="flex flex-col gap-4 "
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
                  <p className="text-red-600">tanggal boleh kosong</p>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="waktu">Waktu</label>
              <input
                type="text"
                id="waktu"
                placeholder="Type here"
                className="w-full input input-bordered "
                {...register("waktu", { required: true })}
              />
              <ErrorMessage
                errors={errors}
                name="waktu"
                render={({ message }) => (
                  <p className="text-red-600">Waktu boleh kosong</p>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="tempat">Tempat</label>
              <input
                type="text"
                id="tempat"
                placeholder="Type here"
                className="w-full input input-bordered "
                {...register("tempat", { required: true })}
              />
              <ErrorMessage
                errors={errors}
                name="tempat"
                render={({ message }) => (
                  <p className="text-red-600">tempat boleh kosong</p>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="jenis_acara">Jenis Acara</label>
              <input
                type="text"
                id="jenis_acara"
                placeholder="Type here"
                className="w-full input input-bordered "
                {...register("jenis_acara", { required: true })}
              />
              <ErrorMessage
                errors={errors}
                name="jenis_acara"
                render={({ message }) => (
                  <p className="text-red-600">Jenis Acara tidak boleh kosong</p>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="undangan_pdf">Undangan PDF</label>
              <input
                type="text"
                id="undangan_pdf"
                placeholder="Type here"
                className="w-full input input-bordered "
                {...register("undangan_pdf", {
                  required: true,
                })}
              />
              <ErrorMessage
                errors={errors}
                name="undangan_pdf"
                render={({ message }) => (
                  <p className="text-red-600">
                    Undangan PDF tidak boleh kosong
                  </p>
                )}
              />
            </div>

            <div className="modal-action">
              <button
                type="submit"
                className="btn btn-success text-main hover:bg-success/70"
                onClick={handleCancelClick}
              >
                UPDATE
              </button>
              <a
                href="#"
                className="btn btn-error text-main hover:bg-error/70"
                ref={cancelBtnRef}
              >
                CANCEL
              </a>
            </div>
          </form>
        </div>
      </div>
      {/* TABEL UNDANGAN */}
      <div className="flex flex-col justify-between w-full gap-4 lg:flex-row">
        <div className="flex flex-col gap-2">
          <h1 className="text-[18px] font-semibold">Undangan</h1>
          <span>Ini adalah undangan</span>
        </div>
        {getData.data.length == 0 && (
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-4 ">
            <Link className="btn bg-highlight text-stroke" to="/tambahundangan">
              Tambah Data
            </Link>
          </div>
        )}
      </div>
      <table class="min-w-full border-collapse block md:table">
        <thead class="block md:table-header-group">
          <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
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
              UNDANGAN PDF
            </th>
            <th class="bg-stroke p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
              AKSI
            </th>
          </tr>
        </thead>
        <tbody class="block md:table-row-group">
          <tr class="bg-white border border-grey-500 md:border-none block md:table-row">
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">
                Tanggal
              </span>
              {!getData.data.length == 0 &&
                formatTanggal(dataUndangan?.tanggal)}
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">Waktu</span>
              {dataUndangan?.waktu}
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">Tempat</span>
              {dataUndangan?.tempat}
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">
                Jenis Acara
              </span>
              {dataUndangan?.jenis_acara}
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              <span class="inline-block w-1/3 md:hidden font-bold">
                Undangan PDF
              </span>
              {dataUndangan?.undangan_pdf}
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left  md:table-cell flex">
              <span class="inline-block w-1/3 md:hidden font-bold">AKSI</span>
              <div className="flex gap-2">
                {!getData.data.length == 0 && (
                  <>
                    <a
                      href="#my_modal_8"
                      className="text-white btn btn-success hover:bg-success/70"
                      onClick={handleUpdateData}
                    >
                      Edit
                    </a>
                    <button
                      className="text-white btn btn-error hover:bg-error/70"
                      onClick={() => {
                        let validate = window.confirm("are you sure?");
                        if (validate) {
                          handleDelete(dataUndangan?.id);
                          return;
                        }
                      }}
                    >
                      DELETE
                    </button>
                  </>
                )}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
