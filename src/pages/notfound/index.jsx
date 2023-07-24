import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { errorNotify } from "../../utils/helper";

const NotFound = () => {
  const { isAuthenticated } = useSelector((state) => state);
  const navigate = useNavigate();
  const id = 99;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      errorNotify("Silahkan Login Terlebih Dahulu", id);
    }
  }, []);
  return (
    <div className="flex items-center justify-center w-full h-full">
      <h1 className="text-4xl font-bold">NotFound</h1>
    </div>
  );
};

export default NotFound;
