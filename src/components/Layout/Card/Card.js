import React from "react";
import "./card.css";

export default function Card(props) {
	return (
		<div className="card">
			<img src={props.imagePath} alt="" />
			<p className="card-desc">{props.children}</p>
		</div>
	);
}
