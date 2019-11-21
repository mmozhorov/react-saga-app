import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './login.css';

class Login extends Component {
    state = {
        username: "",
        password: ""
    };

    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    };

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getUser({
            "username": this.state.username,
            "password": this.state.password
        });
        this.props.history.push('/');
    };

    render() {
        return(
            <div className="login-page">
                <div className="form">
                    <form className="login-form">
                        <input type="text"
                               placeholder="username"
                               value={this.state.username}
                               onChange={this.handleUsername}
                        />
                        <input type="password"
                               placeholder="password"
                               value={this.state.password}
                               onChange={this.handlePassword}
                        />
                        <button onClick={this.handleSubmit}>login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
