import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Web3 from "web3";
// Importing css
import "./App.css";
// Importing components
import Navbar from "./Layout/Navbar/Navbar";
import HomePage from "./Homepage/HomePage";
import Create from "./CreatePage/Create";
import PageNotFound from "./PageNotFound/PageNotFound";
import Library from "./Library/Library";

function App() {
	return (
		<HashRouter>
			{/*<Navbar account={account} /> */}
			{/* Update the Navbar component with this prop*/}
			<Navbar />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/create" component={Create}/>
				<Route path="/404" exact component={PageNotFound} />
				<Route path="/library" exact component={Library} />
				<Redirect to="/404" />
			</Switch>
		</HashRouter>
	);
}

export default App;
