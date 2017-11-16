import Types from '../actions/Types';
import Immutable from 'seamless-immutable';
import createReducer from './CreateReducer';

export const INITIAL_STATE = Immutable({
    message: '',
    active: false
});

const startUp = (state, action) => {
    console.log('as')
    return state.merge({
    });
}

const toggleMessage = (state, action) => {
    console.log('vvvv')
    return state.merge({
        message: action.message,
        active: !state.active
    });
}

const setAppProps = (state, action) => {
    console.log('ccc')
    return state.merge({
        ...state, ...action.data
    });
}

const ACTION_HANDLERS = {
    [Types.STARTUP]: startUp,
    [Types.TOGGLE_MESSAGE]: toggleMessage,
    [Types.SET_APP_PROPS]: setAppProps,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);