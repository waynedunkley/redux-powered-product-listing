import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import { ProductArchive } from "containers"

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route path="/:page" component={ProductArchive} />
            <Route path="/" component={ProductArchive} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    )
  }
}

export default Routes
