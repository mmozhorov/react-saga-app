import { all } from 'redux-saga/effects';
import authUser from './authUser';

export default function* rootSaga() {
    yield all([
        authUser()
    ]);
}
