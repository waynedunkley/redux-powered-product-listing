import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "containers";
import store from "./redux/store";
// import registerServiceWorker from './registerServiceWorker'

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);

if (module.hot) {
  module.hot.accept("./index", () => {
    // eslint-disable-next-line global-require
    const NextApp = require("./index").default;

    ReactDOM.render(<NextApp />, rootEl);
  });
}

// registerServiceWorker()
