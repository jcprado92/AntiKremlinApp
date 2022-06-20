import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const ShowVideo = ({ videos }) => {
  let {id} = useParams();
  
  // if (!videos) return;
  // <div>Taking a minute to load...</div>;
 
  const selectedVideo = videos.find((video) => video.id.videoId === id)

  return (
    <>
      <YouTube videoId={selectedVideo.id.videoId} />
      <h4>{selectedVideo.snippet.title}</h4>
      <p>{selectedVideo.snippet.description}</p>
    </>
  );
};

export default ShowVideo;
