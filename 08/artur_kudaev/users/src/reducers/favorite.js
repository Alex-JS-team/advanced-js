export default function favorite(state = [], action) {
  if(action.type === 'ADD_TO_FAVORITE') {
    let index = state.includes(action.item)
    if(!index) {
      return [
        ...state,
        action.item
      ]
    }else {
      return [
          ...state
      ]
    }

  }
  if(action.type === 'GET_FAVORITE_ARR_FROM_LOCALE_STORAGE') {
    return action.arr.split(',')
  }
  if(action.type === 'DELETE_FROM_FAVORITE') {
    const newArr = state.filter(el=> action.item !== el);
    return newArr
  }
  return state
}