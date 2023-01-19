import { Avatar, CardHeader, Badge, Button } from "@mui/material";
import { styled } from '@mui/material/styles';

import React from "react";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
	width: 22,
	height: 22,
	border: `2px solid ${theme.palette.background.paper}`,
}));


export default function Profile() {
	return (
		<div className="sidebar-profile">
			<CardHeader
				avatar={
					<Badge
						overlap="circular"
						anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
						badgeContent={
							<SmallAvatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1024px-Windows_Settings_app_icon.png" />
						}
					>
						<Avatar alt="Travis Howard" src="https://play-lh.googleusercontent.com/p6kS3dCcILt9Z4vRMxHXZTbRecqnZTx5ysBVp6Qe3fDofokRLuWjRxF8J0TkMTG2gKo" />
					</Badge>
				}
				title={<Button  >click me </Button>}
				
				subheader="sales"
			/>
		</div>
	);
}
