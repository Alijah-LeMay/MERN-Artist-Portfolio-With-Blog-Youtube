import { combineReducers } from "redux"

// import reducers

import { userLoginReducer } from "./userReducers"

export default combineReducers({
  userLogin: userLoginReducer,
})
