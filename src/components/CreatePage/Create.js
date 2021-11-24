import React from "react";
import "./create.css";
import UploadImageDiv from "./UploadImageDiv/UploadImageDiv";

export default function Create() {

	return (
		<div className="create_container">
			<div className="create_box row justify-content-center">
                <div className="row justify-content-center nft_content m-0 p-0">
                    <UploadImageDiv/>
                </div>
			</div>
		</div>
	);
}
