import React from 'react'
import VideoCard from "../VideoCard";

export default function Home({ videos }) {
  
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