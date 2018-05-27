import {combineReducers} from 'redux';
import redditComments from './redditComments';

const rootReducer = combineReducers({
    redditComments
});

export default rootReducer;