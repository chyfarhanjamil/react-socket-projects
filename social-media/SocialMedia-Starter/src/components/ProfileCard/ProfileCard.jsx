import React from "react";
import "./profileCard.css";
import Profile from "../../img/profileImg.jpg";
import Cover from "../../img/cover.jpg";

export default function ProfileCard() {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>Zendeya MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>
    </div>
  );
}