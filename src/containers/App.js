import  Header from '../components/Header';
import Login from '../components/Login';
import Home from '../components/Home';
import Loans from '../components/Loans';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { connect } from "react-redux";
import { userRequest, logout } from "../actions/userAC";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

    render() {
        const { getUser } = this.props;

        return(
            <div>
                <Header {...this.props}/>
                <Switch>
                    <Route path="/login"  component={()=><Login getUser = {getUser}/>}  />
                    <Route path="/loans" component={Loans} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = dispatch => ({
    getUser: params => dispatch(userRequest(params)),
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);