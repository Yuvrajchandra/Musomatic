import React from "react";
import { Modal } from "react-bootstrap";
import "./modal.css";
import successLogo from "../../../assets/success-failure-modals/success.svg";

const CreateSuccess = ({ show, closeModal }) => {
	return (
		<Modal show={show} size="lg" className="react-bootstrap-modal" centered>
			<div className="row justify-content-end">
				<button type="button" className="btn-close btn-close-white" onClick={closeModal}></button>
			</div>
			<Modal.Body>
				<div className="row justify-content-center">
					<img src={successLogo} alt="Error" height="100" />
				</div>
				<div className="row justify-content-center mt-4">
					<div className="col-12 text-center">
						<h3 className="success_modal_title">Successfully created NFT!</h3>
					</div>
				</div>
				<div className="row m-0 p-0 mt-5">
					<div className="col-12 text-center error_modal_text m-0 p-0 mt-5">
						Yay! Your NFT was created successfully.
						<br />
						It might take a few seconds to reflect back on your dashboard.
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default CreateSuccess;
