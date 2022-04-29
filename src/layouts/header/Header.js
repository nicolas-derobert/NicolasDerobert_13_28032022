import React from "react";
import NavBar from "../../components/navbar/Navbar";
import Logo from "../../assets/images/argentBankLogo.png";
import "./Header.css";

function Header() {
	return (
		<header className="header">
			<div className="main-nav-logo">
				<img src={Logo} alt="Logo" className="main-nav-logo-image" />
				<h1 className="sr-only" data-element-id="headingsMap-0">
					Argent Bank
				</h1>
			</div>
			<NavBar></NavBar>
		</header>
	);
}

export default Header;
