import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Watch.scss";

const Watch = () => {
  const location = useLocation();
  const movie = location.movie;

  return (
    <div className="watch">
      <Link to="/" >
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        src={movie.video}
        className="video"
        autoPlay
        progress
        controls
        muted
      />
    </div>
  );
};

export default Watch;
