import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "./create.css";
import CreateYourNFT from "./CreateYourNFT/CreateYourNFT.js";
import Button from "../Layout/Button/Button";
import UploadSong from "./UploadSong/UploadSong";
import UploadSongDiv2 from "./UploadSong/UploadSongDiv2/UploadSongDiv2";
import UploadSongDiv3 from "./UploadSong/UploadSongDiv3/UploadSongDiv3";
import CreateSuccessModal from "../Layout/Modal/CreateSuccessModal";
import ErrorModal from "../Layout/Modal/ErrorModal";
import CreateErrorModal from "../Layout/Modal/CreateErrorModal";
import configData from "../../config/config.json";
const ENV = JSON.parse(JSON.stringify(configData));

export default function Create(props) {
	const [showCreateError, setShowCreateError] = useState(false);
	const [spotifyAPIToken, setSpotifyAPIToken] = useState("");
	const [isrcNumber, setIsrcNumber] = useState("");
	const [songName, setSongName] = useState("");
	const [artistName, setArtistName] = useState("");
	const [songPrice, setPrice] = useState("");
	const [instrumentsUsed, setInstrumentsUsed] = useState([]);
	const [links, setLinks] = useState({
		spotifyLink: "",
		appleMusicLink: "",
		amazonMusicLink: "",
		youtubeMusicLink: "",
	});

	const fetchSongDetails = async () => {
		if (isrcNumber.length > 0) {
			const isrcResponse = await axios("https://api.spotify.com/v1/search", {
				method: "GET",
				params: {
					q: "isrc:" + isrcNumber,
					type: "track",
				},
				headers: { Authorization: "Bearer " + spotifyAPIToken },
			});

			if (isrcResponse.data.tracks.items[0]) {
				setLinks((prevState) => ({
					...prevState,
					spotifyLink: isrcResponse.data.tracks.items[0].external_urls.spotify,
				}));
				setSongName(isrcResponse.data.tracks.items[0].name);
				setArtistName(isrcResponse.data.tracks.items[0].artists[0].name);
			}

			return isrcResponse.data.tracks.items[0];
		}
	};

	useEffect(() => {
		axios("https://accounts.spotify.com/api/token", {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: "Basic " + btoa(ENV.SPOTIFY_CLIENT_ID + ":" + ENV.SPOTIFY_CLIENT_SECRET),
			},
			data: "grant_type=client_credentials",
			method: "POST",
		}).then((tokenResponse) => {
			setSpotifyAPIToken(tokenResponse.data.access_token);
		});
	}, []);

	return (
		<Fragment>
			<div className="create_container">
				<div className="create_box row justify-content-center">
					<form
						onSubmit={async (event) => {
							event.preventDefault();
							const _name = songName;
							const _artistName = artistName;
							const _price = songPrice;
							const _onSale = true;
							// Links
							const _links = [links.spotifyLink, links.appleMusicLink, links.amazonMusicLink, links.youtubeMusicLink];
							// Characteristics
							const _genre = document.getElementById("genreDropdown").textContent === "Select here" ? "-" : document.getElementById("genreDropdown").textContent;
							const _intrumentsUsed = [];
							instrumentsUsed.map((instrument) => _intrumentsUsed.push(instrument.value));
							const _typeOfLyrics =
								document.querySelector('input[name="lyricsRadioOptions"]:checked').value === "No"
									? "-"
									: document.getElementById("typeOfLyricsDropdown").textContent === "Rhyming"
									? "Rhyming"
									: document.getElementById("typeOfLyricsDropdown").textContent === "Non-Rhyming"
									? "Non-Rhyming"
									: "-";
							const _songType = document.getElementById("songTypeDropdown").textContent === "Select here" ? "-" : document.getElementById("songTypeDropdown").textContent;
							const _frequencyType = document.getElementById("frequencyTypeDropdown").textContent === "Select here" ? "-" : document.getElementById("frequencyTypeDropdown").textContent;
							const _instrumentType =
								document.getElementById("typesOfInstrumentsDropdown").textContent === "Select here" ? "-" : document.getElementById("typesOfInstrumentsDropdown").textContent;
							const _sampleBased = document.getElementById("sampleBasedDropdown").textContent === "Yes" ? true : false;
							// Characteristics array in required format
							const _characteristics = [_genre, _intrumentsUsed, _typeOfLyrics, _songType, _frequencyType, _instrumentType, _sampleBased];

							const _isrcResponse = await fetchSongDetails();

							if (_isrcResponse && _isrcResponse.data.tracks.items[0].name === _name && _isrcResponse.data.tracks.items[0].artists[0].name === _artistName) {
								props.createSong(_name, _artistName, _price, _onSale, _links, _characteristics);
							} else {
								setShowCreateError(true);
							}
							// I'm the highest in the room. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus libero, pharetra a ex non, venenatis pellentesque quam. Integer scelerisque magna pellentesque, ornare elit eleifend, interdum nisl. Nulla porttitor non tellus non dignissim. Integer diam quam, condimentum sit amet arcu tempus, semper aliquet mauris. Nullam porta mi non justo fermentum, scelerisque tincidunt purus tincidunt. Morbi eleifend mauris eros, vitae consequat lectus rhoncus et. Fusce suscipit ipsum varius porttitor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus libero, pharetra a ex non, venenatis pellentesque quam. Integer scelerisque magna pellentesque, ornare elit eleifend, interdum nisl. Nulla porttitor non tellus non dignissim. Integer diam quam, condimentum sit amet arcu tempus, semper aliquet mauris. Nullam porta mi non justo fermentum, scelerisque tincidunt purus tincidunt. Morbi eleifend mauris eros, vitae consequat lectus rhoncus et. Fusce suscipit ipsum varius porttitor porttitor.
						}}
					>
						<div className="row justify-content-center nft_content m-0 p-0">
							<CreateYourNFT
								songName={songName}
								setSongName={setSongName}
								artistName={artistName}
								setArtistName={setArtistName}
								songPrice={songPrice}
								setPrice={setPrice}
								isrcNumber={isrcNumber}
								setIsrcNumber={setIsrcNumber}
								captureImage={props.captureImage}
								maticUSD={props.maticUSD}
								maticINR={props.maticINR}
								fetchSongDetails={fetchSongDetails}
							/>
							<UploadSong
								captureSong={props.captureSong}
								links={links}
								setLinks={setLinks}
								captureLyrics={props.captureLyrics}
								songLyrics={props.songLyrics}
								setSongLyrics={props.setSongLyrics}
								captureDescription={props.captureDescription}
								songDescription={props.songDescription}
								setSongDescription={props.setSongDescription}
								instrumentsUsed={instrumentsUsed}
								setInstrumentsUsed={setInstrumentsUsed}
							/>
						</div>

						{/* HIDDEN DIV FOR >= 1300px */}
						<div className="row justify-content-center small-screen-div">
							{/* DIV 2*/}
							<UploadSongDiv2
								smallScreen={true}
								captureLyrics={props.captureLyrics}
								songLyrics={props.songLyrics}
								setSongLyrics={props.setSongLyrics}
								captureDescription={props.captureDescription}
								songDescription={props.songDescription}
								setSongDescription={props.setSongDescription}
							/>
							{/* DIV 3 */}
							<UploadSongDiv3 smallScreen={true} instrumentsUsed={instrumentsUsed} setInstrumentsUsed={setInstrumentsUsed} />
						</div>

						{/* TERMS AND CONDITIONS */}
						<div className="row justify-content-center terms-conditions-div-row">
							<div className="terms-conditions-div m-0 mt-4">
								{/* CHECK BOX 1 */}
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="checkbox1" required />
									<label className="form-check-label" htmlFor="checkbox1">
										I hereby declare that this piece of music is my own creation and if any case of copyright infringement is reported, I will solely be held responsible for the
										consequences.
									</label>
								</div>
								{/* CHECK BOX 2 */}
								<div className="form-check">
									<input className="form-check-input" type="checkbox" value="" id="checkbox2" required />
									<label className="form-check-label" htmlFor="checkbox2">
										I have read all <a href="#/">terms of use</a> and the <a href="#/">privacy policy</a> and I agree to all of them.
									</label>
								</div>
								<div className="row mt-2">
									<div className="col-xl-2 col-lg-3 col-md-4 mt-md-0 mt-4 col-sm-6 col-8 submit-btn-div">
										<Button type="submit">Submit</Button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>

			{/* Error Modal */}
			<ErrorModal show={props.showError} />

			{/* Create Error Modal */}
			<CreateErrorModal show={showCreateError} />

			{/* Success Modal */}
			<CreateSuccessModal show={props.showCreateSuccess} closeModal={props.closeCreateSuccessModal} />
		</Fragment>
	);
}
