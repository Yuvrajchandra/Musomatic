import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

export default function ReportABug() {
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
						<div className="offset-md-1 col-md-6 contact_us_heading">Report a Bug</div>
					</div>

					<div className="row mt-4">
						<div className="offset-md-1 col-md-10 reportABug_notice">
							First, <span className="color_green_bugsPage">thank you for reporting bugs!</span> Identifying, reproducing, and documenting bugs is not always fun or easy, but it’s an
							important part of making excellent software. It can also be rewarding, as you’ll have a direct influence on the platform development. We at{" "}
							<Link to={"/"} className="color_green_bugsPage">
								Musixverse
							</Link>
							, honestly appreciate your help.
						</div>
					</div>

					<div className="row mt-5">
						<div className="offset-md-1 col-md-6 mt-1 bugsPage_heading">What's a Bug?</div>
					</div>

					<div className="row mt-4">
						<div className="offset-md-1 col-md-10 reportABug_notice">
							Not all issues are as clear-cut as a platform crash (But we definitely want to know about those, too!). As you use the platform, anything that strikes you as{" "}
							<span className="color_green_bugsPage">weird</span>, <span className="color_green_bugsPage">unexpected</span>, or <span className="color_green_bugsPage">broken</span> can
							be termed as a bug and is important to let us know about.
							<br />
							<br />
							<span className="color_green_bugsPage">Report everything</span> that you find. An issue might be glaringly obvious to you, but if you don’t report it, we may not even know
							about it.
						</div>
					</div>

					<div className="row mt-5">
						<div className="offset-md-1 col-md-6 mt-2 bugsPage_heading">What does a good bug report look like?</div>
					</div>

					<div className="row mt-4">
						<div className="offset-md-1 col-md-10 reportABug_notice">
							No matter what the bug is, we will <span className="color_green_bugsPage">always</span> want to know this information:
							<br />
							<br />
							<ul>
								<li>What did you try to do?</li>
								<li>What steps did you take to do that?</li>
								<li>What did you expect to happen?</li>
								<li>What happened instead?</li>
							</ul>
							One or more of those may seem stupid or self-explanatory to you, but it’s <span className="color_green_bugsPage">extremely helpful</span> to us if you take the time to
							write it all out. <span className="color_green_bugsPage">Don’t assume we know anything!</span> Perhaps you learned how to do something in another application, and we have a
							totally different way to accomplish the same thing. Simply saying that something “doesn’t work” isn’t very helpful; spell it out for us as simply and clearly as possible.
							<br />
							<br />
							Any supporting information you can think of adding will be appreciated. Attach anything you think might be helpful. Eg. A screenshot or screen recording may be the clearest
							way to explain your bug.
						</div>
					</div>

					<div className="row mt-5">
						<div className="offset-md-1 col-md-6 mt-2 bugsPage_heading">How do I report bugs?</div>
					</div>

					<div className="row mt-4 report_bugs">
						<div className="offset-md-1 col-md-11">
							Report bugs by sending us an email at:
							<br />
							<a href="mailto:contact@musixverse.com?subject=[Bug%20Report]" target="_blank" rel="noopener noreferrer" className="report_bugs">
								contact@musixverse.com
							</a>
							<br />
							<br />
							Or submit your comments anonymously using the form below.
							<br />
							<br />
							Please make sure to include as much detailed information about the issue as possible.
						</div>
					</div>

					<div className="row contact_form">
						<div className="offset-md-1 col-md-10 offset-0 col-12">
							<div className="contact_us_div">
								<div className="contact_us_box col-md-12 p-3 shadow mb-5">
									<form className="message_inputs" action="https://getform.io/f/e746c9ad-7b72-4310-a4e2-4b777274c372" method="POST">
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
													<div className="col-md-10 col-8 provide_email">If you don't provide an email, we will not be able to respond to you!</div>
												</div>
											</div>

											<div className="col-md-6 col-10 mt-3 message_box">
												<div className="form-group">
													<label className="message">Bug Description</label>
													<textarea className="form-control textarea_contact" name="description" rows="8" required></textarea>
												</div>

												<button className="btn shadow-sm col-md-12 col-sm-12 col-12 send_message_btn">
													<span>
														Send<i className="fas fa-angle-double-right"></i>
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
