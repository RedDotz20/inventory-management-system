import { extendTheme } from "@chakra-ui/react";

//* Chakra UI Custom Theme
const theme = extendTheme({
	colors: {
		// your custom colors here
		customLightYellow: "#FEF9A7",
		customHoverLightYellow: "#FFFCD1",
	},
	fonts: {
		// your custom fonts here
	},
	components: {
		// your custom component styles here
		Button: {
			variants: {
				lightyellow: {
					bg: "customLightYellow",
					color: "black",
					_hover: {
						bg: "customHoverLightYellow",
					},
				},
			},
		},
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

export default theme;
