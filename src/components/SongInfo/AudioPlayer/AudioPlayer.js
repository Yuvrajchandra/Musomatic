import React, { useState, useRef, useEffect, useCallback } from "react";
import "./audioPlayer.css";
import Tooltip from "../../Utils/Tooltip/Tooltip";

const AudioPlayer = (props) => {
	// state
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);

	// references
	const audioPlayer = useRef(); // reference our audio component
	const progressBar = useRef(); // reference our progress bar
	const animationRef = useRef(); // reference the animation

	useEffect(() => {
		const seconds = Math.floor(audioPlayer.current.duration);
		setDuration(seconds);
		progressBar.current.max = seconds;
	}, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState, audioPlayer]);

	const calculateTime = (secs) => {
		const minutes = Math.floor(secs / 60);
		const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
		const seconds = Math.floor(secs % 60);
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
		return `${returnedMinutes}:${returnedSeconds}`;
	};

	const changePlayerCurrentTime = useCallback(() => {
		progressBar.current.style.setProperty("--seek-before-width", `${(progressBar.current.value / duration) * 100}%`);
		setCurrentTime(progressBar.current.value);
	}, [duration]);

	const whilePlaying = useCallback(() => {
		if (audioPlayer.current) {
			progressBar.current.value = audioPlayer.current.currentTime;
			changePlayerCurrentTime();
			animationRef.current = requestAnimationFrame(whilePlaying);
		}
	}, [changePlayerCurrentTime]);

	const startStopSong = useCallback(
		(prevValue) => {
			if (prevValue) {
				audioPlayer.current.play();
				animationRef.current = requestAnimationFrame(whilePlaying);
			} else {
				audioPlayer.current.pause();
				cancelAnimationFrame(animationRef.current);
			}
		},
		[whilePlaying]
	);

	const togglePlayPause = () => {
		const prevValue = props.isPlaying;
		if (prevValue) {
			props.playPause();
		} else {
			props.playPause();
		}
		startStopSong(prevValue);
	};

	useEffect(() => {
		startStopSong(props.isPlaying);
	}, [props.isPlaying, startStopSong]);

	const changeRange = () => {
		audioPlayer.current.currentTime = progressBar.current.value;
		changePlayerCurrentTime();
	};

	const backTen = () => {
		progressBar.current.value = Number(progressBar.current.value) - 10;
		changeRange();
	};

	const forwardTen = () => {
		progressBar.current.value = Number(progressBar.current.value) + 10;
		changeRange();
	};

	return (
		<div className="audioPlayer glass_effect">
			<audio ref={audioPlayer} src={props.source} preload="metadata"></audio>

			<div className="row p-3 audioPlayer_row">
				<div className="col-lg-1 d-lg-flex d-none justify-content-left align-items-left m-0 p-0">
					<img src={props.songCoverURL} className="cover_image" alt="song-cover" />
				</div>

				<div className="col-12 col-lg-10 col-md-10 col-sm-10 align-self-md-end align-self-lg-center justify-content-center mt-2 ps-lg-5">
					<div className="row justify-content-center align-items-center">
						<div className="col-md-1 col-2 m-0 p-0 text-center">
							<button className="forwardBackward" onClick={backTen}>
								<i className="fas fa-redo-alt fa_redo_alt_backwards"></i>
							</button>
						</div>
						<div className="col-md-1 col-2 m-0 p-0 text-center">
							<button onClick={togglePlayPause} className="playPause" id="playPauseBtn">
								{props.isPlaying ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>}
							</button>
						</div>
						<div className="col-md-1 col-2 m-0 p-0 text-center">
							<button className="forwardBackward" onClick={forwardTen}>
								<i className="fas fa-redo-alt"></i>
							</button>
						</div>
					</div>

					<div className="row mt-2">
						{/* current time */}
						<div className="col-1 text-right m-0 p-0 mt-1">
							<div className="currentTime">{calculateTime(currentTime)}</div>
						</div>

						{/* progress bar */}
						<div className="col-10">
							<div>
								<input type="range" className="progressBar" defaultValue="0" ref={progressBar} onChange={changeRange} />
							</div>
						</div>

						{/* duration */}
						<div className="col-1 text-left m-0 p-0 mt-1">
							<div className="duration">{duration ? calculateTime(duration) : null}</div>
						</div>
					</div>
				</div>

				<div className="col-2 col-lg-1 col-md-2 d-sm-flex d-none flex-end align-items-end justify-content-end m-0 p-0">
					{/* Info and Lyrics Button */}
					<Tooltip songInfoAudio={true} labelText="" message="Song quality may be a little low due to compression" />
					{props.lyricsPresent ? <Tooltip lyricsPresent={props.lyricsPresent} labelText="" message="Lyrics for this song are present" /> : null}
				</div>
			</div>
		</div>
	);
};

export default AudioPlayer;
