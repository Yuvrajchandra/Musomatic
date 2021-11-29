import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./library.css";
import Dropdown from "./LibraryUtils/Dropdown/Dropdown";
import MultiDropdown from "./LibraryUtils/Dropdown/MultiDropdown";
import SongPages from "./LibraryUtils/SongPages/SongPages";
import Cta from "../Homepage/CtaSection/Cta";

export default function Library(props) {
	const genres = ["Pop", "Classical", "Rap", "Indian", "Cultural"];
	const lyrics = ["Yes", "No"];
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
										<Dropdown optionsArray={genres}>
											Genre
										</Dropdown>
										<Dropdown optionsArray={lyrics}>
											Lyrics
										</Dropdown>
									</div>
									<MultiDropdown options={instrumentsUsed} />
								</div>
							</div>

							<div className="right_filters_section">
								<div className="search_bar_div">
									<input
										className="search_bar"
										type="text"
										placeholder="Search by Name or ID"
									></input>
									<button className="search_button">
										<i className="fas fa-search"></i>
									</button>
								</div>
							</div>
						</div>
						{/* PAGES SECTION (UNCOMMENT WHEN BACKEND CONNECTED)*/}
						{/* <SongPages songNFTs={searchedString.length > 0 ? searchedNFTs : filteredSongNFTs} /> */}
					</div>
				</div>
			</div>
			{/* CTA SECTION */}
			<Cta isHomeSection={false} />
		</Fragment>
	);
}