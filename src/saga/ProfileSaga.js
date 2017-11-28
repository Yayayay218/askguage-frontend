import {take, call, put, select} from 'redux-saga/effects';
import Actions from '../actions/Creators'
import Api from '../services/dataService'
import createHistory from 'history/createBrowserHistory'

const history = createHistory({forceRefresh: true});
export function* putProfile({data}) {
    try {
        const {token} = yield select((state) => state.auth);
        const ParseApi = new Api(token);
        const response = yield call([ParseApi, ParseApi.putProfile], data)
        if(response && !response.success) {
            yield put(Actions.putProfileFailure(response.message))
            return
        }
        yield put(Actions.putProfileSuccess(response))
        history.push('/home')
        // }
    } catch (err) {
        yield put(Actions.putProfileFailure(err));
    }
}