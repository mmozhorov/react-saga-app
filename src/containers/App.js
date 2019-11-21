import  Header from '../components/Header';
import Login from '../components/Login';
import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);