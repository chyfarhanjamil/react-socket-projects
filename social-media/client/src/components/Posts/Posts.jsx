import React from "react";
import "./posts.css";
import { PostsData } from "../../Data/PostsData";
import Post from "../Post/Post";

export default function Posts() {
  return (
    <div className="Posts">
      {PostsData.map((post, id) => (
        <Post key={id} data={post} />
      ))}
    </div>
  );
}
