import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Burger from "./Burger";
import "./Header.css";

const UserNavBar = props => (
    <ul className="nav navbar-nav">
        <li>
            <Link to="/loans">Loans</Link>
        </li>
        <li>
            <Link to="/logout" onClick={props.logout}>Log Out</Link>
        </li>
    </ul>);

const GuestNavBar = props => (
    <ul className="nav navbar-nav">
        <li>
            <Link to="/login">Log In</Link>
        </li>
    </ul>);


class Header extends Component {
    logout = () => {
        this.props.logout();
        this.props.history.push('/');
    };
    render() {
        const { user } = this.props;
        return(
            <nav className="navbar navbar-default">
                <Burger/>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Home</Link>
                    </div>
                    {user.isGuest? <GuestNavBar/>: <UserNavBar logout={this.logout}/>}
                </div>
            </nav>
        );
    }
}

export default withRouter(Header);
