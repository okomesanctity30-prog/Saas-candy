import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="inline-block">
      <img
        src="/logo (1).svg"
        alt="logo"
        width={160}
        height={50}
        style={{ width: "auto", height: "auto" }}
        className="dark:hidden"
      />
      <img
        src="logo-white.svg"
        alt="logo"
        width={160}
        height={50}
        style={{ width: "auto", height: "auto" }}
        className="dark:block hidden"
      />
    </Link>
  );
};

export default Logo;
