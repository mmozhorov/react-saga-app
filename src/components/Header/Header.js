import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Home</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/loans">Loans</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
