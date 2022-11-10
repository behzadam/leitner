import StyleIcon from '@mui/icons-material/Style';
import { Box, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LayoutLogout from './layout-logout';

type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <Stack>
      <AppBar
        position="relative"
        elevation={0}
        enableColorOnDark
        color='transparent'
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <StyleIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: 'flex',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Memory
            </Typography>
            <Box sx={{ ml: 'auto' }}>
              <LayoutLogout />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </Stack>
  );
};
export default DashboardLayout;