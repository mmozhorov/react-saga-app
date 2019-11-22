import React, { Component } from 'react';

export default class Loans extends Component {
    componentDidMount() {
        console.log(1);
        this.props.loansRequest();
    }

    render() {
        return(
            <h1>Loans</h1>
        );
    }
}
