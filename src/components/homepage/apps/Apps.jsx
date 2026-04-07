import React from "react";
import useApps from "../../hooks/useApps";

const Apps = () => {
  const { apps } = useApps();

  console.log(apps);
  

  return (
    <div className="bg-base-200">
      <div className="container mx-auto py-20">
        <h1 className="text-5xl text-center font-bold">Trending Apps</h1>
        <p className="text-black/70 text-center mt-5">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
    </div>
  );
};

export default Apps;
