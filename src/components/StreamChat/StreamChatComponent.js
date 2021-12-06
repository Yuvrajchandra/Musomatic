import React, { useEffect } from "react";
import { Chat, Streami18n } from "stream-chat-react";
import { ChannelContainer, ChannelListContainer } from "./components/index";
import "./stream.css";
import "./custom.css";

const i18nInstance = new Streami18n();

const StreamChatComponent = ({ account, client, streamAuthToken, setStreamAuthToken, streamAuthCheck }) => {
	useEffect(() => {
		streamAuthCheck(streamAuthToken, setStreamAuthToken, account);
	}, [streamAuthToken, account, client, setStreamAuthToken, streamAuthCheck]);

	return (
		<div className="stream_chat_container">
			<div className="stream_chat">
				<div className="app__wrapper">
					<Chat client={client} i18nInstance={i18nInstance} darkMode={true}>
						<ChannelListContainer />
						<ChannelContainer />
					</Chat>
				</div>
				<div className="row justify-content-center align-items-center m-0 p-0">
					<div className="chat_unavailable_box">Uh oh! Chat is currently unavailable on mobile devices. We're still working on it.</div>
				</div>
			</div>
		</div>
	);
};

export default StreamChatComponent;
