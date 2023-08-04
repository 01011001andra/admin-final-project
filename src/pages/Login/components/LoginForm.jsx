import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useForm } from "react-hook-form";
import { BiHide } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebaseConfig";
import { useDispatch } from "react-redux";
import { login } from "../../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { errorNotify, successNotify } from "../../../utils/helper";

const LoginForm = () => {
  const [hidePassword, setHidePassword] = React.useState(true);
  const [loadingButton, setLoadingButton] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogin(data) {
    setLoadingButton(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user.accessToken;
        dispatch(login(user));
        successNotify("Login Berhasil!");
        navigate("/");
        setLoadingButton(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        errorNotify(errorCode);
        setLoadingButton(false);
      });
  }
  return (
    <form onSubmit={handleSubmit(handleLogin)} autoComplete="off">
      <div className="flex flex-col gap-2 form-control text-main">
        <div className="flex flex-col">
          <label className="label" htmlFor="email">
            <span className="label-text text-main">Email</span>
          </label>
          <input
            type="text"
            id="email"
            placeholder="Type here"
            className="w-full outline-none input input-bordered text-stroke"
            {...register("email", {
              required: "Email tidak boleh kosong",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Masukkan email dengan benar.",
              },
            })}
          />
        </div>
        <div className="hidden">
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => errorNotify(message, message)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 form-control">
        <div className="flex flex-col">
          <label className="label" htmlFor="password">
            <span className="label-text text-main">Password</span>
          </label>
          <div className="flex items-center w-full input input-bordered">
            <input
              type={hidePassword ? "password" : "text"}
              placeholder="password"
              className="w-full outline-none text-stroke"
              id="password"
              {...register("password", {
                required: "Password tidak boleh kosong",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Minimal delapan karakter, setidaknya satu huruf besar, satu huruf kecil, satu angka dan satu karakter khusus",
                },
              })}
            />
            {hidePassword ? (
              <BiHide
                size={35}
                onClick={() => {
                  setHidePassword((prev) => !prev);
                }}
                color="black"
              />
            ) : (
              <AiOutlineEye
                size={35}
                onClick={() => {
                  setHidePassword((prev) => !prev);
                }}
                color="black"
              />
            )}
          </div>
        </div>
        <div className="hidden">
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => errorNotify(message, message)}
          />
        </div>
      </div>
      <div className="mt-6 form-control">
        <button className="btn btn-primary" type="submit">
          {loadingButton ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            "Login"
          )}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
