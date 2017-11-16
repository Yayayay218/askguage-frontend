import {takeLatest, all, fork} from 'redux-saga/effects';
import Types from '../actions/Types';


import {signUp, login, getUser} from "./AuthSaga"
import {getSetting} from "./SettingSaga";
import {postProfile} from "./ProfileSaga";

export default function* root() {
    yield all([
        takeLatest(Types.SIGN_UP, signUp),
        takeLatest(Types.LOG_IN, login),
        takeLatest(Types.GET_USERS, getUser),
        takeLatest(Types.GET_SETTINGS, getSetting),
        takeLatest(Types.POST_PROFILES, postProfile)
    ])
}
