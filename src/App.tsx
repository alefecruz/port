import React, { type ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';

import { GlobalStyles } from './global';
import { selectTheme } from './global/theme';

function App(): ReactElement {
  const theme = selectTheme({
    color: 'default',
    font: 'lora',
    size: 'default',
    media: 'default',
    spacing: 'default',
  });
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
