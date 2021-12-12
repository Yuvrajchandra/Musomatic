import React, { Fragment } from "react";
import appleLogo from "../../../../assets/apple.svg";
import spotifyLogo from "../../../../assets/spotify.svg";
import amazonLogo from "../../../../assets/amazon.svg";
import youtubeMusic from "../../../../assets/youtubeMusic.png";
import "./socials.css";

export default function Socials(props) {
	return (
		<Fragment>
			<span className="listenOn-text">Listen song on</span>

			<div className="mt-2 row justify-content-center social-links">
				{props.socials.spotify ? (
					<a className="col-3" href={props.socials.spotify} target="_blank" rel="noopener noreferrer">
						<img src={spotifyLogo} alt="spotify logo"></img>
					</a>
				) : (
					<a className="col-3" href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer">
						<img src={spotifyLogo} alt="spotify logo"></img>
					</a>
				)}

				{props.socials.appleMusic ? (
					<a className="col-3" href={props.socials.appleMusic} target="_blank" rel="noopener noreferrer">
						<img src={appleLogo} alt="apple music logo"></img>
					</a>
				) : (
					<a className="col-3" href="https://music.apple.com/us/browse" target="_blank" rel="noopener noreferrer">
						<img src={appleLogo} alt="apple music logo"></img>
					</a>
				)}

				{props.socials.amazonMusic ? (
					<a className="col-3 mt-1" href={props.socials.amazonMusic} target="_blank" rel="noopener noreferrer">
						<img src={amazonLogo} alt="amazon music logo"></img>
					</a>
				) : (
					<a className="col-3 mt-1" href="https://music.amazon.in/" target="_blank" rel="noopener noreferrer">
						<img src={amazonLogo} alt="amazon music logo"></img>
					</a>
				)}

				{props.socials.youtubeMusic ? (
					<a className="col-3" href={props.socials.youtubeMusic} target="_blank" rel="noopener noreferrer">
						<img src={youtubeMusic} alt="amazon music logo"></img>
					</a>
				) : (
					<a className="col-3" href="https://music.youtube.com/" target="_blank" rel="noopener noreferrer">
						<img src={youtubeMusic} alt="amazon music logo"></img>
					</a>
				)}
			</div>
		</Fragment>
	);
}
