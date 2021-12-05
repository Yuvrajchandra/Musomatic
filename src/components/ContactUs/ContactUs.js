import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

export default function ContactUs() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const onFocus = (event) => {
		if (event.target.autocomplete) {
			event.target.autocomplete = "No";
		}
	};

	return (
		<Fragment>
			<div className="contact_us_container">
				<div className="contact_us">
					<div className="row">
						<div className="offset-md-1 col-md-6 contact_us_heading">Contact Us</div>
					</div>

					<div className="row mt-4">
						<div className="offset-md-1 col-md-10 contact_notice">
							Please note that{" "}
							<Link to={"/"} className="link_to_homepage">
								musomatic.com
							</Link>{" "}
							aggregates all songs that users put up as NFTs and is not partnering with any of the artists displayed on the website. If you want to contact one of the artists listed
							here, you must contact them directly through other social media platforms. We are not responsible if someone else puts up an artists' song as an NFT on our platform and
							cannot assist you regarding the same.
						</div>
					</div>

					<div className="row email_us">
						<div className="offset-md-1 col-md-11">
							Email us at:
							<br />
							<a href="mailto:Singhyuvraj179@gmail.com" target="_blank" rel="noopener noreferrer" className="report_bugs">
								Singhyuvraj179@gmail.com
							</a>
							<br />
							<br />
							Or submit your queries anonymously using the form below.
						</div>
					</div>

					<div className="row contact_form">
						<div className="offset-md-1 col-md-10 offset-0 col-12">
							<div className="contact_us_div">
								<div className="contact_us_box col-md-12 p-3 shadow mb-5">
									<form className="message_inputs" action="https://getform.io/f/91471bcd-4363-49f9-9762-bb91ed85745b" method="POST">
										<div className="row">
											<div className="col-md-5">
												<div className="inputBox">
													<input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="off" onFocus={onFocus} />
													<label>Name&nbsp; (Optional)</label>
												</div>

												<div className="inputBox">
													<input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" onFocus={onFocus} />
													<label>Email Address&nbsp; (Optional)</label>
												</div>

												<div className="row mt-5">
													<div className="col-md-10 col-8 provide_email">If you don't provide an email, we will not be able to respond to your query!</div>
												</div>
											</div>

											<div className="col-md-6 col-10 mt-3 message_box">
												<div className="form-group">
													<label className="message">Message</label>
													<textarea className="form-control textarea_contact" name="message" rows="8" required></textarea>
												</div>

												<button className="btn shadow-sm col-md-12 col-sm-12 col-12 send_message_btn">
													<span>
														Send Message<i className="fas fa-angle-double-right"></i>
													</span>
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
