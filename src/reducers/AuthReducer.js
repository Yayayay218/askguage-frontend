import Types from '../actions/Types';
import Immutable from 'seamless-immutable';
import createReducer from './CreateReducer';

export const INITIAL_STATE = Immutable({
    data: {},
    error: null,
    isLogged: false,
    isLogin: false,
    token: null,
    role: null,
    hasProfile: false,
    isSignup: false,
});

const signOut = (state, action) => {
    return state.merge({
        data: {},
        error: null,
        isLogged: false,
        isLogin: false,
        token: null,
        role: null,
        hasProfile: false,
        isSignup: false,
    })
}

const signUp = (state, action) => {
    return state.merge({
        error: null,
        signInType: null,
        fbToken: null,
        isLogin: false,
        isSignup: true
    });
}

const signUpSuccess = (state, action) =>
    state.merge({
        isLogged: false,
        isLogin: false,
        isSignup: true
    });

const signUpFailure = (state, action) =>
    state.merge({
        isLogged: false,
        isLogin: false,
        editing: false,
        isSignup: false,
        error: action.errCode.errors
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
        isLogged: true,
        isLogin: false,
        signInType: Types.LOG_IN,
        token: action.response.token,
    });

const loginFailure = (state, action) =>
    state.merge({
        isLogged: false,
        isLogin: false,
        error: action.errCode.errors,
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
        data: {...action.response},
        isLogged: true,
        isLogin: false,
        error: null,
        hasProfile: !!action.response.data.profiles
    });

const getUserFailure = (state, action) =>
    state.merge({
        isLogged: false,
        isLogin: false,
        error: action.errCode.message,
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
    [Types.GET_USERS_FAILURE]: getUserFailure
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);