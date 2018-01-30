import {combineReducers} from 'redux'
import app from './AppReducer'
import auth from './AuthReducer'
import requests from './CustomerRequestReducer'
import requestTmp from './RequestTmpReducer'
import bids from './BidReducer'

export default combineReducers({
    app,
    requestTmp,
    auth,
    requests,
    bids
})
