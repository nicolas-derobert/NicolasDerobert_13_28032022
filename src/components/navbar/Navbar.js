import * as React from "react";
import { NavLink } from "react-router-dom";
import  "./Navbar.css";

function NavBar() {
	return (
		<section  className="Navbar ">
			<ul>
				<li>
					<NavLink
						to="/Accueil"
						className={({isActive}) => isActive ? "active" : ""}
					>
						Accueil
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/APropos"
						className={({isActive}) => isActive ? "active" : ""}
					>
						A propos
					</NavLink>
				</li>
			</ul>
		</section>
	);
}

export default NavBar;
