import { combineReducers } from 'redux';
import data from './data';
import favorite from './favorite'

export default combineReducers({
  favorite,
  data
})