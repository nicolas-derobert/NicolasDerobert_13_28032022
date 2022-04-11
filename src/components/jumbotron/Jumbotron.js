import React from "react";
import "./Jumbotron.css";
import AccueilImage from "../../assets/images/jumbotron-image.jpg";
import AproposImage from "../../assets/images/apropos.png";

import { useLocation } from 'react-router-dom'



function Jumbotron(props) {
	const location = useLocation().pathname;
	console.log(location)
	return (
		<section className="jumbotron">
			<div>
				<img src={location ==="/Accueil" ? AccueilImage :AproposImage} alt="Kasa Logo" />
				<h1>{props.title}</h1>
			</div>
		</section>
	);
}

export default Jumbotron;
