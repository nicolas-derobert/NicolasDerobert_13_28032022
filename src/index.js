
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
      <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
