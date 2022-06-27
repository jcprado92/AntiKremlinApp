import React from "react";
import { useParams } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import "./VideoCard.css";
import YouTube from "react-youtube";

const ShowVideo = ({ videos }) => {
  let {id} = useParams();

  const handleClick = () => {
    Navigate("/videos");
  };
 
  const selectedVideo = videos.find((video) => video.id.videoId === id)

  return (
    <>
    <div className="showVideo">
      <YouTube videoId={selectedVideo.id.videoId} />
      <h4>{selectedVideo.snippet.title}</h4>
      <p>{selectedVideo.snippet.description}</p>
      </div>
      <aside className="back">
        <button onClick={handleClick} className="history">
          back
        </button>
      </aside>
      
    </>
  );
};

export default ShowVideo;


