import { OPEN_YOUTUBE_PLAYER } from "./actionsTypes";

const openYoutubeAction = (payload) => ({
  type: OPEN_YOUTUBE_PLAYER,
  payload,
})

export default openYoutubeAction;