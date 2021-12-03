import React, { useState } from "react";
import "./dropdown.css";

export default function Dropdown(props) {
	const [buttonContent, setButtonContent] = useState("Any");
	const filter = props.children;
	const handleOptionSelction = (event) => {
		props.handleFilters(filter.toLowerCase(), event.target.textContent);
		setButtonContent(event.target.textContent);
	};

	const options = props.optionsArray.map((option, key) => (
		<li key={key}>
			<span className="dropdown-item" onClick={handleOptionSelction}>
				{option}
			</span>
		</li>
	));
	
	return (
		<div className="dropdown library-dropdown">
			<label className="dropdown-label">{filter}:</label>

			<button
				className="btn dropdown-toggle"
				type="button"
				id="dropdownMenuButton1"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				{buttonContent}
			</button>
			
			<ul className="dropdown-menu pt-3 pb-3" aria-labelledby="dropdownMenuButton1">
				{options}
			</ul>
		</div>
	);
}
