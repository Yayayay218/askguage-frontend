import {combineReducers} from 'redux'
import app from './AppReducer'
import auth from './AuthReducer'
import settings from './SettingReducer'
import profiles from './ProfileReducer'
import questions from './QuestionReducer'
import requests from './CustomerRequestReducer'

export default combineReducers({
    app,
    auth,
    settings,
    profiles,
    requests
})
