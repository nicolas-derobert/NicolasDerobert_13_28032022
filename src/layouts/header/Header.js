import React, { Component } from "react";
import NavBar from "../../components/navbar/Navbar";
import KasaLogo from "../../assets/images/";
import "./Header.css";


export class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="header-logo">
					<img src={KasaLogo} alt="Kasa Logo" />
				</div>
				<NavBar></NavBar>
			</header>
		);
	}
}

export default Header;
