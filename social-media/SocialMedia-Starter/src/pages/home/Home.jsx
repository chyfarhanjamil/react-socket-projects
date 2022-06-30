import React from "react";
import ProfileSide from "../../components/profileSide/ProfileSide";
import "./home.css";

export default function Home() {
  return (
    <div className="Home">
      <ProfileSide />
      <div className="postSide">Posts</div>
      <div className="rightSide">RightSide</div>
    </div>
  );
}
