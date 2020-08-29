import React from "react";
import Post from "./Post/Post.jsx";
import posts from "./Posts.module.css"

function Posts(props) {
  return (
    <div className={posts.item}>
      Posts
      <div>
        Add new post
        <textarea></textarea>
        <button>Submit</button>
      </div>
      <Post message="message" amountLikes="50"/>
    </div>
  );
}

export default Posts;
