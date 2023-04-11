import React, { useLayoutEffect } from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { useNavigate } from 'react-router-dom';
import './VideoPage.css'
import RelatedVideos from '../RelatedVideos/RelatedVideos';
import CommentPage from '../CommentPage/CommentPage';


const VideoPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/search')
    }

    return (
        <div className='player-page'>
            <div className='player'>
                <VideoPlayer />
                <div className='button1'>
                    <button className='back-button' onClick={handleClick}>Back to Search</button>
                </div>
            </div>
            <div className='comments'>
                <CommentPage />
            </div>
            <div className='related-videos'>
                <RelatedVideos />
            </div>
        </div>
    )
}
export default VideoPage;