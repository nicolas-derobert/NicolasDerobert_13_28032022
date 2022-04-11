import React, { Fragment, useState } from "react";
import Account from "../../components/account/Account";
import "./Profile.css";

function Profile() {
	return (
		<Fragment>
			<div className="bg-dark">
				<section class="header-content">
					<h1>
						Welcome back <br /> Tony Jarvis!
					</h1>
					<button class="edit-button">Edit Name</button>
				</section>
				<h2 class="sr-only">Accounts</h2>
				<section class="accounts">
					<Account
						title="Argent Bank Checking (x8349)"
						amount="2,082.79"
						description="Current Balance"
					/>
					<Account
						title="Argent Bank Checking (x8349)"
						amount="2,082.79"
						description="Current Balance"
					/>
					<Account
						title="Argent Bank Checking (x8349)"
						amount="2,082.79"
						description="Current Balance"
					/>
				</section>
			</div>
		</Fragment>
	);
}
export default Profile;
