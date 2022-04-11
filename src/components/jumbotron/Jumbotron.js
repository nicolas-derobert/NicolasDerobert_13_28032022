import React from "react";
import "./Jumbotron.css";
import AccueilImage from "../../assets/images/bank-tree.jpeg";
// import AproposImage from "../../assets/images/apropos.png";

import { useLocation } from "react-router-dom";

function Jumbotron(props) {
	return (
		<section className="jumbotron">
			<div className="hero-content" >
				<h2 className="sr-only" data-element-id="headingsMap-1">
					Promoted Content
				</h2>
				<p className="subtitle" >
					No fees.
				</p>
				<p className="subtitle" >
					No minimum deposit.
				</p>
				<p className="subtitle" >
					High interest rates.
				</p>
				<p className="text" >
					Open a savings account with Argent Bank today!
				</p>
			</div>
		</section>
	);
}

export default Jumbotron;
