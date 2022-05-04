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
	const [isEditMode, setIsEditMode] = useState(false);
	const [isSubmit, setIsSubmit] = useState(false);

	const dispatch = useDispatch();
	const url = "http://localhost:3001/api/v1/user/";
	const profileParameter = "profile";
	const profileEndPoint = url + profileParameter;
	const firstNameInputRef = useRef();
	const lastNameInputRef = useRef();
	const { isLoading, error, sendRequest: sendTaskRequest, data } = useHttp();
	const submitHandler = (event) => {
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
		setIsSubmit(true);
		setIsEditMode(false)
	};
	const cancelHandler = (event) => {
		dispatch(authProfile.removeProfile());
		setIsEditMode(false)
	};
	const editHandler = (event) => {
		setIsEditMode(true)
	};
	
	useEffect(() => {
		if (isSubmit && data.status === 200) {
			dispatch(
				authProfile.setProfile({
					firstName: `${data.body.firstName}`,
					lastName: `${data.body.lastName}`,
				})
			);
		}
	}, [data]);
	return (
		<Fragment>
			<div className="bg-dark profile">
				<section className="header-content">
					<h1>
						Welcome back <br /> {`${firstNameProfile} ${lastNameProfile}`}!
					</h1>
					{isEditMode && <form onSubmit={submitHandler}>
						<div className="input-area">
							<div className="input-wrapper">
								<input
									placeholder="Tony"
									type="text"
									id="firstname"
									required
									ref={firstNameInputRef}
								/>
							</div>
							<div className="input-wrapper">
								<input 
								placeholder="Jarvis" type="text" id="lastname" ref={lastNameInputRef} />
							</div>
						</div>
						<div className="handle-profile-button">
							<button type="submit">Save</button>
							<button type="reset" onClick={cancelHandler}>
								cancel
							</button>
						</div>
					</form>}
					{!isEditMode && <button className="edit-button" onClick={editHandler}>Edit Name</button>}
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
