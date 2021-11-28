import React from "react";
import web3 from "web3";
import "./trendingCard.css";

export default function TrendingCard(props) {
	return (
		<div className="trending_card">
			<div className="row trending_card_row justify-content-center mb-3">
				<div className="col-12 p-0">
					<img className="trending_album_cover" src={`https://ipfs.infura.io/ipfs/${props.song.hashes.imgHash}`} width="100%" alt="album cover" />
				</div>
			</div>

			<p className="trending_song_name">{props.song.songName}</p>
			<p className="trending_song_by">Artist name: {props.song.artistName}</p>
			<p className="trending_song_price">{parseFloat(web3.utils.fromWei(props.song.price.toString(), "Ether")).toFixed(2)} MATIC</p>
		</div>
	);
}
