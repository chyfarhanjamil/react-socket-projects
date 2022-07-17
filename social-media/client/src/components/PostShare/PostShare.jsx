import React, { useState, useRef } from "react";
import "./postShare.css";
import ProfileImage from "../../img/profileImg.jpg";

import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";

export default function PostShare() {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's Happening" />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule" }}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div classname="previewImage" style={{ position: "relative" }}>
            <UilTimes
              style={{
                position: "absolute",
                right: "1rem",
                top: "0.5rem",
                cursor: "pointer",
              }}
              onClick={() => setImage(null)}
            />
            <img
              src={image.image}
              alt=""
              style={{
                width: "100%",
                maxHeight: "20rem",
                objectFit: "cover",
                borderRadius: "0.5rem",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
