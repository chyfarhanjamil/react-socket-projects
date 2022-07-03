import React from "react";
import "./infoCard.css";
import { UilPen } from "@iconscout/react-unicons";

export default function InfoCard() {
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>Single</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Dhaka</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>LEADS Corporation Limited</span>
      </div>
      <button className="button logout-button">Logout</button>
    </div>
  );
}
