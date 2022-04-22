import React, { Fragment, useState, useRef, useEffect } from "react";
import Account from "../../components/account/Account";
import "./Profile.css";
import useHttp from "../../service/use-http";
import { useDispatch } from "react-redux";
import { authProfile } from "../../store/profile";
import { useSelector } from "react-redux";

function Profile() {
	const tokenAuth = useSelector((state) => state.auth.token);
	const firstNameProfile = useSelector((state) => state.profile.firstName);
	const lastNameProfile = useSelector((state) => state.profile.lastName);

	const [isSubmit, setIsSubmit] = useState(false);

	const dispatch = useDispatch();
	const url = "http://localhost:3001/api/v1/user/";
	const loginParameter = "login";
	const signupParameter = "signup";
	const profileParameter = "profile";
	// const loginEndPoint = url + loginParameter;
	// const signupEndPoint = url + signupParameter;
	const profileEndPoint = url + profileParameter;
	const firstNameInputRef = useRef();
	const lastNameInputRef = useRef();
	const { isLoading, error, sendRequest: sendTaskRequest, data } = useHttp();
	const submitHandler = (event) => {
		console.log("Sumit execution");
		event.preventDefault();
		const enteredFirstName = firstNameInputRef.current.value;
		const enteredLastName = lastNameInputRef.current.value;
		const bodyContent = {
			firstName: `${enteredFirstName}`,
			lastName: `${enteredLastName}`,
		};
		const bearerText = "Bearer ";
		const headerContent = {
			"Content-Type": "application/json",
			Authorization: `${bearerText} ${tokenAuth}`,
		};
		sendTaskRequest({
			url: profileEndPoint,
			method: "PUT",
			headers: headerContent,
			body: bodyContent,
		});
		console.log(isLoading);
		console.log(data);
		setIsSubmit(true);
		// if (!isLoading && data.status === 200) {
		// 	dispatch(authActions.login());
		// }
	};
	const cancelHandler = (event) => {
		dispatch(
			authProfile.removeProfile()
		);
	};
	useEffect(() => {
		if (isSubmit && data.status === 200) {
			console.log(data.body.token);
			dispatch(
				authProfile.setProfile({
					firstName: `${data.body.firstName}`,
					lastName: `${data.body.lastName}`,
				})
			);
			console.log("Je suis mis a jour");
			// navigate('/profile')
		}
	}, [data]);
	return (
		<Fragment>
			<div className="bg-dark">
				<section className="header-content">
					<h1>
						Welcome back <br /> {`${firstNameProfile} ${lastNameProfile}`}!
					</h1>
					<form onSubmit={submitHandler}>
						<div className="">
							<div className="input-wrapper">
								<label>firstName</label>
								<input
									type="text"
									id="firstname"
									required
									ref={firstNameInputRef}
								/>
							</div>
							<div className="input-wrapper">
								<label>lastName</label>
								<input type="text" id="lastname" ref={lastNameInputRef} />
							</div>
						</div>
						<div className="">
							<button type="submit">Save</button>
							<button type="reset" onClick={cancelHandler}>cancel</button>
						</div>
					</form>
					<button className="edit-button">Edit Name</button>
				</section>
				<h2 className="sr-only">Accounts</h2>
				<section className="accounts">
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
