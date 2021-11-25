import React from "react";
import { Link, NavLink } from 'react-router-dom';
import "./navbar.css";
import logo_navbar from "../../../assets/logo_navbar.png";
import hamburgerLogoMXV from '../../../assets/logo_nav_foot.svg';

export default function Navbar(props) {
	window.onscroll = function() {progressBarTop()};

	function progressBarTop() {
		var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var scrolled = (winScroll / height) * 100;
		if(document.getElementById("progressBar")) {
			document.getElementById("progressBar").style.width = scrolled + "%";
		}
	}

	function closeNavbar() {
		document.getElementById("hamburgerToggler").click();
	}

	return (
		<nav className="navbar navbar-expand-md navbar-light fixed-top shadow-md">
			<div className="progress-container">
				<div className="progress-bar" id="progressBar"></div>
			</div>
			<div className="d-flex w-50 order-0">
				<Link to={"/"}><img src={logo_navbar} alt="logo" className="mb-md-1 mb-3 cursor_ptr nav_logo" width="80"/></Link>
			</div>
			<div className="justify-content-center order-2" id="nav_center_links">
				<ul className="navbar-nav">
					<li className="nav-item m-4">
						<NavLink exact to={"/"} id="nav_home" activeClassName="nav-active" className="text_color nav-link">
							Home
						</NavLink>
					</li>
					<li className="nav-item m-4">
						<NavLink exact to={"/library"} id="nav_library" activeClassName="nav-active" className="text_color nav-link">
							Library
						</NavLink>
					</li>
					<li className="nav-item m-4">
						<NavLink exact to={"/trending"} id="nav_wallet" activeClassName="nav-active" className="text_color nav-link">
							Trending
						</NavLink>
					</li>
				</ul>
			</div>

			<div className="w-50 text-right order-1 order-md-last">
				<NavLink exact to={"/create"} id="nav_create" activeClassName="nav-active" className="nav-link navbar-text text_color">
					Create
				</NavLink>
				<NavLink exact to={"/dashboard"} id="nav_dashboard" activeClassName="nav-active" className="nav-link navbar-text m-4 text_color">
					Dashboard
				</NavLink>
			</div>

			<div className="navbar-nav">
				<div id="menuToggle">
					<input type="checkbox" className="toggler" id="hamburgerToggler" />
					<div className="hamburger">
						<div></div>
					</div>

					<div id="menu">
						<div className="hamburger_container">
							<div className="menu_box">
								<div className="row">
									<div className="offset-lg-1 col-lg-2 offset-md-1 col-md-2 offset-0 col-12 logo_div_anim">
										<Link to={"/"} onClick={closeNavbar}><img src={hamburgerLogoMXV} alt="White logo" className="hamburger_logo_mxv"/></Link>
									</div>
									<div className="offset-lg-4 col-lg-2 offset-md-4 col-md-2 col-6 mt-md-5 mt-1 create_left_anim">
										<div className="mt-md-4 quick_hamburger_nav_div">
											<Link to={"/create"} onClick={closeNavbar} className="quick_hamburger_nav">Create</Link>
										</div>
									</div>
									<div className="offset-lg-0 col-lg-2 offset-md-0 col-md-2 col-6 mt-md-5 mt-1 dashboard_left_anim">
										<div className="mt-md-4 quick_hamburger_nav_div">
											<Link to={"/dashboard"} onClick={closeNavbar} className="quick_hamburger_nav">Dashboard</Link>
										</div>
									</div>
								</div>

								<div className="hamburger_menu justify-content-center">
									<div className="row justify-content-center">
										<div className="col-lg-12 col-md-10 offset-0 col-12 mt-md-0">
											<div className="row justify-content-center">
												<div className="col-md-3 col-6 text-center">
													<div className="row ham_menu_heading justify-content-center">Quick Links</div>
													<div className="row ham_menu_hover_effect_row mt-md-5 mt-4 justify-content-center">
														<Link to={"/library"} onClick={closeNavbar} className="ham_menu_link ham_menu_hover_effect text-center"><div>Library</div></Link>
													</div>
													<div className="row ham_menu_hover_effect_row justify-content-center">
														<Link to={"/trending"} onClick={closeNavbar} className="ham_menu_link ham_menu_hover_effect text-center"><div>Trending</div></Link>
													</div>
													<div className="row ham_menu_hover_effect_row justify-content-center">
														<Link to={"/faq"} onClick={closeNavbar} className="ham_menu_link ham_menu_hover_effect text-center"><div>FAQ</div></Link>
													</div>
													<div className="row ham_menu_hover_effect_row justify-content-center">
														<Link to={"/team"} onClick={closeNavbar} className="ham_menu_link ham_menu_hover_effect text-center"><div>Team</div></Link>
													</div>
												</div>

												<div className="col-md-3 col-6 text-center">
													<div className="row ham_menu_heading mt-0 justify-content-center">Account</div>
													<div className="row ham_menu_hover_effect_row mt-md-5 mt-4 justify-content-center">
														<Link to={"/dashboard"} onClick={closeNavbar} className="ham_menu_link ham_menu_hover_effect text-center"><div>Dashboard</div></Link>
													</div>
													<div className="row ham_menu_hover_effect_row justify-content-center">
														<Link to={"/"} onClick={closeNavbar} className="ham_menu_link ham_menu_hover_effect text-center"><div>Home</div></Link>
													</div>
													<div className="row ham_menu_hover_effect_row justify-content-center">
														<Link to={"/create"} onClick={closeNavbar} className="ham_menu_link ham_menu_hover_effect text-center"><div>Create</div></Link>
													</div>
												</div>

												<div className="col-md-3 col-12 text-center">
													<div className="row ham_menu_heading mt-5 mt-md-0 justify-content-center">Support</div>
													<div className="row ham_menu_hover_effect_row mt-md-5 mt-4 justify-content-center">
														<Link to={"/contact-us"} onClick={closeNavbar} className="ham_menu_link ham_menu_hover_effect text-center"><div>Contact Us</div></Link>
													</div>
													<div className="row ham_menu_hover_effect_row justify-content-center">
														<Link to={"/bugs"} onClick={closeNavbar} className="ham_menu_link ham_menu_hover_effect text-center"><div>Report a Bug</div></Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="offset-md-2 col-md-8 col-12 mt-5 mb-4 horizontal_line_to_right"></div>
								</div>
								
								<div className="row justify-content-center mt-md-5 mb-5 harmburger_menu_connect">
									<div className="ham_menu_connect_links_md col-md-2 offset-0 col-12 mt-md-0 mt-4">
										<div className="row justify-content-center">
											<div className="ham_menu_heading ham_menu_connect_heading text-center">Connect with us</div>
										</div>
										<div className="row justify-content-center mt-3">
											<a href="https://twitter.com/musixverse" target="_blank" rel="noopener noreferrer" className="connect_link cursor_ptr text-center col p-0"><i className="fab fa-twitter fa-lg"></i></a>
											<a href="https://discord.gg/HSKayad3NM" target="_blank" rel="noopener noreferrer" className="connect_link cursor_ptr text-center col p-0"><i className="fab fa-discord fa-lg"></i></a>
											<a href="https://www.instagram.com/musixverse" target="_blank" rel="noopener noreferrer" className="connect_link cursor_ptr text-center col p-0"><i className="fab fa-instagram fa-lg"></i></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
