import React from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import "./APropos.css";

function APropos() {
	const dataAPropos = [
		{
			id: "a1",
			title: "Fiabilité",

			description:
				"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
		},
		{
			id: "a2",
			title: "Respect",

			description:
				"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
		},
		{
			id: "a3",
			title: "Service",

			description:
				"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
		},
		{
			id: "a4",
			title: "Sécurité",

			description:
				"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
		},
	];

	const listOfItems = dataAPropos.map((info) => (
		<Dropdown
			display={""}
			key={info.id}
			datatype={"typeDescription"}
			data={info.description}
			header={info.title}
		></Dropdown>
	));

	return (
		<div className="apropos">
			<Jumbotron></Jumbotron>
			<div className="items">{listOfItems}</div>
		</div>
	);
}
export default APropos;
