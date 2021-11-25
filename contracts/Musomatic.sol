// contracts/Musomatic.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Musomatic is ERC721, ReentrancyGuard {
    using SafeMath for uint256;

    uint256 public songsCount = 0;
    address MusomaticMain = 0x159507b2b3829791fAB794581D2aC074F3596013;

    constructor() ERC721("Musomatic", "MSM") {}

    struct Link {
        string spotify;
        string appleMusic;
        string amazonMusic;
        string youtubeMusic;
    }

    struct Characteristic {
        string genre;
        string[] instruments;
        string typeOfLyrics;
        string songType;
        string frequency;
        string instrumentType;
        bool sampleBased;
    }

    struct Sales {
        address[] previousOwners;
        uint256[] previousPrices;
        uint256[] previousSaleTimes;
    }

    struct Hashes {
        string imgHash;
        string songHash;
        string descHash;
        string lyricsHash;
    }

    struct Song {
        uint256 id;
        string songName;
        string artistName;
        uint256 price;
        uint256 createTime;
        Hashes hashes;
        address payable artistAddress;
        address payable currentOwnerAddress;
        bool onSale;
        Sales sales;
        Link links;
        Characteristic characteristics;
    }

    mapping(uint256 => Song) private songs;

    event SongCreated(
        uint256 id,
        string songName,
        string artistName,
        uint256 price,
        uint256 createTime
    );

    event SongPurchased(
        uint256 id,
        string songName,
        string artistName,
        uint256 price,
        address payable artistAddress,
        address payable currentOwnerAddress,
        bool onSale
    );

    event SongUpdated(
        uint256 id,
        string songName,
        string artistName,
        uint256 price,
        address payable artistAddress,
        address payable currentOwnerAddress,
        bool onSale
    );

    event FundsTransferred(
        uint256 fundsTransferredToSeller,
        uint256 fundsTransferredToArtist
    );

    event FundsTransferredToArtist(uint256 fundsTransferredToArtist);

    function createSong(
        string memory _songName,
        string memory _artistName,
        uint256 _price,
        string memory _imgHash,
        string memory _songHash,
        string memory _descHash,
        string memory _lyricsHash,
        bool _onSale,
        Link memory _links,
        Characteristic memory _characteristics
    ) public nonReentrant {
        // Require a name
        require(bytes(_songName).length > 0, "Song name cannot be empty");
        // Require an artist name
        require(bytes(_artistName).length > 0, "Artist name cannot be empty");
        // Require price > 0
        require(_price > 0, "Price must be at least 1 wei");
        require(bytes(_imgHash).length > 0, "Cover image must be provided");
        require(bytes(_songHash).length > 0, "Song must be provided");

        songsCount += 1;
        uint256 _createTime = block.timestamp;
        Sales memory _sales;

        songs[songsCount] = Song(
            songsCount,
            _songName,
            _artistName,
            _price,
            _createTime,
            Hashes(_imgHash, _songHash, _descHash, _lyricsHash),
            payable(msg.sender),
            payable(msg.sender),
            _onSale,
            _sales,
            _links,
            _characteristics
        );

        // Call mint function
        _safeMint(msg.sender, songsCount);
        // Trigger an event
        emit SongCreated(
            songsCount,
            _songName,
            _artistName,
            _price,
            _createTime
        );
    }

    function purchaseSong(uint256 _id) public payable nonReentrant {
        // Make sure the id is valid
        require(_id > 0 && _id <= songsCount, "Invalid song id");
        // Fetch the song
        Song storage _song = songs[_id];
        // Require that there is enough matic provided for the transaction
        require(msg.value >= _song.price, "Not enough matic provided");
        // Require that the song is available for sale
        require(_song.onSale, "Song is not available for sale");
        // Require that buyer is not the seller
        require(
            _song.currentOwnerAddress != msg.sender,
            "You cannot purchase your own song"
        );
        // Add the owner to previousOwners
        _song.sales.previousOwners.push(_song.currentOwnerAddress);
        // Add price to previousPrices
        _song.sales.previousPrices.push(_song.price);
        // Add time to previousSaleTimes
        _song.sales.previousSaleTimes.push(block.timestamp);
        // Transfer matic
        if (_song.currentOwnerAddress == _song.artistAddress) {
            // Transfer all matic to artist whenever the first transaction for the NFT happens. This is because the artist is the owner after creating the NFT.
            payable(_song.currentOwnerAddress).transfer(msg.value);
            emit FundsTransferredToArtist(msg.value);
        } else {
            // Pay the seller by sending 94% matic
            uint256 _value = ((msg.value).mul(94)).div(100);
            payable(_song.currentOwnerAddress).transfer(_value);
            // Pay the artist 5% of the transaction amount as royalty
            uint256 _royalty = ((msg.value).mul(5)).div(100);
            payable(_song.artistAddress).transfer(_royalty);
            // Pay the platform fee by sending the remaining 1% matic
            uint256 _platformFee = ((msg.value).mul(1)).div(100);
            payable(MusomaticMain).transfer(_platformFee);
            // Trigger funds transferred event
            emit FundsTransferred(_value, _royalty);
        }
        // Transfer ownership to buyer
        _transfer(_song.currentOwnerAddress, msg.sender, _id);
        _song.currentOwnerAddress = payable(msg.sender);
        // Increase price of NFT by 20%
        _song.price = ((_song.price).mul(120)).div(100);
        // Update the song
        songs[_id] = _song;
        // Trigger an event
        emit SongPurchased(
            songsCount,
            _song.songName,
            _song.artistName,
            _song.price,
            _song.artistAddress,
            _song.currentOwnerAddress,
            _song.onSale
        );
    }

    function toggleOnSale(uint256 _id) public {
        // Make sure the id is valid
        require(_id > 0 && _id <= songsCount, "Invalid song id");
        // Fetch the song
        Song storage _song = songs[_id];
        // Require that the artist is calling the function
        require(
            _song.artistAddress == msg.sender,
            "Only the artist can toggle the on sale attribute"
        );
        // Require that the artist is also the current owner
        require(
            _song.artistAddress == _song.currentOwnerAddress,
            "Artist must be the current owner of the NFT"
        );
        // Toggle onSale attribute
        if (_song.onSale == true) {
            _song.onSale = false;
        } else if (_song.onSale == false) {
            _song.onSale = true;
        }
        // Update the song
        songs[_id] = _song;
        // Trigger an event
        emit SongUpdated(
            songsCount,
            _song.songName,
            _song.artistName,
            _song.price,
            _song.artistAddress,
            _song.currentOwnerAddress,
            _song.onSale
        );
    }

    function updatePrice(uint256 _id, uint256 _newPrice) public {
        // Make sure the id is valid
        require(_id > 0 && _id <= songsCount, "Invalid song id");
        // Fetch the song
        Song storage _song = songs[_id];
        // Require that the current owner is calling the function
        require(
            _song.currentOwnerAddress == msg.sender,
            "Only the current owner can update the price"
        );
        // Edit the price
        _song.price = _newPrice;
        // Update the song
        songs[_id] = _song;
        // Trigger an event
        emit SongUpdated(
            songsCount,
            _song.songName,
            _song.artistName,
            _song.price,
            _song.artistAddress,
            _song.currentOwnerAddress,
            _song.onSale
        );
    }

    /* Returns all items */
    function fetchAllNFTs() public view returns (Song[] memory) {
        require(songsCount > 0, "No songs to fetch");
        Song[] memory items = new Song[](songsCount);

        for (uint256 i = 1; i <= songsCount; i++) {
            Song storage currentItem = songs[i];
            items[i - 1] = currentItem;
        }
        return items;
    }

    /* Returns only items that a user owns */
    function fetchMyNFTs() public view returns (Song[] memory) {
        uint256 totalItemCount = songsCount;
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (songs[i + 1].currentOwnerAddress == msg.sender) {
                itemCount += 1;
            }
        }

        Song[] memory items = new Song[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (songs[i + 1].currentOwnerAddress == msg.sender) {
                uint256 currentId = i + 1;
                Song storage currentItem = songs[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /* Returns only items a user has created */
    function fetchNFTsCreated() public view returns (Song[] memory) {
        uint256 totalItemCount = songsCount;
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (songs[i + 1].artistAddress == msg.sender) {
                itemCount += 1;
            }
        }

        Song[] memory items = new Song[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (songs[i + 1].artistAddress == msg.sender) {
                uint256 currentId = i + 1;
                Song storage currentItem = songs[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }
}
