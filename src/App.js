import * as React from "react";
import "./App.css";
import GlobalLayout from "./layouts/globallayout/GlobalLayout";
import AllRoutes from './AllRoutes';

import "./App.css";


function App() {
	return (
		<div className="App">
			<GlobalLayout>
				<AllRoutes></AllRoutes>
			</GlobalLayout>
		</div>
	);
}

export default App;