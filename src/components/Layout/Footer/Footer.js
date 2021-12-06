import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import footerLogo from "../../../assets/logo_nav_foot.svg";
import hallmark from "../../../assets/hallmark.png";
// file deepcode ignore no-mixed-spaces-and-tabs:

function Footer() {
	return (
		<Fragment>
			<div className="footer_container">
				<div className="footer_box">
					<div className="row justify-content-center">
						<div className="col-md-3 col-12">
							<div className="row">
								<div className="logo_col offset-md-0 col-md-4 offset-4 col-4 text-md-left text-center">
									<img src={footerLogo} alt="logo" />
								</div>
							</div>
							<div className="row">
								<div className="col-12 text-md-left text-center footer_mxv">Musomatic "MXV"</div>
							</div>
							<div className="connect_links_sm">
								<div className="row margin4 p-0 justify-content-center">
									<a href="#/" target="_blank" rel="noopener noreferrer" className="connect_link cursor_ptr text-center col-1 p-0">
										<i className="fab fa-twitter fa-lg"></i>
									</a>
									<a href="#/" target="_blank" rel="noopener noreferrer" className="offset-1 connect_link cursor_ptr text-center col-1 p-0">
										<i className="fab fa-discord fa-lg"></i>
									</a>
									<a href="#/" target="_blank" rel="noopener noreferrer" className="offset-1 connect_link cursor_ptr text-center col-1 p-0">
										<i className="fab fa-instagram fa-lg"></i>
									</a>
								</div>
							</div>
							<div className="footer_privacy_md">
								<div className="row mt-md-3 mt-5 footer_disclaimers">
									<Link to={"/terms-of-use"} className="privacy_headings col-md-5 text-md-left col-6 text-center terms_hover_effect">
										<div>Terms of Use</div>
									</Link>
									<Link to={"/privacy-policy"} className="privacy_headings col-md-6 text-md-left col-6 text-center terms_hover_effect">
										<div>Privacy Policy</div>
									</Link>
								</div>
								<div className="row mt-4 privacy_content_md">
									<div className="col-12 text-md-left text-center p-0">
										Musomatic™ is a registered trademark of Musomatic Technologies Inc. <br />
										©2021 All Rights Reserved
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-6 offset-lg-1 col-lg-5 offset-0 col-12 mt-md-0 mt-5">
							<div className="row">
								<div className="footer_heading col-4 text-md-left text-center">Quick Links</div>
								<div className="footer_heading col-4 text-md-left text-center">Account</div>
								<div className="footer_heading col-4 text-md-left text-center">Support</div>
							</div>

							<div className="row footer_hover_effect_row margin4">
								<Link to={"/library"} className="footer_links col-4 footer_hover_effect text-md-left text-center">
									<div>Library</div>
								</Link>
								<Link to={"/dashboard"} className="footer_links col-4 footer_hover_effect text-md-left text-center">
									<div>Dashboard</div>
								</Link>
								<Link to={"/contact-us"} className="footer_links col-4 footer_hover_effect text-md-left text-center">
									<div>Contact Us</div>
								</Link>
							</div>

							<div className="row footer_hover_effect_row">
								<Link to={"/trending"} className="footer_links col-4 footer_hover_effect text-md-left text-center">
									<div>Trending</div>
								</Link>
								<Link to={"/create"} className="footer_links col-4 footer_hover_effect text-md-left text-center">
									<div>Create</div>
								</Link>
								<Link to={"/bugs"} className="footer_links col-4 footer_hover_effect text-md-left text-center">
									<div>Report a Bug</div>
								</Link>
							</div>

							<div className="row footer_hover_effect_row">
								<Link to={"/faq"} className="footer_links col-4 footer_hover_effect text-md-left text-center">
									<div>FAQ</div>
								</Link>
								<Link to={"/"} className="footer_links col-4 footer_hover_effect text-md-left text-center">
									<div>Home</div>
								</Link>
							</div>

							<div className="row footer_hover_effect_row">
								<Link to={"/chat"} className="footer_links col-4 footer_hover_effect text-md-left text-center">
									<div>Chat</div>
								</Link>
							</div>
						</div>

						<div className="horizontal_lines_small_screen col-12 mt-4"></div>

						<div className="footer_privacy_sm justify-content-center">
							<div className="row mt-4">
								<Link to={"/terms-of-use"} className="privacy_headings col-md-6 text-md-left col-6 text-center terms_hover_effect">
									<div>Terms of Use</div>
								</Link>
								<Link to={"/privacy-policy"} className="privacy_headings col-md-6 text-md-left col-6 text-center terms_hover_effect">
									<div>Privacy Policy</div>
								</Link>
							</div>
							<div className="row mt-5 justify-content-center">
								<div className="col-6 stamp_div">
									<img src={hallmark} alt="Developed In" className="stamp" />
								</div>
							</div>
							<div className="row mt-5 privacy_content justify-content-center">
								<div className="col-10 text-md-left text-center">
									Musomatic™ is a registered trademark of Musomatic Technologies Inc. <br />
									©2021 All Rights Reserved
								</div>
							</div>
						</div>

						<div className="connect_links_md p-0 offset-md-1 col-md-2 offset-0 col-12 mt-md-0 mt-4">
							<div className="row ml-1">
								<div className="footer_heading p-0 ml-1">Connect with us</div>
							</div>
							<div className="row margin4 p-0 ml-1">
								<a href="#/" target="_blank" rel="noopener noreferrer" className="connect_link cursor_ptr text-center col-2 p-0">
									<i className="fab fa-twitter fa-lg"></i>
								</a>
								<a href="#/" target="_blank" rel="noopener noreferrer" className="connect_link cursor_ptr text-center col-2 p-0">
									<i className="fab fa-discord fa-lg"></i>
								</a>
								<a href="#/" target="_blank" rel="noopener noreferrer" className="connect_link cursor_ptr text-center col-2 p-0">
									<i className="fab fa-instagram fa-lg"></i>
								</a>
							</div>

							<div className="row mt-lg-5 mt-md-4">
								<div className="col-lg-8 col-md-9 stamp_div">
									<img src={hallmark} alt="Developed In" className="stamp" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Footer;
