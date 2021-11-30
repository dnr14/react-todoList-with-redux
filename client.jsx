import React from "react";
import ReactDom from "react-dom";
import App from "./src/App";
import "@style/global.scss";
import store from "./src/redux-toolkit/store";
import { Provider } from "react-redux";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
