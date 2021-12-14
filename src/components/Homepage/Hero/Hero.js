import React from "react";
import "./hero.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import hero1 from "../../../assets/hero-img-1.png";
import hero2 from "../../../assets/hero-img-2.png";
import hero3 from "../../../assets/hero-img-3.png";
import hero4 from "../../../assets/hero-img-4.png";

import hero1_m from "../../../assets/hero-img-m-1.png";
import hero2_m from "../../../assets/hero-img-m-2.png";
import hero3_m from "../../../assets/hero-img-m-3.png";
import hero4_m from "../../../assets/hero-img-m-4.png";

export default function Hero() {
	const fadeImages = [hero1, hero2, hero3, hero4];
	const fadeImages_m = [hero1_m, hero2_m, hero3_m, hero4_m];

	const properties = {
		// duration: 5000,
		// transitionDuration: 500,
		// infinite: true,
		// indicators: true,
		arrows: false,
		pauseOnHover: false,
	};

	return (
		<div className="slide-container">
			<Fade {...properties}>
				<div className="each-fade">
					<div className="image-container">
						<img className="hero-container-new" src={fadeImages[0]} alt="" />
						<img className="hero-container-new-m" src={fadeImages_m[0]} alt="" />
					</div>
				</div>
				<div className="each-fade">
					<div className="image-container">
						<img className="hero-container-new" src={fadeImages[1]} alt="" />
						<img className="hero-container-new-m" src={fadeImages_m[1]} alt="" />
					</div>
				</div>
				<div className="each-fade">
					<div className="image-container">
						<img className="hero-container-new" src={fadeImages[2]} alt="" />
						<img className="hero-container-new-m" src={fadeImages_m[2]} alt="" />
					</div>
				</div>
				<div className="each-fade">
					<div className="image-container">
						<img className="hero-container-new" src={fadeImages[3]} alt="" />
						<img className="hero-container-new-m" src={fadeImages_m[3]} alt="" />
					</div>
				</div>
			</Fade>
		</div>

		// <div className="hero-wrapper">
		//     <div className="hero-container-new hero-img-1"></div>
		//     <div className="hero-container-new hero-img-2"></div>
		//     <div className="hero-container-new hero-img-3"></div>
		//     <div className="hero-container-new hero-img-4"></div>
		// </div>
	);
}
