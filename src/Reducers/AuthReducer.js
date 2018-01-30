import Types from '../Actions/Types';
import Immutable from 'seamless-immutable';
import createReducer from './CreateReducer';

export const INITIAL_STATE = Immutable({
    data: {},
    error: null,
    isLogged: false,
    isLogin: false,
    token: null,
    hasProfile: false,
    isSignup: false,
    signUpDone: false,
});

const signOut = (state, action) => {
    return state.merge({
        data: {},
        error: null,
        isLogged: false,
        isLogin: false,
        token: null,
        role: null,
        isSignup: false,
    })
}

const signUp = (state, action) => {
    return state.merge({
        error: null,
        signInType: null,
        fbToken: null,
        isLogin: false,
        isSignup: true,
        signUpDone: false,
    });
}

const signUpSuccess = (state, action) =>
    state.merge({
        isSignup: false,
        signUpDone: true,
        userId: action.response.id
    });

const signUpFailure = (state, action) =>
    state.merge({
        signUpDone: false,
        isSignup: false,
        error: action.errCode.error
    });

const login = (state, action) =>
    state.merge({
        isLogged: false,
        isLogin: true,
        error: null,
        hasProfile: false
    });


const loginSuccess = (state, action) =>
    state.merge({
        data: action.response.user,
        isLogged: true,
        isLogin: false,
        signInType: Types.LOG_IN,
        token: action.response.id,
    });

const loginFailure = (state, action) =>
    state.merge({
        isLogged: false,
        isLogin: false,
        error: action.errCode.error,
        editing: false,
    });

const getUser = (state, action) =>
    state.merge({
        isLogged: true,
        isLogin: false,
        error: null,
    });

const getUserSuccess = (state, action) =>
    state.merge({
        data: action.response,
        isLogged: true,
        isLogin: false,
        error: null,
    });

const getUserFailure = (state, action) =>
    state.merge({
        isLogged: false,
        isLogin: false,
        error: action.errCode.error,
    });

const putProfile = (state) =>
    state.merge({
        isPosting: true,
        isPosted: false,
        error: null,
    });

const putProfileSuccess = (state, action) =>
    state.merge({
        data: action.response,
        isPosting: false,
        isPosted: true,
        error: null,
    });

const putProfileFailure = (state, action) =>
    state.merge({
        isPosting: false,
        isPosted: false,
        error: action.errCode.error,
    });

const ACTION_HANDLERS = {
    [Types.SIGN_OUT]: signOut,
    [Types.SIGN_UP]: signUp,
    [Types.SIGN_UP_SUCCESS]: signUpSuccess,
    [Types.SIGN_UP_FAILURE]: signUpFailure,

    [Types.LOG_IN]: login,
    [Types.LOG_IN_SUCCESS]: loginSuccess,
    [Types.LOG_IN_FAILURE]: loginFailure,

    [Types.GET_USERS]: getUser,
    [Types.GET_USERS_SUCCESS]: getUserSuccess,
    [Types.GET_USERS_FAILURE]: getUserFailure,

    [Types.PUT_PROFILES]: putProfile,
    [Types.PUT_PROFILES_SUCCESS]: putProfileSuccess,
    [Types.PUT_PROFILES_FAILURE]: putProfileFailure
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);