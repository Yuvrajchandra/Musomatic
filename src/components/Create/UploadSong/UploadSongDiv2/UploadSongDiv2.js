import React, { Fragment, useState } from "react";
import SocialsDropdown from "../UploadSongUtils/CreatePageDropdowns/SocialsDropdown";
import "./uploadSongDiv2.css";
import RenderLyricsDetails from "./Div2Utils/RenderLyricsDetails";
import Tooltip from "../../../Utils/Tooltip/Tooltip";

export default function UploadSongDiv2(props) {
	// STATE MANAGEMENT
	const [isLyrical, setIsLyrical] = useState(true);

	const handleRadioChange = (event) => {
		if (event.target.value === "No") {
			setIsLyrical(false);
		} else {
			setIsLyrical(true);
		}
	};

	const typeOfSong = ["Metaphorical", "Literal"];
	return (
		<Fragment>
			{/* <div className={"create_nft_bg upload-song-div-2 " + (isLyrical ? "" : "rounded-borders") +(props.smallScreen? " small-screen-style mt-5":" small-screen-div-2")}> */}
			<div className={"create_nft_bg glass_effect glass_effect_border upload-song-div-2 " + (props.smallScreen ? " small-screen-style mt-5" : " small-screen-div-2")}>
				{/* DIV HEADING */}
				<h3 className="create_nft_heading">Other Details</h3>
				{/* <div className={isLyrical ? "div1-content" : "pr-5"}> */}
				<div className="div1-content">
					{/* TYPE OF SONG */}
					<div className="large-dropdown-div mb-3">
						<p>Type of song</p>
						<SocialsDropdown optionsArray={typeOfSong} dropdownID="songTypeDropdown" />
					</div>
					{/* LYRICS RADIO */}
					<p>Want to upload Lyrics?</p>
					<div>
						<div className="form-check form-check-inline mr-3">
							<input className="custom-radio-box form-check-input" type="radio" name="lyricsRadioOptions" id="lyricsRadio1" value="Yes" defaultChecked onChange={handleRadioChange} />
							<label className="form-check-label" htmlFor="lyricsRadio1">
								Yes
							</label>
						</div>
						<div className="form-check form-check-inline">
							<input className="custom-radio-box form-check-input" type="radio" name="lyricsRadioOptions" value="No" id="lyricsRadio2" onChange={handleRadioChange} />
							<label className="form-check-label" htmlFor="lyricsRadio2">
								No
							</label>
						</div>
					</div>
					{/* CONDITIONAL RENDERING OF LYRICS */}
					{/* EXPORT LYRICS DETAILS AND OTHER DETAILS CLASSES LATER FROM CURRENT FILE CSS */}
					{/* {isLyrical ? <RenderLyricsDetails /> : <RenderOtherDetails />} */}
					{isLyrical ? <RenderLyricsDetails captureLyrics={props.captureLyrics} songLyrics={props.songLyrics} setSongLyrics={props.setSongLyrics} /> : null}

					<p>
						Background &nbsp;
						<Tooltip
							labelText="Know more"
							message={`The background field in Musomatic helps connect artists with their fans on a deeper level. You can write about the whole ideation process and the journey behind creating this awesome piece of music. Your fans will really be interested in hearing this from you!`}
						/>
					</p>
					<div className="form-group">
						<textarea
							value={props.songDescription}
							className={"form-control background-area " + (isLyrical ? "lyrical-height" : "non-lyrical-height")}
							name="description-box"
							onChange={(e) => {
								props.setSongDescription(e.target.value);
								props.captureDescription(e);
							}}
							data-bs-toggle="modal"
							data-bs-target="#backgroundModal"
						></textarea>
					</div>
				</div>
			</div>
			{/* Background Modal */}
			<div className="modal" id="backgroundModal" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-lg">
					<div className="modal-content background_modal_content p-sm-5 p-4 pr-5 pl-5">
						<div className="modal-header sale_modal_close">
							<button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body background_modal_body">
							<div className="row">
								<div className="col-12 d-flex flex-column px-0">
									<h4 className="background_modal_title">Background</h4>
									<textarea
										value={props.songDescription}
										placeholder="Type here..."
										className={"form-control modal_background_area mt-4"}
										name="lyrics-box"
										onChange={(e) => {
											props.setSongDescription(e.target.value);
											props.captureDescription(e);
										}}
									></textarea>
								</div>
							</div>
						</div>
						<div className="row m-0 p-0 mt-3 justify-content-end">
							<div className="offset-6 col-lg-2 col-md-3 m-0 p-0">
								<button type="button" className="btn btn-secondary modal_save_btn" data-bs-dismiss="modal">
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Lyrics Modal */}
			<div className="modal" id="lyricsModal" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-lg">
					<div className="modal-content background_modal_content p-sm-5 p-4 pr-5 pl-5">
						<div className="modal-header sale_modal_close">
							<button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body background_modal_body">
							<div className="row">
								<div className="col-12 d-flex flex-column px-0">
									<h4 className="background_modal_title">Lyrics</h4>
									<textarea
										value={props.songLyrics}
										placeholder="Type here..."
										className={"form-control modal_background_area mt-4"}
										name="lyrics-box"
										onChange={(e) => {
											props.setSongLyrics(e.target.value);
											props.captureLyrics(e);
										}}
									></textarea>
								</div>
							</div>
						</div>
						<div className="row m-0 p-0 mt-3 justify-content-end">
							<div className="offset-6 col-lg-2 col-md-3 m-0 p-0">
								<button type="button" className="btn btn-secondary modal_save_btn" data-bs-dismiss="modal">
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
