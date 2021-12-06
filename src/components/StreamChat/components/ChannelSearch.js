import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";
import { SearchIcon } from "../assets";
import { ResultsDropdown } from "./";

const ChannelSearch = ({ setToggleContainer }) => {
	const { client, setActiveChannel } = useChatContext();
	const [query, setQuery] = useState("");
	const [loading, setLoading] = useState(false);
	const [teamChannels, setTeamChannels] = useState([]);
	const [directChannels, setDirectChannels] = useState([]);

	useEffect(() => {
		if (!query) {
			setTeamChannels([]);
			setDirectChannels([]);
		}
	}, [query]);

	const getChannels = async (text) => {
		try {
			const channelResponse = await client.queryChannels({ type: "team", members: { $in: [client.userID] }, name: { $autocomplete: text } });
			const userResponse = await client.queryChannels({ type: "messaging", members: { $in: [client.userID] }, account: { $autocomplete: text } });
			// , id: { $ne: client.userID }

			const [channels, users] = await Promise.all([channelResponse, userResponse]);

			if (channels.length) {
				setTeamChannels(channels);
			}
			if (users.length) {
				setDirectChannels(users);
			}
		} catch (error) {
			setQuery("");
		}
	};

	const onSearch = (event) => {
		event.preventDefault();

		setLoading(true);
		setQuery(event.target.value);
		getChannels(event.target.value);
	};

	const setChannel = (channel) => {
		setQuery("");
		setActiveChannel(channel);
	};

	return (
		<div className="channel-search__container">
			<div className="channel-search__input__wrapper">
				<div className="channel-search__input__icon">
					<SearchIcon />
				</div>
				<input type="text" className="channel-search__input__text" placeholder="Search" value={query} onChange={onSearch} />
			</div>
			{query && (
				<ResultsDropdown teamChannels={teamChannels} directChannels={directChannels} loading={loading} setChannel={setChannel} setQuery={setQuery} setToggleContainer={setToggleContainer} />
			)}
		</div>
	);
};

export default ChannelSearch;
