import { OPEN_YOUTUBE_PLAYER } from '../actions/actionsTypes';

const INITIAL_STATE = {
  youtube: {
    open: false,
    stopPlayer: true,
  }
}

const openYoutubeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_YOUTUBE_PLAYER:
      return { ...state, youtube: {...state.youtube, ...action.payload } }
    default:
      return state;
  }
}

export default openYoutubeReducer;