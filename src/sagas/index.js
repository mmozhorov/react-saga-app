import { all } from 'redux-saga/effects';
import authUser from './authUser';
import getLoans from './getLoans';

export default function* rootSaga() {
    yield all([
        authUser(),
        getLoans()
    ]);
}
