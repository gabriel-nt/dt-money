import { ThemeProvider } from 'styled-components';
import { Transactions } from './pages/Transactions';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme/default';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Transactions />
  </ThemeProvider>
);

export { App };
