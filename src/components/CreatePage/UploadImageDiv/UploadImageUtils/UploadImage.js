import React, { Fragment, useState } from "react";
import uploadCover from "../../../../assets/uploadImage.svg";

export default function UploadImage() {
	const [imageUploadState, setImageUploadState] = useState(false);
    //function for preview image
	const fileUploadHandler = (event) => {
		const el = document.getElementById("uploaded-img");
		const myMemoObj = URL.createObjectURL(event.target.files[0]);
		el.src = URL.createObjectURL(event.target.files[0]);
		URL.revokeObjectURL(myMemoObj); //Manging memo leak
		// Set image upload state to true when uploaded
		setImageUploadState(true);
	};

	return (
		<Fragment>
			{imageUploadState ? null : (
				<label htmlFor="upload-image-inp">
					<div className="upload-img-div">
						<img className="upload-cover-img-option" src={uploadCover} alt="cover logo" />
						<label htmlFor="upload-image-inp" className="upload-image-label">
							Upload
						</label>
						<label htmlFor="upload-image-inp" className="upload-image-label">
							Song Cover
						</label>
						<input type="file" id="upload-image-inp" onChange={fileUploadHandler} accept=".jpg, .jpeg, .png, .bmp, .gif, .mp4, .mkv, .ogg, .wmv" className="upload_text_inp mb-5 mt-2" />
					</div>
				</label>
			)}
			<label className="uploaded-img-label" htmlFor="upload-image-inp" style={imageUploadState ? {} : { display: "none" }}>
				<img id="uploaded-img" alt="uploaded file" />
				<input type="file" id="upload-image-inp" onChange={fileUploadHandler} accept=".jpg, .jpeg, .png, .bmp, .wmv" className="upload_text_inp mb-5 mt-2" />
				<label className="edit-icon-btn" htmlFor="upload-image-inp">
					<i className="far fa-edit"></i>
				</label>
			</label>
		</Fragment>
	);
}