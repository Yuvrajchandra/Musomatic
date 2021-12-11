import React from 'react';
import './MessageDemo.css';
import ChatDemo1 from '../../../assets/Group333.svg'
import ChatDemo2 from '../../../assets/Group334.svg'
const MessageDemo = () => {
    return (
        <div className='message-demo-container'>
            {/* <!-- header --> */}
            <div className='message-demo-heading'>

                <div>There's more to just</div>
                <div>buy and sell NFTs</div>

            </div>

            <div className='chat-sample-layout'>
                <div className='message-card-1'>
                    <div className='message-card-1-text'>
                        <h1>Group Messages</h1>
                        <p>Isn't it great that all your fans are in a same channel, giving feedbacks and thoughts.</p>
                    </div>
                    <div className='message-card-1-img'>
                    <img src={ChatDemo1} alt="chat-demo-1"></img>
                    </div>
                </div>
                <div className='message-card-2'>
                    <div className='message-card-2-text'>
                    <h1>Replies & Private Chat</h1>
                        <p>Reply directly to a message for quick and short conversation</p>
                    </div>
                    <div className='message-card-2-img'>
                    <img src={ChatDemo2} alt="chat-demo-2"></img>
                    </div>
                </div>

            </div>

        </div>


    );
}
export default MessageDemo;