import React, { useState } from "react";
import "./lyricsBox.css";

export default function LyricsBox(props) {
	const [lyrics, setLyrics] = useState("");

	if (props.lyricsURL !== "error") fetch(props.lyricsURL).then((response) => response.text().then((text) => setLyrics(text)));

	return (
		<div className="lyrics_container">
			<div className="lyrics_box">
				<p>Lyrics:</p>
				<span className="text-break">
					{props.lyricsURL === "error" ? (
						<span className="lyrics_unavailable_text text-break">
							<i className="fas fa-exclamation-triangle"></i>
							<br />
							Unfortunately, we don't have the lyrics for this one.
						</span>
					) : (
						lyrics
					)}
				</span>
			</div>
		</div>
	);
}
