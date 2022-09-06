import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import QuizList from "@ui/features/quiz/QuizList";
import Leitner from '@ui/features/leitner/Leitner';
import { Box, Tab, Tabs } from '@mui/material';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TabPanel from '@ui/components/TabPanel';

const drawerWidth = 280;

interface Props {
  window?: () => Window;
}

const ResponsiveDrawer = (props: Props): JSX.Element => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (_, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        variant="fullWidth"
      >
        <Tab label="Leitner" value={0} sx={{ fontSize: 12 }} />
        <Tab label="Calendar" value={1} sx={{ fontSize: 12 }} />
      </Tabs>
      <TabPanel name="quiz-sidebar-tabs" value={tabIndex} index={0}>
        <Leitner />
      </TabPanel>
      <TabPanel name="quiz-sidebar-tabs" value={tabIndex} index={1}>
        Item One
      </TabPanel>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
      >
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
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
      <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Toolbar />
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, zIndex: 1 },
          }}
          open
        >
          <Toolbar />
          {drawer}
        </Drawer>
      </Box>
      <Box
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Box maxWidth={'sm'} sx={{ margin: 'auto', px: 3 }}>
          <Typography paragraph sx={{ fontSize: '13px' }}>Flashcards</Typography>
          <QuizList />
        </Box>
      </Box>
    </Box >
  );
}

export default ResponsiveDrawer;