import React from "react";
import LogoSearch from "../logoSearch/LogoSearch";
import InfoCard from "../InfoCard/InfoCard";
import FollowersCard from "../FollwersCard/FollowersCard";

export default function ProfileLeft() {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
}
