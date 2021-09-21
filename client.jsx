import React from "react";
import ReactDom from "react-dom";
import App from "./src/App";
import store from "@redux/store";
import "@style/global.scss";
import { Provider } from "react-redux";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
