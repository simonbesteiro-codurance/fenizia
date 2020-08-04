import React from 'react'
import ReactPlayer from 'react-player';
import './Cover.css'

function Cover () {
    return (
        
        <div className='video-cover'>
            <ReactPlayer
                
                url={require('../video/video-cover.mp4')}
                playing='true'
                width='100%'
                height='100%'
            />
        </div>
    )
}   

export default Cover;