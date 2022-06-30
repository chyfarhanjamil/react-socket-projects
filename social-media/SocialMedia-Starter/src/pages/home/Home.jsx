import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileSide from "../../components/profileSide/ProfileSide";
import "./home.css";

export default function Home() {
  return (
    <div className="Home">
      <ProfileSide />
      <div className="postSide">
        <PostSide />
      </div>
      <div className="rightSide">RightSide</div>
    </div>
  );
}
