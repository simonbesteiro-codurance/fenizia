import React from 'react'
import ReactPlayer from 'react-player';


function Cover () {
    return (
        
        <div>
            <ReactPlayer
                url='../video/video-cover.mp4'
                className='video-cover'
                playing
                width='100%'
                height='100%'
            />
        </div>
    )
}   

export default Cover;