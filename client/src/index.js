import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
//  import "antd/dist/antd.css";
import {composeWithDevTools} from 'redux-devtools-extension'
import { createStore , applyMiddleware } from "redux"      
import customMiddleware from "./missleware/api"   
import rootReducer from "./reducers/index"                                   
import { Provider } from "react-redux"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(customMiddleware)))

ReactDOM.render(
  // <React.StrictMode>
 
  <BrowserRouter>
    <Provider store={store}>  
      <App />
    </Provider>
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
