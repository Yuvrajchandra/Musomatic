// Importing packages
import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Web3 from "web3";
// Importing abi
import Musomatic from "../abis/Musomatic.json";
// Importing css
import "./App.css";
// Importing components
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";
import ScrollToTop from "./Utils/ScrollToTop/ScrollToTop";
import Loading from "./Utils/Loading/Loading";
import HomePage from "./Homepage/HomePage";
import Create from "./Create/Create";
import PageNotFound from "./PageNotFound/PageNotFound";
import Library from "./Library/Library";

function App() {
	return (
		<HashRouter>
			<ScrollToTop />
			<Navbar />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/create" component={Create} />
				<Route path="/404" exact component={PageNotFound} />
				<Route path="/library" exact component={Library} />
				<Redirect to="/404" />
			</Switch>
			<Footer />
		</HashRouter>
	);
}

export default App;
