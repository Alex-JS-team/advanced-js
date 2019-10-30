export default function totalPage(state = 1, action) {
  if(action.type === 'SET_TOTAL_PAGE') {
    return action.page
  }
  return state
}