import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { authActions } from "../../store/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";

function NavBar() {
	const firstNameProfile = useSelector((state) => state.profile.firstName);
	const isAuth = useSelector((state) => state.auth.isAuthenticated);
	const dispatch = useDispatch();

	return (
		<section className="navbar">
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
					>
						Sign In
					</Button>
				</NavLink>
			)}
			{isAuth && (
				<>
					<div className="firstname">	<FaUserCircle />
						{`${firstNameProfile}`}
					
					</div>
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
				</>
			)}
		</section>
	);
}

export default NavBar;
