import {take, call, put, select} from 'redux-saga/effects';
import Actions from '../actions/Creators'
import Api from '../services/dataService'

export function* postProfile({data}) {
    try {
        const {token} = yield select((state) => state.auth);
        const ParseApi = new Api(token);
        const response = yield call([ParseApi, ParseApi.postProfile], data)

        yield put(Actions.postProfileSuccess(response))
        // }
    } catch (err) {
        yield put(Actions.postProfileFailure(err));
    }
}