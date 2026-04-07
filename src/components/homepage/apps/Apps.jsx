import React from "react";
import useApps from "../../hooks/useApps";
import AppCard from "../../ui/AppCard";
import { NavLink } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const Apps = () => {
  const { apps } = useApps();

  console.log(apps);

  return (
    <div className="bg-base-200 py-20">
      <div className="container mx-auto">
        <div className=" py-10">
          <h1 className="text-5xl text-center font-bold">Trending Apps</h1>
          <p className="text-black/70 text-center mt-5">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className=" px-5 grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {apps.slice(0, 8).map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
        <div className="text-center pt-10">
          <NavLink
            to="/apps"
            className="group inline-flex items-center gap-3 px-8 py-3.5 text-lg font-semibold text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-2xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-1 active:scale-95"
          >
            Show More
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Apps;
