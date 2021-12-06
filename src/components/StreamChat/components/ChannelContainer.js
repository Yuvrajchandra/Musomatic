import React from "react";
import { Channel } from "stream-chat-react";
import { ChannelInner } from "./";

const ChannelContainer = () => {
	const EmptyState = () => (
		<div className="channel-empty__container">
			<p className="channel-empty__first">This is the beginning of your chat history</p>
			<p className="channel-empty__second">Send messages, attachments, links, emojis, and more!</p>
		</div>
	);

	return (
		<div className="channel__container">
			<Channel EmptyStateIndicator={EmptyState}>
				<ChannelInner />
			</Channel>
		</div>
	);
};

export default ChannelContainer;
