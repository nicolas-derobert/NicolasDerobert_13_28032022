import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import ErrorPage from "./pages/erropage/ErroPage.js";
import { useSelector } from "react-redux";


function AllRoutes() {
	const isAuth = useSelector((state) => state.auth.isAuthenticated);

	return (
		<Routes>
			<Route path="/"  element={<Home/>} />
			{!isAuth &&<Route path="/Login" element={<Login/>} />}
			{isAuth &&<Route path="/Profile" element={<Profile/>} />}
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}
export default AllRoutes;
