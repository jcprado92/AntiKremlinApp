import React, {useEffect} from 'react'

import VideoCard from "../VideoCard";

export default function Home({ videos, setVideos }) {

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setVideos(data.items));
  }, []);
  
  return (
    <div className="videos-home">
      <ul>
        {videos.map((video) => {
          return <VideoCard key={video.id.videoId} video={video} />;
        })}
      </ul>
    </div>
  );
};

//create new fetch here 

//or reuse videoindex or 

//!search !maxResult fetch base URL

//catch( navigate to error component )

//have state of error equal to boolean 
//create modal component  error state in app

