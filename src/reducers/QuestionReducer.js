import Types from '../actions/Types';
import Immutable from 'seamless-immutable';
import createReducer from './CreateReducer';

export const INITIAL_STATE = Immutable({
    data: [],
    isFetched: false,
    isFetching: false,
    error: null,
});

const getQuestions = (state, action) => {
    return state.merge({
        error: null,
        isFetching: true,
        isFetched: false
    });
}

const getQuestionsSuccess = (state, action) => {
    return state.merge({
        data: [...action.response.data],
        error: null,
        isFetching: false,
        isFetched: true
    });
}

const getQuestionsFailure = (state, action) => {
    return state.merge({
        error: action.errCode.message,
        isFetching: false,
        isFetched: false
    });
}


const ACTION_HANDLERS = {
    [Types.GET_QUESTIONS]: getQuestions,
    [Types.GET_QUESTIONS_SUCCESS]: getQuestionsSuccess,
    [Types.GET_QUESTIONS_FAILURE]: getQuestionsFailure

};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);