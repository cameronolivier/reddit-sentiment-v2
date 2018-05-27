import initialState from './initialState';
import {FETCH_COMMENTS, RECEIVE_COMMENTS} from '../actions/actionTypes';

const redditComments = (state = initialState.redditComments, action) => {
    switch (action.type) {
        case FETCH_COMMENTS:
            return {
                ...state,
                fetchingComments:true
            };
        case RECEIVE_COMMENTS:
            return {
                ...state,
                comments: action.comments,
                fetchingComments: false,
            };

        default:
            return state;

    }
};

export default redditComments;