import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import usePostUndangan from "../../lib/undangan/usePostUndangan";
import { formatTanggalToUnix } from "../../utils/helper";

const TambahUndangan = () => {
  const postMut = usePostUndangan();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const body = {
      tanggal: formatTanggalToUnix(data.tanggal),
      waktu: data.waktu,
      tempat: data.tempat,
      jenis_acara: data.jenis_acara,
      undangan_pdf: data.undangan_pdf,
    };
    postMut.mutate(body);
    navigate("/acara");
  };
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold text-center lg:text-start">
        Tambah Data
      </h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
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
              <p className="text-red-600">Undangan PDF tidak boleh kosong</p>
            )}
          />
        </div>
        <div className="modal-action">
          <button
            type="submit"
            className="btn btn-success text-main hover:bg-success/70"
          >
            SUBMIT
          </button>
          <Link
            to="/acara"
            className="btn btn-error text-main hover:bg-error/70"
          >
            KEMBALI
          </Link>
        </div>
      </form>
    </div>
  );
};

export default TambahUndangan;
