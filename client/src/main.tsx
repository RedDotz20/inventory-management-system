import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "typeface-roboto";
import "./styles/index.css";

const theme = extendTheme({
	colors: {
		// your custom colors here
	},
	fonts: {
		// your custom fonts here
	},
	components: {
		// your custom component styles here
	},
	// Set the focusBorderColor to "transparent" to disable the focus border color
	// for all components that use the Chakra UI theme
	// You can also set the focusBorderWidth to 0 to remove the focus border entirely
	shadows: {
		// your custom box shadows here
	},
	styles: {
		// your global style overrides here
	},
	// ...
	// Set the focusBorderColor to "transparent" to disable the focus border color
	// for all components that use the Chakra UI theme
	// You can also set the focusBorderWidth to 0 to remove the focus border entirely
	radii: {
		// your custom border radii here
	},
	sizes: {
		// your custom sizes here
	},
	space: {
		// your custom spacing scale here
	},
	textStyles: {
		// your custom text styles here
	},
	zIndices: {
		// your custom z-index scale here
	},
	focusBorderColor: "transparent",
	focusBorderWidth: 0,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>
);
