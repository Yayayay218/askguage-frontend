import {combineReducers} from 'redux'
import app from './AppReducer'
import auth from './AuthReducer'
import requests from './CustomerRequestReducer'
import requestTmp from './RequestTmpReducer'
import bids from './BidReducer'
import userActions from './ProfileReducer'
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    app,
    requestTmp,
    auth,
    requests,
    bids,
    userActions,
    form: formReducer
})
