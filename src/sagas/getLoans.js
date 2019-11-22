import { put, call, takeEvery } from 'redux-saga/effects';
import loansActions from "../constants/loans";
import { getLoansRequest } from "../api/getLoans";
import { loansSuccess, loansFailed } from '../actions/loansAC';

export function* getLoans() {
    try {
        const token = localStorage.getItem("token");
        const loans = yield call(getLoansRequest, token);
        yield put(loansSuccess(loans.data.data));
    } catch (error) {
        yield put(loansFailed(error.toString()));
    }
}

export default function* Loans() {
    yield takeEvery(loansActions.LOANS_REQUEST, getLoans);
}