import React from "react";

const Stat = () => {
  return (
    <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white text-center px-5 py-10 space-y-5">
      <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl py-5 ">
        Trusted by Millions, Built for You
      </h2>
      <div className=" flex  justify-center  ">
        <div className="stats  stats-vertical lg:stats-horizontal gap-5  md:gap-5 lg:gap-20 ">
          <div className="stat border-none">
            <div className="stat-title text-white/80">Downloads</div>
            <div className="stat-value text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              29.6M
            </div>
            <div className="stat-desc text-white/80">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat border-none">
            <div className="stat-title text-white/80">New Users</div>
            <div className="stat-value text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              906K
            </div>
            <div className="stat-desc text-white/80" text-white>
              ↗︎ 400 (22%)
            </div>
          </div>

          <div className="stat space-y-3 ">
            <div className="stat-title text-white/80">New Registers</div>
            <div className="stat-value text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              132+
            </div>
            <div className="stat-desc text-white/80">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
