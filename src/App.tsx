import { ThemeProvider } from 'styled-components';
import { TransactionsProvider } from './contexts/TransactionContext';
import { Transactions } from './pages/Transactions';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme/default';

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <TransactionsProvider>
      <Transactions />
    </TransactionsProvider>
  </ThemeProvider>
);

export { App };
