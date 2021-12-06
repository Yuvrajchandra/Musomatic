import React from "react";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

const SearchResult = ({ channel, focusedId, type, setChannel, setToggleContainer }) => {
	if (type === "team") {
		return (
			<div
				onClick={() => {
					setChannel(channel);
					if (setToggleContainer) {
						setToggleContainer((prevState) => !prevState);
					}
				}}
				className={focusedId === channel.id ? "channel-search__result-container__focused" : "channel-search__result-container"}
			>
				<div className="result-hashtag">#</div>
				<p className="channel-search__result-text">{channel.data.name.substring(0, 25)}...</p>
			</div>
		);
	}

	return (
		<div
			onClick={() => {
				setChannel(channel);
				if (setToggleContainer) {
					setToggleContainer((prevState) => !prevState);
				}
			}}
			className={focusedId === channel.id ? "channel-search__result-container__focused" : "channel-search__result-container"}
		>
			<div className="channel-search__result-user">
				<Jazzicon diameter={24} seed={jsNumberForAddress(channel.data.account)} />
				<p className="channel-search__result-text">{channel.data.account.substring(0, 25)}...</p>
			</div>
		</div>
	);
};

const ResultsDropdown = ({ teamChannels, directChannels, focusedId, loading, setChannel, setToggleContainer }) => {
	return (
		<div className="channel-search__results">
			<p className="channel-search__results-header">Channels</p>
			{loading && !teamChannels.length && (
				<p className="channel-search__results-header">
					<i>Loading...</i>
				</p>
			)}
			{!loading && !teamChannels.length ? (
				<p className="channel-search__results-header">
					<i>No channels found</i>
				</p>
			) : (
				teamChannels?.map((channel, i) => <SearchResult channel={channel} focusedId={focusedId} key={i} setChannel={setChannel} type="team" setToggleContainer={setToggleContainer} />)
			)}

			<p className="channel-search__results-header">Users</p>
			{loading && !directChannels.length && (
				<p className="channel-search__results-header channel-search__results-header_loading">
					<i>Loading...</i>
				</p>
			)}
			{!loading && !directChannels.length ? (
				<p className="channel-search__res ults-header">
					<i>No direct messages found</i>
				</p>
			) : (
				directChannels?.map((channel, i) => <SearchResult channel={channel} focusedId={focusedId} key={i} setChannel={setChannel} type="messaging" setToggleContainer={setToggleContainer} />)
			)}
		</div>
	);
};

export default ResultsDropdown;
