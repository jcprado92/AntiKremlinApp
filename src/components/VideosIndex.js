import React, {useEffect} from "react";
// import YouTube from "react-youtube";
import "./VideosIndex.css";
import VideoCard from "./VideoCard";
import { useParams } from "react-router-dom"


function VideosIndex({ videos, setVideos }) {
  const { search, maxResult } = useParams()
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&q=${search}&type=video&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setVideos(data.items));
  }, [search, maxResult]);

  return (
    <>
    <div className="search-display">
      <h3>Your Search Results</h3> 
    </div>
     
      <div className="videos-display">
        {videos.map((video) => {
          return <VideoCard key={video.id.videoId} video={video} />;
        })}
     
    </div>
    </>
  );
}

export default VideosIndex;
