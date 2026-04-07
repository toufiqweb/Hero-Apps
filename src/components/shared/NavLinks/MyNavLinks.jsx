import React from "react";
import { NavLink } from "react-router";

const MyNavLinks = ({ to, children, className }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${className} ${
          isActive
            ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-linear-to-r after:from-[#632EE3] after:to-[#9F62F2]"
            : ""
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLinks;
