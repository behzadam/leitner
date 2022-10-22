import { AppBar, Box, IconButton, Link, Stack, Toolbar, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router'

type LayoutNestedProps = {
  children?: React.ReactNode
}

const LayoutNested = ({ children }: LayoutNestedProps): JSX.Element => {
  const router = useRouter();
  const handleClick = (): void => {
    console.log("back", { router })
  }

  return (
    <Stack>
      <AppBar
        position="fixed"
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <IconButton onClick={handleClick} size="small" sx={{ mr: 2 }}>
              <ArrowBackIcon sx={{ color: 'white' }} />
            </IconButton>
            Quiz
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main">
        <Toolbar />
        {children}
      </Box>
    </Stack>
  )
}

export default LayoutNested;