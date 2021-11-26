import React from "react";
import Dropdown from "../UploadSongUtil/Dropdown";
import "./uploadSongDiv3.css";

export default function UploadSongDiv3() {
	const frequencyType = ["Bass heavy", "Treble heavy", "Mids heavy"];
	const musicSampling = ["Yes", "No"];
	const typeOfInstruments = ["Real Instruments", "Digital Instruments"];

	return (
		<div className="create_nft_bg upload-song-div-3">
			<h3 className="create_nft_heading hidden-head">Other Details</h3>
			<div className="large-dropdown-div">
				<p>Frequency Type</p>
				<Dropdown optionsArray={frequencyType} dropdownID="frequencyTypeDropdown" />
			</div>
			<div className="large-dropdown-div">
				<p>Is the song sample based?</p>
				<Dropdown optionsArray={musicSampling} dropdownID="sampleBasedDropdown" />
			</div>
			<div className="large-dropdown-div">
				<p>Type Of Instruments used</p>
				<Dropdown optionsArray={typeOfInstruments} dropdownID="typesOfInstrumentsDropdown" />
			</div>
            {/* MULTI DROPDOWN TO BE ADDED */}
		</div>
	);
}