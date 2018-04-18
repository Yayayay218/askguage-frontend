import {call, put, select} from 'redux-saga/effects';
import Actions from '../actions/Creators'
import Api from '../services/dataService'

export function* bidRequest({data}) {
    try {
        const {token} = yield select((state) => state.auth);
        const ParseApi = new Api(token);
        const response = yield call([ParseApi, ParseApi.bidRequest], data)
        if (response && response.error) {
            yield put(Actions.bidRequestFailure(response.error))
            return
        }
        yield put(Actions.bidRequestSuccess(response))
    } catch (err) {
        yield put(Actions.bidRequestFailure(err));
    }
}

export function* getBidRequest({data}) {
    try {
        const {token} = yield select((state) => state.auth);
        const ParseApi = new Api(token);
        const response = yield call([ParseApi, ParseApi.getBidRequest], data)
        if (response && response.error) {
            yield put(Actions.getBidRequestFailure(response.error))
            return
        }
        yield put(Actions.getBidRequestSuccess(response))
    } catch (err) {
        yield put(Actions.getBidRequestFailure(err));
    }
}