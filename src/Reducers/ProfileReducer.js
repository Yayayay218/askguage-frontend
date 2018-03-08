import Types from '../Actions/Types';
import Immutable from 'seamless-immutable';
import createReducer from './CreateReducer';

export const INITIAL_STATE = Immutable({
    data: [],
    limit: 10,
    page: 0,
    pages: 1,
    total: 0,
    current: {},
    isFetching: false,
    isFull: false,
    error: null,
});
const request = (state, action) => {
    if (state.page === state.pages && !action.data)
        return state.merge({
            isFull: true
        });
    return state.merge({
        limit: action.data ? 10 : state.limit,
        page: action.data ? 1 : state.page + 1,
        pages: action.data ? 1 : state.pages,
        total: action.data ? 0 : state.total,
        data: action.data ? [] : [...state.data],
        isFull: false,
        isFetching: true,
        error: false
    });
}

const success = (state, action) => {
    return state.merge({
        data: state.isFull ? state.data : [...state.data, ...action.response.data],
        limit: action.response.limit,
        page: action.response.page,
        pages: action.response.pages,
        total: action.response.total,
        isFetching: false,
        error: null,
    });
}

const failure = (state, action) =>
    state.merge({
        isFetching: false,
        error: true,
    });

const putProfile = (state, action) =>
    state.merge({
        isPosting: true,
        isPosted: false,
        error: null,
    });

const putProfileSuccess = (state, action) =>
    state.merge({
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

const changePassword = (state, action) =>
    state.merge({
        isFetching: true,
        isFetched: false,
        error: null,
    });
const changePasswordSuccess = (state, action) =>
    state.merge({
        isFetching: false,
        isFetched: true,
        error: null,
    });

const changePasswordFailure = (state, action) =>
    state.merge({
        isFetching: false,
        isFetched: false,
        error: action.errCode,
    });

const ACTION_HANDLERS = {
    [Types.PUT_PROFILES]: putProfile,
    [Types.PUT_PROFILES_SUCCESS]: putProfileSuccess,
    [Types.PUT_PROFILES_FAILURE]: putProfileFailure,

    [Types.CHANGE_PASSWORD]: changePassword,
    [Types.CHANGE_PASSWORD_SUCCESS]: changePasswordSuccess,
    [Types.CHANGE_PASSWORD_FAILURE]: changePasswordFailure,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
