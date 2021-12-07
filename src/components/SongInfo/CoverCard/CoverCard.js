import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import web3 from "web3";
import "./coverCard.css";
import Socials from "./Socials/Socials.js";
import ConnectMetamask from "../../Utils/ConnectMetamask/ConnectMetamask";
import Tooltip from "../../Utils/Tooltip/Tooltip";

export default function CoverCard(props) {
	const previousOwners = props.song.sales.previousOwners;
	const previousPrices = props.song.sales.previousPrices;
	const previousSaleTimes = props.song.sales.previousSaleTimes;

	// if Artist address == current owner && array previous owners == 0 :  NFT is not yet sold

	// if Artist address == current owner && array previous owners != 0 :  NFT is sold (Show the History of transactions in modal)
	const icon_arrowRight = <i className="transfer_money_text pt-2 fas fa-angle-double-right"></i>;
	const icon_arrowUp = <i className="transfer_money_text pt-2 fas fa-angle-double-up"></i>;

	// Timestamp to Date
	function convertTimestampToDate(timestamp) {
		var date = new Date(timestamp * 1000);
		return [
			("0" + date.getDate()).slice(-2), // Get day and pad it with zeroes
			("0" + (date.getMonth() + 1)).slice(-2), // Get month and pad it with zeroes
			date.getFullYear(), // Get full year
		].join("/"); // Glue the pieces together
	}

	useEffect(() => {
		ConnectMetamask("connectMetamaskToBuyButton", "Install MetaMask to Buy", "Connect Metamask to Buy");
	}, []);

	return (
		<Fragment>
			<div className="cover_card">
				<div className="row cover_card_row justify-content-center mb-4">
					<div className="col-12 p-0">
						<img className="album_cover" src={props.songCoverURL} width="100%" alt="album cover" />

						<button className="play-btn" onClick={props.playPause}>
							{props.isPlaying ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>}
						</button>
					</div>
				</div>

				{/* SOCIAL'S LINKS */}
				<Socials socials={props.song.links} />

				{/* BUY BUTTON */}
				<div style={{ width: "100%" }} className="row m-0 p-0 mt-4 justify-content-center">
					<div className="col-lg-12 col-md-12 col-12 m-0 p-0">
						<div className="row justify-content-center m-0 p-0">
							<div className="col-lg-12 col-md-12 col-sm-10 col-xs-10 col-12 m-0 p-0">
								{props.account && props.account === props.song.currentOwnerAddress ? (
									<span>
										<div className="owned_by_you_text">Owned by you</div>
										<p className="mt-1 cover_card_current_price">
											Current Price: {parseFloat(props.amount).toFixed(3)} MATIC{" "}
											<span className="edit_price" data-bs-toggle="modal" data-bs-target="#editPriceModal">
												(Edit)
											</span>
										</p>
										{props.song.currentOwnerAddress !== props.song.artistAddress ? (
											<Link to={"/chat"}>
												<button className="btn btn-primary shadow-sm chat_with_artist_btn">
													<span>
														Chat with the artist &nbsp;<i className="fas fa-comments"></i>
													</span>
												</button>
											</Link>
										) : null}
									</span>
								) : props.account && props.song.onSale ? (
									<button
										className="btn btn-primary shadow-sm submit-btn"
										onClick={() => {
											props.purchaseSong(props.song.id, props.song.price, props.song.artistAddress, props.song.artistName);
										}}
									>
										<span>
											BUY for {`${parseFloat(props.amount).toFixed(3)} `} MATIC<i className="fas fa-angle-double-right"></i>
										</span>
									</button>
								) : props.account ? (
									<button className="btn btn-primary shadow-sm not_for_sale_btn">
										<span>Currently not for sale</span>
									</button>
								) : (
									<button className="btn btn-primary shadow-sm not_for_sale_btn connect_metamask_to_buy_btn" id="connectMetamaskToBuyButton">
										<span>Connect Metamask to Buy</span>
									</button>
								)}
							</div>
						</div>
					</div>
				</div>

				{!props.song.onSale && props.account === props.song.artistAddress && props.song.artistAddress === props.song.currentOwnerAddress ? (
					<span>
						<small className="mt-4">Item currently not on the market</small>
						<h4
							className={"sale_history put_up_on_sale"}
							onClick={() => {
								props.toggleOnSale(props.song.id);
							}}
						>
							Put up on Sale
						</h4>
					</span>
				) : props.song.onSale && props.account === props.song.artistAddress && props.song.artistAddress === props.song.currentOwnerAddress ? (
					<span>
						<small className="mt-5">Item currently on the market for sale</small>
						<h4
							className={"sale_history take_down_from_sale"}
							onClick={() => {
								props.toggleOnSale(props.song.id);
							}}
						>
							Take down from Sale
						</h4>
					</span>
				) : null}

				<span className="created_on text-break mt-3">Created on: {convertTimestampToDate(props.song.createTime)}</span>

				<div className="sale_history mt-3" data-bs-toggle="modal" data-bs-target="#detailModal">
					Sale History
				</div>
			</div>

			{/* Sale History Modal */}
			<div className="modal in" id="detailModal" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-xl">
					<div className="modal-content sale_modal_content p-sm-5 p-4">
						<div className="modal-header sale_modal_close">
							<button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<div className="row sale_modal_header">
								<div className="col-12 d-flex sale_modal_subheader flex-column px-0">
									<h4 className="sale_modal_title mb-3">Current Owner</h4>
									<div className="sale_modal_subtitle modal_green_text d-flex justify-content-center align-items-center">
										<div className="mx-sm-5 mx-2">{props.song.currentOwnerAddress}</div>
									</div>
								</div>
							</div>
							{props.song.artistAddress === props.song.currentOwnerAddress && props.song.sales.previousOwners.length === 0 ? (
								<div className="row d-flex justify-content-center align-items-center mb-5">
									<h5 className="text-center mb-2 mt-4">This NFT is not yet sold.</h5>
									<br />
									<h5 className="text-center mb-4">Be the first one to purchase it!</h5>
									{props.account && props.song.onSale ? (
										<div className="row justify-content-center m-0 p-0">
											<div className="col-xl-4 col-lg-5 col-md-8 col-sm-10 col-10 m-0 p-0">
												<button
													className="btn btn-primary shadow-sm submit-btn"
													onClick={() => {
														props.purchaseSong(props.song.id, props.song.price, props.song.artistAddress, props.song.artistName);
													}}
												>
													<span>
														BUY for {`${parseFloat(props.amount).toFixed(3)} `} MATIC<i className="fas fa-angle-double-right"></i>
													</span>
												</button>
											</div>
										</div>
									) : null}
								</div>
							) : (
								<div>
									<div className="sale_history_section">
										<div className="row d-flex sale_modal_subheader">
											<h4 className="sale_modal_title p-0 m-0">Sale History</h4>
										</div>
										{previousOwners.map((owner, index) => {
											return (
												<div className="row mt-4" key={index}>
													<div className="col sale_history_subsection p-0">
														<div className="sale_modal_subtitle d-flex justify-content-center align-items-center">
															<div className="mx-5">
																{previousOwners.length - index - 1 === 0 ? props.song.artistAddress : previousOwners[previousOwners.length - index - 1]}
															</div>
														</div>
													</div>
													<div className="col sale_history_subsection p-0 transfer_money d-flex flex-cloumn flex-wrap justify-content-center">
														<div className="col-12 p-0 m-0 pt-2 mt-1 d-flex justify-content-center">
															{icon_arrowRight}
															<span className="transaction_money mx-3 fw-bold pt-1">
																{parseFloat(web3.utils.fromWei(previousPrices[previousPrices.length - index - 1].toString(), "Ether")).toFixed(3)}
																<span className="transaction_money_unit">&nbsp;&nbsp;MATIC</span>
															</span>
															{icon_arrowRight}
														</div>
														<div className="col-12 p-0 m-0 sale_responsive_border"></div>
														<span className="sale_modal_info mt-1">{convertTimestampToDate(previousSaleTimes[previousSaleTimes.length - index - 1])}</span>
													</div>
													<div className="col sale_history_subsection p-0">
														<div className="sale_modal_subtitle d-flex justify-content-center align-items-center">
															<div className="mx-5">{index === 0 ? props.song.currentOwnerAddress : previousOwners[previousOwners.length - index]}</div>
														</div>
													</div>
												</div>
											);
										})}
									</div>

									{/* Sales History for mobile devices */}
									<div className="sale_history_section_mobile">
										<div className="row d-flex sale_modal_subheader">
											<h4 className="sale_modal_title p-0 m-0 text-center">History</h4>
										</div>
										{previousOwners.map((owner, index) => {
											return (
												<div key={index}>
													{index === 0 ? (
														<div className="row mt-4">
															<div className="col sale_history_subsection p-0">
																<div className="sale_modal_subtitle d-flex justify-content-center align-items-center">
																	<div className="mx-sm-5 mx-2">{props.song.currentOwnerAddress}</div>
																</div>
															</div>
														</div>
													) : null}

													<div className="row mt-4">
														<div className="col sale_history_subsection p-0 transfer_money d-flex flex-cloumn flex-wrap justify-content-center">
															<div className="col-12 p-0 m-0 pt-2 mt-1 d-flex justify-content-center">
																{icon_arrowUp}
																<span className="transaction_money mx-3 fw-bold pt-1">
																	{parseFloat(web3.utils.fromWei(previousPrices[previousPrices.length - index - 1].toString(), "Ether")).toFixed(3)}
																	<span className="transaction_money_unit">&nbsp;&nbsp;MATIC</span>
																</span>
																{icon_arrowUp}
																<span className="sale_modal_info mt-2 ml-3">on {convertTimestampToDate(previousSaleTimes[previousSaleTimes.length - index - 1])}</span>
															</div>
														</div>
													</div>

													<div className="row mt-2">
														<div className="col sale_history_subsection p-0">
															<div className="sale_modal_subtitle d-flex justify-content-center align-items-center">
																<div className="mx-sm-5 mx-2">{previousOwners[previousOwners.length - index - 1]}</div>
															</div>
														</div>
													</div>
												</div>
											);
										})}
									</div>
								</div>
							)}

							<div className="row mt-5">
								<div className="col-12 mt-4 d-flex sale_modal_creation p-4 flex-column justify-content-center align-items-center">
									<h5 className="sale_modal_title">
										Creation <span className="created_on">({convertTimestampToDate(props.song.createTime)})</span>
									</h5>
									<div className="sale_modal_artist_address text-center text-break">(Artist Address: {props.song.artistAddress})</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Edit Price Modal */}
			<div className="modal in" id="editPriceModal" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-md">
					<div className="modal-content sale_modal_content p-sm-5 p-4">
						<div className="modal-header sale_modal_close">
							<button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<form
							onSubmit={(event) => {
								event.preventDefault();
								const _newPrice = document.getElementById("newPrice").value;
								props.updatePrice(props.song.id, _newPrice);
							}}
						>
							<div className="modal-body">
								<div className="row">
									<div className="col-12 d-flex sale_modal_subheader flex-column px-0">
										<h3 className="editPrice_modal_title mb-3">Edit Price</h3>
									</div>
								</div>
								<div className="row mt-5">
									<span className="m-0 p-0">
										Enter the new Price in MATIC &nbsp;&nbsp;
										<Tooltip labelText="Know more" message={`1 MATIC = $${props.maticUSD} or ₹${props.maticINR}`} />
									</span>
								</div>
								<div className="row mt-3">
									<input type="number" id="newPrice" className="input-text-field" placeholder="Enter Price in MATIC" step="0.1" min="0" required />
								</div>
							</div>
							<div className="row m-0 p-0 mt-3 justify-content-end">
								<div className="offset-6 col-lg-5 col-md-6 m-0 p-0">
									<button className="btn btn-primary shadow-sm submit-btn" type="submit" data-bs-dismiss="modal">
										<span>
											Submit
											<i className="fas fa-angle-double-right"></i>
										</span>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
