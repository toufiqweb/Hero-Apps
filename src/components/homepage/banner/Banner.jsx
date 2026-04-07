import React from "react";
import heroImg from "../../../assets/images/hero.png";
import googleImg from "../../../assets/images/google.png";
import appStoreImg from "../../../assets/images/appStore.png";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh]">
      <div className="hero-content flex-col text-center mt-15 pb-0">
        <div className="max-w-2xl">
          <h1 className="text-4xl  md:text-5xl lg:text-6xl font-bold">
            We Build <br />
            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive </span>Apps
          </h1>
          <p className="py-6 text-black/70">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex gap-4 items-center justify-center ">
            <button className="btn ">
              <img className="w-auto h-5" src={googleImg} alt="" /> Google Play
            </button>
            <button className="btn ">
              <img className="w-auto h-5" src={appStoreImg} alt="" /> App Store
            </button>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
