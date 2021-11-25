import React from "react";
import "./uploadImageDiv.css";
import UploadImage from "./UploadImageUtils/UploadImage";

export default function CreateYourNFT() {
	return (
		<div className="create_nft_bg upload_cover_image_div">
			{/* UPLOAD COVER IMAGE */}
			<h3 className="create_nft_heading">Create your NFT</h3>
			<div className="upload-image-label-div">
                <UploadImage/>
			</div>
			{/* INPUT FIELDS */}
			<div className="mt-4">
				{/* NFT DETAILS */}
				<p>Song Name</p>
				<input
					type="text"
					className="input-text-field"
					placeholder="Enter Song name"
					required
				/>
				<p> Artist Name</p>
				<input
					type="text"
					className="input-text-field"
					placeholder="Enter your name"
					required
				/>
                {/* NOTE: We will need to add a pop up to show the current crypto price */}
				<p>Price</p>
				<input
					type="number"
					className="input-text-field"
					placeholder="Enter Price in MATIC"
					step="0.1"
					min="0"
					required
				/>

				{/* ON SALE */}
				<div className="on-sale-div mt-3">
					<p>
						<span className="mr-2">On Sale</span>
					</p>

					{/* ON SALE RADIOS */}
					<div>
						<div className="form-check form-check-inline mr-3">
							<input className="custom-radio-box form-check-input" type="radio" name="onSaleRadioOptions" id="onSaleRadio1" value="Yes" defaultChecked />
							<label className="form-check-label" htmlFor="onSaleRadio1">
								Yes
							</label>
						</div>
						<div className="form-check form-check-inline">
							<input className="custom-radio-box form-check-input" type="radio" name="onSaleRadioOptions" value="No" id="onSaleRadio2" />
							<label className="form-check-label" htmlFor="onSaleRadio2">
								No
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
