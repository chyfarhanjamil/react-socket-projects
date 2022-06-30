import React from "react";
import LogoSearch from "../logoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./profileSide.css";

export default function ProfileSide() {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard />
    </div>
  );
}
