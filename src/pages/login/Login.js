import React, { Fragment, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import useHttp from "../../service/use-http";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

// import {counterActions f}

function Login(props) {
	let isInitial = true;
	let navigate = useNavigate();
	const [isSubmit, setIsSubmit] = useState(false);
	const [isValidEmail, setIsValidEmail] = useState(true); 
	const [isValidPassword, setValidPassword] = useState(true); 
	const [emailValidationClass, setEmailValidationClass] = useState('');	
	const [passwordValidationClass, setPasswordValidationClass] = useState('');	
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

	const submitHandler = (event) => {
		console.log("Submit execution");
		event.preventDefault();
		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;
		if (enteredEmail===''){
			setIsValidEmail(false)
			setEmailValidationClass('invalid')
			return
		}
		setIsValidEmail(true)
		if (enteredPassword ===''){
			setValidPassword(false)
			setPasswordValidationClass('invalid')

			return
		}
		setIsValidEmail(true)
		setValidPassword(true)
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
		setIsSubmit(true);
	};
	useEffect(() => {
		if(error){
			return
		}
		else if (isSubmit && data.status === 200) {
			dispatch(authActions.login(data.body.token));
			navigate("/profile");
		}
	}, [data,error]);
	
	

	return (
		<Fragment>
			<div className="bg-dark login">
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
									// required
									className={emailValidationClass}
									ref={emailInputRef}
								/>
							</div>
							{!isValidEmail && <p className="errormessage">Email is not valid</p>}
							<div className="input-wrapper">
								<label>Password</label>
								<input
									type="text"
									id="password"
									// value={enteredAmount}
									// onChange={amountChangeHandler}
									className={passwordValidationClass}
									ref={passwordInputRef}
								/>
							</div>
							{!isValidPassword && <p className="errormessage">Password is not valid</p>}
							<div className="input-remember">
								<input
									type="checkbox"
									id="remember-me"
									// value={enteredAmount}
								/>{" "}
								<label>Remember me</label>
							</div>
						</div>
						{error && <p className="errormessage">{error}</p>}
						<div className="">
							<button type="submit" className="sign-in-button">
								Sign In
							</button>
						</div>
					</form>
				</section>
			</div>
		</Fragment>
	);
}

export default Login;
