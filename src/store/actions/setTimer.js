import { SET_TIME } from "./actionsTypes";

const setTimerAction = (payload) => ({
  type: SET_TIME,
  payload,
})

export default setTimerAction;