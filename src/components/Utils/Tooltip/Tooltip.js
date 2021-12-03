import React from "react";
import "./tooltip.css";

export default function Tooltips(props) {
	const labelText = props.labelText;
	const message = props.message;
	const tooltipLocation = props.tooltipLocation;

	return (
		<button type="button" className="btn btn-secondary tooltip-button" data-tooltip={message} data-tooltip-location={tooltipLocation ? tooltipLocation : "top"}>
			{/* These are for the Audio Player */}
			{props.songInfoAudio ? (
				<span className="lyrics-btn">
					<i className="fas fa-info-circle"></i>
				</span>
			) : props.lyricsPresent ? (
				<span className="info-btn">
					{" "}
					<i class="fas fa-align-left"></i>
				</span>
			) : (
				<i className="far fa-question-circle"></i>
			)}
			{labelText}
		</button>
	);
}
