import React, { Component } from 'react'
import CommentForm from './CommentForm';

class Posts extends Component {

    state = {
        showForm: false
    }

    formToggle = () => {
        this.setState({ showForm: !this.state.showForm });
    }

    submitComment = (event) => {
        event.preventDefault();
    }

    render() {
        
        let comments = this.props.comments.map(comment => {
            return (
                <p key={comment.id}>
                    <span className="user">{comment.user}</span><br/><span>{comment.comment}</span>
                </p>
            );
        });

        return (
            <div>
                <div className='status_post'>
                    <div className='post_profile_pic'>
                        <img src={this.props.profile} width='50' alt='profile' />
                    </div>

                    <div className='posted_by'>
                        <span href='#'>{this.props.name}</span>
                    </div>
                    <div className='post_body'>
                        {this.props.post}
                        <br/>
                    </div>

                    <div className="comments">
                        {comments}
                    </div>

                    <div className="comment_form_div">
                        <span onClick={this.formToggle} >Comment</span>

                        <CommentForm show={this.state.showForm} change={this.props.change} 
                            submit={this.props.submit} pid={this.props.pid} value={this.props.value} />
                    </div>

                </div>
                
                {/* <div className="posts_area"></div>
                <img src="assets/images/icons/loading.gif" alt="" id="loading" /> */}
            </div>
        );
    }
}

export default Posts
