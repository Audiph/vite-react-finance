import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { useMemo } from 'react';
import { themeSettings } from './theme';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '@/scenes/dashboard';
import Predictions from '@/scenes/predictions';
import Navbar from '@/scenes/navbar';

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* CssBaseline = reset css settings to default that MUI has set */}
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predictions />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
