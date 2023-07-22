import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { usePostInfak } from "../../lib/infak";

const TambahInfak = () => {
  const postMut = usePostInfak();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const body = {
      nama_infak: data.nama_infak,
      no_rek: data.no_rek,
      penerima: data.penerima,
      deskripsi: data.deskripsi,
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
              <p className="text-red-600">nama_infak tidak boleh kosong</p>
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="no_rek">No Rek</label>
          <input
            type="text"
            id="no_rek"
            placeholder="Type here"
            className="w-full input input-bordered "
            {...register("no_rek", {
              required: "No Rek tidak boleh kosong",
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

export default TambahInfak;
