import React, { useState } from "react";
import axios from "axios";
import { KEY } from "../../localKey";
import SearchFeed from "../../components/SearchFeed/SearchFeed";
import '../../components/SearchFeed/SearchFeed.css'
import { HiArrowNarrowRight } from "react-icons/hi";

const SearchPage = (props) => {
    const [videos, setVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("scenic");
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchVideos(searchTerm);
    }

    async function fetchVideos(searchTerm) {
        try {
            await axios
                .get(
                    `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type=video&maxResults=12`)
                .then(response => setVideos(response.data.items));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="search-page">
            <h1 className="search-title">Start your search here</h1>
            <div className="search-form-container">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input className="search-form"
                        type='text'
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm} required={true} />
                    <button className="search-button" type='submit'><HiArrowNarrowRight /> </button>
                </form>
            </div>
            <SearchFeed videos={videos} />
        </div>
    )
}
export default SearchPage;