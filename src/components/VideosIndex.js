import React from "react";
// import YouTube from "react-youtube";
import "./VideosIndex.css";
import VideoCard from "./VideoCard";

function VideosIndex({ videos }) {
  return (
    <div className="videos-display">
      <ul>
        {videos.map((video) => {
          return <VideoCard key={video.id.videoId} video={video} />;
        })}
      </ul>
    </div>
  );
}

export default VideosIndex;
