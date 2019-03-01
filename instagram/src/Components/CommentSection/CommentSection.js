import React from 'react';
import './CommentSection.css';

function CommentSection(props) {

    
    return (
        <>
        
        <div className="comments">
        
        {props.comments.map(comment => (
          <div>
            <p className="usercom" >
               <div className="user">
               { comment.username }   
               </div>
              
               <div className="text">
                  { comment.text }
               </div>
            </p>
          
          </div>
        ))
        }

        <div>

        </div>
          <input 
          type="text" 
          placeholder="Add a comment..." 
          // value={this.state.currentComment} 
          // onChange={this.commentHandler}
          // onSubmit={this.handleCommitSubmit}
          className="AddComment"
          />
        </div>
        <div>

        </div>
        </>

    )
    
}

export default CommentSection;
