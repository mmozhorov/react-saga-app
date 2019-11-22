import { put, call, takeEvery } from 'redux-saga/effects';
import userActions from "../constants/auth";
import { getAuth } from "../api/auth";
import { userSuccess, userFailed } from '../actions/userAC';

export function* getUser(action) {
    try {
        const user = yield call(getAuth, action.data);
        localStorage.setItem("token", user.data.data.token);
        yield put(userSuccess(user));
    } catch (error) {
        yield put(userFailed(error.toString()));
    }
}

export default function* User() {
    yield takeEvery(userActions.AUTH_REQUEST, getUser);
}