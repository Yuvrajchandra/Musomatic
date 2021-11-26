import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Web3 from "web3";
import "./App.css";
import HomePage from "./Homepage/HomePage";
import Create from "./CreatePage/Create";
import PageNotFound from "./PageNotFound/PageNotFound";

function App() {
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/create" component={Create}/>
				<Route path="/404" exact component={PageNotFound} />
				<Redirect to="/404" />
			</Switch>
		</HashRouter>
	);
}

export default App;
