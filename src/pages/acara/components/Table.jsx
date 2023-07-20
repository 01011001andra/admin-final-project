import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Error } from "../../../components";
import { formatTanggal, formatUnix } from "../../../utils/helper";

const Table = ({ getData = [], isError, error }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  let dataUndangan = getData.data[0];
  function handleUpdate() {
    setValue("tanggal", formatUnix(dataUndangan?.tanggal));
    setValue("waktu", dataUndangan?.waktu);
    setValue("tempat", dataUndangan?.tempat);
    setValue("jenis_acara", dataUndangan?.jenis_acara);
    setValue("undangan_pdf", dataUndangan.undangan_pdf);
  }

  if (isError) {
    return <Error message={error.message} />;
  }
  return (
    <>
      <div
        className="modal lg:px-0 flex items-center w-full justify-center px-2"
        id="my_modal_8"
      >
        <div className="modal-box w-full flex flex-col gap-4 ">
          <h3 className="font-bold text-lg">UPDATE UNDANGAN</h3>
          <div className="flex flex-col gap-2">
            <label htmlFor="tanggal">Tanggal</label>
            <input
              type="date"
              id="tanggal"
              placeholder="Type here"
              className="input input-bordered w-full "
              {...register("tanggal")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="waktu">Waktu</label>
            <input
              type="text"
              id="waktu"
              placeholder="Type here"
              className="input input-bordered w-full "
              {...register("waktu")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="tempat">Tempat</label>
            <input
              type="text"
              id="tempat"
              placeholder="Type here"
              className="input input-bordered w-full "
              {...register("tempat")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="jenis_acara">Jenis Acara</label>
            <input
              type="text"
              id="jenis_acara"
              placeholder="Type here"
              className="input input-bordered w-full "
              {...register("jenis_acara")}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="undangan_pdf">Undangan PDF</label>
            <input
              type="text"
              id="undangan_pdf"
              placeholder="Type here"
              className="input input-bordered w-full "
              {...register("undangan_pdf")}
            />
          </div>
          <div className="modal-action">
            <a
              href="#"
              className="btn btn-success text-main hover:bg-success/70"
            >
              UPDATE
            </a>
            <a href="#" className="btn btn-error text-main hover:bg-error/70">
              CANCEL
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex-row flex flex-col w-full justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-[18px] font-semibold">Undangan</h1>
          <span>Ini adalah undangan</span>
        </div>
        {getData.data.length == 0 && (
          <div className="lg:flex-row flex flex-col gap-2 lg:gap-4 ">
            <button className="btn bg-highlight ">Tambah Data</button>
          </div>
        )}
      </div>
      <div className="w-full h-full justify-between flex flex-col">
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
              <tr>
                <th>{dataUndangan?.id}</th>
                <td>
                  {!getData.data.length == 0 &&
                    formatTanggal(dataUndangan?.tanggal)}
                </td>
                <td>{dataUndangan?.waktu}</td>
                <td>{dataUndangan?.tempat}</td>
                <td>{dataUndangan?.jenis_acara}</td>
                <td>{dataUndangan?.undangan_pdf}</td>
                <td className="flex gap-3">
                  {!getData.data.length == 0 && (
                    <>
                      <a
                        href="#my_modal_8"
                        className="btn btn-success hover:bg-success/70 text-white"
                        onClick={handleUpdate}
                      >
                        Edit
                      </a>
                      <button className="btn btn-error text-white hover:bg-error/70">
                        DELETE
                      </button>
                    </>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
