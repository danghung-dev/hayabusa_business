// import { fromJS } from 'immutable';
const initState = {
  list: []
};
const AddCompany = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_COMPANY_SUCCESS":
      return { ...state, list: action.data };
    default:
      return state;
  }
};

export default AddCompany;
