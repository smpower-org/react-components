import {createStore, combineReducers} from 'redux';
import {reducer as navigationReducer} from './navigation/';

const reducer = combineReducers({
  navigation: navigationReducer
});

export default createStore(reducer);
