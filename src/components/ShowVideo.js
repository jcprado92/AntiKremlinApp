import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import ErrorMessage from "./common/ErrorMessage";

const ShowVideo = ({ videos }) => {
  let {id} = useParams();
  
  // if (!videos) return;
  // <div>Taking a minute to load...</div>;
 
  const selectedVideo = videos.find((video) => video.id.videoId === id)
  if(!selectedVideo){
    return <ErrorMessage/>
  }

  return (
    <>
      <YouTube videoId={selectedVideo.id.videoId} />
      <h4>{selectedVideo.snippet.title}</h4>
      <p>{selectedVideo.snippet.description}</p>
    </>
  );
};

export default ShowVideo;

//add another fetch/ request for a single video 

//do not iterate through videos

//if we want a single vide but no data from videos, just rended the specific id from video
