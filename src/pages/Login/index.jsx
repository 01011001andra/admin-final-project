import React from "react";
import { FaMosque } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "./components";

const Login = () => {
  const { isAuthenticated } = useSelector((state) => state);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (isAuthenticated) {
      return navigate("/");
    }
  }, [isAuthenticated]);
  return (
    <div
      class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
      }}
    >
      <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8 ">
        <div class="text-white w-full ">
          <div className="flex items-center gap-3 justify-center w-full ">
            <FaMosque color="white" size={30} />
            <span className="font-bold text-main text-[20px]">Al-IHSAN</span>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
