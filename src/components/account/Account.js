import React from "react";
import { Link } from "react-router-dom";
import "./Account.css";

function Account(props) {
	return (
		<article className="account">
			<div class="account-content-wrapper">
				<h3 class="account-title">{props.title}</h3>
				<p class="account-amount">{props.amount}</p>
				<p class="account-amount-description">{props.description}</p>
			</div>
			<div class="account-content-wrapper cta">
				<button class="transaction-button">View transactions</button>
			</div>
		</article>
	);
}

export default Account;
