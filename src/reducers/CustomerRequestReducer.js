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
    isFetched: false,
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
        isFetched: false,
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
        isFetched: true,
        error: null,
    });
}

const failure = (state, action) =>
    state.merge({
        isFetching: false,
        isFetched: false,
        error: true,
    });

const postRequest = (state, action) =>
    state.merge({
        isPosting: true,
        isPosted: false,
        error: null,
    });

const postRequestSuccess = (state, action) =>
    state.merge({
        current: action.response.data,
        isPosting: false,
        isPosted: true,
        error: null,
    });

const postRequestFailure = (state, action) =>
    state.merge({
        isPosting: false,
        isPosted: false,
        error: action.errCode.message,
    });

const ACTION_HANDLERS = {
    [Types.POST_REQUEST]: postRequest,
    [Types.POST_REQUEST_SUCCESS]: postRequestSuccess,
    [Types.POST_REQUEST_FAILURE]: postRequestFailure,

    [Types.GET_REQUEST]: request,
    [Types.GET_REQUEST_SUCCESS]: success,
    [Types.GET_REQUEST_FAILURE]: failure,

    [Types.PUT_REQUEST]: postRequest,
    [Types.PUT_REQUEST_SUCCESS]: postRequestSuccess,
    [Types.PUT_REQUEST_FAILURE]: postRequestFailure,

};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
