import createAction from './CreateAction';
import Types from './Types';

// const startUp = () => createAction(Types.STARTUP);
// const toggleMessage = (message) => createAction(Types.TOGGLE_MESSAGE, {message});
// const setAppProps = (data) => createAction(Types.SET_APP_PROPS, {data});

const signUp = (data) => createAction(Types.SIGN_UP, {data});
const signUpSuccess = (response) => createAction(Types.SIGN_UP_SUCCESS, {response});
const signUpFailure = (errCode) => createAction(Types.SIGN_UP_FAILURE, {errCode});

const login = (data) => createAction(Types.LOG_IN, {data});
const loginSuccess = (response) => createAction(Types.LOG_IN_SUCCESS, {response});
const loginFailure = (errCode) => createAction(Types.LOG_IN_FAILURE, {errCode})

const getUser = (data) => createAction(Types.GET_USERS, {data});
const getUserSuccess = (response) => createAction(Types.GET_USERS_SUCCESS, {response})
const getUserFailure = (errCode) => createAction(Types.GET_USERS_FAILURE, {errCode})

const postProfile = (data) => createAction(Types.POST_PROFILES, {data});
const postProfileSuccess = (response) => createAction(Types.POST_PROFILES_SUCCESS, {response});
const postProfileFailure = (errCode) => createAction(Types.POST_PROFILES_FAILURE, {errCode});

const getSetting = (data) => createAction(Types.GET_SETTINGS, {data});
const getSettingSuccess = (response) => createAction(Types.GET_SETTINGS_SUCCESS, {response});
const getSettingFailure = (errCode) => createAction(Types.GET_SETTINGS_FAILURE, {errCode});

// const getLanguages = (languages) => createAction(Types.GET_LANGUAGES, {languages});
// const getLanguagesSuccess = (resLanguage) => createAction(Types.GET_LANGUAGES_SUCCESS, {resLanguage});
// const getLanguagesFailure = (errCode) => createAction(Types.GET_LANGUAGES_FAILURE, {errCode});

export default {
    signUp,
    signUpSuccess,
    signUpFailure,

    login,
    loginSuccess,
    loginFailure,

    getUser,
    getUserSuccess,
    getUserFailure,

    postProfile,
    postProfileSuccess,
    postProfileFailure,

    getSetting,
    getSettingSuccess,
    getSettingFailure

    // getServices,
    // getServicesSuccess,
    // getServicesFailure,
    //
    // getLanguages,
    // getLanguagesSuccess,
    // getLanguagesFailure
}