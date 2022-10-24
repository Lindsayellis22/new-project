import React from "react";
import "Expenses.css";

function Expenses(props) {
	return (
		<div className="expenses">
			<div>{props.title}</div>
			<div>{props.amount}</div>
			<div>{props.date}</div>
		</div>
	);
}

export default Expenses;
