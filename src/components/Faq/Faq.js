import React, { Fragment } from "react";
import "./faq.css";

export default function Faq() {
	var generalQuestions = [
		{
			ID: "heading2",
			dataBsTarget: "collapse2",
			question: "What is a decentralized application, aka dApp?",
			answer: "Decentralized applications (dApps) are digital applications or programs that exist and run on a blockchain or P2P network of computers instead of a single computer, and are outside the purview and control of a single authority.",
		},
		{
			ID: "heading3",
			dataBsTarget: "collapse3",
			question: "Why build a dApp on Polygon?",
			answer: "This is a somewhat loaded question, but in simple terms the Polygon Network is faster and cheaper than the alternative smart contract platforms. It is more advanced and a better option for future projects to be built upon.",
		},
		{
			ID: "heading4",
			dataBsTarget: "collapse4",
			question: "Who is behind Musomatic?",
			answer: "Check out the team page!",
		},
		{
			ID: "heading5",
			dataBsTarget: "collapse5",
			question: "Is this a platform like Spotify, just on blockchain? Or is it just a platform where users can trade individual songs?",
			answer: "Currently, Musomatic is a platform to trade individual NFTs of songs. NFTs from artists can be looked at as stocks in the market. Just as buying stocks of companies that people believe to perform good in the future can result in massive profits, similarly, the value of these NFTs can skyrocket if that artist grows to be successful over time.",
		},
	];

	var needQuestions = [
		{
			ID: "heading6",
			dataBsTarget: "collapse6",
			question: "A computer running a web browser like Chrome or Firefox",
			answer: `<span class="green_subhead">Can I play on a mobile device?</span>
					<br/>
					You sure can! We currently support the Metamask wallet, and plan to integrate with other wallets like the Coinbase Wallet and Trust Wallet in the future. Plus, we will be building a mobile app for Musomatic, so you’ll soon be able to play anywhere!
					<br/>
					<br/>
					<span class="green_subhead">Can I log in from multiple computers?</span>
					<br/>
					You can use Musomatic from multiple computers as long as you have your digital wallet installed on both.
			`,
		},
		{
			ID: "heading7",
			dataBsTarget: "collapse7",
			question: "A digital wallet",
			answer: `<span class="green_subhead">Installing your digital wallet</span>
					<br/>
					<ul>
						<li>To use Musomatic, you need a digital wallet. We only support the Metamask wallet currently.</li>
						<li>You’ll need to put m1y in your wallet to make your first purchase. We can show you how to do that too. Just contact us through the contact page and we'll reach out to you!</li>
						<li>A digital wallet acts like a bank account— make sure you don’t forget your password or lose your recovery kit.</li>
					</ul>
					<span class="green_subhead">What is a “wallet address”?</span>
					<br/>
					Your public wallet address (e.g. 0x48b7cedF1D50cE6595a027c9234D5e5Bef54E09C) is a unique identifier for your wallet. It’s like your bank account number and people can transfer funds to this address.
			`,
		},
		{
			ID: "heading8",
			dataBsTarget: "collapse8",
			question: "MATIC, a digital currency",
			answer: `<span class="green_subhead">What is MATIC? Why do I need it?</span>
					<br/>
					<ul>
						<li>MATIC is a digital currency that powers the Polygon network, which is what Musomatic is built on. MATIC acts like any other currency— its value fluctuates with the market.</li>
						<li>You need to convert your currency (e.g. USD, INR, CAD, GBP) into MATIC to trade NFTs on Musomatic.</li>
					</ul>
			`,
		},
	];

	var aboutMusomaticQuestions = [
		{
			ID: "heading9",
			dataBsTarget: "collapse9",
			question: "Are Musomatic NFTs like Bitcoin?",
			answer: `<ul>
						<li>NFTs on Musomatic are NOT a cryptocurrency. They’re a cryptocollectibles. The real-world analogy for a cryptocurrency is dollars or rupees; a cryptocollectible’s real world analogy is closer to assets like baseball cards or fine art.</li>
						<li>As dictated by the smart contract, any NFT you own belongs to you. Like any product or property you can own, the market price is determined by supply and demand.</li>
					</ul>
			`,
		},
		{
			ID: "heading10",
			dataBsTarget: "collapse10",
			question: "Are MXV NFTs ERC-721 tokens?",
			answer: `This is quite ambiguous. We comply with the ERC-721 standard but MXV is a custom contract, which means that it doesn't comply completely with any standards.`,
		},
		{
			ID: "heading11",
			dataBsTarget: "collapse11",
			question: "Where are the songs and cover images for the MXV NFTs stored?",
			answer: `The actual songs and images of the NFTs are too large to store on the blockchain, so we store the songs and images on IPFS, and then embed the hashes into our smart contract.`,
		},
		{
			ID: "heading12",
			dataBsTarget: "collapse12",
			question: "How does the price of an NFT change?",
			answer: `The price of an NFT goes up by 20% of the current price after every sale. Also, the current owner can change the price of the NFT anytime they want.`,
		},
		{
			ID: "heading13",
			dataBsTarget: "collapse13",
			question: "Will the original creator get royalty everytime the NFT is sold?",
			answer: `Yes, the artist will receive a royalty of 5% everytime the NFT is sold.`,
		},
		{
			ID: "heading14",
			dataBsTarget: "collapse14",
			question: "What is the breakdown of a transaction?",
			answer: `After the creation of an NFT, if a buyer wishes to buy it, the musician will receive 99% of the transaction amount and 1% will be contributed towards the platform fee. On subsequent transactions, the musician will receive 5% as royalty, the previous owner will receive 94% of the transaction amount, and a meagre 1% will be contributed towards the platform fee.`,
		},
		{
			ID: "heading15",
			dataBsTarget: "collapse15",
			question: "Links to which platforms can be included by the musician?",
			answer: `Currently, we provide support for Spotify, Apple Music, Amazon Music, and YouTube Music.`,
		},
		{
			ID: "heading015",
			dataBsTarget: "collapse015",
			question: "Why do we take gas fee from users?",
			answer: `It is required by the blockchain to pay a small amount for performing transactions. We could have created the smart contract in a way so that the gas fee would be deducted from our account, but we didn't do it to reduce spammers, so that only genuine artists upload their music to create NFTs.`,
		},
		{
			ID: "heading16",
			dataBsTarget: "collapse16",
			question: "Why would a budding artist want to sell a NFT to a single person when their main objective is to create an audience by giving the song out for free for the world to listen to?",
			answer: `The artist will still be able to do that. It is true that the main objective of an artist is to expand their audience but they still require monetary support along the way. We, at Musomatic, enable artists to get this support.`,
		},
	];

	var buyingAndSellingQuestions = [
		{
			ID: "heading17",
			dataBsTarget: "collapse17",
			question: "How do I get an NFT on Musomatic?",
			answer: `Buy one from the Marketplace, which you can look through using the Library page. Click on one card and then purchase from the Song Info page.`,
		},
		{
			ID: "heading18",
			dataBsTarget: "collapse18",
			question: "How can a buyer resell the NFT?",
			answer: `A buyer can put the NFT on the Musomatic marketplace and any interested buyer can purchase the NFT for the specified price.`,
		},
		{
			ID: "heading19",
			dataBsTarget: "collapse19",
			question: "Where’s my NFT? I just bought one but it’s not showing up in my account!",
			answer: `<ul>
						<li>Transactions on the blockchain can take a few minutes to process, and then it can take a few more minutes for our website to sync with the blockchain.</li>
						<li>Don’t worry, though. If the transaction was successful the NFT belongs to you, and it will show up. The blockchain doesn’t lie.</li>
					</ul>
			`,
		},
		{
			ID: "heading20",
			dataBsTarget: "collapse20",
			question: "How do I sell an NFT that I own?",
			answer: `You can go to the Song Info page and put up the NFT on sale. If any buyer is interested in purchasing the NFT for the price that you have specified, then they can just buy it from you and it will be sold.`,
		},
		{
			ID: "heading21",
			dataBsTarget: "collapse21",
			question: "I sold a song NFT. Where’s my MATIC?",
			answer: `If you successfully sold an NFT through our marketplace, the other user definitely sent MATIC. Since the user paid for the sale through our smart contract, the payment isn’t reflected as a typical IN/OUT transaction in Polygonscan. (Polygonscan is a read-only interface for the Polygon network that shows all events on the blockchain.)`,
		},
		{
			ID: "heading22",
			dataBsTarget: "collapse22",
			question: "When I tried to buy an NFT, it said, “Currently not for sale.” Why is it so?",
			answer: `This message is triggered when the current owner of the NFT decides to take the NFT down from the marketplace. They may do this because they want to HODL it.`,
		},
		{
			ID: "heading23",
			dataBsTarget: "collapse23",
			question: "I can’t access my wallet. Can you recover my NFTs?",
			answer: `
				<ul>
					<li>Unfortunately, no.</li>
					<li>If you lose access to your wallet, we can’t recover your NFTs. It’s not an issue of it being against our policy or being too difficult; it’s literally impossible.</li>
					<li>Our smart contracts secure each NFT on Musomatic so that the developers can’t edit, access, or reassign them. This protects your NFTs from hackers and anyone else who would steal them. Unfortunately, it also means we can’t simply ‘recover’ an NFT on Musomatic.</li>
				</ul>
			`,
		},
		{
			ID: "heading24",
			dataBsTarget: "collapse24",
			question: "Where does my MATIC go when I buy an NFT?",
			answer: `After the creation of an NFT, if a buyer wishes to buy it, the musician will receive 99% of the transaction amount and 1% will be contributed towards the platform fee. On subsequent transactions, the musician will receive 5% as royalty, the previous owner will receive 94% of the transaction amount, and a meagre 1% will be contributed towards the platform fee. Finally, you will become the owner of the NFT!`,
		},
		{
			ID: "heading25",
			dataBsTarget: "collapse25",
			question: "Would the creator of the song have any distribution rights after the trade has occurred and they have sold it to someone else?",
			answer: `Yes, the distribution rights will remain with the artist and they will have full control over the song.`,
		},
		{
			ID: "heading26",
			dataBsTarget: "collapse26",
			question: "What are the rights of a buyer after buying the NFT?",
			answer: `The buyer can use the song anywhere they want, but not for monetary benefits. The buyer just owns a copy of the song (i.e. the NFT), not the song itself.`,
		},
	];

	var transactionsAndTechnicalQuestions = [
		{
			ID: "heading27",
			dataBsTarget: "collapse27",
			question: "What’s Polygonscan?",
			answer: `Polygonscan is a read-only interface for the Polygon network. It tells you everything that’s happened on the blockchain. It helps you verify that transactions were successful, and tracks other helpful details about transactions and addresses.`,
		},
		{
			ID: "heading28",
			dataBsTarget: "collapse28",
			question: "What is the gas fee for uploading the NFT?",
			answer: `Gas fee on the Polygon Network can range between 0.02 to 1 INR.`,
		},
		{
			ID: "heading29",
			dataBsTarget: "collapse29",
			question: "Tell me more about ‘gas’.",
			answer: `
				<ul>
					<li>‘Gas’ is a shorthand used to describe the cost of powering a transaction or contract in Polygon, which is the blockchain network that Musomatic is built on.</li>
					<li>Because blockchain is decentralized, every transaction is distributed through multiple computers, not a central server. This ensures each token — in this case, each NFT on Musomatic — is secure and one-of-a-kind. It also takes a lot of computational power, which is covered by the cost of gas.</li>
					<li>‘Gas’ is composed of two parts: Gas Price and Gas Limit. Gas Price is what you offer to pay the miners for each operation to execute the smart contract. Gas Limit is how many operations you let them to do before they run out of gas and drop the transaction.</li>
				</ul>
			`,
		},
		{
			ID: "heading30",
			dataBsTarget: "collapse30",
			question: "What should be the size of a music file to be uploaded?",
			answer: `The file size should remain below a 100MB limit.`,
		},
		{
			ID: "heading31",
			dataBsTarget: "collapse31",
			question: "Help! My problem wasn’t addressed here. How do I contact the Musomatic team?",
			answer: `
				<ul>
					<li>You can contact us at <span class="green_subhead">contact@musomatic.com</span>. Please include any relevant NFT IDs, links, or transaction hashes so we can support you as quickly as possible.</li>
					<li>You can also check our Discord community channel. Your fellow NFT owners are often just as helpful as we are, and usually much quicker at addressing your concerns.</li>
				</ul>
			`,
		},
	];

	var communityQuestions = [
		{
			ID: "heading32",
			dataBsTarget: "collapse32",
			question: "Is there an official Twitter/Discord?",
			answer: `We have an official Musomatic Discord group as well as a Twitter account. Check out by clicking the icons in the website footer.`,
		},
		{
			ID: "heading33",
			dataBsTarget: "collapse33",
			question: "Why join Discord?",
			answer: `Our Discord group is the official gathering place for our community. HODLers come to learn about the platform, chat about their strategies, and participate in community events. Join us!`,
		},
		{
			ID: "heading34",
			dataBsTarget: "collapse34",
			question: "Where do I find out about platform updates?",
			answer: `We discuss all the happenings through our official Twitter handle and in the Discord group, including peeks into our development process and leaks about our newest features. You can access our handles anytime from the links at the footer of the site.`,
		},
		{
			ID: "heading35",
			dataBsTarget: "collapse35",
			question: "How do I contact the Musomatic team?",
			answer: `You can contact us at <span class="green_subhead">contact@musomatic.com</span>. Please include any relevant NFT IDs, links, or transaction hashes so we can support you as quickly as possible.`,
		},
	];

	return (
		<Fragment>
			<div className="faq_container">
				<div className="faq_box">
					<div className="row justify-content-center text-center faq_heading">Frequently Asked Questions</div>

					<div className="d-flex flex-column flex-md-row align-items-start width100 m-0 p-0">
						<div className="nav flex-column nav-pills me-3 faq_nav_link_box glass_effect glass_effect_border" id="v-pills-tab" role="tablist" aria-orientation="vertical">
							<button
								className="nav-link faq_nav_link_btn active"
								id="v-pills-general-tab"
								data-bs-toggle="pill"
								data-bs-target="#v-pills-general"
								type="button"
								role="tab"
								aria-controls="v-pills-general"
								aria-selected="true"
							>
								General
							</button>
							<button
								className="nav-link faq_nav_link_btn"
								id="v-pills-need-tab"
								data-bs-toggle="pill"
								data-bs-target="#v-pills-need"
								type="button"
								role="tab"
								aria-controls="v-pills-need"
								aria-selected="false"
							>
								What do I need to use the Platform?
							</button>
							<button
								className="nav-link faq_nav_link_btn"
								id="v-pills-about-tab"
								data-bs-toggle="pill"
								data-bs-target="#v-pills-about"
								type="button"
								role="tab"
								aria-controls="v-pills-about"
								aria-selected="false"
							>
								About Musomatic
							</button>
							<button
								className="nav-link faq_nav_link_btn"
								id="v-pills-trading-tab"
								data-bs-toggle="pill"
								data-bs-target="#v-pills-trading"
								type="button"
								role="tab"
								aria-controls="v-pills-trading"
								aria-selected="false"
							>
								Buying and Selling
							</button>
							<button
								className="nav-link faq_nav_link_btn"
								id="v-pills-technical-tab"
								data-bs-toggle="pill"
								data-bs-target="#v-pills-technical"
								type="button"
								role="tab"
								aria-controls="v-pills-technical"
								aria-selected="false"
							>
								Transactions and Technical Questions
							</button>
							<button
								className="nav-link faq_nav_link_btn"
								id="v-pills-community-tab"
								data-bs-toggle="pill"
								data-bs-target="#v-pills-community"
								type="button"
								role="tab"
								aria-controls="v-pills-community"
								aria-selected="false"
							>
								Community
							</button>
						</div>

						<div className="tab-content mt-md-0 mt-5 width100" id="v-pills-tabContent">
							<div className="tab-pane fade show active" id="v-pills-general" role="tabpanel" aria-labelledby="v-pills-general-tab">
								<div className="faq_card glass_effect glass_effect_border">
									<div className="row faq_section_heading">General</div>

									<div className="accordion_container">
										<div className="offset-1 col-10 accordion" id="accordionFlush1">
											<div className="accordion-item">
												<h2 className="accordion-header row" id="heading1">
													<button
														className="accordion-button"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#collapse1"
														aria-expanded="true"
														aria-controls="collapse1"
													>
														<span className="plus">
															<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
																<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
																<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
															</svg>
														</span>
														<span className="minus">
															<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
																<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
																<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
															</svg>
														</span>
														What is Musomatic?
													</button>
												</h2>
												<div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionFlush1">
													<div className="accordion-body">
														Musomatic is a decentralized application(dApp) for musicians to create NFTs of their music. These NFTs can then be traded and each time an NFT
														gets traded, the musician will get 5% of the trade as royalty!
													</div>
												</div>
											</div>

											{generalQuestions.map((item, key) => {
												return (
													<div className="accordion-item" key={key}>
														<h2 className="accordion-header row" id={item.ID}>
															<button
																className="accordion-button collapsed"
																type="button"
																data-bs-toggle="collapse"
																data-bs-target={"#" + item.dataBsTarget}
																aria-expanded="false"
																aria-controls={item.dataBsTarget}
															>
																<span className="plus">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="26"
																		height="26"
																		fill="currentColor"
																		className="bi bi-plus-circle"
																		viewBox="0 0 16 16"
																	>
																		<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
																		<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
																	</svg>
																</span>
																<span className="minus">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="26"
																		height="26"
																		fill="currentColor"
																		className="bi bi-dash-circle"
																		viewBox="0 0 16 16"
																	>
																		<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
																		<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
																	</svg>
																</span>
																{item.question}
															</button>
														</h2>
														<div id={item.dataBsTarget} className="accordion-collapse collapse" aria-labelledby={item.ID} data-bs-parent="#accordionFlush1">
															<div className="accordion-body" dangerouslySetInnerHTML={{ __html: item.answer }}></div>
														</div>
													</div>
												);
											})}
										</div>
									</div>
								</div>
							</div>

							<div className="tab-pane fade" id="v-pills-need" role="tabpanel" aria-labelledby="v-pills-need-tab">
								<div className="faq_card glass_effect glass_effect_border">
									<div className="row faq_section_heading">What do I need to use the platform?</div>

									<div className="accordion_container">
										<div className="offset-1 col-10 accordion" id="accordionFlush2">
											{needQuestions.map((item, key) => {
												return (
													<div className="accordion-item" key={key}>
														<h2 className="accordion-header row" id={item.ID}>
															<button
																className="accordion-button collapsed"
																type="button"
																data-bs-toggle="collapse"
																data-bs-target={"#" + item.dataBsTarget}
																aria-expanded="false"
																aria-controls={item.dataBsTarget}
															>
																<span className="plus">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="26"
																		height="26"
																		fill="currentColor"
																		className="bi bi-plus-circle"
																		viewBox="0 0 16 16"
																	>
																		<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
																		<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
																	</svg>
																</span>
																<span className="minus">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="26"
																		height="26"
																		fill="currentColor"
																		className="bi bi-dash-circle"
																		viewBox="0 0 16 16"
																	>
																		<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
																		<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
																	</svg>
																</span>
																{item.question}
															</button>
														</h2>
														<div id={item.dataBsTarget} className="accordion-collapse collapse" aria-labelledby={item.ID} data-bs-parent="#accordionFlush2">
															<div className="accordion-body" dangerouslySetInnerHTML={{ __html: item.answer }}></div>
														</div>
													</div>
												);
											})}
										</div>
									</div>
								</div>
							</div>

							<div className="tab-pane fade" id="v-pills-about" role="tabpanel" aria-labelledby="v-pills-about-tab">
								<div className="faq_card glass_effect glass_effect_border">
									<div className="row faq_section_heading">About Musomatic</div>

									<div className="accordion_container">
										<div className="offset-1 col-10 accordion" id="accordionFlush3">
											{aboutMusomaticQuestions.map((item, key) => {
												return (
													<div className="accordion-item" key={key}>
														<h2 className="accordion-header row" id={item.ID}>
															<button
																className="accordion-button collapsed"
																type="button"
																data-bs-toggle="collapse"
																data-bs-target={"#" + item.dataBsTarget}
																aria-expanded="false"
																aria-controls={item.dataBsTarget}
															>
																<span className="plus">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="26"
																		height="26"
																		fill="currentColor"
																		className="bi bi-plus-circle"
																		viewBox="0 0 16 16"
																	>
																		<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
																		<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
																	</svg>
																</span>
																<span className="minus">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="26"
																		height="26"
																		fill="currentColor"
																		className="bi bi-dash-circle"
																		viewBox="0 0 16 16"
																	>
																		<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
																		<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
																	</svg>
																</span>
																{item.question}
															</button>
														</h2>
														<div id={item.dataBsTarget} className="accordion-collapse collapse" aria-labelledby={item.ID} data-bs-parent="#accordionFlush3">
															<div className="accordion-body" dangerouslySetInnerHTML={{ __html: item.answer }}></div>
														</div>
													</div>
												);
											})}
										</div>
									</div>
								</div>
							</div>

							<div className="tab-pane fade" id="v-pills-trading" role="tabpanel" aria-labelledby="v-pills-trading-tab">
								<div className="faq_card glass_effect glass_effect_border">
									<div className="row faq_section_heading">Buying and Selling</div>

									<div className="accordion_container">
										<div className="offset-1 col-10 accordion" id="accordionFlush4">
											{buyingAndSellingQuestions.map((item, key) => {
												return (
													<div className="accordion-item" key={key}>
														<h2 className="accordion-header row" id={item.ID}>
															<button
																className="accordion-button collapsed"
																type="button"
																data-bs-toggle="collapse"
																data-bs-target={"#" + item.dataBsTarget}
																aria-expanded="false"
																aria-controls={item.dataBsTarget}
															>
																<span className="plus">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="26"
																		height="26"
																		fill="currentColor"
																		className="bi bi-plus-circle"
																		viewBox="0 0 16 16"
																	>
																		<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
																		<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
																	</svg>
																</span>
																<span className="minus">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="26"
																		height="26"
																		fill="currentColor"
																		className="bi bi-dash-circle"
																		viewBox="0 0 16 16"
																	>
																		<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
																		<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
																	</svg>
																</span>
																{item.question}
															</button>
														</h2>
														<div id={item.dataBsTarget} className="accordion-collapse collapse" aria-labelledby={item.ID} data-bs-parent="#accordionFlush4">
															<div className="accordion-body" dangerouslySetInnerHTML={{ __html: item.answer }}></div>
														</div>
													</div>
												);
											})}
										</div>
									</div>
								</div>
							</div>

							<div className="tab-pane fade" id="v-pills-technical" role="tabpanel" aria-labelledby="v-pills-technical-tab">
								<div className="faq_card glass_effect glass_effect_border">
									<div className="row faq_section_heading">Transactions and Technical Questions</div>

									<div className="accordion_container">
										<div className="offset-1 col-10 accordion" id="accordionFlush6">
											{transactionsAndTechnicalQuestions.map((item, key) => {
												return (
													<div className="accordion-item" key={key}>
														<h2 className="accordion-header row" id={item.ID}>
															<button
																className="accordion-button collapsed"
																type="button"
																data-bs-toggle="collapse"
																data-bs-target={"#" + item.dataBsTarget}
																aria-expanded="false"
																aria-controls={item.dataBsTarget}
															>
																<span className="plus">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="26"
																		height="26"
																		fill="currentColor"
																		className="bi bi-plus-circle"
																		viewBox="0 0 16 16"
																	>
																		<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
																		<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
																	</svg>
																</span>
																<span className="minus">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="26"
																		height="26"
																		fill="currentColor"
																		className="bi bi-dash-circle"
																		viewBox="0 0 16 16"
																	>
																		<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
																		<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
																	</svg>
																</span>
																{item.question}
															</button>
														</h2>
														<div id={item.dataBsTarget} className="accordion-collapse collapse" aria-labelledby={item.ID} data-bs-parent="#accordionFlush6">
															<div className="accordion-body" dangerouslySetInnerHTML={{ __html: item.answer }}></div>
														</div>
													</div>
												);
											})}
										</div>
									</div>
								</div>
							</div>

							<div className="tab-pane fade" id="v-pills-community" role="tabpanel" aria-labelledby="v-pills-community-tab">
								<div className="faq_card glass_effect glass_effect_border">
									<div className="row faq_section_heading">Community</div>

									<div className="accordion_container">
										<div className="offset-1 col-10 accordion" id="accordionFlush5">
											{communityQuestions.map((item, key) => {
												return (
													<div className="accordion-item" key={key}>
														<h2 className="accordion-header row" id={item.ID}>
															<button
																className="accordion-button collapsed"
																type="button"
																data-bs-toggle="collapse"
																data-bs-target={"#" + item.dataBsTarget}
																aria-expanded="false"
																aria-controls={item.dataBsTarget}
															>
																<span className="plus">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="26"
																		height="26"
																		fill="currentColor"
																		className="bi bi-plus-circle"
																		viewBox="0 0 16 16"
																	>
																		<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
																		<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
																	</svg>
																</span>
																<span className="minus">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="26"
																		height="26"
																		fill="currentColor"
																		className="bi bi-dash-circle"
																		viewBox="0 0 16 16"
																	>
																		<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
																		<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
																	</svg>
																</span>
																{item.question}
															</button>
														</h2>
														<div id={item.dataBsTarget} className="accordion-collapse collapse" aria-labelledby={item.ID} data-bs-parent="#accordionFlush5">
															<div className="accordion-body" dangerouslySetInnerHTML={{ __html: item.answer }}></div>
														</div>
													</div>
												);
											})}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
