import { put, call, takeEvery, select } from 'redux-saga/effects';
import loansActions from "../constants/loans";
import { getLoansRequest } from "../api/getLoans";
import { loansSuccess, loansFailed } from '../actions/loansAC';
const getUserToken = state => state.user;

export function* getLoans() {
    try {
        const user = yield select(getUserToken);
        const loans = yield call(getLoansRequest, user.token);
        yield put(loansSuccess(loans.data.data));
    } catch (error) {
        yield put(loansFailed(error.toString()));
    }
}

export default function* Loans() {
    yield takeEvery(loansActions.LOANS_REQUEST, getLoans);
}