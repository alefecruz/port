import React, { type ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';

import { GlobalStyles } from './global';
import { selectTheme } from './global/theme';

function App(): ReactElement {
  console.log('Alow');

  console.log(selectTheme('light'));
  return (
    <ThemeProvider theme={selectTheme('light')}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
