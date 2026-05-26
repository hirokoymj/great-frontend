import { Box, Toolbar } from '@mui/material';
import Header from './Header';
import LeftNav from './LeftNav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <LeftNav />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        <Box sx={{ flex: 1, p: 3 }}>{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
}
