export default function countPageItems(state = '30', action) {
  if(action.type === 'SET_COUNT_PAGE_ITEMS') {
    return action.value
  }
  return state
}