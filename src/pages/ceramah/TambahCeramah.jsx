import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { usePostCeramah } from "../../lib/ceramah";
import { formatTanggalToUnix } from "../../utils/helper";

const TambahCeramah = () => {
  const postMut = usePostCeramah();
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
      penceramah: data.penceramah,
      embed: data.embed,
      judul: data.judul,
    };
    postMut.mutate(body);
    navigate("/ceramah");
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
          <label htmlFor="embed">Embed Link YT</label>
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
              <p className="text-red-600">Embed Youtube tidak boleh kosong</p>
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="judul">Judul</label>
          <input
            type="text"
            id="judul"
            placeholder="Type here"
            className="w-full input input-bordered "
            {...register("judul", { required: true })}
          />
          <ErrorMessage
            errors={errors}
            name="judul"
            render={({ message }) => (
              <p className="text-red-600">Judul tidak boleh kosong</p>
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
            to="/ceramah"
            className="btn btn-error text-main hover:bg-error/70"
          >
            KEMBALI
          </Link>
        </div>
      </form>
    </div>
  );
};

export default TambahCeramah;
