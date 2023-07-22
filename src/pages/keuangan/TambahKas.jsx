import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { usePostKas } from "../../lib/kas";
import { formatTanggalToUnix } from "../../utils/helper";

const TambahKas = () => {
  const postMut = usePostKas();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const body = {
      tanggal: formatTanggalToUnix(data.tanggal),
      keterangan: data.keterangan,
      masuk: data.masuk,
      keluar: data.keluar,
      saldo: data.saldo,
    };
    postMut.mutate(body);
    navigate("/keuangan");
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
              <p className="text-red-600">Keterangan tidak boleh kosong</p>
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="masuk">masuk</label>
          <input
            type="text"
            id="masuk"
            placeholder="Type here"
            className="w-full input input-bordered "
            {...register("masuk", {
              required: "masuk tidak boleh kosong",
              pattern: {
                value: /^\d+$/,
                message: "Hanya boleh angka.",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="masuk"
            render={({ message }) => (
              <p className="text-red-600" key={message}>
                {message}
              </p>
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
            {...register("keluar", {
              required: "keluar tidak boleh kosong",
              pattern: {
                value: /^\d+$/,
                message: "Hanya boleh angka.",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="keluar"
            render={({ message }) => (
              <p className="text-red-600" key={message}>
                {message}
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
            {...register("saldo", {
              required: "saldo tidak boleh kosong",
              pattern: {
                value: /^\d+$/,
                message: "Hanya boleh angka.",
              },
            })}
          />
          <ErrorMessage
            errors={errors}
            name="saldo"
            render={({ message }) => (
              <p className="text-red-600" key={message}>
                {message}
              </p>
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
            to="/keuangan"
            className="btn btn-error text-main hover:bg-error/70"
          >
            KEMBALI
          </Link>
        </div>
      </form>
    </div>
  );
};

export default TambahKas;
