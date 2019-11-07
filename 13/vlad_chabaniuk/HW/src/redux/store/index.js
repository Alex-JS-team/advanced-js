import { createStore } from 'redux'
import rootReducer from '../reducers/index'

const store = createStore(rootReducer)

export const mapStateToProps = state => ({ favRepos: state.favRepos })

export const mapDispatchToProps = dispatch => ({
  addToFav: data => dispatch({ type: 'ADD_TO_FAV', payload: { ...data } }),
  removeFromFav: id => dispatch({ type: 'REMOVE_FROM_FAV', payload: { id } })
})

export default store
