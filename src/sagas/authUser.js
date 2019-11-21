import { put, call, takeEvery } from 'redux-saga/effects';
import { userActions } from "../constants/auth";
import {getFilteredActiveDriversRequest} from "../api/getFilteredActiveDrivers";
import { getFilteredActiveDriversSuccess, getFilteredActiveDriversFailure } from '../actions/driversFilters/driversFiltersAC';

export function* getUser(action) {
    try {
        const user = yield call(getFilteredActiveDriversRequest, action.data);
        yield put(getFilteredActiveDriversSuccess(user));
    } catch (error) {
        yield put(getFilteredActiveDriversFailure(error.toString()));
    }
}

export default function* getActiveDrivers() {
    yield takeEvery(userActions.AUTH_REQUEST, getUser);
}