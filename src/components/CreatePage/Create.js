import React from "react";
import "./create.css";
import UploadImageDiv from "./UploadImageDiv/UploadImageDiv";
import UploadSong from "./UploadSong/UploadSong";
import Button from "../Layout/Button/Button"

export default function Create() {

	return (
		<div className="create_container">
			<div className="create_box row justify-content-center">
                <div className="row justify-content-center nft_content m-0 p-0">
                    <UploadImageDiv/>
					<UploadSong/>
                </div>
				{/* Terms and conditions div */}
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
			</div>
		</div>
	);
}
