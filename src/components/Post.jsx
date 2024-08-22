import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { PostContext } from "../store/list-context";


const Post = ({ post }) => {

  const { Deletepost } = useContext(PostContext);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.description}</p>
        <AiFillDelete  onClick={()=>Deletepost(post)} />
        <div className="alert alert-light" role="alert">
          this post is liked by {post.likes} person
        </div>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Post;
