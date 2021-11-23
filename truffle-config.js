require("babel-register");
require("babel-polyfill");
require("dotenv").config();

const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
	networks: {
		// For Ganache
		development: {
			host: "127.0.0.1",
			port: 7545,
			network_id: "*", // Match any network id
		},
		// For Polygon Testnet
		mumbai: {
			provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`),
			network_id: 80001,
			networkCheckTimeout: 999999,
			confirmations: 2,
			timeoutBlocks: 200,
			skipDryRun: true,
			gas: 6000000,
			gasPrice: 10000000000,
		},
	},
	contracts_directory: "./contracts/",
	contracts_build_directory: "./src/abis/",
	compilers: {
		solc: {
			version: "0.8.0", // Fetching solc version list from solc-bin Error occurs because of ^. If you use "^" that means not sure which version of solc is use, then truffle will check&get solc every time.
			settings: {
				optimizer: {
					enabled: true,
					runs: 2,
				},
			},
		},
	},
};
