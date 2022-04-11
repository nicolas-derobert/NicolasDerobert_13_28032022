import React from "react";
import { Link } from "react-router-dom";
import "./Thumb.css";


function Thumb(props) {
	return (
		<Link  to={`/fichelogement/${props.id}`}>
		<article className="thumb">			        
			<div><img src={props.cover} alt={props.title} />
			</div>
			<h2>{props.title}</h2>
		</article></Link>
	);
}

export default Thumb;
