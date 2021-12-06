import React from "react";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { useChatContext } from "stream-chat-react";

const TeamChannelPreview = ({ setActiveChannel, setToggleContainer, channel, type }) => {
	const { channel: activeChannel, client } = useChatContext();

	const ChannelPreview = () => <p className="channel-preview__item">#&nbsp;&nbsp;{channel?.data?.name.substring(0, 25) || channel?.data?.id.substring(0, 25)}</p>;

	const DirectPreview = () => {
		const members = Object.values(channel.state.members).filter(({ user }) => user.id !== client.userID);

		return (
			<div className="channel-preview__item single">
				<Jazzicon diameter={24} seed={jsNumberForAddress(members[0]?.user?.account || members[0]?.user?.id)} />
				<p>{members[0]?.user?.account ? members[0]?.user?.account : members[0]?.user?.id.substring(0, 25)}</p>
			</div>
		);
	};

	return (
		<div
			className={channel?.id === activeChannel?.id ? "channel-preview__wrapper__selected" : "channel-preview__wrapper"}
			onClick={() => {
				setActiveChannel(channel);
				if (setToggleContainer) {
					setToggleContainer((prevState) => !prevState);
				}
			}}
		>
			{type === "team" ? <ChannelPreview /> : <DirectPreview />}
		</div>
	);
};

export default TeamChannelPreview;
