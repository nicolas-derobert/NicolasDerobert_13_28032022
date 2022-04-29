import * as React from "react";
import "./App.css";
import GlobalLayout from "./layouts/globallayout/GlobalLayout";
import AllRoutes from './AllRoutes';

function App() {
	return (
		<>
			<GlobalLayout>
				<AllRoutes></AllRoutes>
			</GlobalLayout>
		</>
	);
}

export default App;