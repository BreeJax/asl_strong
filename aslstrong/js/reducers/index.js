import { combineReducers } from 'redux';
import WordReducer from './WordReducer';

export default combineReducers({
  word: WordReducer
})
