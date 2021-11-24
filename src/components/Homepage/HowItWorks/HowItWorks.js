import React from "react";
import "./howItWorks.css";
import Card from "../../Layout/Card/Card.js";
import createContent from "../../../assets/create_content.svg";
import nftLogo from "../../../assets/nft_logo.svg";
import soundWave from "../../../assets/sound_wave.svg";
import brandLogo from "../../../assets/mxv_logo_vertical.svg";

export default function HowItWorks() {
	return (
		<div className="how-it-works-bg">
			{/* Added brand logo */}
			<img className="brand-logo-how-it-works" src={brandLogo} alt="brand logo" />
			<div className="how-it-works-box">
				<div className="row justify-content-center">
					<div className="section-heading col-lg-3 col-md-3 col-sm-12 p-0 m-0 text-center text-md-left">
						<h2>How it works</h2>
					</div>
					<div className="col-lg-7 col-md-7 col-sm-12 p-0 ml-lg-0 ml-md-1 ml-sm-3 section-description">
						<p>
							Musomatic provides a decentralized platform for musicians to upload their art up on the internet for trading. Users/Fans just need to create a digital wallet to trade the
							NFTs. This makes buying NFTs as easy as online shopping. There is no hassle of going anywhere. Everything can be done at the comfort of home. The only prerequisite is some
							amount of cryptocurrency in your digital wallet.
						</p>
						<p>
							Artists can raise money by selling their music as NFTs, while fans can support and form closer connections to their idols by purchasing a real stake in their careers. Even
							if the art has been sold by the musician, they will still be getting 5% of the trade each time the NFT is sold! Thus, providing the artist with benefits and the recognition
							they deserve.
						</p>
						<p>
							The artist will have the freedom to decide the price at which they want to sell their music NFT. Once all the information has been filled in on the Create Page, the artist
							will have to pay a small gas fee (almost negligible) while uploading their song. After paying the gas fee, the NFT will be created and featured in the Musomatic library.
							Now, users will be able to listen to the song and purchase the NFT.
						</p>
						<div className="mt-5 cards">
							<Card imagePath={nftLogo}>Create Song NFT</Card>
							<Card imagePath={createContent} className="big_img">
								Buy/Sell NFTs
							</Card>
							<Card imagePath={soundWave}>Listen Music</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
