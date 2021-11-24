import React from "react";
import "./uploadSong.css";
import MusicUploadLabel from "./UploadSongUtil/MusicUploadLabel";

export default function UploadSong(props) {
	return (
		<div className="main-upload-div row p-0">
			{/* DIV 1 */}
			<div className="create_nft_bg upload-song-div-1">
				{/* DIV HEADING */}
				<h3 className="create_nft_heading">Upload your song</h3>
				{/* DIV CONTENT */}
				<div className="div1-content">
					{/* UPLOAD LABEL */}
					<div className="upload-image-label-div">
                        <MusicUploadLabel/>
					</div>

					<div className="mt-1">
						<p>Add Links (Optional)</p>
						<div className="add-social-links">
							<label htmlFor="spotify-music" className="music-link-label">
								Spotify
							</label>
							<input type="text" id="spotify-music" className="links-input" name="spotifyLink" />
						</div>
						<div className="add-social-links mt-2">
							<label htmlFor="apple-music" className="music-link-label">
								Apple Music
							</label>
							<input type="text" id="apple-music" className="links-input" name="appleMusicLink" />
						</div>
						<div className="add-social-links mt-2">
							<label htmlFor="amazon-music" className="music-link-label">
								Amazon Music
							</label>
							<input type="text" id="amazon-music" className="links-input" name="amazonMusicLink" />
						</div>
						<div className="add-social-links mt-2">
							<label htmlFor="yt-music" className="music-link-label">
								Youtube Music
							</label>
							<input type="text" id="yt-music" className="links-input" name="youtubeMusicLink" />
						</div>
					</div>
				</div>
			</div>
        </div>
	);
}