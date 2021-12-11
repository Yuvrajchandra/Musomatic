import React from "react";
import SocialsDropdown from "./UploadSongUtils/CreatePageDropdowns/SocialsDropdown";
import UploadSongDiv2 from "./UploadSongDiv2/UploadSongDiv2";
import UploadSongDiv3 from "./UploadSongDiv3/UploadSongDiv3";
import MusicUploadLabel from "./UploadSongUtils/CreatePageDropdowns/MusicUploadLabel/MusicUploadLabel";
import "./uploadSong.css";

export default function UploadSong(props) {
	const genre = ["Pop", "Classical", "Rap", "Indian", "Cultural"];

	const handleLinksChange = (e) => {
		const { name, value } = e.target;
		props.setLinks((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<div className="main-upload-div row p-0">
			{/* DIV 1 */}
			<div className="create_nft_bg glass_effect glass_effect_border upload-song-div-1">
				{/* DIV HEADING */}
				<h3 className="create_nft_heading">Upload your song</h3>
				{/* DIV CONTENT */}
				<div className="div1-content">
					{/* UPLOAD LABEL */}
					<div className="upload-image-label-div">
						<MusicUploadLabel captureSong={props.captureSong} />
					</div>
					{/* DROPDOWN LINKS */}
					<div className="mt-1">
						<p>Add Links (Optional)</p>
						<div className="add-social-links">
							<label htmlFor="spotify-music" className="music-link-label">
								Spotify
							</label>
							<input type="text" id="spotify-music" className="links-input" name="spotifyLink" value={props.links.spotifyLink} onChange={handleLinksChange} />
						</div>
						<div className="add-social-links mt-2">
							<label htmlFor="apple-music" className="music-link-label">
								Apple Music
							</label>
							<input type="text" id="apple-music" className="links-input" name="appleMusicLink" value={props.links.appleMusicLink} onChange={handleLinksChange} />
						</div>
						<div className="add-social-links mt-2">
							<label htmlFor="amazon-music" className="music-link-label">
								Amazon Music
							</label>
							<input type="text" id="amazon-music" className="links-input" name="amazonMusicLink" value={props.links.amazonMusicLink} onChange={handleLinksChange} />
						</div>
						<div className="add-social-links mt-2">
							<label htmlFor="yt-music" className="music-link-label">
								Youtube Music
							</label>
							<input type="text" id="yt-music" className="links-input" name="youtubeMusicLink" value={props.links.youtubeMusicLink} onChange={handleLinksChange} />
						</div>
					</div>

					{/* GENRE */}
					<div className="large-dropdown-div">
						<p>Genre</p>
						<SocialsDropdown optionsArray={genre} dropdownID="genreDropdown" />
					</div>
				</div>
			</div>

			{/* DIV 2 */}
			<UploadSongDiv2
				smallScreen={false}
				captureLyrics={props.captureLyrics}
				songLyrics={props.songLyrics}
				setSongLyrics={props.setSongLyrics}
				captureDescription={props.captureDescription}
				songDescription={props.songDescription}
				setSongDescription={props.setSongDescription}
			/>

			{/* DIV 3 */}
			<UploadSongDiv3 smallScreen={false} instrumentsUsed={props.instrumentsUsed} setInstrumentsUsed={props.setInstrumentsUsed} />
		</div>
	);
}
