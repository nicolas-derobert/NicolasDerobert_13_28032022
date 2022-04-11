import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Button from "@mui/material/Button";
import { FaUserCircle } from "react-icons/fa";

function NavBar() {
	return (
		<section className="Navbar ">
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
		</section>
	);
}

export default NavBar;
