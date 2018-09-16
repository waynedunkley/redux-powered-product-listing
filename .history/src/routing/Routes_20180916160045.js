import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import { AppLayout } from "containers"

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route path="/" component={AppLayout} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    )
  }
}

export default Routes
