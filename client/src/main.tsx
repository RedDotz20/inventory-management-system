import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

import 'typeface-roboto';
import App from './App';
import './index.css';
import theme from './theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: Infinity,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>
);
