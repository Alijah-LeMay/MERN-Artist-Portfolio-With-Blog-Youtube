import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

import thunk from "redux-thunk"
import rootReducer from "./reducers"

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const initialState = { userlogin: { userInfoFromStorage } }

const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
