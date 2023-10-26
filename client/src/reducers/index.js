import { combineReducers } from 'redux';
import NewsReducer from './news';

export default combineReducers({
  News: NewsReducer,
});
