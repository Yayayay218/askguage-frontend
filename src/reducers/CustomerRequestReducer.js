import Types from '../actions/Types';
import Immutable from 'seamless-immutable';
import createReducer from './CreateReducer';

export const INITIAL_STATE = Immutable({
    data: [],
    current: {},
    isFetching: false,
    isFetched: false,
    detailFetched: false,
    error: null,
});
const request = (state, action) => {
    return state.merge({
        isFetching: true,
        isFetched: false,
        error: false,
        detailFetched: false,
    });
}

const success = (state, action) => {
    return state.merge({
        data: action.response,
        current: action.response.data,
        isFetching: false,
        isFetched: true,
        error: null,
    });
}

const failure = (state, action) =>
    state.merge({
        isFetching: false,
        isFetched: false,
        detailFetched: false,
        error: true,
    });

const postRequest = (state, action) =>
    state.merge({
        isPosting: true,
        isPosted: false,
        error: null,
    });

const postRequestSuccess = (state, action) => {
    return state.merge({
        current: action.response.data,
        isPosting: false,
        isPosted: true,
        error: null,
    });
}
const postRequestFailure = (state, action) =>
    state.merge({
        isPosting: false,
        isPosted: false,
        error: action.errCode.error,
    });

const getRequestByIdSuccess = (state, action) => {
    return state.merge({
        current: action.response.data,
        isFetched: false,
        isFetching: false,
        detailFetched: true,
        error: null,
    })
}

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

    [Types.GET_REQUEST_BY_ID]: request,
    [Types.GET_REQUEST_BY_ID_SUCCESS]: getRequestByIdSuccess,
    [Types.GET_REQUEST_BY_ID_FAILURE]: failure,


};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
