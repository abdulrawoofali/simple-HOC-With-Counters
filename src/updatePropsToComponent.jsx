import React, { useState } from "react";

export default function updatePropsToComponent(OrginalComponent) {
	return function (...props) {
		const [increment, setIncrement] = useState(0);

		props["counter"] = increment;
		props["upDateCount"] = () => setIncrement(increment + 1);

		return <OrginalComponent {...props} />;
	};
}
