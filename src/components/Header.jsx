import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { MENUS } from "../constant/data";

const Header = () => {
  useEffect(() => {
    axios
      .get("/api/hosu")
      .then((res) => console.log("res", res))
      .catch((err) => console.error("err", err));
  }, []);

  return (
    <div>
      {MENUS.map(({ to, name }) => (
        <Link key={name} to={to}>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Header;
