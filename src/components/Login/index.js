import React, { Component } from 'react';
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
                        <button>login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
