import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AppBar, Box, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { useRouter } from 'next/router';

type LayoutNestedProps = {
  children?: React.ReactNode,
  title?: string
}

const LayoutNested = ({
  children,
  title = 'Back'
}: LayoutNestedProps): JSX.Element => {
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
          <Typography variant="body1" noWrap component="div">
            <IconButton onClick={handleClick} size="medium" sx={{ mr: 1 }}>
              <ArrowBackIcon sx={{ color: 'white', fontSize: '1rem' }} />
            </IconButton>
            {title}
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