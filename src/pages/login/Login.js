import React, { Fragment, useState, useRef } from "react";
import "./Login.css";

function Login(props) {
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const [isLogin, setIsLogin] = useState(true);
	// const [enteredTitle, setEnteredTitle] = useState("");
	// const [enteredAmount, setEnteredAmount] = useState("");
	// const [userInput, setUserInput] = useState({
	//   enteredTitle: '',
	//   enteredAmount: '',
	//   enteredDate: '',
	// });
	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	  };
	
	const titleChangeHandler = (event) => {
		// setEnteredTitle(event.target.value);
		// setUserInput({
		//   ...userInput,
		//   enteredTitle: event.target.value,
		// });
		// setUserInput((prevState) => {
		//   return { ...prevState, enteredTitle: event.target.value };
		// });
	};

	const amountChangeHandler = (event) => {
		// setEnteredAmount(event.target.value);
		// setUserInput({
		//   ...userInput,
		//   enteredAmount: event.target.value,
		// });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;

		// props.onSaveExpenseData(expenseData);

		if (isLogin) {
		} else {
		  fetch(
			'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZhsabDexE9BhcJbGxnZ4DiRlrCN9xe24',
			{
			  method: 'POST',
			  body: JSON.stringify({
				email: enteredEmail,
				password: enteredPassword,
				returnSecureToken: true,
			  }),
			  headers: {
				'Content-Type': 'application/json',
			  },
			}
		  ).then((res) => {
			if (res.ok) {
			  // ...
			} else {
			  return res.json().then((data) => {
				// show an error modal
				console.log(data);
			  });
			}
		  });
		}
	  };
	return (
		<Fragment>
			<div className="bg-dark">
				<section class="sign-in-content">
					<i class="fa fa-user-circle sign-in-icon"></i>
					<h1>Sign In</h1>
					<form onSubmit={submitHandler}>
						<div className="">
							<div className="input-wrapper">
								<label for="username">Username</label>
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
								<label for="password">Password</label>
								<input
									type="text"
									id="password"
									// value={enteredAmount}
									// onChange={amountChangeHandler}
									ref={passwordInputRef}
								/>
							</div>{" "}
							<div class="input-remember">
								<label for="remember-me">Remember me</label>
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
{
	/* <form>
          <div class="input-wrapper">
            <label for="username">Username</label>
			<input type="text" id="username">
        </div>
          <div class="input-wrapper">
            <label for="password">Password</label>
			<input type="password" id="password">
          </div>
         

          <button class="sign-in-button">Sign In</button>

        </form> */
}
