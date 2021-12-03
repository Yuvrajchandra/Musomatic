import React from "react";
import SocialsDropdown from "../../UploadSongUtils/CreatePageDropdowns/SocialsDropdown";

export default function RenderOtherDetails() {
	const frequencyType = ["Bass heavy", "Treble heavy", "Mids heavy"];
	const musicSampling = ["Yes", "No"];
	const typeOfInstruments = ["Real Instruments", "Digital Instruments"];

	return (
		<div>
			<div className="large-dropdown-div">
				<p>Frequency Type</p>
				<SocialsDropdown optionsArray={frequencyType} dropdownID="frequencyTypeDropdown" />
			</div>
			<div className="large-dropdown-div">
				<p>Is the song sample based?</p>
				<SocialsDropdown optionsArray={musicSampling} dropdownID="sampleBasedDropdown" />
			</div>
			<div className="large-dropdown-div">
				<p>Type Of Instruments used</p>
				<SocialsDropdown optionsArray={typeOfInstruments} dropdownID="typesOfInstrumentsDropdown" />
			</div>
		</div>
	);
}
