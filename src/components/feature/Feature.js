import React from "react";
import { Link } from "react-router-dom";
import "./Feature.css";

function Feature(props) {
	return (
		<article className="feature-item">
			<img src={props.svg} alt={props.title} className="feature-icon" />
			<h3 className="feature-item-title">{props.title}</h3>
			<p>{props.description}</p>
		</article>
	);
}

export default Feature;
