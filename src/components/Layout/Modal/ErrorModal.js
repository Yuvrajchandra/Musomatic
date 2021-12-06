import React from "react";
import { Modal } from "react-bootstrap";
import "./modal.css";
import errorLogo from "../../../assets/success-failure-modals/error.svg";

const ErrorModal = ({ show }) => {
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
						We are sorry for this inconvenience. Please retry!
						<br />
						If you are unable to find a solution, please check for possible solutions on our FAQ page or Contact Us.
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default ErrorModal;
