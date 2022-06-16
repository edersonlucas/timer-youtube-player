import { EDIT_CUSTOM_URL } from "./actionsTypes";

const editCustomUrlAction = (payload) => ({
  type: EDIT_CUSTOM_URL,
  payload,
})

export default editCustomUrlAction;