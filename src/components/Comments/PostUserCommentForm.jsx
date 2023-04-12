import axios from 'axios';
import React, { useState } from 'react';
import "../SearchFeed/SearchFeed.css"
import "./comment.css"
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useParams } from 'react-router-dom';
import { URL_HOST } from '../../urlHost';


const PostUserCommentForm = ({ getComments }) => {
    const { videoId } = useParams();
    const [text, setText] = useState("");
    const dateTime = new Date().toLocaleString()

    const postUserComment = async () => {
        let newCommentObject = {
            "video_id": videoId,
            "text": text,
            "date_time": dateTime
        };
        try {
            let response = await axios.post(`${URL_HOST}/api/comments/post/`, newCommentObject, { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` } });
            if (response.status === 201){
                getComments(videoId)
            }
        } catch (error) {
            console.log(error)
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        postUserComment();
    }
    return (
        <div className='form-container'>
            <h1 className='rel-title'>Comments</h1>
            <form className="comment-form" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="post">
                    <textarea className="form-textarea" name="post" value={text}
                        onChange={e => setText(e.target.value)}
                        required={true} placeholder="Leave a comment..."
                    />
                    <button className='post-button' type='submit'>
                        <HiArrowNarrowRight />
                    </button>
                </label>
            </form>
        </div >
    )
}

export default PostUserCommentForm;
