import React, { Fragment } from "react";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import "./GlobalLayout.css"

function GlobalLayout(props) {
	return (
		<Fragment>
			<Header></Header>
			<main className="GlobalLayout">{props.children}</main>
			<Footer></Footer>
		</Fragment>
	);
}

export default GlobalLayout;
