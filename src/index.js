import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}><BrowserRouter>
    <App />
</BrowserRouter></Provider>, rootElement);
