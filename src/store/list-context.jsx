import React, { useReducer } from "react";
import { createContext } from "react";

export const PostContext = createContext({
  postlist: [],
  addpost: () => {},
  Deletepost: () => {},
  Apipost: () => {},
});

const PostContextProvider = ({ children }) => {
  let defaultvalue = [
    {
      postId: 1,
      title: "Happy Birthday",
      description: "happy to share that today is my love's birthday",
      likes: 67,
      tags: ["Happy", "Relationship", "Duo"],
    },
    {
      postId: 2,
      title: "Finally Graduated",
      description: "Glad to share that i have completed Degree in B.Tech ",
      likes: 85,
      tags: ["CSE", "Charusat", "Degree"],
    },
  ];

  let reducer = (currlist, action) => {
    let newlist = currlist;
    if (action.type == "Delete") {
      newlist = currlist.filter((item) => item !== action.payload);
    }
    else if(action.type == "Add")
        {
            newlist=[action.payload,...currlist];
        }
      else if(action.type=="Api")
        {
            newlist=action.payload.posts;
        }

    return newlist;
  };

  const [postlist, dispatchpost] = useReducer(reducer, defaultvalue);

  let addpost = (postTitle, postDescription, postReaction, postTags) => {
    let newitem = {
      type: "Add",
      payload: {
        postId: Date.now(),
        title: postTitle,
        description: postDescription,
        likes: postReaction,
        tags: postTags,
      },
    };
    dispatchpost(newitem);
  };

  let Deletepost = (itemId) => {
    let newitem = {
      type: "Delete",
      payload: itemId,
    };
    dispatchpost(newitem);
  };

  let Apipost=(posts)=>{
    let newitem={
       type:"Api",
       payload:posts
    };
    dispatchpost(newitem);

  }

  return (
    <PostContext.Provider value={{ postlist, addpost, Deletepost,Apipost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
