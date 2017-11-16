import {combineReducers} from 'redux'
import auth from './AuthReducer'
import settings from './SettingReducer'
import profiles from './ProfileReducer'

export default combineReducers({
    auth,
    settings,
    profiles
})
