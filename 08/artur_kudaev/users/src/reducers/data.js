export default function data(state = [], action) {
  if(action.type === 'SET_DATA') {
    return action.value
  }
  return state
}