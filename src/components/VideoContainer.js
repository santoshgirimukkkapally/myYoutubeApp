import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom';

function VideoContainer() {
    const [videos, setVidoes] = useState([])
    useEffect(() => {
        getVideos()
    }, [])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log('Videos>',json)
        setVidoes(json.items)
    }
  return (
    <div className='flex flex-wrap'>
       {videos.map((videos) => <Link to={'watch?v=' + videos.id}><VideoCard key={videos.id} video={videos}/></Link>)} 
    </div>
  )
}

export default VideoContainer