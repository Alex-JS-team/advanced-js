import { getFavReposFromLS } from '../../javascripts/utils'

const initialState = {
  favRepos: getFavReposFromLS(localStorage)
}

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_TO_FAV':
      return {
        ...state,
        favRepos: [...state.favRepos, payload]
      }
    case 'REMOVE_FROM_FAV':
      return {
        ...state,
        favRepos: state.favRepos.filter(repo => repo.id !== payload.id)
      }
    default:
      return state
  }
}

export default rootReducer
