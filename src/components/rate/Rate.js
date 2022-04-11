import React from "react";
import Star from "../star/Star";
import "./Rate.css";

function Rate(props) {
    const filledStar = parseInt(props.rating) ;
    const totalNumberOfStar = 5;
    let emptyStar = totalNumberOfStar - filledStar;

	return (
		<div className="rate">
           { [...Array(filledStar)].map((e, index) => <Star status="filled" key={index}></Star>)}
           { [...Array(emptyStar)].map((e, index) => <Star status="empty" key={index}></Star>)}
		</div>
	);
}

export default Rate;
