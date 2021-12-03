import React, { Fragment, useState } from "react";
import Cta from "../Homepage/CtaSection/Cta";
import "./library.css";
import Dropdown from "./LibraryUtils/Dropdown/Dropdown";
import MultiDropdown from "./LibraryUtils/Dropdown/MultiDropdown";
import SongPages from "./LibraryUtils/SongPages/SongPages";

export default function Library(props) {
	const [appliedFilters, setAppliedFilters] = useState({
		genre: "Any",
		lyrics: "Any",
		instrumentsUsed: [],
	});
	const [searchedString, setSearchedString] = useState("");

	const onFilterChange = (filter, selectedOption) => {
		setAppliedFilters((prevState) => ({
			...prevState,
			[filter]: selectedOption,
		}));
	};

	//Dropdown Options
	const genres = ["Any", "Pop", "Classical", "Rap", "Indian", "Cultural"];
	const lyrics = ["Any", "Yes", "No"];
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

	//Logic for filtering songs and putting them into a new array
	const filteredSongNFTs = [];
	const n = props.songNFTs.length;
	const m = appliedFilters.instrumentsUsed.length;

	for (let i = 0; i < n; i++) {
		if (appliedFilters.lyrics === "Yes") {
			if (props.songNFTs[i].hashes.lyricsHash.length > 0) {
				if (appliedFilters.genre !== "Any") {
					if (appliedFilters.genre === props.songNFTs[i].characteristics.genre) {
						if (m > 0) {
							let checkCtr = 0;
							for (let j = 0; j < m; j++) {
								if (props.songNFTs[i].characteristics.instruments.includes(appliedFilters.instrumentsUsed[j].value)) checkCtr++;
							}
							if (checkCtr === m) filteredSongNFTs.push(props.songNFTs[i]);
						} else filteredSongNFTs.push(props.songNFTs[i]);
					}
				} else {
					if (m > 0) {
						let checkCtr = 0;
						for (let j = 0; j < m; j++) {
							if (props.songNFTs[i].characteristics.instruments.includes(appliedFilters.instrumentsUsed[j].value)) checkCtr++;
						}
						if (checkCtr === m) filteredSongNFTs.push(props.songNFTs[i]);
					} else filteredSongNFTs.push(props.songNFTs[i]);
				}
			}
		} else if (appliedFilters.lyrics === "No") {
			if (props.songNFTs[i].hashes.lyricsHash.length === 0) {
				if (appliedFilters.genre !== "Any") {
					if (appliedFilters.genre === props.songNFTs[i].characteristics.genre) {
						if (m > 0) {
							let checkCtr = 0;
							for (let j = 0; j < m; j++) {
								if (props.songNFTs[i].characteristics.instruments.includes(appliedFilters.instrumentsUsed[j].value)) checkCtr++;
							}
							if (checkCtr === m) filteredSongNFTs.push(props.songNFTs[i]);
						} else filteredSongNFTs.push(props.songNFTs[i]);
					}
				} else {
					if (m > 0) {
						let checkCtr = 0;
						for (let j = 0; j < m; j++) {
							if (props.songNFTs[i].characteristics.instruments.includes(appliedFilters.instrumentsUsed[j].value)) checkCtr++;
						}
						if (checkCtr === m) filteredSongNFTs.push(props.songNFTs[i]);
					} else filteredSongNFTs.push(props.songNFTs[i]);
				}
			}
		} else {
			if (appliedFilters.genre !== "Any") {
				if (appliedFilters.genre === props.songNFTs[i].characteristics.genre) {
					if (m > 0) {
						let checkCtr = 0;
						for (let j = 0; j < m; j++) {
							if (props.songNFTs[i].characteristics.instruments.includes(appliedFilters.instrumentsUsed[j].value)) checkCtr++;
						}
						if (checkCtr === m) filteredSongNFTs.push(props.songNFTs[i]);
					} else filteredSongNFTs.push(props.songNFTs[i]);
				}
			} else {
				if (m > 0) {
					let checkCtr = 0;
					for (let j = 0; j < m; j++) {
						if (props.songNFTs[i].characteristics.instruments.includes(appliedFilters.instrumentsUsed[j].value)) checkCtr++;
					}
					if (checkCtr === m) filteredSongNFTs.push(props.songNFTs[i]);
				} else filteredSongNFTs.push(props.songNFTs[i]);
			}
		}
	}

	// Logic for searched songs and ids
	const l = filteredSongNFTs.length;
	const searchedNFTs = [];
	// Important !!! Need to add a tooltip to not to search '#' in ids. 
	// Also, currently our search is case sensitive so we either need to change it or inform the user
	if (searchedString.length === 0) {
		// if searchedString is empty, do nothing
	}else if (!isNaN(searchedString) && !isNaN(parseFloat(searchedString))) {	//if searched string is an id
		for (let i = 0; i < l; i++) {
			if (parseInt(filteredSongNFTs[i].id) === parseInt(searchedString)) searchedNFTs.push(filteredSongNFTs[i]);
		}
	} else {	//else, search for artists or songs in our newNFT array
		for (let i = 0; i < l; i++) {
			if (filteredSongNFTs[i].songName.toLowerCase().includes(searchedString.toLowerCase()) || filteredSongNFTs[i].artistName.toLowerCase().includes(searchedString.toLowerCase())) 
				searchedNFTs.push(filteredSongNFTs[i]);
		}
	}

	const searchHandler = (e) => {
		setSearchedString(e.target.value);
	};

	return (
		<Fragment>
			<div className="library_container">
				<div className="library_box ">
					<div className="row justify-content-center">
						{/* Library CARD */}
						<div className="library_card">
							<div className="left_filters_section">
								<p className="mxv_library_heading">MXV Library</p>
								<p className="library_filters">Filters:</p>
								{/* DROPDOWNS */}
								<div className="library-dropdowns">
									<div className="single-dropdowns">
										<Dropdown handleFilters={onFilterChange} optionsArray={genres}>
											Genre
										</Dropdown>
										<Dropdown handleFilters={onFilterChange} optionsArray={lyrics}>
											Lyrics
										</Dropdown>
									</div>
									<MultiDropdown instrumentsUsed={appliedFilters.instrumentsUsed} handleFilters={onFilterChange} options={instrumentsUsed} />
								</div>
							</div>

							<div className="right_filters_section">
								<div className="search_bar_div">
									<input className="search_bar" type="text" placeholder="Search by Name or ID" onChange={searchHandler} value={searchedString}></input>
									<button className="search_button">
										<i className="fas fa-search"></i>
									</button>
								</div>
								{/* <p className="additional_filters mt-5">
									Additional Filters<i className="fas fa-filter"></i>
								</p> */}
							</div>
						</div>

						{/* PAGES SECTION */}
						<SongPages songNFTs={searchedString.length > 0 ? searchedNFTs : filteredSongNFTs} />
					</div>
				</div>
			</div>

			{/* CTA SECTION */}
			<Cta isHomeSection={false} />
		</Fragment>
	);
}
