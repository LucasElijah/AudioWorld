import React from "react";
import MyTable from '../../components/MyTable'
import MyChart from '../../components/MyChart'

export default function Info() {
	return (
		<div className="main-info">
			{/* finances */}
			<div className="main-info-finances">
				<MyTable/>
			</div>
			{/* activity */}
			<div className="main-info-activity"><MyChart /></div>
		</div>
	);
}
