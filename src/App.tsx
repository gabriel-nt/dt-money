import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme/default';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <h1>Hello World</h1>
  </ThemeProvider>
);

export { App };
