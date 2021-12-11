import React from "react";
import Select from "react-select";
import SocialsDropdown from "../UploadSongUtils/CreatePageDropdowns/SocialsDropdown";
import Tooltip from "../../../Utils/Tooltip/Tooltip";
import style from "./Div3Utils/StyleForSelect";
import "./uploadSongDiv3.css";

export default function UploadSongDiv3(props) {
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

	const handleInstrumentsChange = (selectedOption) => {
		props.setInstrumentsUsed(selectedOption);
	};

	return (
		<div className={"create_nft_bg glass_effect glass_effect_border upload-song-div-3" + (props.smallScreen ? " mt-5" : " small-screen-div-3")}>
			<h3 className="create_nft_heading hidden-head">Other Details</h3>
			<div className="large-dropdown-div">
				<p>Frequency Type</p>
				<SocialsDropdown optionsArray={frequencyType} dropdownID="frequencyTypeDropdown" />
			</div>
			<div className="large-dropdown-div">
				<p className="sample_based_tooltip">
					Is the song sample based? &nbsp;
					<Tooltip
						labelText=""
						message="Music sampling is the process by which a musician or record producer uses a portion of an existing song in a brand new recording, looping it and layering it with new music in a new context."
						tooltipLocation="top"
					/>
				</p>
				<SocialsDropdown optionsArray={musicSampling} dropdownID="sampleBasedDropdown" />
			</div>
			<div className="large-dropdown-div">
				<p>Type Of Instruments used</p>
				<SocialsDropdown optionsArray={typeOfInstruments} dropdownID="typesOfInstrumentsDropdown" />
			</div>
			<p>
				Instruments used &nbsp;
				<Tooltip labelText="Know more" message="Select the 5 most used instruments in your song" />
			</p>
			{/* on backend connection, we need a logic that user is only able to select 4 like set display none for the arrow */}
			<Select
				maxMenuHeight={125}
				placeholder="Select here"
				isMulti={true}
				isOptionDisabled={(option, test) => props.instrumentsUsed.length >= 5}
				styles={style}
				closeMenuOnSelect={false}
				options={instrumentsUsed}
				onChange={handleInstrumentsChange}
			/>
		</div>
	);
}
