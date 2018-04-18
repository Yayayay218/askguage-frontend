import {call, put, select} from 'redux-saga/effects';
import Actions from '../actions/Creators'
import Api from '../Services/dataService'

export function* postRequest({data}) {
    try {
        const {token} = yield select((state) => state.auth);
        const ParseApi = new Api(token);
        const response = yield call([ParseApi, ParseApi.postRequest], data)
        if (response && response.error) {
            yield put(Actions.postRequestFailure(response.error))
            return
        }
        yield put(Actions.postRequestSuccess(response))
        // history.push('/my-requests')
        // }
    } catch (err) {
        yield put(Actions.postRequestFailure(err));
    }
}

export function* putRequest({data}) {
    try {
        const {token} = yield select((state) => state.auth);
        const ParseApi = new Api(token);
        const response = yield call([ParseApi, ParseApi.putRequest], data)
        if (response && !response.success) {
            yield put(Actions.putProfileFailure(response.message))
            return
        }
        yield put(Actions.putRequestSuccess(response))
        // history.push('/my-requests')
        // }
    } catch (err) {
        yield put(Actions.putRequestFailure(err));
    }
}

export function* getRequest({data}) {
    try {
        const {token} = yield select((state) => state.auth);
        const ParseApi = new Api(token);
        const response = yield call([ParseApi, ParseApi.getRequest], data)
        if (response && response.error) {
            yield put(Actions.getRequestFailure(response.error))
            return
        }
        yield put(Actions.getRequestSuccess(response))
        // history.push('/home')
        // }
    } catch (err) {
        yield put(Actions.getRequestFailure(err));
    }
}

export function* getRequestById({data}) {
    try {
        const ParseApi = new Api(null);
        const response = yield call([ParseApi, ParseApi.getRequestById], data)
        if (response && response.errors) {
            yield put(Actions.getRequestByIdFailure(response))
            return
        }
        yield put(Actions.getRequestByIdSuccess(response))
        // history.push('/home')
        // }
    } catch (err) {
        yield put(Actions.getRequestByIdFailure(err));
    }
}

export function* matchRequest({data}) {
    try {
        const {token} = yield select((state) => state.auth);
        const ParseApi = new Api(token);
        const response = yield call([ParseApi, ParseApi.matchRequest], data)
        if (response && response.error) {
            yield put(Actions.matchRequestFailure(response.error))
            return
        }
        yield put(Actions.matchRequestSuccess(response))
    } catch (err) {
        yield put(Actions.matchRequestFailure(err));
    }
}
