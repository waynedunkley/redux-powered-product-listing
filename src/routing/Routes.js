import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import { Home } from "containers"

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    )
  }
}

export default Routes
