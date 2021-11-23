import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Web3 from "web3";
import "./App.css";
import HomePage from "./Homepage/HomePage";

function App() {
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Redirect to="/" />
			</Switch>
		</HashRouter>
	);
}

export default App;
