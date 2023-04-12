import React, { useEffect, useState } from "react";
import PostUserCommentForm from "../../components/Comments/PostUserCommentForm";
import { useParams } from "react-router-dom";
import DisplayCommentFeed from "../../components/Comments/DisplayCommentFeed";
import axios from "axios";
import '../../components/Comments/comment.css'
import { URL_HOST } from "../../urlHost";


const CommentPage = () => {
  const [comments, setComments] = useState([]);
  const { videoId } = useParams();


  useEffect(() => {
    getComments(videoId)
  }, [videoId])

  async function getComments(id) {
    try {
      await axios.get(`${URL_HOST}/api/comments/?video_id=${id}`).then(response => setComments(response.data))

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="comments-container">

      <PostUserCommentForm getComments={getComments} />

      <DisplayCommentFeed comments={comments} />

    </div>
  );
};

export default CommentPage;
