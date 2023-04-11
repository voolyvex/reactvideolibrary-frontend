import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { KEY } from '../../localKey'
import RelatedFeed from '../../components/RelatedFeed/RelatedFeed';
import axios from 'axios';
import '../VideoPage/VideoPage.css'


const RelatedVideos = () => {
    const [relatedVideos, setRelatedVideos] = useState([])
    const { videoId } = useParams()

    useEffect(() => {

        async function getRelatedVideos() {
            try {
                await axios
                    .get(
                        `https://www.googleapis.com/youtube/v3/search?type=video&relatedToVideoId=${videoId}&part=snippet&key=${KEY}&maxResults=7`)
                    .then(response => setRelatedVideos(response.data.items));
            } catch (error) {
                console.log(error);
            }
        };
        getRelatedVideos();
    }, [videoId]);

    return (
        <div className='related-videos'>
            <RelatedFeed relatedVideos={relatedVideos} />
        </div>
    )
}
export default RelatedVideos;