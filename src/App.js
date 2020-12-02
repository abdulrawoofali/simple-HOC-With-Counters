import React, { useState } from "react";
import HoverComponent from "./HoverComponent";
import ClickComponet from "./ClickComponent";

export default function App() {
	return (
		<div className="App">
			<HoverComponent />
			<ClickComponet />
		</div>
	);
}
