import React, { Component } from 'react';
import './User.scss';

import uuid from 'uuid';

import profile from '../images/defaults/head_alizarin.png';
import PostForm from './PostForm';
import Posts from './Posts';

class User extends Component {

    state = {
        posts: [
            {
                id: 1,
                user: 'Joshua Gato',
                post: 'This is Post One',
                comments: [
                    {
                        id: 1,
                        user: 'Joshua Gato',
                        comment: 'This is comment 1'
                    },
                    {
                        id: 2,
                        user: 'Joshua Gato',
                        comment: 'This is comment 2'
                    }
                ]
            },
            {
                id: 2,
                user: 'Joshua Gato',
                post: 'This is Post Two',
                comments: []
            }
        ],
        newpostbody: '',
        newComment: ''
    }

    onSubmit = (event) => {
        event.preventDefault();

        const newpost = {
            id: uuid.v4(),
            user: 'Joshua Gato',
            post: this.state.newpostbody,
            comments: []
        }

        this.setState({ posts: [...this.state.posts, newpost], newpostbody: '' });
    }

    commentSubmit = (id, event) => {
        event.preventDefault();
        
        let clonedPosts = [...this.state.posts];

        const newComment = {
            id: uuid.v4(),
            user: 'Joshua Gato',
            comment: this.state.newComment
        }

        clonedPosts.map(post => {
            if(post.id === id) {
                post.comments = [...post.comments, newComment];
            }
            return post;
        });
        
        this.setState({ posts: clonedPosts, newComment: '' });
    }

    changeHandler = (event) => {
        this.setState({ newpostbody: event.target.value });
    }
    
    commentChangeHandler = (event) => {
        this.setState({ newComment: event.target.value });
    }

    viewUsers = () => {
        this.props.history.push('/view-users');
    }

    logout = () => {
        this.props.history.replace('/');
    }

    render() {

        let posts = this.state.posts.map(post => (
            <Posts key={post.id} pid={post.id} profile={profile} name={post.user} post={post.post} comments={post.comments} 
            change={this.commentChangeHandler} submit={this.commentSubmit} value={this.state.newComment} />
        ));

        return (
            <div className="main-container">

                <div className="wrapper">
                    <div className="user-details column">
                        <img src={profile} alt="Profile" />

                        <div className="user-details-left-right">
                            <p>Joshua Gato</p>
                            <p className="view_users" onClick={this.viewUsers}>View Users</p>
                            <p className="logout" onClick={this.logout}>Logout</p>
                        </div>
                    </div>
                </div>

                <div className="main_column column">

                    <PostForm submit={this.onSubmit} change={this.changeHandler} value={this.state.newpostbody} />

                    {posts}

                </div>

            </div>
        );

        
    }
}

export default User;
