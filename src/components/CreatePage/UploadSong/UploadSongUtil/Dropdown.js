import React, { useState } from "react";
import "./dropdown.css";

export default function Dropdown(props) {
	const [buttonContent, setButtonContent] = useState("Select here");

	const handleOptionSelction = (event) => {
		event.target.parentElement.parentElement.previousSibling.classList.add("dropdown_element_selected");
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
		<div className="dropdown social-dropdown-div">
			<button className="btn dropdown-toggle" type="button" id={props.dropdownID} data-bs-toggle="dropdown" aria-expanded="false">
				{buttonContent}
			</button>

			<ul className="dropdown-menu pt-3 pb-3" aria-labelledby={props.dropdownID}>
				{options}
			</ul>
		</div>
	);
}