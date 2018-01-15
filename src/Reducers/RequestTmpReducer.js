import Types from '../Actions/Types';
import Immutable from 'seamless-immutable';
import createReducer from './CreateReducer';

export const INITIAL_STATE = Immutable({
    data: {},
    isDone: false
});

const setRequestTmp = (state, action) => {
    return state.merge({
        data: action.data,
        isDone: true
    });
}

const ACTION_HANDLERS = {
    [Types.SET_REQUEST_TMP]: setRequestTmp,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);