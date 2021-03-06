import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// Redux
import { Provider } from "react-redux"
import store from "./store"

// Screens
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from "./screens/LoginScreen"

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/login" component={LoginScreen} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
