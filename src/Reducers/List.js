import { fromJS } from 'immutable';
const initState = fromJS({
  list: [],
});
const ListReducer = (state = initState, action) => {
  console.log(action.type)
  switch (action.type) {
    case 'GET_LIST_SUCCESS':
      return state.set('list',"fsfs");
    default:
      return state
  }
}

export default ListReducer