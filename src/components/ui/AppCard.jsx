import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const AppCard = ({ app }) => {
  const { title, downloads, ratingAvg, image } = app;
  return (
    <div className="card bg-base-100 max-w-96 shadow-md transition-all duration-300 hover:scale-102 hover:shadow-xl hover:-translate-y-1 group">
      <figure className="px-10 pt-10 overflow-hidden">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl transition-transform duration-500 group-hover:scale-105"
        />
      </figure>

      <div className="card-body mt-2 text-center">
        <h2 className="card-title justify-center transition-colors duration-300 group-hover:text-primary">
          {title}
        </h2>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 font-semibold bg-green-100 rounded p-1 px-2 text-green-500 transition-all duration-300 hover:bg-green-200">
            <MdOutlineFileDownload />
            <span>{downloads}</span>
          </div>

          <div className="flex items-center gap-1 font-semibold bg-yellow-100 rounded p-1 px-2 text-yellow-500 transition-all duration-300 hover:bg-yellow-200">
            <FaStar />
            <span>{ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
