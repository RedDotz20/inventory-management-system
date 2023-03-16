import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./utils/ErrorBoundary";
import theme from "./theme/Theme";

import "typeface-roboto";
import "./styles/index.css";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			staleTime: Infinity,
		},
	},
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ErrorBoundary>
			<QueryClientProvider client={queryClient}>
				<ChakraProvider theme={theme}>
					<BrowserRouter>
						<App />
						<ReactQueryDevtools initialIsOpen={true} />
					</BrowserRouter>
				</ChakraProvider>
			</QueryClientProvider>
		</ErrorBoundary>
	</React.StrictMode>
);
