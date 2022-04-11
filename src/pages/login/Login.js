import React, { Fragment, useState } from "react";
import "./Login.css";

function Login(props) {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	// const [userInput, setUserInput] = useState({
	//   enteredTitle: '',
	//   enteredAmount: '',
	//   enteredDate: '',
	// });

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		// setUserInput({
		//   ...userInput,
		//   enteredTitle: event.target.value,
		// });
		// setUserInput((prevState) => {
		//   return { ...prevState, enteredTitle: event.target.value };
		// });
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		// setUserInput({
		//   ...userInput,
		//   enteredAmount: event.target.value,
		// });
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
		};

		props.onSaveExpenseData(expenseData);
		setEnteredTitle("");
		setEnteredAmount("");
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
									value={enteredTitle}
									onChange={titleChangeHandler}
								/>
							</div>
							<div className="input-wrapper">
								<label for="password">Amount</label>
								<input
									type="text"
									id="password"
									value={enteredAmount}
									onChange={amountChangeHandler}
								/>
							</div>{" "}
							<div class="input-remember">
								<label for="remember-me">Remember me</label>
								<input
									type="checkbox"
									id="remember-me"
									value={enteredAmount}
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
