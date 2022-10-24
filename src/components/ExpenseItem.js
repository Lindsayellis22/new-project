import React from "react";
import "./ExpenseItem.css";
import Expenses from "./Expenses";

function ExpenseItem(props) {
	return (
		<div>
			<Expenses title={props.title} date={props.date} amount={props.amount} />
		</div>
	);
}

export default ExpenseItem;
