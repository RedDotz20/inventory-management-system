import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundery from './ErrorBoundery';

import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import theme from './theme';
import 'typeface-roboto';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: Infinity,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundery fallback={<h1>Something went wrong</h1>}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
          </BrowserRouter>
        </ChakraProvider>
      </QueryClientProvider>
    </ErrorBoundery>
  </React.StrictMode>
);
