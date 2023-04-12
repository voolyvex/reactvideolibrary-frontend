import React from 'react';
import './comment.css'
const DisplayCommentFeed = ({ comments }) => {

    const reverseFeed = [...comments].reverse()


    return (
        <div className='feed-container'>
            {reverseFeed.map(comment => (
                <div key={comment.id} className="comment-card">
                    <h6 className=''>@ {comment.date_time}</h6>
                    <h5 className='username'>
                        {comment.user.username} said
                    </h5>
                    <h3 className='comment-text'>{comment.text}</h3>
                </div>
            )
            )}
        </div>
    )
}
export default DisplayCommentFeed;