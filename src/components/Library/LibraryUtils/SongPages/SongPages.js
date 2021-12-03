import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./songPages.css";
import JumpToStart from "../JumpToStart";
import JumpToEnd from "../JumpToEnd";

export default function SongPages(props) {
	// STATE MANAGEMENT
	const [currentPage, setCurrentPage] = useState(1);

	const handleChangePage = (event) => {
		const clickedPageNum = parseInt(event.target.textContent);

		if (currentPage === clickedPageNum) return;
		setCurrentPage(clickedPageNum);
	};

	// NEXT AND PREV PAGER CLICK MANAGEMENT
	const decrementPageNumber = () => {
		if (currentPage === 1) return;
		setCurrentPage(currentPage - 1);
	};

	const incrementPageNumber = () => {
		if (currentPage === numberOfPages) return;
		setCurrentPage(currentPage + 1);
	};

	let n = props.songNFTs.length;
	let imagesArray = [];
	let pageDivArray = [];
	let j = 0;

	// CREATING INDIVIDUAL CARD ELEMENTS
	for (let i = n - 1; i >= 0; i--) {
		// NOTE: Do not use album-cover-div and album-cover classes
		imagesArray.push(
			<div className="song_card_component" key={i}>
				<Link to={`/song-info/${props.songNFTs[i].id}`}>
					<div className="library_cards_cover_div justify-content-center align-items-center">
						<img src={`https://ipfs.infura.io/ipfs/${props.songNFTs[i].hashes.imgHash}`} alt="song cover" />
						<div className="text-break">
							<p>#{`${props.songNFTs[i].id}`}</p>
							<span>{`${props.songNFTs[i].songName}`}</span>
						</div>
					</div>
				</Link>
			</div>
		);
		j++;

		if (j % 18 === 0 || j === n) {
			pageDivArray.push(imagesArray);
			imagesArray = [];
		}
	}

	// CREATING THE MAIN OUTER DIV
	const divToBeRendered = pageDivArray.map((cards, key) => (
		<div className="container-fluid library_cards_container d-flex flex-wrap justify-content-center" key={key}>
			{cards}
		</div>
	));

	// Creating Pager
	const numberOfPages = divToBeRendered.length;
	let interval = Math.floor((currentPage - 1) / 4);
	const pagerBar = [];

	for (let i = 0; i < numberOfPages; i++) {
		pagerBar.push(
			<li key={i} className={"page-item" + (currentPage === i + 1 ? " current-page-item" : "") + (Math.floor(i / 4) !== interval ? " hide-item" : "")}>
				<button className="page-link pagination_nav" onClick={handleChangePage}>
					{`${i + 1}`}
				</button>
			</li>
		);
	}

	return (
		<Fragment>
			{divToBeRendered.length > 1 ? (
				<Fragment>
					{divToBeRendered[currentPage - 1]}
					<div className="row pager_row justify-content-center">
						<nav className="paging-bar" aria-label="Page navigation example">
							<ul className="pagination">
								{/* PREV BUTTON */}
								<li className="page-item">
									<button className="page-link pagination_prev_next" onClick={decrementPageNumber} aria-label="Previous">
										<span aria-hidden="true">&laquo;</span>
									</button>
								</li>

								{/* JUMP TO START */}
								<JumpToStart interval={interval} onPageJump={handleChangePage} />

								{/* PAGERS */}
								{pagerBar}

								{/* JUMP TO END */}
								<JumpToEnd interval={interval} onPageJump={handleChangePage} numberOfPages={numberOfPages} />

								{/* NEXT BUTTON */}
								<li className="page-item">
									<button className="page-link pagination_prev_next" onClick={incrementPageNumber} aria-label="Next">
										<span aria-hidden="true">&raquo;</span>
									</button>
								</li>
							</ul>
						</nav>
					</div>
				</Fragment>
			) : props.songNFTs.length > 0 ? (
				divToBeRendered[currentPage - 1]
			) : (
				<div className="row justify-content-center text-center mt-5 mb-5">
					<div className="col">
						<h2>No songs to display</h2>
					</div>
				</div>
			)}
		</Fragment>
	);
}
