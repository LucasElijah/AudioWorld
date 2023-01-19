import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const MyChart = () => {
	return (
		<Card>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Activity
				</Typography>
				<CardMedia
					component="img"
					height="200"
					image="https://c8.alamy.com/comp/2GXNC33/circle-chart-example-wheel-diagram-with-8-colorful-segments-of-different-sizes-statistical-infographic-template-finance-round-graph-design-layout-vector-flat-illustration-2GXNC33.jpg"
				/>
			</CardContent>
		</Card>
	);
};

export default MyChart;

