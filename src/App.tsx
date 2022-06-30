import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<body>
			<div className="App">
				<header className="App-header">
					<div className="text-wrapper">
						<div className="h1-wrapper">
							<h1>Where in the world?</h1>
							<h2>Dark mode</h2>
						</div>
					</div>
				</header>
			</div>
			<section className="main-section">
				<div className="main-wrapper">
					<input id="country-input" placeholder="Search for a country"></input>
					<select name="continents" id="continents">
						<option value="filter">Filter by Region</option>
						<option value="africa">Africa</option>
						<option value="america">America</option>
						<option value="asia">Asia</option>
						<option value="europe">Europe</option>
						<option value="oceania">Oceania</option>
					</select>
				</div>
			</section>
		</body>
	);
}

export default App;
