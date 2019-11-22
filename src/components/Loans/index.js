import React, { Component } from 'react';

export default class Loans extends Component {

    render() {
        const {
            loans
        } = this.props;
        console.log(loans);
        return(
            <div>
                <h1>Loans</h1>
            </div>
        );
    }
}
