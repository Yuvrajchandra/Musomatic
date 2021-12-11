import React from "react";
import { Link } from "react-router-dom";
import "./cta.css";
import Button from "../../Layout/Button/Button";
import soundWave from "../../../assets/sound_wave.svg";
import mvxDesign from "../../../assets/MVX-design.svg";

export default function Cta(props) {
	return (
		<div className={props.isHomeSection ? "cta-bg" : "library-cta-bg"}>
			{/* Background Styling div */}
			{props.isHomeSection ? <div className="bg-blur-div" /> : <img src={mvxDesign} className="library-bg-style" alt="mvx line design" />}

			{/* Main content div */}
			<div className="cta-box">
				<div className="row justify-content-center">
					{/* CTA description */}
					<div className="row cta-desc">
						<div className="col-lg-10 p-0">
							<h2>Start Creating Digital Music for the new Blockchain Era</h2>
							<div className="row mt-5">
								<div className="col-lg-10 col-md-10 col-12">
									<div className="row">
										<div className="col-lg-5 col-md-5 col-sm-5 col-6">
											{props.isHomeSection ? (
												<Link to={"/library"}>
													<Button>Library</Button>
												</Link>
											) : (
												<Link to={"/dashboard"}>
													<Button>Dashboard</Button>
												</Link>
											)}
										</div>
										<div className="col-lg-5 col-md-5 col-sm-5 col-6 ml-sm-1">
											<Link to={"/create"}>
												<Button>Create</Button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Card Element */}
					<div className="cta-card glass_effect_border">
						<img src={soundWave} alt="" />
						{props.isHomeSection ? (
							<Link to={"/library"} className="cardLink">
								Explore &nbsp;<i className="fas fa-angle-double-right"></i>
							</Link>
						) : (
							<Link to={"/trending"} className="cardLink">
								Trending &nbsp;<i className="fas fa-angle-double-right"></i>
							</Link>
						)}
						<p className="cta-card-info">Explore a rich gallery of Digital Music</p>
					</div>
				</div>
			</div>
		</div>
	);
}
