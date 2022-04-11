import React, { Fragment } from "react";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import Gallery from "../../layouts/gallery/Gallery";

function Accueil() {
	const image = "jumbotron-image.jpg"
	const title = "Chez vous et partout ailleurs"
	return (
		<Fragment>
			<Jumbotron title={title} imageurl={image} ></Jumbotron>
			<Gallery></Gallery>
		</Fragment>
	);
}

export default Accueil;
