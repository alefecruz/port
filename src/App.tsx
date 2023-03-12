import React, { type ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';

import { GlobalStyles } from './global';
import { selectTheme } from './global/theme';

function App(): ReactElement {
  const theme = selectTheme('default', 'lora');
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
