import React, { Component } from 'react';
import {loansRequest} from "../actions/loansAC";
import {connect} from "react-redux";
import LoansComponent from '../components/Loans';

class Loans extends Component {

    componentDidMount() {
        this.props.loansRequest();
    }

    render() {
        const {
            loans = []
        } = this.props;

        return(
            <div>
                {loans.isLoading? "Loading...": <LoansComponent loans={loans.loans}/>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loans: state.loans
    }
};

const mapDispatchToProps = dispatch => ({
    loansRequest: () => dispatch(loansRequest())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Loans);