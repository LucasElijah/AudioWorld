import React from "react";
import Header from "./sidebar/Header";
import Info from "./sidebar/Info";
import Profile from "./sidebar/Profile";

export default function Sidebar() {
	return (
		<div className="sidebar">
			{/* sidebar-header */}
			<Header/>
			{/* sidebar-profile */}
			<Profile/>
			{/* sidebar-info */}
			<Info/>
		</div>
	);
}
