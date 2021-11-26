import React from "react";
import Select from "react-select";
import Dropdown from "../UploadSongUtil/Dropdown";
import "./uploadSongDiv3.css";
import style from "./Div3Utils/StylesForSelect";

export default function UploadSongDiv3() {
	const frequencyType = ["Bass heavy", "Treble heavy", "Mids heavy"];
	const musicSampling = ["Yes", "No"];
	const typeOfInstruments = ["Real Instruments", "Digital Instruments"];
	const instrumentsUsed = [
		{ value: "Acoustic Guitar", label: "Acoustic Guitar" },
		{ value: "Drums", label: "Drums" },
		{ value: "Violin", label: "Violin" },
		{ value: "Piano", label: "Piano" },
		{ value: "Flute", label: "Flute" },
		{ value: "Electric Guitar", label: "Electric Guitar" },
		{ value: "Keyboard", label: "Keyboard" },
		{ value: "Xylophone", label: "Xylophone" },
		{ value: "Saxophone", label: "Saxophone" },
		{ value: "Tamberine", label: "Tamberine" },
		{ value: "Sitar", label: "Sitar" },
	];

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
			<p>Instruments used</p>
			<Select
				maxMenuHeight={125}
				placeholder="Select here"
				isMulti={true}
				styles={style}
				closeMenuOnSelect={false}
				options={instrumentsUsed}
			/>
		</div>
	);
}