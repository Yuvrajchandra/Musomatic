const fs = require("fs");
const Musomatic = artifacts.require("Musomatic");

module.exports = async function (deployer) {
	await deployer.deploy(Musomatic);
	const msm = await Musomatic.deployed();

	let config = `const contractAddress = "${msm.address}";\nexport default contractAddress;`;

	let data = JSON.stringify(config);

	fs.writeFile("./src/config/address.js", JSON.parse(data), (err) => {
		if (err) {
			console.log("Error writing config.js:", err.message);
		}
	});
};
