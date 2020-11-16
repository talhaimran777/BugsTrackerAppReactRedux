import {combineReducers} from 'redux';

// Importing reducers
import bugReducer from './bugReducer';

// Exporting the root reducer
export const rootReducer  = combineReducers({
    bug: bugReducer
});