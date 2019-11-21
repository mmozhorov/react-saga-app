import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from "react-redux";

class PrivateRoute extends Component {
    render() {
        const { user, restProps } = this.props;
        if (user.isGuest) return <Route {...restProps} />;
        return <Redirect to="/" />;
    }
}

const mapStateToProps = state => ({
    user: state.user
});


export default connect(
    mapStateToProps
)(PrivateRoute);