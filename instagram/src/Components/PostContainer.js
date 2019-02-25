import React from 'react';

function PostContainer(props) {
    return (
        <>
        <div className="post">
         <img src={props.post.thumbnailUrl}/>
         <h3> {props.post.username}</h3>
         <div> 
             
             </div>

    
        </div>
        </>

    )
    
}

export default PostContainer;
