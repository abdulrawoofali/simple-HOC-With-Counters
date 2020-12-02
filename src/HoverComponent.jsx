import React from "react";
import updatePropsToComponent from "./updatePropsToComponent";

const HoverComponent = (props) => {
	const { counter, upDateCount } = props;
	return (
		<>
			<h2 onMouseOver={upDateCount}>Hover on me {counter}</h2>
		</>
	);
};

export default updatePropsToComponent(HoverComponent);
