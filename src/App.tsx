import { ThemeProvider, CssBaseline } from '@mui/material';
import { useMemo } from 'react';
import { themeSettings } from './theme';
import { createTheme } from '@mui/material/styles';

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        {/* reset css settings to default that MUI has set */}
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
