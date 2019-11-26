import React from 'react';
import './CommentForm.scss';

const CommentForm = (props) => {
    let commentForm = '';

    if(props.show === true) {
        
        commentForm = (
            <div>
                <form onSubmit={props.submit.bind(this, props.pid)} className="comment_form">
                    <textarea onChange={props.change} name="comment" id="comment_text" 
                        placeholder="Type your Comment..." value={props.value} required>
                    </textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
    else {
        commentForm = '';
    }

    return commentForm;
    
};

export default CommentForm;
