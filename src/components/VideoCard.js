import React from 'react'

function VideoCard({video}) {
    console.log('infor-->', video);
    const { snippet, statistics  } = video;
    const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className='m-2 p-2 w-52 shadow-lg'>
        <img alt='thumbnil' src={thumbnails.medium.url} />
        <ul>
            <li>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>

        </ul>
    </div>
  )
}

export default VideoCard