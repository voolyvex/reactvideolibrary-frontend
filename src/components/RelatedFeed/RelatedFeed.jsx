import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../SearchFeed/SearchFeed.css'
import { BsCaretRightFill } from "react-icons/bs";


const RelatedFeed = ({ relatedVideos }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/video/');
    }

    return (
        <div className='rel-feed-container'>
            <h1 className='rel-title'>Related Videos</h1>
            {relatedVideos && relatedVideos.map((video) =>
                <Link to={`/video/${video.id.videoId}/${video.snippet.title}`}>
                    <div key={video.id.videoId} className='item' onClick={handleClick} title={video.snippet.title}>
                        <img width='250px' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
                        <BsCaretRightFill className='icon' />
                        {video.snippet.title}
                    </div>
                </Link>
            )}

        </div>
    )
}
export default RelatedFeed;