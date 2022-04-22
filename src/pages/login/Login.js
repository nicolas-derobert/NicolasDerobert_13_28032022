import React, { Fragment, useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import useHttp from "../../service/use-http";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

// import {counterActions f}

function Login(props) {
	let isInitial = true;
	let navigate = useNavigate();
	const [isSubmit, setIsSubmit] = useState(false);
	const dispatch = useDispatch();
	const url = "http://localhost:3001/api/v1/user/";
	const loginParameter = "login";
	const signupParameter = "signup";
	const profileParameter = "profile";
	const loginEndPoint = url + loginParameter;
	const signupEndPoint = url + signupParameter;
	const profileEndPoint = url + profileParameter;

	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const { isLoading, error, sendRequest: sendTaskRequest, data } = useHttp();
	// const switchAuthModeHandler = () => {
	// 	setIsLogin((prevState) => !prevState);
	// };

	const submitHandler = (event) => {
		console.log("Sumit execution");
		event.preventDefault();
		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;
		const bodyContent = {
			email: `${enteredEmail}`,
			password: `${enteredPassword}`,
		};
		const headerContent = { "Content-Type": "application/json" };
		sendTaskRequest({
			url: loginEndPoint,
			method: "POST",
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
	useEffect(() => {
		if (isSubmit && data.status === 200) {
			console.log(data.body.token);
			dispatch(authActions.login(data.body.token));
			console.log("Je suis connecté");
			navigate('/profile')
		}
	}, [data]);

	return (
		<Fragment>
			<div className="bg-dark">
				<section className="sign-in-content">
					<i className="fa fa-user-circle sign-in-icon"></i>
					<h1>Sign In</h1>
					<form onSubmit={submitHandler}>
						<div className="">
							<div className="input-wrapper">
								<label>Username</label>
								<input
									type="text"
									id="username"
									// value={enteredTitle}
									// onChange={titleChangeHandler}
									required
									ref={emailInputRef}
								/>
							</div>
							<div className="input-wrapper">
								<label>Password</label>
								<input
									type="text"
									id="password"
									// value={enteredAmount}
									// onChange={amountChangeHandler}
									ref={passwordInputRef}
								/>
							</div>{" "}
							<div className="input-remember">
								<label>Remember me</label>
								<input
									type="checkbox"
									id="remember-me"
									// value={enteredAmount}
								/>
							</div>
						</div>
						<div className="">
							<button type="submit">Sign In</button>
						</div>
					</form>
				</section>
			</div>
		</Fragment>
	);
}

export default Login;
