import React from 'react';



const CommentDetail = (props) => {
   
    return(
        <div className="comment">
        <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar}/>
      </a>
      <div className="contents">
        <a href="/" className="author">{props.author}</a>
        <div className ="metadata">
          <span className="date">Today at 5:30pm</span>
        </div>
        <div className = "text">{props.content}</div>
      </div>
      </div>
    );
}

export default CommentDetail;