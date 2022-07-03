import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import "./home.css";

export default function Home() {
  return (
    <div className="Home">
      <ProfileSide />

      <PostSide />
      <RightSide />
    </div>
  );
}
