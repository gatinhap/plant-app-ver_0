import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './theme/globalStyles.ts';
import theme from './theme/theme.ts';
import 'react-toastify/dist/ReactToastify.min.css';
import StyledToastContainer from './components/toast/Toast.styles.ts';
import AppRoutes from './routes/AppRoutes.tsx';

const App = () => {
  const queryClient = new QueryClient();

  // listen for the logout event
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'logout') {
        // Refresh the page when logout event is detected
        window.location.reload();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <AppRoutes />

        <StyledToastContainer />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
