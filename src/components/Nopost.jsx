import React from "react";
import { useContext } from "react";
import { PostContext } from "../store/list-context";

const Nopost = ({onfetch}) => {

    
  return (
    <div className="msg">
      <center>
        <h1>No posts yet</h1>
        <button type="button" onClick={onfetch} class="btn btn-primary btn1">
          Add posts
        </button>
      </center>
    </div>
  );
};

export default Nopost;
