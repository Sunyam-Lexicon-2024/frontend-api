import { createTheme } from "@mui/material/styles"
import { purple, blue } from "@mui/material/colors"
import type {} from "@mui/x-data-grid/themeAugmentation"

declare module "@mui/material/styles" {
	interface Palette {
		link: Palette["primary"]
	}

	interface PaletteOptions {
		link?: PaletteOptions["primary"]
	}
}

export const theme = createTheme({
	palette: {
		primary: {
			main: purple[500],
		},
		secondary: {
			main: purple[100],
		},
		link: {
			main: blue[50],
			light: blue[500],
			dark: blue[50],
		},
	},
	breakpoints: {
		values: {
			xs: 0, // phone
			sm: 600, // tablets
			md: 900, // small laptop
			lg: 1200, // desktop
			xl: 1536, // large screens
		},
	},
})
