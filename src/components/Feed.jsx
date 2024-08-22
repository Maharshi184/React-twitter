import React from "react";
import Post from "./Post";
import { useContext } from "react";
import { PostContext } from "../store/list-context";
import Nopost from "./Nopost";

const Feed = () => {
  const { postlist } = useContext(PostContext);
  const {Apipost}=useContext(PostContext);

  const onfetch = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(data=>{
        Apipost(data.posts)
      });
  };
  return (
    <>
    {postlist==0 && <Nopost onfetch={onfetch} ></Nopost>}
      {postlist.map((post) => (
        <Post key={post.title}  post={post}/>
      ))}
    </>
  );
};

export default Feed;
