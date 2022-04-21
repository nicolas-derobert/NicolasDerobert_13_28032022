import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
// import "./index.css";
import App from "./App";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
			/>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
