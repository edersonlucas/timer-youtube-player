import { combineReducers } from "redux";
import timerReducer from './timerReducer';
import openYoutubeReducer from './openYoutubeReducer';
import editCustomUrlReducer from './editCustomUrlReducer'

const rootReducer = combineReducers({ timerReducer, openYoutubeReducer, editCustomUrlReducer });

export default rootReducer;