import React from "react";
import "./style.css";

function Story({ data }) {
  return (
    <div className="story-wrapper">
      <div className="story-info">
        <div className="story-title">
          <h4>Cerita</h4>
          <p>02 Jan 2020</p>
        </div>
      </div>
      <div className="story-content">
        <p>{data}</p>
      </div>
    </div>
  );
}

export default Story;
