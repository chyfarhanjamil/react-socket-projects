import React from "react";
import FollowersCard from "../FollwersCard/FollowersCard";
import LogoSearch from "../logoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./profileSide.css";

export default function ProfileSide() {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
}
