import React from "react";
import "./card.css";

export default function Card(props) {
	return (
		<div className="card glass_effect_border">
			<img src={props.imagePath} alt="" />
			<p className="card-desc">{props.children}</p>
		</div>
	);
}
