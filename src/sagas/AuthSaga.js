import {all, take, call, put, select} from 'redux-saga/effects';
import Actions from '../actions/Creators'
import Api from '../Services/dataService'
import createHistory from 'history/createBrowserHistory'

const history = createHistory({forceRefresh: true});

// export function* signOut() {
//     history.push('/login')
// }

export function* signUp({data}) {
    try {
        const ParseApi = new Api(null)
        const response = yield call([ParseApi, ParseApi.signUp], data)

        if (response && response.error) {
            yield put(Actions.signUpFailure(response));
            return;
        }
        else {
            yield put(Actions.signUpSuccess(response))
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
        if (response && response.error) {
            yield put(Actions.loginFailure(response));
            return;
        }
        else {
            yield put(Actions.loginSuccess(response))
        }
        // }
    } catch (err) {
        yield put(Actions.loginFailure(err));
    }
}

export function* loginFacebook({data}) {
    try {
        const ParseApi = new Api(null)
        const response = yield call([ParseApi, ParseApi.loginFacebook], data)
        if (response && response.error) {
            yield put(Actions.loginFailure(response));
            return;
        }
        else {
            yield put(Actions.loginFacebookSuccess(response))
        }
        // }
    } catch (err) {
        yield put(Actions.loginFailure(err));
    }
}

export function* getUser({data}) {
    try {
        const {token} = yield select((state) => state.auth);
        const ParseApi = new Api(token);
        const response = yield call([ParseApi, ParseApi.getUser], data);
        if(response && response.error) {
            return yield put(Actions.getUserFailure(response.error))
        }
        yield put(Actions.getUserSuccess(response))

    } catch (err) {
        yield put(Actions.getUserFailure(err))
    }
}

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