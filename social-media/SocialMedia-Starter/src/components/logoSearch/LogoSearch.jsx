import React from "react";
import "./logoSearch.css";
import Logo from "../../img/logo.png";
import { UilSearch } from "@iconscout/react-unicons";

export default function LogoSearch() {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="" />
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
}
