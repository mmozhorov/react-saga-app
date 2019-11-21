import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { connect } from "react-redux";

class App extends Component {
    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/editor/:slug?" component={Editor} />
                    <Route path="/article/:id" component={Article} />
                    <PrivateRoute path="/settings" component={Settings} />
                    <Route path="/@:username" component={Profile} />
                    <Route path="/@:username/favorites" component={Profile} />
                    <Route path="/" component={Home} />
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