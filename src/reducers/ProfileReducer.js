import Types from '../actions/Types';
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

const postProfile = (state, action) =>
    state.merge({
        isPosting: true,
        isPosted: false,
        error: null,
    });

const postProfileSuccess = (state, action) =>
    state.merge({
        isPosting: false,
        isPosted: true,
        error: null,
    });

const postProfileFailure = (state, action) =>
    state.merge({
        isPosting: false,
        isPosted: false,
        error: action.errCode.message,
    });

const ACTION_HANDLERS = {
    [Types.POST_PROFILES]: postProfile,
    [Types.POST_PROFILES_SUCCESS]: postProfileSuccess,
    [Types.POST_PROFILES_FAILURE]: postProfileFailure,

};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
