import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./trending.css";
import TrendingCard from "./TrendingCard";
import trendingIcon from "../../assets/trendingIcon.svg";

export default function Trending(props) {
	const trending_ordered = [...props.songNFTs];
	trending_ordered.sort((a, b) => {
		return b.sales.previousOwners.length - a.sales.previousOwners.length;
	});

	const trendingCards = trending_ordered.slice(0, 4).map((song, key) => (
		<div className="col-xl-3 col-lg-4 col-md-6 col-sm-9 col-12 m-0 p-3" key={key}>
			<Link to={`/song-info/${song.id}`}>
				<TrendingCard song={song} />
			</Link>
		</div>
	));

	return (
		<Fragment>
			<div className="trending_container">
				<div className="trending_box">
					<div className="row justify-content-center">
						{/* Trending Cards Row */}
						<div className="trending_bg_glass">
							<p className="trending_heading">Trending</p>
							<div className="trending_cards_div">
								<div className="row trending_cards_row justify-content-center m-0 p-0">
									{props.songNFTs.length > 0 ? (
										trendingCards
									) : (
										<div className="row justify-content-center text-center mt-3 mb-5">
											<h2>No songs to display</h2>
										</div>
									)}
								</div>
							</div>
						</div>

						{/* CTA Create Trends */}
						<div className="mt-5 cta_create_trend row justify-content-center">
							<img src={trendingIcon} alt="create trends" />
							<div className="row justify-content-center">
								<div className="cta_trend_text">
									<p>Don't follow trends. Start trends!</p>
									<span>Upload your songs on MXV</span>
								</div>
							</div>

							<Link to={"/create"}>
								<div className="mt-4 row justify-content-center create_trend_btn">
									<button className="btn shadow-sm col-md-6 col-sm-8 col-8 send_message_btn">
										<span>
											Start Creating<i className="fas fa-angle-double-right"></i>
										</span>
									</button>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
