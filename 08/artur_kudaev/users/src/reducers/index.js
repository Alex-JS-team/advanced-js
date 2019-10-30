import { combineReducers } from 'redux';
import data from './data';
import favorite from './favorite';
import totalPage from './totalPage';
import token from './token';
import countPageItems from './countPageItems'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  routing: routerReducer,
  favorite,
  data,
  totalPage,
  token,
  countPageItems
})