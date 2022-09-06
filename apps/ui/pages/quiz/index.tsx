import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import QuizList from "@ui/features/quiz/QuizList";
import Leitner from '@ui/features/leitner/Leitner';
import { Box, Grid } from '@mui/material';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const drawerWidth = 280;

interface Props {
  window?: () => Window;
}

const ResponsiveDrawer = (props: Props): JSX.Element => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Typography paragraph sx={{ fontSize: '13px' }}>Leitner box</Typography>
      <Leitner />
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
      <Box
        sx={{ flexGrow: 1 }}
      >
        <Toolbar />
        <Grid container spacing={3} maxWidth={'sm'} sx={{ margin: 'auto' }}>
          <Grid item xs={9}>
            <Typography paragraph sx={{ fontSize: '13px' }}>Flashcards</Typography>
            <QuizList />
          </Grid>
          <Grid item xs={3}>
            {drawer}
          </Grid>
        </Grid>
      </Box>
    </Box >
  );
}

export default ResponsiveDrawer;