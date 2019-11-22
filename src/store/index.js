import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import user from "../reducers/userReducer";
import loans from "../reducers/loansReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas";


const rootReducer = combineReducers({
    user,
    loans
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
