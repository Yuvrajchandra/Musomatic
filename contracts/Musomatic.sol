// contracts/Musomatic.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Musomatic is ERC721, ReentrancyGuard {
    using SafeMath for uint256;

    uint256 public songsCount = 0;

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
}
