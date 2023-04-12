import axios from 'axios';
import React, { useState } from 'react';
import "../SearchFeed/SearchFeed.css"
import "./comment.css"
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useParams } from 'react-router-dom';


const PostUserCommentForm = () => {
    const { videoId } = useParams();
    const [text, setText] = useState("");
    const dateTime = new Date().toLocaleString()

    const postUserComment = async () => {
        console.log(dateTime);
        let newCommentObject = {
            "video_id": videoId,
            "text": text,
            "date_time": dateTime
        };
        try {
            await axios.post("http://127.0.0.1:8000/api/comments/post/", newCommentObject, { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}` } });
        } catch (error) {
            console.log(error)
        }
    };
    const handleSubmit = (e) => {
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
