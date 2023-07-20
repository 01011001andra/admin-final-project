import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, link }) => {
  return (
    <Link
      to={link}
      className="w-full bg-stroke py-5 px-4 flex flex-col gap-3 rounded-[4px] text-white shadow-xl transition-all duration-700 lg:hover:scale-105"
    >
      <h1 className="uppercase text-lg lg:text-xl">{title}</h1>
      <span className="text-[12px] font-light">
        Klik untuk masuk kehalaman {title}{" "}
      </span>
    </Link>
  );
};

export default Card;
