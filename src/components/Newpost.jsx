import React from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { PostContext } from '../store/list-context';


const Newpost = () => {

   const {addpost} = useContext(PostContext)
    const title=useRef();
    const description=useRef();
    const reactions=useRef();
    const tags=useRef();

 let submit=(event)=>{

    event.preventDefault();
    const postTitle=title.current.value;
    const postDescription=description.current.value;
    const postReaction=reactions.current.value;
    const postTags=tags.current.value.split(" ");

    addpost(postTitle,postDescription,postReaction,postTags);
 }

    return (
        <form className='form' onSubmit={submit}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" ref={title} placeholder='how are you felling today...' id="title" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="Description" className="form-label">Description</label>
            <input type="text" rows='4' className="form-control" ref={description} placeholder='tell us something more....' id="Description" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="Reactions" className="form-label">Reactions</label>
            <input type="text" className="form-control" ref={reactions} placeholder='Enter no. of reaction on post' id="Reactions" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="Tags" className="form-label">Tags</label>
            <input type="text" className="form-control" ref={tags} placeholder='Add matching tags....' id="Tags" aria-describedby="emailHelp" />
        </div>
       
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    );
};

export default Newpost;