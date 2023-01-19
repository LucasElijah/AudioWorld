import { Diversity2Rounded, RequestQuoteRounded, VpnKeyRounded, Wallet } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

const Info = () => {
	return (
		<Box
			flex={5}
			p={1}
			sx={{ display: { xs: "none", sm: "block" } }}
		>
			<List>
				{/* Wallet */}
				<ListItem disablePadding>
					<ListItemButton component="a" href="#wallet">
						<ListItemIcon>
							<Wallet />
						</ListItemIcon>
						<ListItemText primary="Wallet" />
						<ListItemText primary="$69 Total" />
					</ListItemButton>
				</ListItem>
				{/* Payments */}
				<ListItem disablePadding>
					<ListItemButton component="a" href="#payments">
						<ListItemIcon>
							<RequestQuoteRounded />
						</ListItemIcon>
						<ListItemText primary="Payments" />
						<ListItemText primary="Review Info" />
					</ListItemButton>
				</ListItem>
				{/* Security */}
				<ListItem disablePadding>
					<ListItemButton component="a" href="#security">
						<ListItemIcon>
							<VpnKeyRounded />
						</ListItemIcon>
						<ListItemText primary="Security" />
						<ListItemText primary="Set up Access" />
					</ListItemButton>
				</ListItem>
				{/* Team */}
				<ListItem disablePadding>
					<ListItemButton component="a" href="#team">
						<ListItemIcon>
							<Diversity2Rounded />
						</ListItemIcon>
						<ListItemText primary="Team" />
						<ListItemText primary="4 Members" />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);
};

export default Info;
