import React from 'react'
import ShowVideo from './ShowVideo';
import { useState } from "react"

function VideosIndex({getData}) {
  const [videos, setVideos] = useState([]);
  setVideos(getData);
  console.log(setVideos);
  return (
    <div>VideosIndex</div>
  )
}

export default VideosIndex;