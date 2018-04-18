import {take, call, put, select} from 'redux-saga/effects';
import Actions from '../actions/Creators'
import Api from '../services/dataService'

export function* getSetting({data}) {
    try {
        const ParseApi = new Api(null);
        const response = yield call([ParseApi, ParseApi.getSettings]);
        if(response && !response.success)
            return yield put(Actions.getSettingFailure(response.message))
        yield put(Actions.getSettingSuccess(response.data));

    } catch (err) {
        yield put(Actions.getSettingFailure(err));
    }
}
// export function* getService({data}) {
//     try {
//         const ParseApi = new Api(null);
//         const service = yield call([ParseApi, ParseApi.getServices]);
//         yield put(actions.getServicesSuccess(service));
//
//     } catch (err) {
//         yield put(actions.getServicesFailure(err));
//     }
// }
//
// export function* getLanguages({data}) {
//     try {
//         const ParseApi = new Api(null);
//         const response = yield call([ParseApi, ParseApi.getLanguages]);
//         yield put(actions.getLanguagesSuccess(response));
//
//     } catch (err) {
//         yield put(actions.get(err));
//     }
// }