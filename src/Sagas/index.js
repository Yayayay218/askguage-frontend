import {takeLatest, all, fork} from 'redux-saga/effects';
import Types from '../Actions/Types';


import {signUp, login, getUser, putProfile, loginFacebook} from "./AuthSaga"
import {getSetting} from "./SettingSaga";
// import {putProfile} from "./ProfileSaga";
import {getQuestions} from "./QuestionSaga"
import {postRequest, getRequest, putRequest, getRequestById, matchRequest} from "./RequestSaga";
import {bidRequest, getBidRequest} from "./BidSaga";
import {changePassword} from "./ProfileSaga";

export default function* root() {
    yield all([
        // takeLatest(Types.SIGN_OUT, signOut),
        takeLatest(Types.SIGN_UP, signUp),
        takeLatest(Types.LOG_IN, login),
        takeLatest(Types.GET_USERS, getUser),
        takeLatest(Types.GET_SETTINGS, getSetting),
        takeLatest(Types.PUT_PROFILES, putProfile),
        takeLatest(Types.GET_QUESTIONS, getQuestions),
        takeLatest(Types.POST_REQUEST, postRequest),
        takeLatest(Types.GET_REQUEST, getRequest),
        takeLatest(Types.MATCH_REQUEST, matchRequest),
        takeLatest(Types.PUT_REQUEST, putRequest),
        takeLatest(Types.GET_REQUEST_BY_ID, getRequestById),
        takeLatest(Types.BID_REQUEST, bidRequest),
        takeLatest(Types.GET_BID_REQUEST, getBidRequest),
        takeLatest(Types.CHANGE_PASSWORD, changePassword),
        takeLatest(Types.LOGIN_FACEBOOK, loginFacebook),
    ])
}
