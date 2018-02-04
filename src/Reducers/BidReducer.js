import Types from '../Actions/Types';
import Immutable from 'seamless-immutable';
import createReducer from './CreateReducer';

export const INITIAL_STATE = Immutable({
    data: [],
    current: {},
    isFetching: false,
    isFetched: false,
    error: null,
});
const request = (state) => {
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
        error: action.errCode.error || action.errCode,
    });

const ACTION_HANDLERS = {
    [Types.BID_REQUEST]: request,
    [Types.BID_REQUEST_SUCCESS]: success,
    [Types.BID_REQUEST_FAILURE]: failure,

    [Types.GET_BID_REQUEST]: request,
    [Types.GET_BID_REQUEST_SUCCESS]: success,
    [Types.GET_BID_REQUEST_FAILURE]: failure,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
