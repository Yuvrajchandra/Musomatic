import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";

const CompanyHeader = () => {
	return (
		<div className="channel-list__header">
			<p className="channel-list__header__text">Musomatic Chat</p>
		</div>
	);
};

const customChannelTeamFilter = (channels) => {
	return channels.filter((channel) => channel.type === "team");
};

const customChannelMessagingFilter = (channels) => {
	return channels.filter((channel) => channel.type === "messaging");
};

const ChannelListContent = ({ setToggleContainer }) => {
	const { client } = useChatContext();
	const filters = { members: { $in: [client.userID] } };

	return (
		<>
			<div className="channel-list__list__wrapper">
				<CompanyHeader />
				<ChannelSearch setToggleContainer={setToggleContainer} />
				{/* FEATURE: Comment this out if we want to create channels for each artist with their NFT holders */}
				<ChannelList
					filters={filters}
					channelRenderFilterFn={customChannelTeamFilter}
					List={(listProps) => <TeamChannelList {...listProps} type="team" />}
					Preview={(previewProps) => <TeamChannelPreview {...previewProps} type="team" setToggleContainer={setToggleContainer} />}
				/>
				<ChannelList
					filters={filters}
					channelRenderFilterFn={customChannelMessagingFilter}
					List={(listProps) => <TeamChannelList {...listProps} type="messaging" />}
					Preview={(previewProps) => <TeamChannelPreview {...previewProps} type="messaging" setToggleContainer={setToggleContainer} />}
				/>
			</div>
		</>
	);
};

const ChannelListContainer = () => {
	// const [toggleContainer, setToggleContainer] = useState(false);

	return (
		<>
			<div className="channel-list__container">
				<ChannelListContent />
			</div>

			{/* <div className="channel-list__container-responsive" style={{ left: toggleContainer ? "0%" : "-89%", backgroundColor: "#005fff" }}>
				<div className="channel-list__container-toggle" onClick={() => setToggleContainer((prevToggleContainer) => !prevToggleContainer)}></div>
				<ChannelListContent setToggleContainer={setToggleContainer} />
			</div> */}
		</>
	);
};

export default ChannelListContainer;
