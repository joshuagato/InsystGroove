import React from 'react';

const PostForm = (props) => (
        <div>
            <form onSubmit={props.submit} className="post_form">
                <textarea onChange={props.change} name="post_text" id="post_text" 
                    placeholder="Got something to say?" value={props.value} required>
                </textarea>
                <input type="submit" name="post" id="post_button" value="Post" />
            </form>
            <hr />
        </div>
    );

export default PostForm;
