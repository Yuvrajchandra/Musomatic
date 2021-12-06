import React from "react";
import { Modal } from "react-bootstrap";
import "./modal.css";
import errorLogo from "../../../assets/success-failure-modals/error.svg";

const CreateErrorModal = ({ show }) => {
	return (
		<Modal show={show} size="lg" className="react-bootstrap-modal" centered>
			<div className="row justify-content-end">
				<button
					type="button"
					className="btn-close btn-close-white"
					onClick={() => {
						window.location.reload();
					}}
				></button>
			</div>
			<Modal.Body>
				<div className="row justify-content-center">
					<img src={errorLogo} alt="Error" height="100" />
				</div>
				<div className="row justify-content-center mt-4 mr-1">
					<div className="col-12 text-center">
						<h3 className="error_modal_title">Something went wrong!</h3>
					</div>
				</div>
				<div className="row m-0 p-0 mt-5">
					<div className="col-12 text-center error_modal_text m-0 p-0 mt-5">
						Seems like you have provided incorrect information about your song.
						<br />
						If you think that this is a mistake, please Retry!
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default CreateErrorModal;
