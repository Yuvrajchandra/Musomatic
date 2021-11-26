import MetaMaskOnboarding from "@metamask/onboarding";
import MetamaskFox from "../../../assets/metamask_fox.svg";

export default function ConnectMetamask(buttonId, installText, connectText) {
	// Basic Actions Section
	const onboardButton = document.getElementById(buttonId);
	const { ethereum } = window;

	// Created check function to see if the MetaMask extension is installed
	const isMetaMaskInstalled = () => {
		// Have to check the ethereum binding on the window object to see if it's installed
		return Boolean(ethereum && ethereum.isMetaMask);
	};

	// We create a new MetaMask onboarding object to use in our app
	const onboarding = new MetaMaskOnboarding();

	// This will start the onboarding proccess
	const onClickInstall = () => {
		onboardButton.innerText = "Onboarding in progress...";
		onboardButton.disabled = true;
		//On this object we have startOnboarding which will start the onboarding process for our end user
		onboarding.startOnboarding();
	};

	const onClickConnect = async () => {
		try {
			// Will open the MetaMask UI
			// You should disable this button while the request is pending!
			const { ethereum } = window;
			onboardButton.disabled = true;
			await ethereum.request({ method: "eth_requestAccounts" });
		} catch (error) {
			console.error(error);
		}
	};

	const MetaMaskClientCheck = () => {
		// Now we check to see if MetaMask is installed
		if (!isMetaMaskInstalled()) {
			// If it isn't installed we ask the user to click to install it
			if (buttonId === "connectButton")
				onboardButton.innerHTML = `<span><img src=${MetamaskFox} alt="..." height="25" class="mr-3" />` + installText + `<i class="fas fa-angle-double-right"></i></span>`;
			else onboardButton.innerHTML = `<span><img src=${MetamaskFox} alt="..." height="20" class="mr-2" />` + installText + `</span>`;
			// When the button is clicked we call this function
			onboardButton.onclick = async function () {
				await onClickInstall();
				window.location.reload();
			};
			// The button is now disabled
			onboardButton.disabled = false;
		} else if (onboardButton) {
			// If it is installed we change our button text
			if (buttonId === "connectButton")
				onboardButton.innerHTML = `<span><img src=${MetamaskFox} alt="..." height="25" class="mr-3" />` + connectText + `<i class="fas fa-angle-double-right"></i></span>`;
			else onboardButton.innerHTML = `<span><img src=${MetamaskFox} alt="..." height="20" class="mr-2" />` + connectText + `</span>`;
			// When the button is clicked we call this function to connect the users MetaMask Wallet
			onboardButton.onclick = async function () {
				await onClickConnect();
				window.location.reload();
			};
			// The button is now disabled
			onboardButton.disabled = false;
		}
	};

	MetaMaskClientCheck();
}
