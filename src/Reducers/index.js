import {combineReducers} from 'redux'
import app from './AppReducer'
import auth from './AuthReducer'
import requests from './CustomerRequestReducer'
import requestTmp from './RequestTmpReducer'

export default combineReducers({
    app,
    requestTmp,
    auth,
    requests
})
