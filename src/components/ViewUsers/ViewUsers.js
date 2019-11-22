import React, { Component } from 'react';
import axios from 'axios';

import './ViewUsers.scss';
import ViewUser from './ViewUser/ViewUser';

export class ViewUsers extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/photos?_limit=20').then(response => {
            const persons = response.data;
            this.setState({ users: persons });
        });
    }

    viewPosts = () => {
        this.props.history.push('/user');
    }

    render() {

        const users = this.state.users.map(user => {
            return <ViewUser key={user.id} img={user.thumbnailUrl} name={user.title} view={this.viewPosts} />
        });

        return (
            <div className="view-users-container">
                {users}
            </div>
        );
    }
}

export default ViewUsers;
