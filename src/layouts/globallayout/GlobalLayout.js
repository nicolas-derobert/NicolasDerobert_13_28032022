import React, { Fragment } from "react";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";
import "./GlobalLayout.css";

function GlobalLayout(props) {
	return (
		<Fragment>
			<body>
				<Header></Header>
				<main className="GlobalLayout main">{props.children}</main>
				<Footer></Footer>
			</body>
		</Fragment>
	);
}

export default GlobalLayout;
