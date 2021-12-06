import React, { useState } from "react";
import { MessageList, MessageInput, Thread, Window, useChannelActionContext, useChannelStateContext, useChatContext } from "stream-chat-react";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

export const GiphyContext = React.createContext({});

const TeamChannelHeader = () => {
	const { channel, watcher_count } = useChannelStateContext();
	const { client } = useChatContext();

	const MessagingHeader = () => {
		const members = Object.values(channel.state.members).filter(({ user }) => user.id !== client.userID);
		const additionalMembers = members.length - 3;

		if (channel.type === "messaging") {
			return (
				<div className="team-channel-header__name-wrapper">
					{members.map(({ user }, i) => (
						<div key={i} className="team-channel-header__name-multi">
							<Jazzicon diameter={32} seed={jsNumberForAddress(user.account || user.id)} />
							<p className="team-channel-header__name user">{user.account || user.id}</p>
						</div>
					))}

					{additionalMembers > 0 && <p className="team-channel-header__name user">and {additionalMembers} more</p>}
				</div>
			);
		}

		return (
			<div className="team-channel-header__channel-wrapper">
				<p className="team-channel-header__name"># {channel.data.name}</p>
			</div>
		);
	};

	const getWatcherText = (watchers) => {
		if (!watchers) return "Offline";

		if (channel.type === "messaging") {
			if (watchers === 2) return "Online";
			return `Offline`;
		}

		if (channel.type === "team") {
			if (watchers - 1 === 0) return "0 users online";
			if (watchers - 1 === 1) return "1 user online";
			return `${watchers - 1} users online`;
		}
	};

	return (
		<div className="team-channel-header__container">
			<MessagingHeader />
			<div className="team-channel-header__right">
				<p className="team-channel-header__right-text">{getWatcherText(watcher_count)}</p>
			</div>
		</div>
	);
};

const ChannelInner = () => {
	const [giphyState, setGiphyState] = useState(false);
	const { sendMessage } = useChannelActionContext();

	const overrideSubmitHandler = (message) => {
		let updatedMessage = {
			attachments: message.attachments,
			mentioned_users: message.mentioned_users,
			parent_id: message.parent?.id,
			parent: message.parent,
			text: message.text,
		};

		if (giphyState) {
			updatedMessage = { ...updatedMessage, text: `/giphy ${message.text}` };
		}

		if (sendMessage) {
			sendMessage(updatedMessage);
			setGiphyState(false);
		}
	};

	return (
		<GiphyContext.Provider value={{ giphyState, setGiphyState }}>
			<div style={{ display: "flex", width: "100%" }}>
				<Window>
					<TeamChannelHeader />
					<MessageList onlySenderCanEdit={true} />
					<MessageInput overrideSubmitHandler={overrideSubmitHandler} />
				</Window>
				<Thread />
			</div>
		</GiphyContext.Provider>
	);
};

export default ChannelInner;
