import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

function WatchPage() {
    const [searchParams] = useSearchParams();
    const videoId = searchParams?.get('v');

    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(closeMenu())
    },[])
  return (
    <div className='ml-24 mt-6'>
        <iframe width="650" height="350" src={"https://www.youtube.com/embed/" + videoId}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage