import {
	LoupeOutlined,
	Menu,
	Notifications,
} from "@mui/icons-material";
import {
	AppBar,
	Badge,
	Button,
	IconButton,
	Stack,
	styled,
	Toolbar,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Icons = styled(Box)(({ theme }) => ({
	display: "none",
	alightItems: "center",
	gap: "20px",
	[theme.breakpoints.up("sm")]: {
		display: "flex",
	},
}));

const Navbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar sx={{ color: "black", backgroundColor: "#F3EFEA" }}>
					<Button className="navbar-button" variant="outlined" sx={{pl:2}}>
						open deposit
					</Button>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						
					</Typography>
					<IconButton
						size="small"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<Menu />
						Customize
					</IconButton>
					<Stack direction="row" spacing={1}>
						<Icons>
							<Badge badgeContent={2} color="error">
								<LoupeOutlined />
							</Badge>
							<Badge badgeContent={2} color="error">
								<Notifications />
							</Badge>
						</Icons>
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
