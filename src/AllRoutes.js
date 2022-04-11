import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import ErrorPage from "./pages/erropage/ErroPage.js";

function AllRoutes() {
	return (
		<Routes>
			<Route path="/"  element={<Home/>} />
			<Route path="/Login" element={<Login/>} />
			<Route path="/Profile" element={<Profile/>} />
			{/* <Route
				path="/fichelogement/:FicheLogementId"
				element={<FicheLogement />}
			/> */}
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}
export default AllRoutes;
