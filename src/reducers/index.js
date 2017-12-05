import {combineReducers} from 'redux'
import auth from './AuthReducer'
import settings from './SettingReducer'
import profiles from './ProfileReducer'
import questions from './QuestionReducer'
import requests from './CustomerRequestReducer'

export default combineReducers({
    auth,
    settings,
    profiles,
    requests
})
