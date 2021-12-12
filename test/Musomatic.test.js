const { assert } = require("chai");
const BigNumber = require("bignumber.js");

const Musomatic = artifacts.require("./Musomatic.sol");

require("chai").use(require("chai-as-promised")).should();

contract("Musomatic", ([deployer, seller, buyer, buyer2]) => {
	let contract;

	before(async () => {
		contract = await Musomatic.deployed();
	});

	describe("deployment", async () => {
		it("deploys successfully", async () => {
			const address = contract.address;
			assert.notEqual(address, 0x0);
			assert.notEqual(address, "");
			assert.notEqual(address, null);
			assert.notEqual(address, undefined);
		});

		it("has a name", async () => {
			const name = await contract.name();
			assert.equal(name, "Musomatic");
		});

		it("has a symbol", async () => {
			const symbol = await contract.symbol();
			assert.equal(symbol, "MSM");
		});
	});

	describe("songs", async () => {
		describe("minting", async () => {
			it("creates a new song", async () => {
				const result = await contract.createSong(
					"Yay!",
					"Sommaiya Angrish",
					web3.utils.toWei("2", "Ether"),
					"imageHash123",
					"songHash123",
					"descHash123",
					"lyricsHash123",
					true,
					["spotifyLink.com", "appleLink.com", "amznLink.com", "ytMusicLink.com"],
					["Pop", ["Guitar", "Drums"], "Non-Rhyme", "Metaphorical", "Mids heavy", "Digital", true],
					{ from: seller }
				);
				const songsCount = await contract.songsCount();

				// SUCCESS
				assert.equal(songsCount, 1);
				const event = result.logs[0].args;
				assert.equal(event.tokenId.toNumber(), 1, "id is correct");
				assert.equal(event.from, "0x0000000000000000000000000000000000000000", "from is correct");
				assert.equal(event.to, seller, "to is correct");
				const event1 = result.logs[1].args;
				assert.equal(event1.price, web3.utils.toWei("2", "Ether"), "price is correct");

				// Failure: Song must have a name
				await contract.createSong(
					"",
					"Sommaiya Angrish",
					web3.utils.toWei("2", "Ether"),
					"imageHash123",
					"songHash123",
					"descHash123",
					"lyricsHash123",
					true,
					["spotifyLink.com", "appleLink.com", "amznLink.com", "ytMusicLink.com"],
					["Pop", ["Guitar", "Drums"], "Non-Rhyme", "Metaphorical", "Mids heavy", "Digital", true],
					{ from: seller }
				).should.be.rejected;
			});
		});

		describe("indexing", async () => {
			it("lists songs", async () => {
				// Mint 3 more NFTs
				await contract.createSong(
					"Shit!",
					"Sommaiya Angrish",
					web3.utils.toWei("1", "Ether"),
					"imageHash123",
					"songHash123",
					"descHash123",
					"lyricsHash123",
					true,
					["spotifyLink.com", "appleLink.com", "amznLink.com", "ytMusicLink.com"],
					["Pop", ["Guitar", "Drums"], "Non-Rhyme", "Metaphorical", "Mids heavy", "Digital", true],
					{ from: seller }
				);
				await contract.createSong(
					"Oh God!",
					"Sommaiya Angrish",
					web3.utils.toWei("5", "Ether"),
					"imageHash123",
					"songHash123",
					"descHash123",
					"lyricsHash123",
					true,
					["spotifyLink.com", "appleLink.com", "amznLink.com", "ytMusicLink.com"],
					["Pop", ["Guitar", "Drums"], "Non-Rhyme", "Metaphorical", "Mids heavy", "Digital", true],
					{ from: seller }
				);
				await contract.createSong(
					"Oops",
					"Sommaiya Angrish",
					web3.utils.toWei("0.2", "Ether"),
					"imageHash123",
					"songHash123",
					"descHash123",
					"lyricsHash123",
					true,
					["spotifyLink.com", "appleLink.com", "amznLink.com", "ytMusicLink.com"],
					["Pop", ["Guitar", "Drums"], "Non-Rhyme", "Metaphorical", "Mids heavy", "Digital", true],
					{ from: seller }
				);

				const songsCount = await contract.songsCount();

				let song;
				let result = [];

				for (var i = 1; i <= songsCount; i++) {
					song = await contract.songs(i);
					result.push(song.songName);
				}

				let expected = ["Yay!", "Shit!", "Oh God!", "Oops"];
				assert.equal(result.join(","), expected.join(","));
			});
		});

		describe("purchase", async () => {
			let songsCount;

			before(async () => {
				songsCount = await contract.songsCount();
				songsCount = songsCount.toNumber();
			});

			it("purchases song when artist is also the current owner", async () => {
				let songId = songsCount;
				let _song = await contract.songs(songId);
				let artistAddress = _song.artistAddress;
				// Track artist balance before purchase
				let oldArtistBalance = await web3.eth.getBalance(artistAddress);
				oldArtistBalance = BigNumber(oldArtistBalance);

				// Track seller balance before purchase
				let sellerAddress = _song.currentOwnerAddress;
				let oldSellerBalance = await web3.eth.getBalance(sellerAddress);
				oldSellerBalance = BigNumber(oldSellerBalance);

				//Success: Buyer makes purchase
				let result = await contract.purchaseSong(songId, {
					from: buyer,
					value: _song.price,
				});

				// Check logs
				let event = result.logs[3].args;
				assert.equal(event.id.toNumber(), songId, "id is correct");
				assert.equal(event.songName, "Oops", "song name is correct");
				assert.equal(event.price.toString(), (_song.price * 1.2).toString(), "price is correct");
				assert.equal(event.currentOwnerAddress, buyer, "owner is correct");
				assert.equal(event.onSale, true, "onSale is true");

				// Check that artist received funds
				let newArtistBalance = await web3.eth.getBalance(artistAddress);
				newArtistBalance = BigNumber(newArtistBalance);

				let priceTransferredToArtist = await _song.price;
				priceTransferredToArtist = BigNumber(priceTransferredToArtist);

				let expectedArtistBalance = oldArtistBalance.plus(priceTransferredToArtist);
				assert.equal(newArtistBalance.toString(), expectedArtistBalance.toString());
			});

			it("purchases song when artist and owner are different", async () => {
				let songId = songsCount;
				let _song = await contract.songs(songId);
				let artistAddress = _song.artistAddress;
				// Track artist balance before purchase
				let oldArtistBalance = await web3.eth.getBalance(artistAddress);
				oldArtistBalance = BigNumber(oldArtistBalance);

				// Track seller balance before purchase
				let sellerAddress = _song.currentOwnerAddress;
				let oldSellerBalance = await web3.eth.getBalance(sellerAddress);
				oldSellerBalance = BigNumber(oldSellerBalance);

				// Track MusomaticMain balance before purchase
				let musomaticMainAddress = "0x159507b2b3829791fAB794581D2aC074F3596013";
				let oldMusomaticMainBalance = await web3.eth.getBalance(musomaticMainAddress);
				oldMusomaticMainBalance = BigNumber(oldMusomaticMainBalance);

				//Success: Buyer makes purchase
				let result = await contract.purchaseSong(songId, {
					from: buyer2,
					value: _song.price,
				});

				// Check logs
				let event = result.logs[3].args;
				assert.equal(event.id.toNumber(), songId, "id is correct");
				assert.equal(event.songName, "Oops", "song name is correct");
				assert.equal(event.price.toString(), (_song.price * 1.2).toString(), "price is correct");
				assert.equal(event.currentOwnerAddress, buyer2, "owner is correct");
				assert.equal(event.onSale, true, "purchased is correct");

				// Check that seller received funds
				let newSellerBalance = await web3.eth.getBalance(sellerAddress);
				newSellerBalance = BigNumber(newSellerBalance);

				let priceTransferredToSeller = await _song.price;
				priceTransferredToSeller = BigNumber(priceTransferredToSeller).multipliedBy(0.94);

				let expectedSellerBalance = oldSellerBalance.plus(priceTransferredToSeller);
				assert.equal(newSellerBalance.toString(), expectedSellerBalance.toString());

				// Check that artist received funds
				let newArtistBalance = await web3.eth.getBalance(artistAddress);
				newArtistBalance = BigNumber(newArtistBalance);

				let priceTransferredToArtist = await _song.price;
				priceTransferredToArtist = BigNumber(priceTransferredToArtist).multipliedBy(0.05);

				let expectedArtistBalance = oldArtistBalance.plus(priceTransferredToArtist);
				assert.equal(newArtistBalance.toString(), expectedArtistBalance.toString());

				// Check that platform fee was deducted
				let newMusomaticMainBalance = await web3.eth.getBalance(musomaticMainAddress);
				newMusomaticMainBalance = BigNumber(newMusomaticMainBalance);

				let priceTransferredToPlatform = await _song.price;
				priceTransferredToPlatform = BigNumber(priceTransferredToPlatform).multipliedBy(0.01);

				let expectedPlatformBalance = oldMusomaticMainBalance.plus(priceTransferredToPlatform);
				assert.equal(newMusomaticMainBalance.toString(), expectedPlatformBalance.toString());

				// Failure: Tries to buy a song that does not exist- Must have valid id
				await contract.purchaseSong(99, { from: buyer2, value: web3.utils.toWei("0.2", "Ether") }).should.be.rejected;
				// Failure: Tries to buy without enough ether
				await contract.purchaseSong(songsCount - 1, { from: buyer2, value: web3.utils.toWei("0.1", "Ether") }).should.be.rejected;
				// Failure: Buyer tries to buy again- The same address can't be both the buyer and the seller
				await contract.purchaseSong(songsCount - 1, { from: buyer2, value: web3.utils.toWei("0.5", "Ether") }).should.be.rejected;
			});

			it("checks the previousOwners list", async () => {
				// ToDo
			});
		});

		describe("toggleOnSale", async () => {
			let songsCount;

			before(async () => {
				songsCount = await contract.songsCount();
				songsCount = songsCount.toNumber();
			});

			it("toggles the onSale attribute", async () => {
				let _song = await contract.songs(songsCount);

				//Success: Current owner toggles the onSale attribute
				const result = await contract.toggleOnSale(songsCount, { from: buyer2 });

				// Check logs
				const event = result.logs[0].args;
				assert.equal(event.id.toNumber(), songsCount, "id is correct");
				assert.equal(event.songName, "Oops", "song name is correct");
				assert.equal(event.currentOwnerAddress, buyer2, "owner is correct");

				assert.equal(event.onSale, !_song.onSale, "toggled successfully");

				// Failure: Tries to toggle a song that does not exist- Must have valid id
				await contract.toggleOnSale(99, { from: buyer2 }).should.be.rejected;
				// Failure: An address other than the current owner tries to toggle the onSale attribute
				await contract.toggleOnSale(songsCount, { from: seller }).should.be.rejected;
				await contract.toggleOnSale(songsCount, { from: deployer }).should.be.rejected;
			});
		});

		describe("updatePrice", async () => {
			let songsCount;

			before(async () => {
				songsCount = await contract.songsCount();
				songsCount = songsCount.toNumber();
			});

			it("updates the Song NFT Price", async () => {
				//Success: Current owner toggles the onSale attribute
				const result = await contract.updatePrice(songsCount, web3.utils.toWei("1.5", "Ether"), {
					from: buyer2,
				});

				// Check logs
				const event = result.logs[0].args;
				assert.equal(event.id.toNumber(), songsCount, "id is correct");
				assert.equal(event.songName, "Oops", "song name is correct");
				assert.equal(event.currentOwnerAddress, buyer2, "owner is correct");

				assert.equal(event.price.toString(), web3.utils.toWei("1.5", "Ether"), "toggled successfully");

				// Failure: Tries to update the price of a song that does not exist- Must have valid id
				await contract.updatePrice(99, { from: buyer2 }).should.be.rejected;
				// Failure: An address other than the current owner tries to update the price of the NFT
				await contract.updatePrice(songsCount, { from: seller }).should.be.rejected;
				await contract.updatePrice(songsCount, { from: deployer }).should.be.rejected;
			});
		});
	});
});
