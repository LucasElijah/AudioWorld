import { ShuffleOn } from '@mui/icons-material'
import { Badge, Box, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center"
})

const Icons = styled(Box)(({ theme }) => ({

}));

const Header = () => {
  return (
    <StyledToolbar>
      <Icons>
        <Badge>
          <ShuffleOn />
        </Badge>
      </Icons>
      <Typography variant="h4">
        COINT
      </Typography>
    </StyledToolbar>
  )
}

export default Header