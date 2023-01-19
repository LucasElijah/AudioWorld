import { Box, Divider, Paper, Stack, styled, Typography } from "@mui/material";
import React from "react";


const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(2),
    marginTop: 45,
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function Body() {
	return (
		<Box className="main-body" bgcolor="skyblue">
			<Typography variant="h6">Total Balance</Typography>
			<Typography variant="h3">$xxxxxxx</Typography>
			<Divider flexItem sx={{ borderBottomWidth: 5 }} />

			<Stack direction="row" spacing={2}>
				<Item>Crypto</Item>
				<Item>Bank</Item>
				<Item>Stocks</Item>
			</Stack>
		</Box>
	);
}
