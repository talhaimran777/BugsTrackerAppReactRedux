import {createStore} from 'redux';

// Importing rootReducer
import {rootReducer} from '../reducers';

// Initializing state
const initialState = {};

// Making a store
const store = createStore(rootReducer, initialState);

export default store;