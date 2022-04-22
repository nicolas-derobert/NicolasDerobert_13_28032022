import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { authActions } from "../../store/auth";
import { useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
// import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from "react-redux";

function NavBar() {
	const isAuth = useSelector((state) => state.auth.isAuthenticated);
	const dispatch = useDispatch();

	return (
		<section className="Navbar ">
			{!isAuth && (
				<NavLink
					to="/login"
					className={({ isActive }) =>
						isActive ? "router-link-exact-active" : ""
					}
				>
					<Button
						size="medium"
						startIcon={<FaUserCircle />}
						className="main-nav-item"
						// href="#contained-buttons"
					>
						Sign In
					</Button>
				</NavLink>
			)}
			{isAuth && (
				<div>
					<p>Tony</p>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? "router-link-exact-active" : ""
						}
					>
						<Button
							size="medium"
							startIcon={<RiLogoutBoxRLine />}
							className="main-nav-item"
							onClick={() => {
								dispatch(authActions.logout());
							}}
						>
							Sign Out
						</Button>
					</NavLink>
				</div>
			)}
		</section>
	);
}

export default NavBar;
