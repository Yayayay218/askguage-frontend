import {take, call, put, select} from 'redux-saga/effects';
import Actions from '../actions/Creators'
import Api from '../services/dataService'
// import createHistory from 'history/createBrowserHistory'
//
// const history = createHistory({forceRefresh: true});
export function* getQuestions({data}) {
    try {
        const ParseApi = new Api(null);
        const response = yield call([ParseApi, ParseApi.getQuestions])
        if(response && !response.success) {
            yield put(Actions.getQuestionsFailure(response.message))
            return
        }
        yield put(Actions.getQuestionsSuccess(response))
        // history.push('/home')
        // }
    } catch (err) {
        yield put(Actions.getQuestionsFailure(err));
    }
}