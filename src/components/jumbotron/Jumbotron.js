import React from "react";
import "./Jumbotron.css";

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
