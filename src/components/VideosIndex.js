import React from 'react'
import YouTube from 'react-youtube';


function VideosIndex({ videos } ) {
  return (
    <div>
      {videos.map((video) => <YouTube videoId={video.id.videoId}/>)}
    </div>
  )
}

export default VideosIndex