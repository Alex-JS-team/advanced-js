export default function favorite(state = [], action) {
  if(action.type === 'ADD_TO_FAVORITE') {
    console.log(state, '-')
    return new Set(...state,
        action.item)


  }
  return state
}