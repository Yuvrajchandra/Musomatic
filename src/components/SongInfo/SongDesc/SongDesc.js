import React, { useState } from "react";
import "./songDesc.css";
import Tooltip from "../../Utils/Tooltip/Tooltip";

export default function SongDesc(props) {
	// Fetch Background
	const [background, setBackground] = useState("");
	if (props.backgroundURL !== "error") fetch(props.backgroundURL).then((response) => response.text().then((text) => setBackground(text)));

	return (
		<div className="song_description_box">
			<h2 className="text-break">{props.song.songName}</h2>
			<p className="artist_name text-break">
				Song by: {`${props.song.artistName}`}&nbsp;&nbsp;<small className="text-break">({`${props.song.artistAddress}`})</small>
			</p>
			<span className="current_owner_address text-break">Current owner: {`${props.song.currentOwnerAddress}`}</span>

			{/* DETAILS */}
			<div className="mt-5 mb-3">
				<p className="about_song_heading">About the Song</p>
				<div>
					<p className="detail_label">
						Genre:<span>{` ${props.song.characteristics.genre}`}</span>
					</p>
					<p className="detail_label">
						Instruments Used:<span>{` ${props.song.characteristics.instruments.length > 0 ? props.song.characteristics.instruments.join(", ") : "-"}`}</span>
					</p>
					<p className="detail_label">
						Type of Lyrics:<span>{` ${props.song.characteristics.typeOfLyrics}`}</span>
					</p>
					<p className="detail_label">
						Song Type:<span>{` ${props.song.characteristics.songType}`}</span>
					</p>
					<p className="detail_label">
						Frequency:<span>{` ${props.song.characteristics.frequency}`}</span>
					</p>
					<p className="detail_label">
						Instruments Type:<span>{` ${props.song.characteristics.instrumentType}`}</span>
					</p>
					<p className="detail_label">
						<Tooltip labelText="" message={`This attribute tells that whether the song has samples from some old songs.`} />
						Sample Based:<span>{` ${props.song.characteristics.sampleBased ? "Yes" : "No"}`}</span>
					</p>
				</div>
			</div>

			{/* BACKGROUND */}
			{props.account === props.song.currentOwnerAddress || props.account === props.song.artistAddress ? (
				<div className="background_info_div mt-3 ">
					<p className="detail_label">Background:</p>
					<div className="background_desc">
						{props.backgroundURL === "error" ? (
							<div className="row background_unavailable_row justify-content-center align-items-center text-center">
								<span className="background_unavailable_text text-break">
									<i className="fas fa-exclamation-triangle"></i>
									<br />
									Unfortunately, we don't have the background for this one.
								</span>
							</div>
						) : background.length > 230 ? (
							<span>
								{background.substring(0, 230)}...
								<span className="green_read_more" data-bs-toggle="modal" data-bs-target="#completeBackgroundModal">
									{" "}
									Read More&nbsp;<i className="fas fa-angle-double-right"></i>
								</span>
							</span>
						) : (
							background
						)}
					</div>
					{/* Background Modal */}
					<div className="modal" id="completeBackgroundModal" aria-hidden="true">
						<div className="modal-dialog modal-dialog-centered modal-lg">
							<div className="modal-content background_modal_content p-sm-5 p-4 pr-5 pl-5">
								<div className="modal-header sale_modal_close">
									<button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body background_modal_body">
									<div className="row">
										<div className="col-12 d-flex flex-column px-0">
											<h4 className="background_modal_title">Song Background</h4>
											<div className="modal_complete_background_area mt-4">{background}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="background_info_div mt-3 ">
					<p className="detail_label">Background:</p>
					<div className="background_desc">
						{props.backgroundURL === "error" ? (
							<div className="row background_unavailable_row justify-content-center align-items-center text-center">
								<span className="background_unavailable_text text-break">
									<i className="fas fa-exclamation-triangle"></i>
									<br />
									Unfortunately, we don't have the background for this one.
								</span>
							</div>
						) : (
							<div>
								<div className="row">
									<div className="col-11">
										<p className="center_within_background_desc text-break text-wrap w-80">
											<i className="fas fa-exclamation-circle"></i> Song background is only visible to the current owner. Purchase the NFT to view it!
										</p>
									</div>
								</div>
								<span className="background_desc_blur text-break text-wrap">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus libero, pharetra a ex non, venenatis pellentesque quam. Integer scelerisque magna pellentesque,
									ornare elit eleifend, interdum nisl. Nulla porttitor non tellus non dignissim. <span className="green_read_more"> Read More...</span>
								</span>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
