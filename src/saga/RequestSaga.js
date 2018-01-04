import {take, call, put, select} from 'redux-saga/effects';
import Actions from '../actions/Creators'
import Api from '../services/dataService'
import createHistory from 'history/createBrowserHistory'
//
const history = createHistory({forceRefresh: true});
export function* postRequest({data}) {
    try {
        const {token} = yield select((state) => state.auth);
        const ParseApi = new Api(token);
        const response = yield call([ParseApi, ParseApi.postRequest], data)
        if (response && !response.success) {
            yield put(Actions.postRequestFailure(response.message))
            return
        }
        yield put(Actions.postRequestSuccess(response))
        history.push('/my-requests')
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
        const response = yield call([ParseApi, ParseApi.getRequest])
        if (response && !response.success) {
            yield put(Actions.getRequestFailure(response.message))
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