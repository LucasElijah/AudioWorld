import { LogoutOutlined } from "@mui/icons-material";
import { Button, /* Fab, */ Stack/* , Tooltip */ } from "@mui/material";
import React from "react";

const Logout = () => {
	return (
		// <>
		// 	<Tooltip title="Delete" sx={{position:"fixed", bottom:30}} >
    //     <Fab color="primary" aria-label="add">
    //       <LogoutOutlined />
    //     </Fab>
		// 	</Tooltip>
		// </>

    <Stack direction="row" spacing={2}>
      <Button variant="contained" color='secondary' size='small' startIcon={<LogoutOutlined />} sx={{position:"fixed", bottom:5, overflow: "hidden", textOverflow: "ellipsis", width: '7rem'}}>
        Log tf out
      </Button>
    </Stack>
	);
};

export default Logout;
