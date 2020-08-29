import React from "react";
import post from "./Post.module.css";

function Post(props) {
  return (
    <div className={post.item}>
      {props.message}
      <span> {props.amountLikes} Likes</span>
    </div>
  );
}

export default Post;
