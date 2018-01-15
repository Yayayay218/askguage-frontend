import Types from '../Actions/Types';
import Immutable from 'seamless-immutable';
import createReducer from './CreateReducer';

export const INITIAL_STATE = Immutable({
    data: {},
    error: null,
    isFetching: false,
    isFetched: false,
});

const request = (state, action) =>
    state.merge({
        isFetching: true,
        error: null,
    });

const success = (state, action) =>
    state.merge({
        data: {...action.response},
        isFetched: true,
        isFetching: false,
        error: null,
    })

const failure = (state, action) =>
    state.merge({
        isFetching: false,
        error: true,
    })

const ACTION_HANDLERS = {
    [Types.GET_SETTINGS]: request,
    [Types.GET_SETTINGS_SUCCESS]: success,
    [Types.GET_SETTINGS_FAILURE]: failure,

};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);