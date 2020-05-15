import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { Provider } from "react-redux"; // step 4
import { createStore } from "redux"; // step 1
import Reducer from "./reducer/Reducer"; //step 2

const store = createStore(Reducer); //step 3
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
