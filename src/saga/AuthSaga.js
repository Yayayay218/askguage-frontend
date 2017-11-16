import {take, call, put, select} from 'redux-saga/effects';
import Actions from '../actions/Creators'
import Api from '../services/dataService'
import createHistory from 'history/createBrowserHistory'

const history = createHistory({forceRefresh:true});


export function* signUp({data}) {
    try {
        const ParseApi = new Api(null)
        const response = yield call([ParseApi, ParseApi.signUp], data)

        if (response && response.success == false || response.errors) {
            yield put(Actions.signUpFailure(response));
            return;
        }
        else {
            yield put(Actions.signUpSuccess(response))
            history.push('/login')
        }
        // }
    } catch (err) {
        yield put(Actions.signUpFailure(err));
    }
}

export function* login({data}) {
    try {
        const ParseApi = new Api(null)
        const response = yield call([ParseApi, ParseApi.login], data)
        if (response && response.success == false || response.errors) {
            yield put(Actions.loginFailure(response));
            return;
        }
        else {
            yield put(Actions.loginSuccess(response))
            history.push('/profile')
        }
        // }
    } catch (err) {
        yield put(Actions.loginFailure(err));
    }
}

export function* getUser() {
    try {
        const {token} = yield select((state) => state.auth);
        const ParseApi = new Api(token);
        const response = yield call([ParseApi, ParseApi.getUser]);
        // if(!response) {
        //     yield put(Actions.getUserFailure(response))
        // }
        yield put(Actions.getUserSuccess(response))

    } catch (err) {
        console.log(err)
        yield put(Actions.getUserFailure(err))
    }
}