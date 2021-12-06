import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import MetamaskFox from "../../assets/metamask_fox.svg";
import "./dashboard.css";
import ConnectMetamask from "../Utils/ConnectMetamask/ConnectMetamask";
import dashboardSvg from "../../assets/dashboard.svg";

export default function Dashboard(props) {
	function isOwner(_song) {
		return _song.currentOwnerAddress === props.account;
	}

	function isCreator(_song) {
		return _song.artistAddress === props.account;
	}

	useEffect(() => {
		ConnectMetamask("connectButton", "Install MetaMask", "Connect with Metamask");
	}, []);

	return (
		<Fragment>
			<div className="dashboard-container">
				<div className="dashboard-box ">
					<div className="row">
						<div>
							{/* Dashboard CARD */}
							<div className="dashboard-card">
								{/* LEFT SIDE TEXT */}
								<div className="user-info-dashboard">
									<div>
										<h2>Dashboard</h2>
									</div>
									{props.account ? (
										<Fragment>
											<div className="mt-4 text-md-left text-center user-account-info">
												<div className="col-md-2 col-12 p-0 mr-0">
													<Jazzicon diameter={85} seed={jsNumberForAddress(props.account)} />
												</div>
												<div className="welcome-div">
													<p className="col-md-10 col-12 m-0 p-0 dashboard-text">Welcome Creator!</p>
													<p className="col-md-10 col-12 m-0 mt-1 p-0 user-address">{props.account}</p>
													{/* <div className="col-md-10 col-12 p-0 mt-md-0 mt-4 dashboard-text ">{props.account}</div> */}
												</div>
												{/* <div className="col-md-10 col-12 p-0 mt-md-0 mt-4 dashboard-text align-self-end">{props.account}</div> */}
											</div>
											{props.songNFTs.filter(isOwner).length > 0 ? (
												<Link to={"/chat"}>
													<button className="btn btn-primary shadow-sm chat_with_artist_btn mt-3">
														<span>
															Chat with the artists &nbsp;<i className="fas fa-comments"></i>
														</span>
													</button>
												</Link>
											) : null}
										</Fragment>
									) : (
										<div>
											<div className="row mt-5 mb-4">
												<div className="col-lg-7 col-md-9 col-sm-12 col-12">
													<button className="btn btn-primary shadow-sm submit-btn" id="connectButton">
														<span>
															<img src={MetamaskFox} alt="..." height="25" className="mr-3" />
															Connect with Metamask
															<i className="fas fa-angle-double-right"></i>
														</span>
													</button>
												</div>
											</div>
											<span className="connect-metamask-message">
												<i className="fas fa-info-circle"></i>{`	`}
												You must connect to metamask to buy and sell NFTs on Musixverse
											</span>
										</div>
									)}
								</div>
								<img className="dashboard-svg" src={dashboardSvg} alt="dashboard music svg"/>
							</div>
						</div>
					</div>
					<div className="lower-section">
						{/* OWNED BY ME DIV */}
						<div className="owned-by-user">
							<div className="mt-5 p-0 text-center">
								<h2 className="p-0 green_text">Owned by me</h2>
							</div>

							<div className="container-fluid d-flex flex-wrap justify-content-center owned-nfts-div">
								<div className="row mt-3 p-0 text-center justify-content-center">
									{props.songNFTs.filter(isOwner).length > 0 ? (
										props.songNFTs.map((song, key) => {
											return (
												<Fragment key={key}>
													{song.currentOwnerAddress === props.account ? (
														<div className="song_card_component">
															<Link to={`/song-info/${song.id}`}>
																<div className="library_cards_cover_div">
																	<img src={`https://ipfs.infura.io/ipfs/${song.hashes.imgHash}`} alt="song cover" />
																	<div className="text-break">
																		<p className="info_song_card_dashboard">#{`${song.id}`}</p>
																		<span className="info_song_card_dashboard">{`${song.songName}`}</span>
																	</div>
																</div>
															</Link>
														</div>
													) : null}
												</Fragment>
											);
										})
									) : (
										// <h5 className="mt-3 p-0">You don't own any NFTs yet. Go get one!</h5>
										<span className="connect-metamask-message mt-3">
											<i className="fas fa-info-circle"></i>{`	`}
											You don't own any NFTs yet. Go get one!
										</span>
									)}
								</div>
							</div>
						</div>
					{/* <br />
					<br /> */}
						<div className="created-by-me">
							<div className="mt-5 p-0 text-center">
								<h2 className="p-0 green_text">Created by me</h2>
							</div>

							<div className="container-fluid d-flex flex-wrap justify-content-center created-nfts-div">
								<div className="row mt-3 p-0 text-center justify-content-center">
									{props.songNFTs.filter(isCreator).length > 0 ? (
										props.songNFTs.map((song, key) => {
											return (
												<Fragment key={key}>
													{song.artistAddress === props.account ? (
														<div className="song_card_component">
															<Link to={`/song-info/${song.id}`}>
																<div className="library_cards_cover_div">
																	<img src={`https://ipfs.infura.io/ipfs/${song.hashes.imgHash}`} alt="song cover" />
																	<div className="text-break">
																		<p className="info_song_card_dashboard">#{`${song.id}`}</p>
																		<span className="info_song_card_dashboard">{`${song.songName}`}</span>
																	</div>
																</div>
															</Link>
														</div>
													) : null}
												</Fragment>
											);
										})
									) : (
										<span className="connect-metamask-message mt-3">
											<i className="fas fa-info-circle"></i>{`	`}
											You haven't created any NFTs. Go create one!
										</span>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
