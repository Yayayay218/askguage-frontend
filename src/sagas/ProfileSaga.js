import {take, call, put, select} from 'redux-saga/effects';
import Actions from '../actions/Creators'
import Api from '../services/dataService'

export function* putProfile({data}) {
    try {
        const {token} = yield select((state) => state.auth);
        const ParseApi = new Api(token);
        const response = yield call([ParseApi, ParseApi.patchUser], data)
        if(response && response.error) {
            yield put(Actions.putProfileFailure(response.error))
            return
        }
        yield put(Actions.putProfileSuccess(response))
    } catch (err) {
        yield put(Actions.putProfileFailure(err));
    }
}

export function* changePassword({data}) {
    try {
        const {token} = yield select((state) => state.auth);
        const ParseApi = new Api(token);
        const response = yield call([ParseApi, ParseApi.changePassword], data)
        if(response && response.error) {
            yield put(Actions.changePasswordFailure(response.error))
            return
        }
        yield put(Actions.changePasswordSuccess(response))
    } catch (err) {
        yield put(Actions.changePasswordFailure(err));
    }
}