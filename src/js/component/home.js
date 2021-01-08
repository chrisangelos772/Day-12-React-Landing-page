import React from "react";
import Navbar from "./navbar";
import Jumbo from "./jumbo";
import Card from "./card";
import Footer from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const menu = [
		{ label: "Home", url: "/" },
		{ label: "About", url: "#" },
		{ label: "Contact us", url: "#" }
	];
	/* React.Fragment can be used instead of a wrapper div if you don't need the div */
	return (
		<div className="">
			<Navbar menu={menu} brand="My Simple Landing Page" />
			<Jumbo />
			<div className="row">
				<div className="col-12 col-sm-6 col-md-3">
					<Card />
				</div>
				<div className="col-12 col-sm-6 col-md-3">
					<Card />
				</div>
				<div className="col-12 col-sm-6 col-md-3">
					<Card />
				</div>
				<div className="col-12 col-sm-6 col-md-3">
					<Card />
				</div>
			</div>
			<br />
			<br />
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}
