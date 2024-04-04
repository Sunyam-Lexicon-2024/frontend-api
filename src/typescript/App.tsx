import React, { useState } from "react"
import Footer from "./Footer"
import Navigation from "./Navigation"
import StarWars from "./StarWars/StarWars"
import CardGame from "./CardGame/CardGame"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@emotion/react"
import { theme } from "./theme"
import { Box } from "@mui/material"

function App() {
	const [pageTitle, setPageTitle] = useState("Star Wars")
	const [starWarsActive, setStarWars] = useState(true)
	const [cardGameActive, setCardGame] = useState(true)

	function toggleComponent(event: React.MouseEvent) {
		switch ((event.target as HTMLElement).textContent) {
			case "Star Wars API":
				setStarWars(true)
				setCardGame(false)
				setPageTitle("Star Wars API")
				break
			case "Card Game API":
				setStarWars(false)
				setCardGame(true)
				setPageTitle("Card Game API")
				break
		}
	}

	let content

	if (starWarsActive) {
		content = <StarWars />
	} else if (cardGameActive) {
		content = <CardGame />
	}

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navigation loadComponent={(event) => toggleComponent(event)} />
			{content}
			<Footer />
		</ThemeProvider>
	)
}

export default App
