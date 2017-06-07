import { combineReducers } from "redux"

import board from "./boardReducer"
import game from "./gameReducer"

export default combineReducers({
  board,
  game
})