import { put, call, select } from 'redux-saga/effects';
import {push} from 'react-router-redux'

export function * startUp (action) {
    const { isLogged, data, token } = yield select((state) => state.login);
    console.log(token);
    if (token) {
        yield put(push('/home'));
    } else {
        yield put(push('/login'));
    }
}