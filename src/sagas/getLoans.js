import { put, call, takeEvery } from 'redux-saga/effects';
import loansActions from "../constants/loans";
import { getLoansRequest } from "../api/getLoans";
import { loansSuccess, loansFailed } from '../actions/userAC';

export function* getLoans(action) {
    try {
        const loans = yield call(getLoansRequest, action.data);
        yield put(loansSuccess(loans));
    } catch (error) {
        yield put(loansFailed(error.toString()));
    }
}

export default function* Loans() {
    yield takeEvery(loansActions.LOANS_REQUEST, getLoans);
}