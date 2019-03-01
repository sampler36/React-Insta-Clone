import React from "react";
import "./Post.css";
import CommentSection from "../CommentSection/CommentSection";
import {object} from "prop-types";

PostContainer.propTypes = {
   post:object
}

function PostContainer(props) {
  const { username, text, comments, likes, timestamp } = props.post;

  return (
    <>
      <div className="container">
        <div className="top">
          <div>
            <img className="thumbnail" src={props.post.thumbnailUrl} alt="" />
          </div>
          <h3> {props.post.username}</h3>
        </div>
        <div>
          <img src={props.post.imageUrl} alt="" />
        </div>
        <div />

        <CommentSection
          likes={likes}
          comments={comments}
          timestamp={timestamp}
          text={text}
          username={username}
        />
      </div>
    </>
  );
}

export default PostContainer;
