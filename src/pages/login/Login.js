import React, { Fragment, useState, useRef, useEffect } from "react";
import "./Login.css";
import useHttp from "../../service/use-http";
// import {counterActions f}

function Login(props) {
	const url = "http://localhost:3001/api/v1/user/";
	const loginParameter = "login";
	const signupParameter = "signup";
	const profileParameter = "profile";
	const loginEndPoint = url + loginParameter;
	const signupEndPoint = url + signupParameter;
	const profileEndPoint = url + profileParameter;

	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const [isLogin, setIsLogin] = useState(true);

	const { isLoading, error, sendRequest: sendTaskRequest, data } = useHttp();
	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	};

	// const titleChangeHandler = (event) => {
	// };

	// const amountChangeHandler = (event) => {
	// };

	const submitHandler = (event) => {
		console.log("Sumit execution");
		event.preventDefault();
		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;
		console.log(enteredEmail);
		console.log(enteredPassword);
		const bodyContent = {
			"email": `${enteredEmail}`,
			"password": `${enteredPassword}`,
		};
		const headerContent = { "Content-Type": "application/json" };
		// console.log(` body: `${bodyContent}``)
		sendTaskRequest(
			{
				url: loginEndPoint,
				method: "POST",
				// headers: `${headerContent}`,
				// body: `${bodyContent}`,
				headers: headerContent,
				body: bodyContent,
				// headers: { "Content-Type": "application/json" },
				// body:{
				// 	"email": "tony@stark.com",
				// 	"password": "password123"
				//   },
			}
			// createTask.bind(null, taskText)
		);
		console.log(isLoading);
		console.log(data);
		if (!isLogin) {
			// } else {
			//   fetch(
			// 	'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZhsabDexE9BhcJbGxnZ4DiRlrCN9xe24',
			// 	{
			// 	  method: 'POST',
			// 	  body: JSON.stringify({
			// 		email: enteredEmail,
			// 		password: enteredPassword,
			// 		returnSecureToken: true,
			// 	  }),
			// 	  headers: {
			// 		'Content-Type': 'application/json',
			// 	  },
			// 	}
			//   ).then((res) => {
			// 	if (res.ok) {
			// 	  // ...
			// 	} else {
			// 	  return res.json().then((data) => {
			// 		// show an error modal
			// 		console.log(data);
			// 	  });
			// 	}
			//   });
			// }
		}
	};
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
							<button type="submit">Add Expense</button>
						</div>
					</form>
				</section>
			</div>
		</Fragment>
	);
}

export default Login;
