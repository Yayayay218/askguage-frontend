import {combineReducers} from 'redux'
import app from './AppReducer'
import auth from './AuthReducer'
import settings from './SettingReducer'
import profiles from './ProfileReducer'
import requests from './CustomerRequestReducer'
import requestTmp from './RequestTmpReducer'

export default combineReducers({
    app,
    requestTmp,
    auth,
    settings,
    profiles,
    requests
})
