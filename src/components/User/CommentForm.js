import React from 'react';
import './CommentForm.scss';

const CommentForm = (props) => {
    let commentForm = '';

    if(props.show === true) {
        
        commentForm = (
            <div>
                <form onSubmit={props.submit.bind(this, props.pid)} className="comment_form">
                    <textarea onChange={props.change} name="post_text" id="comment_text" placeholder="Type your Comment..." required></textarea>
                    <input type="submit" name="post" id="post_button" value="Submit" />
                </form>
                <hr />
            </div>
        )
    }
    else {
        commentForm = '';
    }

    return commentForm;
    
};

export default CommentForm;
