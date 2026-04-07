import React from "react";
import Navbar from "../components/shared/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/shared/footer/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
