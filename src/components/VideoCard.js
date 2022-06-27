import React from "react";
import "./VideoCard.css";
import { Link, Navigate } from "react-router-dom";

const VideoCard = ({ video }) => {

  return (
    <div className="videoCard">
      <Link to={`/videos/${video.id.videoId}`}>
        <img
          className="videoCard-thumbnail"
          alt="thumbnails"
          src={video.snippet.thumbnails.medium.url}
        />
      </Link>
      <div className="videoCard-info">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>

    </div>
  );
};

export default VideoCard;
