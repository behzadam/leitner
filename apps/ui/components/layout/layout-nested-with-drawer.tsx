import { AppBar, Box, Drawer, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import { useState } from "react";

type LayoutNestedProps = {
  drawer?: React.ReactNode
  children?: React.ReactNode
  window?: () => Window;
}

const drawerWidth = 380;

const LayoutNestedWithDrawer = ({ drawer, children, window }: LayoutNestedProps): JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(mobileOpen => !mobileOpen);
  };

  return (
    <Stack>
      <AppBar
        position="fixed"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Link href="/">
              <IconButton color="inherit" size="small" sx={{ mr: 2 }}>
                <ArrowBackIcon />
              </IconButton>
            </Link>
            Quiz
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Toolbar />
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, zIndex: 1 },
          }}
          open
        >
          <Toolbar />
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` }, ml: { md: `${drawerWidth}px` }, }}
      >
        <Toolbar />
        {children}
      </Box>
    </Stack>
  )
}

export default LayoutNestedWithDrawer;