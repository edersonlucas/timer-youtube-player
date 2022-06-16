import { SET_TIME } from "../actions/actionsTypes";

const INITIAL_STATE = {
  timer: {
    hour: 0,
    min: 0,
    seg: 0,
  }
}

const timerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TIME:
      return {...state, timer: { ...action.payload } }
    default:
      return state;
  }
}

export default timerReducer;