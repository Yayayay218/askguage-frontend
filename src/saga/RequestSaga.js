import {take, call, put, select} from 'redux-saga/effects';
import Actions from '../actions/Creators'
import Api from '../services/dataService'
// import createHistory from 'history/createBrowserHistory'
//
// const history = createHistory({forceRefresh: true});
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
        // history.push('/home')
        // }
    } catch (err) {
        yield put(Actions.postRequestFailure(err));
    }
}