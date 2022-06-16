import { EDIT_CUSTOM_URL } from "../actions/actionsTypes";

const INITIAL_STATE = {
  editCustomUrl: {
    open: false,
    customUrl: '',
  }
}

const editCustomUrlReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EDIT_CUSTOM_URL:
      return {...state, editCustomUrl: {...state.editCustomUrl, ...action.payload }}
    default:
      return state;
  }
}

export default editCustomUrlReducer;