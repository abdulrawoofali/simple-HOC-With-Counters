import React from "react";
import updatePropsToComponent from "./updatePropsToComponent";

const ClickComponet = (props) => {
	const { counter, upDateCount } = props;
	console.log(counter);
	return (
		<>
			<h1> {counter}</h1>
			<button onClick={upDateCount}> click me TO incremt </button>
		</>
	);
};

export default updatePropsToComponent(ClickComponet);
