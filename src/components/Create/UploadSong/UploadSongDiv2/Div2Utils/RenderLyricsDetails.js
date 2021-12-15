import React, { Fragment } from "react";
import SocialsDropdown from "../../UploadSongUtils/CreatePageDropdowns/SocialsDropdown";

export default function RenderLyricsDetails(props) {
	const typeOfLyrics = ["Rhyming", "Non-Rhyming"];
	return (
		<Fragment>
			<div className="large-dropdown-div">
				<p>Type of lyrics</p>
				<SocialsDropdown optionsArray={typeOfLyrics} dropdownID="typeOfLyricsDropdown" />
			</div>
			{/* UPLOAD LYRICS */}
			<p>Lyrics</p>
			<div className="form-group">
				<textarea
					value={props.songLyrics}
					className="form-control upload-lyrics-area"
					name="lyrics-box"
					onChange={(e) => {
						props.setSongLyrics(e.target.value);
						props.captureLyrics(e);
					}}
					data-bs-toggle="modal"
					data-bs-target="#lyricsModal"
					spellCheck = "false"
				></textarea>
			</div>
		</Fragment>
	);
}
