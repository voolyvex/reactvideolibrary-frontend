import React from 'react';
import { useParams } from 'react-router-dom';
import './VideoPlayer.css'


const VideoPlayer = (props) => {

    const { videoId = "vw1axveZo5k", title } = useParams();


    return (
        <div className='player-container'>
            <iframe id="ytplayer" type="text/html" width="640" height="360" autoplay="0" title={props.title}
                src={`https://www.youtube.com/embed/${videoId}?rel=1&fs=1&modestbranding=1`} frameborder="0" allow="fullscreen">
            </iframe>
            <p className='desc'>{title}</p>

        </div>
    )
}

export default VideoPlayer;