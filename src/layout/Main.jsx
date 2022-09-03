import React from "react";
import Body from "./main/Body";
import Info from "./main/Info";
import Navbar from "./main/Navbar";

export default function Main() {
	return (
		<div className="main">
			{/* main-header */}
			<Navbar />
			{/* main-body */}
			<Body />
			{/* main-info */}
			<Info />
		</div>
	);
}
