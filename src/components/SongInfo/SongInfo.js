import React, { useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import web3 from "web3";
import "./songInfo.css";
import CoverCard from "./CoverCard/CoverCard";
import SongDesc from "./SongDesc/SongDesc";
import LyricsBox from "./LyricsBox/LyricsBox";
import AudioPlayer from "./AudioPlayer/AudioPlayer";
import TradeSuccessModal from "../Layout/Modal/TradeSuccessModal";

export default function SongInfo(props) {
	const prop = useParams();
	const _song = props.songNFTs[parseInt(prop.songId) - 1];
	const [isPlaying, setIsPlaying] = useState(false);

	const handlePlayPause = () => {
		if (isPlaying) {
			setIsPlaying(false);
		} else {
			setIsPlaying(true);
		}
	};

	return (
		<Fragment>
			<div className="song_info_container">
				<div className="song_info_box">
					<div className="row justify-content-center m-sm-4 m-3 ml-md-5 ml-0">
						<div className="col-lg-3 col-md-5 col-sm-8 col-12 order-lg-1 order-md-1 order-sm-1">
							<CoverCard
								song={_song}
								songCoverURL={`https://ipfs.infura.io/ipfs/${_song.hashes.imgHash}`}
								amount={web3.utils.fromWei(_song.price.toString(), "Ether")}
								purchaseSong={props.purchaseSong}
								toggleOnSale={props.toggleOnSale}
								updatePrice={props.updatePrice}
								account={props.account}
								isPlaying={isPlaying}
								playPause={handlePlayPause}
								maticUSD={props.maticUSD}
								maticINR={props.maticINR}
							/>
						</div>

						<div className="col-lg-6 col-md-7 pl-lg-5 pl-md-4 pt-2 order-lg-2 mt-md-0 order-md-2 order-sm-2 mt-sm-5 mt-5">
							<SongDesc song={_song} account={props.account} backgroundURL={_song.hashes.descHash.length > 0 ? `https://ipfs.infura.io/ipfs/${_song.hashes.descHash}` : "error"} />
						</div>

						{/* MP3 PLAYER */}
						<div className="col-sm-10 col-12 mt-lg-5 order-lg-4 mt-md-3 order-md-3 order-sm-3 mt-sm-3">
							<div className="row justify-content-center mt-5">
								<AudioPlayer
									source={`https://ipfs.infura.io/ipfs/${_song.hashes.songHash}`}
									songCoverURL={`https://ipfs.infura.io/ipfs/${_song.hashes.imgHash}`}
									isPlaying={isPlaying}
									playPause={handlePlayPause}
									lyricsPresent={_song.hashes.lyricsHash.length > 0 ? true : false}
								/>
							</div>
						</div>

						<div className="col-lg-3 mt-lg-0 order-lg-3 mt-md-5 order-md-4 order-sm-4 mt-sm-5 mt-5">
							<div className="row justify-content-center mt-lg-0 mt-md-4 mt-sm-4 mt-4">
								<div className="col-sm-10 col-12">
									<LyricsBox lyricsURL={_song.hashes.lyricsHash.length > 0 ? `https://ipfs.infura.io/ipfs/${_song.hashes.lyricsHash}` : "error"} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Successfully bought Modal */}
			<TradeSuccessModal show={props.showTradeSuccess} closeModal={props.closeTradeSuccessModal} />
		</Fragment>
	);
}
