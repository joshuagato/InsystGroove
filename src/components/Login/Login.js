import React, { Component } from 'react';
import './Login.scss';

import Input from './Input/Input';

class Login extends Component {

    state = {
        username: '',
        password: '',
        registered: false
    }

    usernameInput = (event) => {
        let username = event.target.value;
        this.setState({ username: username });
    }

    passwordInput = (event) => {
        let password = event.target.value;
        this.setState({ password: password });
    }

    loginHandler = () => {        

        if(this.state.username === 'esoko' && this.state.password === 'insyst') {
            this.props.history.push('/user');
        }

        else {
            alert('Please check your username or password');
        }
    }

    showHideForms = () => {
        this.state.registered ? this.setState({ registered: !this.state.registered }) : this.setState({ registered: !this.state.registered });
    }
    

    render() {
        let display = '';

        if(this.state.registered === true) {
            display = (
                <div id="login" className="login">
                    <h2>Insyst Groove</h2>
                    
                    <Input change={this.usernameInput} type="text" placeholder="Username" value={this.state.username} />
                    <Input change={this.passwordInput} type="password" placeholder="Password" value={this.state.password} />
                    <Input type="button" value="Signup" />

                    <span onClick={this.showHideForms}>Already Registered? Login here!!</span>
                </div>
            );
        }

        else {
            display = (
                <div id="signup" className="signup">
                    <h2>Insyst Groove</h2>

                    <Input change={this.usernameInput} type="text" placeholder="Username" />
                    <Input change={this.passwordInput} type="password" placeholder="Password" />
                    <Input click={this.loginHandler} type="button" value="Login" />

                    <span onClick={this.showHideForms}>Not Registered? Signup here!!</span>
                </div>
            );
        }
        return (
            <div>

                {display}
                
            </div>
        );
    }
}

export default Login;
