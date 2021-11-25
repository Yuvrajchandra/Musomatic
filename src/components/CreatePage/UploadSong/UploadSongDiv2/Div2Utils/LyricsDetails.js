import React, { Fragment } from "react";
import Dropdown from "../../UploadSongUtil/Dropdown";

export default function LyricsDetails() {
	const typeOfLyrics = ["Rhyming", "Non-Rhyming"];
	return (
		<Fragment>
			<div className="large-dropdown-div">
				<p>Type of lyrics</p>
				<Dropdown optionsArray={typeOfLyrics} dropdownID="typeOfLyricsDropdown" />
			</div>
			{/* UPLOAD LYRICS */}
			<p>Lyrics</p>
			<div className="form-group">
				<textarea
					className="form-control upload-lyrics-area"
					name="lyrics-box"
				></textarea>
			</div>
		</Fragment>
	);
}
